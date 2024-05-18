```{=org}
#+filetags:   :devops:tech:
```
```{=org}
#+identifier: 20240329T105803
```
Pods are an abstraction over containers. The reason that they exist is to decouple the container technology from the K8s layer. That way we can use not only Docker but other container engines interchangeably. Usually there is a single container per pod, but we can also have sidecar or auxiliary containers running in the same pod. Pods are ephemeral. Each pod has its own virtual IP address.
