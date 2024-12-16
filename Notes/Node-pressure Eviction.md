---
created-at: "2024-12-16"
---

[[Kubernetes]] monitors resources like memory and disk space on the cluster nodes. When the use of these resources go above a certain threshold, kubelet can stop new pods from starting up on the node as a way to reclaim resources and prevent starvation.

In the following [[k9s]] screenshot, I can see that my node is health in terms of resource pressure.

![[Pasted image 20241216072856.png]]

I discovered this when I noticed that my [[Homelab]] services stopped working. Everything seemed to be normal on the cluster, but the pods would always fail to start. Digging a bit into the cause of the problem, I noticed that the root file system had a usage above 90%. Indeed, all pods in my (only) node were being evicted to prevent a file system starvation. After freeing some disk space, the pods were able to start again.

# References

https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/
