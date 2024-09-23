---
created-at: 2024-04-19
---

System containers are closer to [[Virtual machines]] than [[Application containers]] such as OCI containers. OCI containers are stateless and meant to run a single application, while system containers retain state and are designed to run multiple applications, just like a VM. Although they provide a similar experience to the one of VMs, system containers still use the same host kernel.

In [[Linux]], the main tool for creating system containers is [[LXC]]. In [[FreeBSD]], jails are the OS-native implementation of system containers.

# References

[Linux Container (LXC) Introduction](https://www.youtube.com/watch?v=_KnmRdK69qM)
https://documentation.ubuntu.com/lxd/en/latest/explanation/instances/
