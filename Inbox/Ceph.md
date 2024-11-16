---
created-at: 2024-11-11
---

Ceph is a [[Software-defined storage]] solution. Probably the most reliable and widely used, with the greatest scaling potential. Fully decentralized with no single point of failure.

- **Monitors** keep track of the existing placement groups and their location across the cluster. Clients reach to the monitors to get a map of which OSDs replicate the data for a given storage pool
- **Managers** monitor the cluster and perform background tasks that require coordination of members
- **Metadata servers** store the metadata of the CephFS file system, a key point of the Ceph architecture is that metadata and data can be scaled independently
- **Object Storage Daemons (OSD)** are the daemons that handle the actual data storage. Each OSD is responsible for managing a disk on the machine, so we usually have multiple OSDs for a given server, one for each disk
