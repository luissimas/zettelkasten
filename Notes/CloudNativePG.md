---
created-at: 2024-09-05
---

CloudNativePG is a [[Kubernetes Operator]] to manage the entire life cycle of [[PostgreSQL]] clusters within [[Kubernetes]].

After installing the operator, we can define clusters using the `Cluster` CRD:

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgresql-cluster
  namespace: my-app
spec:
  instances: 3
  storage:
    size: 2Gi
  monitoring:
    enablePodMonitor: true     # Enable monitoring via the Prometheus Operator
  enableSuperuserAccess: true  # Create a secret with superuser credentials
```

Applications can then consume the database by using the `<cluster-name>-app` secret created by the operator in the namespace that the cluster is defined. There are several more options for defining a cluster, such as the replication model and backup strategies.

CloudNativePG is designed to work with a single database per Postgres cluster. The rational behind this is that an application should own completely the data that it depends on, and this includes the database. By creating a cluster per database, we can manage, scale and apply resource limits on a per-app basis.

I tried out the operator in my [[Homelab]] and I find it really easy to use for the basic cases, although I've not explored some important aspects that are critical for production setups such as automating backups.

# References

https://cloudnative-pg.io/
https://www.cncf.io/blog/2023/09/29/recommended-architectures-for-postgresql-in-kubernetes/
https://www.youtube.com/watch?v=Ny9RxM6H6Hg
