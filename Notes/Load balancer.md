---
created-at: 2025-02-03
---

A load balancer is a service responsible from receiving network requests and **spreading them across a set of servers** that perform the actual processing of the requests, called _backend servers_.

Load balancers enable high availability and scalability to services, since it enables _horizontal scaling_ of the backend servers. Load balancer can also perform [[SSL termination]] and be used as a central point to collect metrics about service requests.

Usually the simplest setup for load balancing is to have a single load balancer service exposed to a public IP that then forwards requests to backend servers in a private network. The main problem with this naive approach is that the load balancer itself becomes a potential bottleneck and a single point of failure. To solve this, we need to resort to [[Multi-tier load-balancing]].

```d2
classes: {
  animated: {
    style: {
      animated: true
    }
  }
}

Client {
  shape: person
}
Client->Load balancer: 10.50.48.3 { class: animated }
Load balancer->Backend 1: 192.168.0.1 { class: animated }
Load balancer->Backend 2: 192.168.0.2 { class: animated }
Load balancer->Backend 3: 192.168.0.3 { class: animated }
```

Load balancers can also act at different **network layers**. Usually a load balancer can act either in **L4 (transport)** or **L7 (application)**. When acting in L4, the load balancer has only the notion of the packets at that layer (which are usually TCP or UDP). This means that an L4 load balancer cannot do [[SSL termination]] or route requests based on HTTP headers paths, since it has no notion of HTTP requests at layer 4. On the other hand, an L7 load balancer is capable of terminating SSL and do advanced routing based on HTTP data, at the cost of more CPU cycles.

In general, L4 load balancers like [HAProxy](https://www.haproxy.org/) and [[IPVS]] are preferred if we're dealing directly with L4 protocols or don't need any routing based on information available on in L7. They are generally more efficient since there's no need to parse the HTTP requests or decrypt TLS data. On the other hand, L7 load balancers like [Nginx](https://docs.nginx.com/), [Traefik](https://doc.traefik.io/traefik/) and [Envoy](https://www.envoyproxy.io/) should be preferred when advanced routing capabilities and other features such as request logging and auditing are needed, since they parse the entire HTTP requests.

# References

https://fidelissauro.dev/load-balancing/
