---
created-at: "2024-10-30"
---

LVM (Logical Volume Manager) is a storage device management technology for [[Linux]] that **abstracts physical storage** devices to create **pools** of storage that are **independent of the layout of the underlying physical devices**. This enables more flexibility and control when administering storage devices.

LVM provides an abstraction on top of physical storage devices to the [[Linux]] kernel. It sits between the physical [[Block device|block devices]] and the kernel to provide logical volume management.

> Most modern Linux distributions are LVM-aware to the point of being able to have their root file systems on a logical volume.

Main use cases:

- Overcommit of storage through thin provisioning
- Ability to extend volumes and volume groups dynamically
- Merging of multiple physical disks into a single big logical volume

We create one **PV** (physical volume) for each physical disk (or partition). We can then assign multiple physical volumes to a **VG** (volume group). This volume group is a big pool of storage that can span multiple physical disks. Then we can create one or more **LV** (logical volume) on top of that volume group. The logical volumes appear to the [[Linux]] kernel as normal block devices, so we can then make a file system on top of that volume and use it just like a physical disk.

![[Pasted image 20241030110320.png]]

# References

https://www.reddit.com/r/linux4noobs/comments/8gvj0j/how_does_lvm_work_exactly/
https://www.digitalocean.com/community/tutorials/an-introduction-to-lvm-concepts-terminology-and-operations
