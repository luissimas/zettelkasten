```{=org}
#+filetags:   :devops:tech:
```
```{=org}
#+identifier: 20240329T105835
```
A service is an static virtual IP address that can be assigned to a pod. Services also provide load balancing between pods. So we can have multiple pods attached to a single service, and the service will load balance requests between them. This allows for zero downtime deploys and high availability.
