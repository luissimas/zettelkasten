---
created-at: "2024-11-27"
---

This gotta be one of the coolest projects I've ever seen.

Single threaded by design, uses io_uring for zero-syscall networking and storage I/O. Does zero-deserialization, using fixed-size data structures optimized for cache alignment to minimize cache miss. No dynamic memory allocation, all memory is allocated statically at startup.

# References

https://tigerbeetle.com/blog/a-friendly-abstraction-over-iouring-and-kqueue
https://www.usenix.org/system/files/conference/hotos15/hotos15-paper-mcsherry.pdf
https://unixism.net/loti/index.html
