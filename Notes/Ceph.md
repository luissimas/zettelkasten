---
created-at: "2024-11-11"
---

Ceph is a [[Software-defined storage]] solution. Probably the most **reliable** and widely used, with the greatest **scaling** potential. Fully decentralized with **no single point of failure**. It can provide both [[Block storage|block]] and [[Object storage|object]] storage, as well as a [[Sistema de arquivos|filesystem]].

Ceph can provide remote storage to several platforms, like [[Kubernetes]], [[Openstack]], and [[Incus]]. The key benefits of Ceph are its **scalability and reliability**. Although it can provide decent performance in large clusters, it generally offers less performance than solutions like [[Linstor]].

A typical Ceph cluster is composed of the following components:

- **Managers** monitor the cluster and perform background tasks that require coordination of members
- **Metadata servers** store the metadata of the CephFS file system
- **Object Storage Daemons (OSD)** are the daemons that handle the actual data storage. Each OSD is responsible for managing a disk on the machine, so we usually have multiple OSDs for a given server, one for each disk
- **Monitors** keep track of the existing placement groups and their location across the cluster. Clients reach to the monitors to get a map of which OSDs replicate the data for a given storage pool

Ceph was originally designed as a distributed filesystem, and a key point of its architecture is that metadata and data can be scaled independently.

![[Pasted image 20241214174219.png]]

Ceph uses object storage at its core. It is capable of provide block devices and filesystems to clients by creating abstrations on top of the object storage layer. This is done via the CRUSH algorithm, which makes Ceph able to distribute, objects between OSDs and retrieve them without the need for a centralized index.

![[Pasted image 20241214173934.png]]

# Useful commands

These are some useful commands to know about to check the state of an existing Ceph cluster. 

```language
ceph status      # Show cluster health
ceph df          # Show storage usage
ceph osd tree    # Show the CRUSH tree map
```

# References

[[Ceph.pdf]]
https://ceph.io/en/discover/technology/
