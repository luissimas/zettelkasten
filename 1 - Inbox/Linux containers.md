---
date: 2024-04-19
---

Linux Containers (LXC) are a way to run native containers on [[Linux]] systems. LXC uses kernel features such as cgroups and namespaces to provide isolation from the rest of the system while sharing the same kernel and eliminating the need of virtualizing the host hardware.

LXC containers are closer to virtual machines than [[Docker]] containers. Docker containers are stateless and meant to run a single application, while LXC containers retain state and are designed to run multiple applications, just like a VM.
