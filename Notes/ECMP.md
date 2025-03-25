---
created-at: "2025-03-24"
---

Equal-cost multi-path routing (ECMP) is a network **routing strategy** in which the routing for a given packet can occur over **multiple paths** with equal routing priority. ECMP can be used as a network layer (L3) [[Load balancer]] to increase availability and throughput of services.

The key point here is that, from the network layer's perspective, the destination is simply an IP address. But that IP address can be assigned to multiple machines (acting as [[BGP]] peers, using a [[Floating IP]], etc). This enables routing at the network layer to multiple machines, creating a powerful foundation for high availability and load balancing.

# References

https://en.wikipedia.org/wiki/Equal-cost_multi-path_routing
