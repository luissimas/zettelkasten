---
created-at: 2024-12-17
---

A floating IP is a special type of [[Virtual IP]] that enables failover to provide [[High availability]] in a cluster. In a floating IP configuration, **only one of the nodes** in the cluster **"owns" and advertises the IP address at a time**. When the node that owns the IP fails, the IP can then be advertised by another node in the cluster, thus moving (or floating) the IP to the new node.

A floating IP by itself is just a concept. The implementation of this setup depends on tools that implement the [[VRRP]] protocol to do healthchecks on the cluster nodes and move the IP in case of node failures. [[Keepalived]] and [[HAProxy]] both implement the [[VRRP]] protocol and can be used to manage a VIP to provide a floating IP behavior.

The software that manages the VIP uses [[ARP]] broadcasts (or announcements) to inform the switches and other hosts on the network that the MAC address associated with the VIP resides on a particular node. When the host that currently holds the VIP (aka the master) fails, the next highest priority node is assigned as the new master and issues an [[ARP]] broadcast to advertise that now it holds the VIP.

![[ha-diagram-animated.gif]]

# References

[What is a Virtual IP Address? How does it help with High-Availability](https://www.youtube.com/watch?v=bXQ0HvsWI60)
