---
created-at: 2024-09-13
---

KubeVirt allows us to **create and manage** [[Virtual machines]] from [[Kubernetes]]. The idea is to keep leveraging the Kubernetes control plane and its ecosystem of [[Kubernetes Operator|operators]] and practices such as [[GitOps]] even for non containerized workloads.

The core benefit of this approach is to be able to use the same underlying infrastructure for [[Observability]], storage, compute and network for both containerized and virtual machine workloads. Besides that, we can use **Kubernetes as a uniform API** for interacting with both types of workloads, reducing the operational overhead of managing two different stacks.

![[Pasted image 20240913074257.png]]

KubeVirt is design with compatibility with the existing Kubernetes ecosystem in mind. Since **VMs are fundamentally just pods** running a [[QEMU]] process, they benefit from all the infrastructure that Kubernetes offers. We can, for example, mount disks using PVCs, load balance traffic using services etc.

It is possible to not only create new virtual machines, but to also **migrate existing VMs** to KubeVirt by importing images or snapshots. **Live migration** of VMs from across cluster nodes is also supported. The live migration across cluster nodes uses the same eviction events triggered by Kubernetes when a node is being drained or unhealthy to trigger a [[KVM]] live migration.   

We can, for example, create a VM by using the `VirtualMachine` CRD:

```yaml
apiVersion: kubevirt.io/v1
kind: VirtualMachine
metadata:
  name: testvm
spec:
  running: false
  template:
    metadata:
      labels:
        kubevirt.io/size: small
        kubevirt.io/domain: testvm
    spec:
      domain:
        devices:
          disks:
            - name: containerdisk
              disk:
                bus: virtio
            - name: cloudinitdisk
              disk:
                bus: virtio
          interfaces:
          - name: default
            masquerade: {}
        resources:
          requests:
            memory: 64M
      networks:
      - name: default
        pod: {}
      volumes:
        - name: containerdisk
          containerDisk:
            image: quay.io/kubevirt/cirros-container-disk-demo
        - name: cloudinitdisk
          cloudInitNoCloud:
            userDataBase64: SGkuXG4=
```

KubeVirt uses [[libvirt]] under the hood for [[Virtualization]]. It is important to keep in mind that KubeVirt is best used with **bare metal** clusters, to avoid the performance costs of nested virtualization. Therefore, when the cluster nodes are VMs it's probably a better idea to use [[Crossplane]] to manage resources such as VMs from the cluster but without actually running the VMs in the cluster nodes.

# References

https://kubevirt.io/user-guide/
[KubeVirt deep dive](https://www.youtube.com/watch?v=Z9hBIoO4KOs)
[Virtual Machines (VMs) Inside Kubernetes Clusters With KubeVirt](https://www.youtube.com/watch?v=oO8VEmpojz0)
