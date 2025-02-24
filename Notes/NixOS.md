---
created-at: "2025-02-24"
---

NixOS is a [[Linux]] distribution based on the [[Nix]] package manager. It focuses on providing a reproducible and portable system configuration in the form of nix files that declare the **desired state** of the system.

Since the system uses Nix for all its packages, it ends up not being [FHS](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard) compliant. For the most part this is not an issue, but it can become a problem when trying to compile and **dynamically link** binaries on the system. Overall, any dynamically linked binary must be patched to run on NixOS, otherwise it just can't be executed.

I tried to use NixOS in the past, but I [[Switching to Ubuntu|ditched it]] due to its complexity and lack of documentation. When using NixOS things usually work, but when they don't work it's quite a nightmare to debug and find help.

That's my overall sentiment towards NixOS: it's amazing, solves a ton of problems and I really want to use it; but I just can't. The happy path is really happy and everything works very well, but anything that deviates from that is _very_ painful to debug and get to work properly. I may give it another shot when I graduate and get to use my personal laptop for just what I want, but until then, I'm happy with [[Fedora]].

# References

[NixOS is NOT for Beginners](https://www.youtube.com/watch?v=NuPKijYukuQ)
[NixOS is Mindblowing](https://www.youtube.com/watch?v=fuWPuJZ9NcU)
[NixOS: Everything Everywhere All At Once](https://youtu.be/CwfKlX3rA6E)
https://en.wikipedia.org/wiki/NixOS
https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard
https://github.com/hlissner/dotfiles?tab=readme-ov-file#frequently-asked-questions
