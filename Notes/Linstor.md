---
created-at: 2024-11-04
---

Linstor is a [[Software-defined storage]] a service that **orchestrates** the creation, life cycle management and integration of [[DRBD]] resources with other platforms such as [[Openstack]] or [[Kubernetes]]. It is maintained by LINBIT, the creators of DRBD.

A typical Linstor cluster consists of two components: the `linstor-controller` and `linstor-satellite` services. The **controller maintains the configuration and state of the cluster in a database**, receives client requests to create and manage resources and orchestrates the execution of those requests by **delegating them to satellites**. A satellite service runs on a node where Linstor **consumes** local storage or **provides** storage to services. Satellites are **stateless** and receive requests from the controller to realize operations on the node such as creating and mounting volumes or creating DRBD resources.

Linstor uses [[LVM]], LVM thin or [[ZFS]] as the storage back-end from which it creates volumes. Those volumes are then assigned to a DRBD resource to be replicated across a set of satellite nodes.

![[Linstor architecture.svg]]

For high availability of the control plane, we have to use an external agent such as [[Pacemaker]] to orchestrate the Linstor controller service and configure it to use an external database instead of the default embedded H2 database.

The following table maps between [[Kubernetes]] and Linstor concepts:

| Kubernetes   | Linstor             |
| ------------ | ------------------- |
| pod          | resource            |
| container    | volume              |
| deployment   | resource-definition |
| node         | node                |
| labels       | aux-properties      |
| storageClass | resource-group      |

When interacting with Linstor, we usually create a **resource group**, which contains parameters like the **storage pool, autoplacement rules and replica count**. When we spawn a new resource in this resource group, a new **resource definition** will be created inheriting the properties from the group. The **resource definition** will then spawn the resources themselves on the satellite nodes following the autoplacement rules. Linstor always creates a default resource group.

Besides resource groups and definitions, we can also define **volume groups** and **volume definitions** to describe **how the volumes should be created inside a resource**. This enables setting properties such as the size, number and other metadata for volumes. Volume groups must always reference a resource group. Although DRBD supports replicating multiple volumes in a single resource, it is not a very common use case.

# References

[LINSTOR Is Like Kubernetes, But for Block Devices](https://www.youtube.com/watch?v=yc8RiZ4jJVA)
https://linbit.com/drbd-user-guide/linstor-guide-1_0-en/#s-linstor-introduction
