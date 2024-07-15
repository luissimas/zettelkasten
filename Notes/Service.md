---
created-at: 2024-05-19
---

In [[Kubernetes]], a service is a way to **expose** a set of pods as a single application to the cluster. A service can be viewed as a **static virtual IP address** that can be assigned to a set of [[Pod]]. 

Services also provide **load balancing** between pods. So we can have multiple pods attached to a single service, and the service will load balance requests between them. This allows for zero downtime deploys and high availability.

# Resouces

https://kubernetes.io/docs/concepts/services-networking/service/
