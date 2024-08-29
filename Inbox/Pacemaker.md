---
created-at: "2024-08-29"
---

Pacemaker is a cluster management tool meant to orchestrate services or, more generally, resources. The idea is to be able to provide HA for applications that do not natively support it by running a pacemaker cluster managing the services. It is part of the [[Linux HA stack]].

It is used extensively to provide HA to [[Openstack]] services and other solutions, so it is backed by big enterprises such as Red Hat.

Pacemaker has a [[Holismo|holistic]] view of the applications it manages. It manages not only the services themselves, but also the load balancing between them.

# References

https://www.youtube.com/watch?v=yq5nYPKxBCo
https://github.com/ClusterLabs/pacemaker

# Further reading

https://www.reddit.com/r/linuxadmin/comments/56ykl0/any_alternative_to_pacemaker_cluster/
http://www.formilux.org/archives/haproxy/1003/3259.html
https://www.linuxjournal.com/content/ahead-pack-pacemaker-high-availability-stack?page=0,0
https://clusterlabs.org/pacemaker/doc/deprecated/en-US/Pacemaker/1.1/html/Clusters_from_Scratch/
