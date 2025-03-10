---
created-at: "2024-09-23"
---

Virtual machines are machines that use [[Virtualization|virtualized]] hardware. When compared to [[Containers]], they provide better isolation (because the kernel isn't shared with the host) but usually have more resource overhead.

In Linux, the typical stack is to use [[KVM]] as the underlying Kernel virtualization infrastructure and [[QEMU]] to emulate devices and piece things together into a VM. We can use [[libvirt]] as a common interface to abstract QEMU-specific logic. Most of the time, those VMs are managed by an [[Orchestrator]] such as [[Openstack]], [[Incus]] or even [[Kubernetes]] with [[KubeVirt]].

# References

[Linux Hypervisor Setup (libvirt/qemu/kvm)](https://youtu.be/HfNKpT2jo7U?si=Y1elS31nkyahTYvu)
https://documentation.ubuntu.com/server/explanation/virtualisation/vm-tools-in-the-ubuntu-space/
