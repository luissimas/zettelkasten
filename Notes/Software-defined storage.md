---
created-at: "2025-03-20"
---

Software-defined storage is a method of utilizing storage in a way that **decouples the software from the hardware** aspects of software. The hardware is kept generic and multipurpose, while the software is what defines the layout and purpose of the storage.

This approach contrasts the proprietary software arrays offered by big companies, which usually tightly couple the hardware with the software that operates it. This usually results in a high performance and coherent solution, but can also lead to vendor lock-in and a lack of flexibility.

In a software-defined storage solution, regular consumer or server grade hardware such as HDDs and SSDs are used. We then use software such as [[LVM]], [[Ceph]] or [[LINSTOR]] to aggregate the hardware storage into a single pool of logical storage. Is then up to the software to define how the storage is presented and consumed.

![[Pasted image 20250320105554.png]]

# References

[What is Software-Defined Storage (SDS)?](https://www.youtube.com/watch?v=XaoCxw-IVko)
