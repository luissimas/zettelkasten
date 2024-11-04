---
created-at: "2024-11-04"
---

In [[Kubernetes]], a DaemonSet is a resource that enables running one copy of a given Pod on each cluster node (or a subset of them). As nodes get added or removed from the cluster, the DaemonSet increases or decreases the number of Pod replicas and handles the scheduling to ensure that each node runs one Pod.

DaemonSet is widely used to provide node-related facilities to the cluster, such as a storage daemon, logs collector, node monitoring or even networking.

# Resources

https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
