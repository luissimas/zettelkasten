---
created-at: "2024-05-31"
---

Tailscale provides a zero config mesh [[VPN]] service that uses WireGuard under the hood. I'm using it to make my [[Homelab]] services accessible from outside of my local network without having to expose them to the internet. Their architecture is composed of two components: the nodes and the orchestration server. While the node agent is open source, the orchestration server is not.

Tailscale offers a [[Kubernetes]] operator, but from what I've understand this is meant to expose only some services running in the cluster or the entire cluster network. Since I also want to SSH into my server instance, it made more sense to install it outside the cluster, on the host OS. This way I can access not only the Kubernetes workloads but also the underlying server to do maintenance from anywhere as long as I'm connected to the tailnet.

# References

https://tailscale.com/blog/how-tailscale-works
