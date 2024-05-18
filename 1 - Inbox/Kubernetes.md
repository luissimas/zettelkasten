---
date: 2024-03-28
---

Kubernetes is a container orchestration tool.

# Core concepts

[[20240329T093529--kubernetes-nodes__devops_tech]]
[[20240329T105803--pods__devops_tech]]
[[20240329T105849--ingress__devops_tech]]
[[20240329T105857--configmap__devops_tech]]
[[20240329T105904--secret__devops_tech]]
[[20240329T105928--deployments__devops_tech]]
[[20240329T105942--statefulset__devops_tech]]

# Interacting with the cluster

The API Server on the master node is the single entry point for interacting with the K8s cluster. It exposes commands and queries through an HTTP API (that can be authenticated). As such, it is totally possible to control an K8s cluster by using `curl` and issuing the appropriate HTTP requests. But obviously there are better ways of doing so, usually with tools that wrap the API requests with a better interface like a CLI or UI dashboard. `kubectl` is the main CLI tool used to interact with K8s clusters.
