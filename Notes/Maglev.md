---
created-at: "2025-03-24"
---

Maglev is a **consistent hashing** algorithm developed by Google that is widely used in [[Load balancer|load balancers]]. Its combination of high performance and connection tracking capabilities make it a good choice for L4 load balancers.

The key feature of Maglev is that its hashing is **consistent**. This means that the packets from the same client are always routed to the same backend server, even when multiple load balancers are involved. This allows the use of L4 load balancers while still being able to reconstruct the L7 messages from multiple L4 packets on the backend.

# References

https://research.google/pubs/maglev-a-fast-and-reliable-software-network-load-balancer/
