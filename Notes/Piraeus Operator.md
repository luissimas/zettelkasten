---
created-at: 2024-09-05
---

The Piraeus Operator is a [[Kubernetes Operator]] to deploy and manage [[Linstor]] clusters inside [[Kubernetes]].

With the Piraeus Operator, we can define a [[Linstor]] cluster with the `LinstorCluster` resource. In the following example, satellites (and therefore storage) will only be available in nodes that match the given selector. The default behavior is to run a satellite on every available node.

```yaml
apiVersion: piraeus.io/v1
kind: LinstorCluster
metadata:
  name: linstorcluster
spec:
  nodeSelector:
    example.com/storage: "yes"
```

As of any Linstor install, the [[DRBD]] kernel module must be loaded on every node that should have access to storage. Since Linstor satellites must access the host devices directly, their containers must run as [[Privileged container|privileged]]. The Linstor controller does not require such access to host resources, so it does not need any extra privileges.

I want to try it out in my [[Homelab]] once I have more nodes to run it. It might be a more efficient alternative to [[Longhorn]] for providing highly available storage to Kubernetes.

# References

https://piraeus.io/
