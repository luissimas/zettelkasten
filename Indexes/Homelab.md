---
created-at: "2024-07-14"
---

In the beginning of this year I've started my homelab. The idea was to be able to provide some services for myself and my family -- and learn more about system administration in the process.

# Hardware

At first I just used my old laptop, an old AMD dual core with 4GB of RAM and a 500GB hard drive. I was surprised to learn that it was capable of running quite a few services with no problem whatsoever. Sadly, at one point I tried to watch an HEVC encoded movie in [[Jellyfin]] using the Web UI and the video was in 2 FPS. At this point learned that hardware transcoding was needed and that my CPU didn't support it.

In 06/02/2024 I bought the first dedicated hardware to my homelab. The main thing I was looking for was an integrated GPU with QuickSync to be able to use hardware transcode. I did some research and was convinced (and still am) that [[Mini PCs are a great fit for a homelab]], so I bought an HP Elitedesk 800 G3 Mini, and its been serving my very well since.

For the moment I'm not using the old laptop anymore. Maybe I can still use it as a control plane node in the future.

# Operating system

For the OS I've just went with Ubuntu Server because it's familiar and I don't really care at this point. I've looked a bit into immutable distros such as Fedora CoreOS and [[Talos Linux]], but none of them seem worth the learning curve at this early stage. In the future I want to try [[Talos Linux]], but I only see value in it for a setup with more physical servers.

![[Pasted image 20240714161205.png]]

# Orchestration

I started running services as [[Docker]] containers and managing them via docker compose since its what I was using everyday at work. After some time I decided that I'd be a good chance to learn [[Kubernetes]], so after some research I redeployed everything in a [[K3S]] cluster. My move to [[Kubernetes]] was heavily inspired by [Mischa van den Burg](https://github.com/mischavandenburg) and I watched a lot of his videos to get started.

# Networking

I'm using [[Tailscale]] to access my services when I'm outside my local network. Cloudflare tunnels seemed like an option for a while but then I learned that it's not a good idea to expose streaming services.
