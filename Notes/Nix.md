---
created-at: "2025-02-24"
---

Nix is a package manager that allows for **reproducible** builds and eliminates a class of **dependency management** problems. It is commonly used via the [[NixOS]] Linux distribution, although it can be used as a package manager on top of other distros.

Nix solves the problem of conflicting dependencies by allowing multiple versions of packages to be installed at the same time. Instead of being available in a standard location such as `/usr/bin/`, packages are installed into the `/nix/store/` directory with unique hashes, and then linked together with their dependencies.

# Nix shells

Nix shells are an amazing feature of Nix that allows the declaration of an ephemeral environment with all the needed dependencies for a given project. This is a sample `shell.nix` file from one of my projects:

```nix
{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  packages = with pkgs; [
    charmcraft
    juju
    python312Packages.tox
  ];
}
```

With that file present on the project root, we can just run `nix-shell` to enter a new shell with all the packages available. With [flakes](https://nixos.wiki/wiki/flakes), we can even pin the versions of those packages to ensure that everyone has the exact same dependency.

# Learning resources

https://nixos-and-flakes.thiscute.world/introduction/
https://nixos.org/guides/nix-pills/04-basics-of-language.html
