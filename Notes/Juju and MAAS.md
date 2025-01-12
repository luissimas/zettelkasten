---
created-at: "2025-01-12"
---

[[Juju]] can use [[MAAS]] as a [[Cloud]] to provision resources. We can select which machines in MAAS will be used by using `constraints`, that can range from selecting a machine by its tag, available resources or even creating a new virtual machine from a KVM host with the desired resources.

If the zone has a KVM host, we can add a new virtual machine specifying the desired resources:

```shell
juju add-machine --constraints="virt-type=virtual-machine cores=2 mem=4G root-disk=30G zones=az1" --base ubuntu@24.04
```

A really weird behavior is that, even with the `virt-type=virtual-machine`, if the zone does not have a KVM host Juju will ask for any machine in MAAS that has the minimum resources in the AZ, so you can end up **commissioning a physical host by accident**.

When dealing with a small number of physical machines, I prefer to tag them in MAAS and then use the `tags` constraint.

```shell
juju add-machine --constraints="tags=node1" --base ubuntu@24.04
```
