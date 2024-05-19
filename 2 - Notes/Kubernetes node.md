---
date: 2024-05-19
---

In [[Kubernetes]], a node is any machine that runs the necessary processes to be part of the cluster. These can be physical or virtual machines. A typical cluster is composed of several nodes for both redundancy and computing power.

There are two types of nodes that form the K8s architecture:

# Worker Nodes

These are the nodes that perform the actual workloads in the cluster. These nodes must have 3 processes running:

1.  The container runtime engine to allow the managing of the containers
2.  The `kubelet` program that allows the node to interact with the machine and the container runtime, manage pods and communicate with the rest of the cluster
3.  The `kube-proxy` program that forwards the requests from the service to the actual pods running on the cluster nodes

# Master Nodes

Master nodes perform all the coordination between workers and provide the interface for configuring and managing the cluster. These nodes must have 4 processes running:

1.  The `API Server` to act as a gateway for configuring the cluster from the ouside world. This component receives requests from clients such as `kubectl` or admin interfaces and performs the necessary validations and authentication before applying the action to the cluster or returning the requested data about the state of the cluster
2.  The `Scheduler` that performs the necessary logic to decide in which node a new pod will be executed. The creation of the new pod is performed with a request by the scheduler to the `kubelet` process running in the chosen Node
3.  The `Controller Manager` that detects changes in the cluster state (like pod crashes) and performs actions to restore the cluster to the desired state. This component interacts with other processes to perform actions, such as asking the `Scheduler` to schedule the execution of a new pod for a given application as a consequence of detecting a failure in one of the pods.
4.  An `etcd` instance to store metadata about the cluster state. All the cluster state such as the number of nodes, pods and their current health state is stored here. The use of a distributed key-value store such as `etcd` allows the use of multiple master nodes to ensure high availability.

# Resources

https://kubernetes.io/docs/concepts/architecture/nodes/