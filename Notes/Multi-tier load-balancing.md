---
created-at: "2025-02-03"
---

[[Load balancer|Load balancers]] are used to spread load across multiple targets (commonly referred to as "backend servers"). In doing so, they increase the **scalability and availability** of the service, because the backend servers themselves are not a single point of failure (and that's transparent to the end user).

This is great and all, but I always wondered: won't the load balancer itself be a bottleneck or even a single point of failure? In other words:

> Who load balances the load balancer?

This is often not an issue when using load balancers from public cloud providers, as they handle most of those issues (and charge for that). But whether you do it yourself or outsource that work to a cloud provider, these principles have to be applied: _there's no magic_.

To ensure we don't have a **single point of failure** and to enable **scaling the load balancers themselves**, we can implement a load balancing solution with a multi-tier architecture. The end result would look something like this:

```d2
classes: {
  animated: {
    style: {
      animated: true
    }
  }
}

Internet {
  shape: cloud
}

Client {
  shape: person
}
Client->Internet


Routers {
  label: Tier 1: ECMP routing
}

L4 {
  label: Tier 2: stateless L4 load balancing
}

L7 {
  label: Tier 3: stateful L7 load balancing
}

Internet -> Routers.Router 1{ class: animated }
Internet -> Routers.Router 2{ class: animated }

Routers.Router 1->L4.Load balancer 1 { class: animated }
Routers.Router 1->L4.Load balancer 2 { class: animated }
Routers.Router 2->L4.Load balancer 1 { class: animated }
Routers.Router 2->L4.Load balancer 2 { class: animated }

L4.Load balancer 1-> L7.Load balancer 1 { class: animated }
L4.Load balancer 1-> L7.Load balancer 2 { class: animated }
L4.Load balancer 1-> L7.Load balancer 3 { class: animated }
L4.Load balancer 2-> L7.Load balancer 1 { class: animated }
L4.Load balancer 2-> L7.Load balancer 2 { class: animated }
L4.Load balancer 2-> L7.Load balancer 3 { class: animated }

L7.Load balancer 1->Backends.Server 1 { class: animated }
L7.Load balancer 1->Backends.Server 2 { class: animated }
L7.Load balancer 1->Backends.Server 3 { class: animated }
L7.Load balancer 1->Backends.Server 4 { class: animated }
L7.Load balancer 1->Backends.Server 5 { class: animated }
L7.Load balancer 2->Backends.Server 1 { class: animated }
L7.Load balancer 2->Backends.Server 2 { class: animated }
L7.Load balancer 2->Backends.Server 3 { class: animated }
L7.Load balancer 2->Backends.Server 4 { class: animated }
L7.Load balancer 2->Backends.Server 5 { class: animated }
L7.Load balancer 3->Backends.Server 1 { class: animated }
L7.Load balancer 3->Backends.Server 2 { class: animated }
L7.Load balancer 3->Backends.Server 3 { class: animated }
L7.Load balancer 3->Backends.Server 4 { class: animated }
L7.Load balancer 3->Backends.Server 5 { class: animated }
```

The first tier is composed of routers that are redundant and operate at the L3 level. The routers are configured via [[BGP]] or an equivalent protocol to have [[ECMP|equal cost routes]] to the L4 load balancers in the next tier. With this, the first layer of load balancing happens at the network layer. Since the network layer is stateless, we can easily leverage ECMP to achieve high availability and scalability.

The second tier is composed of L4 load balancers. They play a key part on this architecture by bridging the gap between stateless L3 routing and stateful L7 connections. A crucial requirement for these load balancers is that they _must_ have a consistent hashing algorithm ([[Maglev]] is a pretty popular example) and they _should_ have a local connection table. The consistent hashing ensures that the multiple L4 packets that compose a L7 message are sent to the same server, so it can be reassembled. The local connection table ensures minimal client impact when adding and removing L7 load balancers. To ensure scalability, those load balancers should not share state or have any type of synchronization after startup. [[IPVS]] is an excellent solution for this tier.

The third and last tier of the load balancing layer is composed of stateful L7 load balancers. This is the layer most people are already familiar with. Since we have full context of the L7 messages at this point, we can use high-level features such as [[SSL termination]], HTTP routing, rate limiting, authentication etc. [[HAProxy]], Envoy and Traefik are examples of load balancers that can operate at that layer.

With this architecture, we can leverage the power of L3 routing to ensure that the load balancers are not single points of failure, but we are still able to keep persistent connections with backends and use high-level L7 load balancing features. We can also scale not only the backend servers, but also the load balancers and routers themselves.

# References

https://vincent.bernat.ch/en/blog/2018-multi-tier-loadbalancer
https://blog.cloudflare.com/high-availability-load-balancers-with-maglev/
