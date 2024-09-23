---
created-at: "2024-09-20"
---

Virtualization is the idea of creating **isolated, self-contained computing environments** from a common shared environment. With virtualization we can better **divide and manage physical resources** and even overcommit those resources depending on the characteristics of the workloads. Virtualization is the foundation concept of a [[Cloud]].

Generally and for practical purposes, there are two main ways of doing virtualization: [[Containers]] or [[Virtual machines]]. Usually when we say virtualization we are talking about VMs, but containers also share the same fundamental idea of isolation.

![[Pasted image 20240923084402.png]]

While virtual machines use virtualized hardware resources and their own Kernel, containers share the host system's Kernel and use [[namespaces]], [[cgroups]] and other Kernel features to provide isolation. As a result of using less layers of abstractions, **containers are more lightweight and less isolated** from the host system than VMs. In fact, there's a huge security market today for security analysis specialized in containers, as it is significantly easier to gain access to the host system from a container than from a VM.

# References

https://documentation.ubuntu.com/server/explanation/intro-to/virtualisation/
