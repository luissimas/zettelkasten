---
created-at: "2024-08-29"
---

Pacemaker is a cluster management tool meant to orchestrate services or, more generally, resources. The idea is to be able to provide HA for applications that do not natively support it by running a pacemaker cluster managing the services. It is part of the [[Linux HA stack]].

It is used extensively to provide HA to [[Openstack]] services and other solutions, so it is backed by big enterprises such as Red Hat.

Pacemaker has a [[Holismo|holistic]] view of the applications it manages. It manages not only the services themselves, but also load balancing and shared storage. It also has support for _fencing_, which means it can detect faulty nodes and avoid that they corrupt cluster state by either isolating it on the network or shutting them down directly (STONITH - Shoot The Other Node In The Head).

It's worth mentioning that Pacemaker provides resource management for the cluster, but it still depends on a _cluster engine_ like [[Corosync]], Heartbeat or CMAN to provide reliable messaging, quorum and low-level cluster management facilities.

A _resource_ is any service managed by Pacemaker. Resource agents are "drivers" that provide a standard interface for Pacemaker to manage services from a wide range of implementations. These are usually implemented as shell scripts. There are resource agents for [[Systemd]], OCF (Open Cluster Framework), LSB (Linux Standard Base) etc. This architecture makes Pacemaker extensible and able to manage heterogeneous resources while keeping a consistent interface to the operator.

> Anything that can be scripted can be clustered

![[Pasted image 20240902071355.png]]

The main way to interact with Pacemaker clusters is via the `crm` command. With it we can create and manage resources, as well as migrating resources between nodes or put a node into maintenance mode so we can restart the services manually if needed.

# References

https://www.youtube.com/watch?v=yq5nYPKxBCo
https://www.linuxjournal.com/content/ahead-pack-pacemaker-high-availability-stack?page=0,0
https://clusterlabs.org/pacemaker/doc/deprecated/en-US/Pacemaker/1.1/html/Clusters_from_Scratch/
http://www.formilux.org/archives/haproxy/1003/3259.html
