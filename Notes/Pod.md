---
created-at: 2024-05-19
---

Pods are the **smallest deployable unit of computing** in [[Kubernetes]]. Pods are a group of one or more containers with shared storage and network resources. 

The reason that they exist is to **decouple the container technology from the K8s layer**. That way we can use not only [[Docker]] but other container engines interchangeably. Usually there is a **single container per pod**, but we can also have sidecar or auxiliary containers running in the same pod. Pods are ephemeral. Each pod has its own virtual IP address.

# Resources

https://kubernetes.io/docs/concepts/workloads/pods/