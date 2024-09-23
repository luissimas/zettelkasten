---
created-at: "2024-09-23"
---

Containers are a type of [[Virtualization]] technique that consists in sharing the same host kernel across multiple isolated instances (the containers), achieving isolation between instances and the host system via Kernel features such as [[namespaces]], [[cgroups]] and [[chroot]].

Generally, there are two flavors of containers: [[Application containers]] and [[System containers]].

[[System containers]] provide an experience close to a [[Virtual machine]] in the sense of having a full [[Sistema de arquivos|file system]] and enabling users to do most of what they could do in a regular VM. System containers are useful in scenarios where you need a full operating system to work with, but don't need the more strict isolation or control of the Kernel provided by a VM.

[[Application containers]] on the other hand are designed to encapsulate a single application and its dependencies. They are not meant to be used as a full system, and therefore don't usually include full file systems and the usual Linux utilities. This is the more mainstream type of container, popularized by tools such as [[Docker]] and [[Kubernetes]].

![[Pasted image 20240923084342.png]]

# References

https://documentation.ubuntu.com/lxd/en/latest/explanation/instances/
