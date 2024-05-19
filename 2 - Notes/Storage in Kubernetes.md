---
created-at: 2024-05-01
---

[[Kubernetes]] itself does not manage storage. Instead, it provides an interface for storage resources called [[Persistent volume]]. With this functionality we can mount volumes into pods to ensure that data is persisted between restarts or crashes. Volumes provide a **common interface** for pods to consume storage without caring about the implementation details of the storage back-end.

There are many **types of storage**, from local solutions to network attached storage and cloud provider integrations. These types of volumes are usually exposed to the cluster as **different Storage Classes**. With that, we can simply create a [[Persistent volume claim]] (PVC) specifying the desired Storage Class to select which implementation of the storage we want to use for that volume.

# Local volumes

The main difference between `hostPath` and `local` volumes is that `hostPath` mounts a directory from the host file system in the pod, while `local` volumes mounts a block device from the host (disk or partition) on the container. The main consequence of this is that Kubernetes is not able to known in which node a `hostPath` volume actually lives, while it can for `local` volumes. As such, `hostPath` volumes will **not work** on a multi-node cluster, because the pod can be rescheduled to a node where the `hostPath` volume is not available. In contrast, Kubernetes guarantees the correct scheduling of pods that use `local` volumes to the node that actually contains that volume. Therefore, `local` volumes are a better alternative for local storage provisioning.

With that said, is important to note that in both cases if the node's storage fails for some reason then the data also becomes unavailable to the whole cluster, so the local volume approach is **not fault tolerant**.

# Resources

https://kubernetes.io/docs/concepts/storage/volumes/
https://kubernetes.io/docs/concepts/storage/storage-classes/
https://docs.k3s.io/storage
https://www.fadhil-blog.dev/blog/rancher-local-path-provisioner/
