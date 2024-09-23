---
created-at: 2024-04-19
---

Openstack is a set of components that when put together provide the functionality of a private [[Cloud]].

Openstack is composed of several services that can be deployed independently and together provide a set of functionalities. Those services are mostly written in [[Python]] and communicate either via HTTP APIs or [[RabbitMQ]] queues. Persistence of data is achieved using a [[MySQL]] database. High availability is usually achieved by using [[Pacemaker]] to manage services.

![[Pasted image 20240920072352.png]]

Due to its maximalist approach, Openstack has **a lot** of components to provide a wide range of services. The main components are the following:

- Keystone: an identity service, provides authentication and authorization, enabling multi-tenancy in Openstack clouds.
- Glance: the image service responsible for managing cloud images for [[Virtual machines|VMs]].
- Nova: the compute engine of Openstack, responsible for creating, scheduling and overall managing of [[Virtual machines|VMs]].
- Neutron: an network service that allows for defining networks to provide connectivity between workloads withing the Openstack cloud.
- Cinder: the block storage service, responsible for provisioning and managing persistent [[Block device|block devices]].
- Swift: a S3 compatible [[Object Storage]] service.

It's worth noting that these services are usually higher level abstractions around lower level components such as [[OVN]], [[libvirt]] and storage providers such as [[Ceph]] and [[Linstor]].

The project has been around for more than a decade, but development is very slow and it does not have a very good perspective for the future.
