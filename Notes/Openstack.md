---
created-at: 2024-04-19
---

Openstack is a set of components that when put together provide the functionality of a private [[Cloud]].

Openstack is composed of several services that can be deployed independently and together provide a set of functionalities. Those services are mostly written in [[Python]] and communicate either via HTTP APIs or [[RabbitMQ]] queues. Persistence of data is achieved using a [[MySQL]] database. High availability is usually achieved by using [[Pacemaker]] to manage services.

![[Pasted image 20240920072352.png]]

The project has been around for more than a decade, but development is very slow and it does not have a very good perspective for the future.
