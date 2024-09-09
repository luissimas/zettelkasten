---
created-at: "2024-09-09"
---

eBPF is a technology that enables running sandboxed programs in privileged contexts, such as the [[Linux]] kernel, without the need to patch the kernel or load custom drivers.

![[Pasted image 20240909084308.png]]

This is a game changer for [[Observability]] and security, as it facilitates auditing of packets and enables monitoring at a kernel level, reducing the need for instrumenting applications. Observability without instrumenting applications directly is discussed further in the great talk [Observability for 99% Developers](https://youtu.be/UJA4PGKny2k).

eBPF programs are event-driven, and generally hook into an specific kernel event, such as syscalls, function entry/exit, network events etc.

![[Pasted image 20240909084338.png]]

# References

https://ebpf.io/what-is-ebpf/
https://www.youtube.com/watch?v=J_EehoXLbIU
https://www.youtube.com/watch?v=jM3vL2LLm5o
