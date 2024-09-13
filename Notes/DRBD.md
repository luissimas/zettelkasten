---
created-at: 2024-05-01
---

Distributed Replicated Block Device (DRBD) is a distributed replicated storage system for [[Linux]]. It is implemented as a [[Kernel driver]].

DRBD allows us to replicate a [[Block device]] synchronously or asynchronously across multiple nodes, enabling the functionality of RAID-1 across a network.

[According to this guy](https://youtu.be/jwaqWezhugE?t=444) DRBD was design with an active-standby replication architecture in mind. It can support dual primary, but this is only done to enable live migration of virtual machines, and should not be used.
