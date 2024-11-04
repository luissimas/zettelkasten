---
created-at: 2024-05-01
---

Distributed Replicated Block Device (DRBD) is a distributed replicated storage system for [[Linux]] implemented as a [[Kernel driver]]. It is developed by LINBIT for more than a decade, so it is in a quite mature state. Although possible, we usually don't interact with DRBD directly. Instead, we use [[Linstor]] to orchestrate the creation and management of DRBD resources.

DRBD allows us to replicate a [[Block device]] synchronously or asynchronously across multiple nodes, enabling the functionality of RAID-1 across a network. Although implemented as a driver, DRBD also features a suite of user space applications for setup and administrative tasks such as `drbdadm` and `drbdsetup`.

DRBD creates a "mini cluster" for each resource it manages. This means that each resource gets managed by two threads and ports on each node that is replicating the data.

By default DRBD uses an synchronous active-standby replication architecture. The cool thing is that DRBD is smart enough to automatically promote nodes to primary as soon as the device gets mounted to them.

[According to this guy](https://youtu.be/jwaqWezhugE?t=444) DRBD was designed with an active-standby replication architecture in mind. It can support dual primary, but this is only done to enable live migration of [[Virtual machines]], and should not be used in every case.