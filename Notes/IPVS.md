---
created-at: "2025-01-05"
---

IP Load Balancing Software (IPVS) is a [[Load balancer]] implemented in the [[Linux]] kernel. It is part of the [Linux Virtual Server (LVS)](https://en.wikipedia.org/wiki/Linux_Virtual_Server) project.

IPVS is **L4 load balancer**, and supports TCP, UDP and SCTP. This makes it more of a lower level load balancer, not suitable if we need HTTP specific features or [[SSL termination]]. It is a great fit for use cases in which we're either using **L4 protocols** directly or if we don't want to do SSL termination at the load balancer level.

The cool thing about IPVS is that it supports **several schedulers** to decide how to forward the packets to backend servers, including [[Maglev]]. This makes it viable to load balance packets in a **consistently**, ensuring that the backend servers can reassemble messages that are composed of multiple packets.

The main way to interact with IPVS is through the `ipvsadm` userspace utility. With it, we can create load balancers ("virtual servers" in IPVS terms) and add backends to them ("real servers" in IPVS terms). [[Keepalived]] also makes use of IPVS for its load balancing features, and can be an alternative to using `ipvsadm` directly.

It's worth noting that, since IPVS runs in the Kernel, we won't be able to see any userspace process relating to the load balancer listening on the desired port.

# NAT mode

The load balancer changes the packet's destination address to the address of one of the backend servers. If the load balancer ingress IP and the backend servers are on the same network, an SNAT rule must be created to also change the source IP of the packet to the IP of the load balancer.

The `-b mh-port` flag adds the source port number to the [[Maglev]] hash computation. Using the source IP and source port is better than just the IP because different connections from the same host can be load balanced to different backend servers, while still ensuring that packets for a single connection always go to the same backend server.

```shell
export LB="10.186.181.200"
export BACKEND1="10.186.181.201"
export BACKEND2="10.186.181.202"
export BACKEND3="10.186.181.203"

apt install ipvsadm -y
sysctl -w net.ipv4.ip_forward=1
ipvsadm -A -t $LB:443 -s mh -b mh-port
ipvsadm -a -t $LB:443 -r $BACKEND1:8443 -m
ipvsadm -a -t $LB:443 -r $BACKEND2:8443 -m
ipvsadm -a -t $LB:443 -r $BACKEND3:8443 -m

cat << EOF > snat.conf
flush ruleset

table ip nat {
  chain POSTROUTING {
    type nat hook postrouting priority srcnat; policy accept;
    oifname enp5s0 masquerade
  }
}
EOF
nft -f snat.conf
sysctl -w net.ipv4.vs.conntrack=1
```

This method is simpler to implement, but there are disadvantages:

- The source IP is not preserved on the packet
- Puts more load on the load balancer, since it has to also route back the response to the client

# Direct routing

The load balancer preservers the IP addresses of the packets, changing only the destination MAC address of the packet and forwarding it to the backend server. In this mode the backend servers respond directly to the client. The balancing happens at layer 2, and not layer 3. In this mode, we cannot do port remapping.

The backends must have the same VIP as the load balancer, but mapped to their loopback interface. This is needed so when they receive the packet with the destination address of the load balancer, they identify themselves as the final destination. We also need to prevent the backend server from replying to ARP requests for the VIP, because that would "steal" the traffic from the load balancer.

To do that on the backend servers:

```shell
sysctl -w net.ipv4.conf.enp5s0.arp_ignore=1
sysctl -w net.ipv4.conf.enp5s0.arp_announce=2
```

# References

[Kernel load-balancing for Docker containers using IPVS](https://www.youtube.com/watch?v=oFsJVV1btDU)
[Understanding IPVS: Exploring the Ins and Outs of IP Virtual Server](https://www.youtube.com/watch?v=DzCBp2CXsYQ)
