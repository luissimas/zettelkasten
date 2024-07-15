---
created-at: 2024-04-19
---

Juju is an orchestration engine that enables the **deployment, integration and life-cycle management** of applications in complex environments such as hybrid [[Cloud|clouds]].

In Juju, we use charms to declare an application and its possible integrations. We can then deploy a charm as an application and integrate it with other applications managed by Juju using relations. We can also aggregate charms in a bundle, which can also declaratively define the relations between the bundled applications.

The following table maps between [[Kubernetes]] and Juju concepts:

| Kubernetes | Juju              |
| ---------- | ----------------- |
| namespace  | model             |
| node       | machine           |
| pod        | unit              |
| container  | process in a unit |
| service    | application       | 

Juju has support for multiple clouds and aims to make the differences between them transparent to the operator, but there's a fundamental distinction between machine and k8s clouds.

> To Juju, a cloud (or backing cloud) is any entity that has an API that can provide compute, networking, and optionally storage resources in order for application units to be deployed on them. This includes public clouds such as Amazon Web Services, Google Compute Engine, Microsoft Azure and Kubernetes as well as private OpenStack-based clouds. Juju can also make use of environments which are not clouds per se, but which Juju can nonetheless treat as a cloud. [[MaaS]] and LXD fit into this last category. Because of this, in Juju a cloud is sometimes also called, more generally, a substrate.

The beauty of Juju is to be able to manage the applications and their relationships. This allows us to easily integrate services such as databases and [[Observability]] providers.

Although charms can be written in any language, [[Python]] is the supported and recommended tool for this job.
