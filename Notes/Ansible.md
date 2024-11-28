---
created-at: "2024-10-27"
---

Ansible is a [[IaC]] tool that focuses on configuration management.

We only need to install Ansible on the "control node", which is the node that will be executing the playbooks. The control node needs to have **SSH authentication setup** for every node in the inventory. It's a common practice to have a dedicated server in the infrastructure to act as the control node, but in simpler setups the control node can be the operator's local machine.

A playbook is composed of a set of plays that are executed in order. Each play executes one or more tasks, and each task calls an Ansible module. There are several built-in modules for managing packages, services, executing commands etc. Besides the built-in modules, there are also several community maintained modules for various tasks. The great thing about Ansible is how **big** its **community** is, and as a result of that we have modules for doing almost anything.

The **idempotency** of a playbook depends on the idempotency of the modules that it uses. Like in [[Juju]], the quality of the overall result depends on the implementation of each module.

Ansible is **not very picky** and can work well with a wide range of both new and existing deployments. Unlike [[Juju]] or other solutions, Ansible is **agent-less**. This means that there's no need for any daemon service running on the servers that will be automated. Because of this, Ansible is a very low overhead and simple solution.

Overall it seems that Ansible is a very good automation solution for configuring infrastructure. Its focus on [[Simplicity]] and ease of use result in an automation that is **easy to maintain and extend**. We can pair it with [[Terraform]] to achieve a complete setup for automating infrastructure deployment and configuration.

# References

https://github.com/luissimas/linstor-cluster
https://docs.ansible.com/ansible/latest/getting_started