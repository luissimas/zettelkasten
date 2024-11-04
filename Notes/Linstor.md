---
created-at: 2024-11-04
---

Linstor is a [[Software-defined storage]] a service that **orchestrates** the creation, life cycle management and integration of [[DRBD]] resources with other platforms such as [[Openstack]] or [[Kubernetes]]. It is maintained by LINBIT, the creators of DRBD.

A typical Linstor cluster consists of two components: the `linstor-controller` and `linstor-satellite` services. The **controller maintains the configuration and state of the cluster in a database**, receives client requests to create and manage resources and orchestrates the execution of those requests by **delegating them to satellites**. A satellite service runs on a node where Linstor **consumes** local storage or **provides** storage to services. Satellites are **stateless** and receive requests from the controller to realize operations on the node such as creating and mounting volumes or creating DRBD resources.

Linstor uses [[LVM]], LVM thin or [[ZFS]] as the storage back-end from which it creates volumes. Those volumes are then assigned to a DRBD resource to be replicated across a set of satellite nodes.

![[Linstor architecture.svg]]

For high availability of the control plane, we have to use an external agent such as [[Pacemaker]] to orchestrate the Linstor controller service and configure it to use an external database instead of the default embedded H2 database.

# References

[LINSTOR Is Like Kubernetes, But for Block Devices](https://www.youtube.com/watch?v=yc8RiZ4jJVA)
https://linbit.com/drbd-user-guide/linstor-guide-1_0-en/#s-linstor-introduction
