---
created-at: 2024-09-19
---

MAAS is an implementation of the [[Notes/MAAS]] concept by Canonical. It provides a way to manage bare metal servers via IPMI and PXE, allowing us to either prepare them for direct usage or provision VMs in them. MAAS can also be used as a cloud for [[Juju]] to provision both bare metal servers and VMs.

The core ideia is that MAAS is able to automatically detect new machines with PXE boot available on the network. It then installs a [[Ubuntu]] image to that machine and scans it to discover the available resources such as CPU, RAM, Disks, NICs and GPUs. We can then request machines (directly or via Juju) and MAAS will boot and deliver them for service. When we're done using a machine, MAAS takes care of wiping the disks and making sure that the machine is in a clean state and ready to use again.

We can [use cloud-init with MAAS](https://maas.io/docs/how-to-use-cloud-init-with-maas) to configure the machines after boot using cloud-init definitions or custom scripts that are aware of the MAAS environment and the tags of the machine.

MAAS uses [[LXD]] or [[libvirt]] directly to provision VMs instead, but they seem to be moving more towards LXD. According to them, these are the reasons:

> Both libvirt KVMs and LXD VMs are based on QEMU, but LXD VMs offer more advantages such as enhanced security and a robust API. Unlike libvirt KVMs, LXD VMs can be managed remotely without requiring SSH access.

# References

https://juju.is/docs/juju/maas
https://maas.io/docs/about-virtual-machines
https://canonical.com/blog/maas-kvm-pods
https://maas.io/tutorials/create-kvm-pods-with-maas#1-overview
https://discourse.maas.io/t/dev-setup-maas-juju/186
