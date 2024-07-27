---
created-at: "2024-07-27"
---

Pika is a backup utility for [[Linux]]. Being part of the Gnome circle, it adheres to the design philosophy of [[Gnome]].

I never had a good backup solution for my personal data. When I had to format my laptop I usually just made a zip file with my documents and sent it over to my server over `scp`. This is not ideal, since I didn't had any regular backup strategy my backups were always months old.

With Pika, we can backup our personal data to either a local drive (such as a USB stick or an external HDD) or a remote location (a server with SSH access). It is also possible to setup a periodic backup strategy with automatic cleanup of old backups to save space.

Pika is built on top of borg, so it has a very solid base for compression and encryption.

# References

https://www.youtube.com/watch?v=W30wzKVwCHo
