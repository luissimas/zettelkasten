---
created-at: "2024-09-23"
---

Linux Containers (LXC) are a way to run [[System containers]] on [[Linux]] systems. LXC uses kernel features such as [[cgroups]], [[namespaces]] and [[chroot]] to provide isolation from the rest of the system while sharing the same kernel and eliminating the need of [[Virtualization|virtualize]] the host hardware.

LXC is not really meant to be used directly by humans, as it provides only the lower level tools to create containers, but not to manage them in a sane way. Most of the cases we use [[LXD]] or [[Incus]] to create and manage LXC containers for us. By using those higher level tools we get nice features to manage containers such as projects, profiles and even clustering.

# References

[Linux Container (LXC) Introduction](https://www.youtube.com/watch?v=_KnmRdK69qM)
https://documentation.ubuntu.com/lxd/en/latest/explanation/instances/
