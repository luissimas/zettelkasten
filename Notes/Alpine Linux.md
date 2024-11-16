---
created-at: "2024-11-15"
---

A very lightweight distribution. Mostly used as base for container images, but can also be used in a server or desktop. I'm interested in using it as the OS for my [[Homelab]], since I just need my nodes to run [[Kubernetes]] but I'd still like to be able to tinker with the system, which is not possible with [[Talos Linux]] or [[Fedora CoreOS]].

Highlights:

- [[OpenRC]] as the init system
- Focus on [[Simplicity]] and security
- Uses musl libc and busybox instead of glibc and GNU coreutils
- doas instead of sudo

And that's about it. Is a really simple distro. I like that I can really understand almost everything that's going on in the system.

To install [[K3S]] in a fresh Alpine machine:

```shell
apk update
apk add curl
curl -sfL https://get.k3s.io | sh -
```

# Installing man pages

Alpine does not come with man tools installed. Also, since in Alpine packages are split from its documentation to save resources, we also need to install the man pages for each package using the `<package>-doc` subpackages. The following command will install all the needed packages for a complete man pages setup:

```shell
apk add mandoc mandoc-apropos docs
```

The packages installed are:

- `mandoc`, that provides the man commands
- `mandoc-apropos`, that contains the apropos tools and indexes, allowing us to search man pages with `man -k` or `whatis`
- `docs` is a meta package that ensures that the `<package>-doc` subpackages are installed and remove automatically for each package
