---
created-at: 2024-09-19
---

MAAS is an implementation of the [[MaaS]] concept by Canonical. It provides a way to manage bare metal servers via PXE boot and to create virtual machines from them. 

MAAS can be used as a cloud for [[Juju]] to provision both bare metal servers and VMs.

We can [use cloud-init with MAAS](https://maas.io/docs/how-to-use-cloud-init-with-maas) to configure the machines after boot using cloud-init definitions or custom scripts that are aware of the MAAS environment and the tags of the machine.

MAAS uses LXD to provision VMs instead of using [[libvirt]] directly. According to them, these are the reasons:

> Both libvirt KVMs and LXD VMs are based on QEMU, but LXD VMs offer more advantages such as enhanced security and a robust API. Unlike libvirt KVMs, LXD VMs can be managed remotely without requiring SSH access.

But it seems that there is also a way to provision VMs talking directly to libvirt, using what MAAS calls "KVM pods".

# References

https://juju.is/docs/juju/maas
https://maas.io/docs/about-virtual-machines
https://canonical.com/blog/maas-kvm-pods
https://maas.io/tutorials/create-kvm-pods-with-maas#1-overview
https://discourse.maas.io/t/dev-setup-maas-juju/186