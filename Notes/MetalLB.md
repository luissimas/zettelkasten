---
created-at: "2024-11-21"
---

MetalLB is a [[Load balancer]] implementation for bare metal [[Kubernetes]] clusters. It allows clients to access services in the cluster via a unified IP address, instead of needing to know the IP of every worker node.

MetalLB provides two modes of operation:

The L2 Mode makes use of standard protocols such as ARP for IPv4 and NDP for IPv6. The main advantage is that it works for any Ethernet network, and does not require any special hardware. The disadvantage of this setup is that there is no load balancing between nodes. A single node owns a given IP address at a time and received all traffic destinated to that IP address. This is a fundamental limitation of ARP and NDP. Because of this, the scalability is limited to the capacity of a single node. Also, node failovers can take up to 10 seconds under normal conditions. This mode achieves a similar behavior to the one provided by [[Keepalived]] on general Linux services.

In BGP mode, each node in the cluster establishes a [[BGP]] peering session with the network routers. The cluster IPs are then advertised to the routers. With BGP we can achieve **true load balancing**, meaning that packets will be routed at the network layer. The idea of BGP is to delegate load balancing to the routers. The disadvantage of this setup is that routers that support BGP are usually very expensive.

![[Pasted image 20241214181602.png]]

# References

https://metallb.io/
https://metallb.io/concepts/
