---
created-at: "2025-02-04"
---

Application [[Containers]] (or OCI containers) are designed to run a single application. They use the same underlying technologies as [[System containers]], but their filesystem is usually much smaller with only the minimal dependencies needed for running the application.

In [[Linux]] there are several tools for creating and managing application containers. Docker, Podman and containerd just to name a few. Usually Docker and Podman are the choices for end-users such as developers, while containerd is a lightweight runtime intended to be used by orchestrators such as [[Kubernetes]].
