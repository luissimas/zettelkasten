---
created-at: 2024-12-17
---

Virtual IP Address (VIP) is a broad term that usually defines an IP address that **does not belong to a specific physical machine or network interface**. VIPs are widely used as part of [[High availability]] and [[Fault tolerance]] solutions for clusters of servers. A common use case for virtual IP addresses is in the creation of [[Floating IP]] addresses.

**There's nothing inherently special about a VIP**. It is simply an IP address that was available on a given network and that was not statically assigned to any host. The key point is **how that IP is managed**. It can be used as a [[Floating IP]] for failover, or even assigned to all nodes in the cluster at the same time with a [[ECMP]] setup.

# References

https://en.wikipedia.org/wiki/Virtual_IP_address
