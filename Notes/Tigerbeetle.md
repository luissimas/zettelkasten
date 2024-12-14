---
created-at: "2024-11-27"
---

This gotta be one of the coolest projects I've ever seen. Tigerbeetle is a Online Transaction Processing (OLTP) database focused on processing and storing financial transactions.

Its design and implementation has a lot of interesting ideas from [[Systems programming]]. I'm quite fascinated by some of its design decisions, and I see in them a great opportunity to learn more about several aspects of systems programming

Some highlights:

- Single threaded
- Uses [[io_uring]] for zero-syscall networking and storage I/O
- Does zero deserialization
- Uses fixed-size data structures optimized for cache alignment to minimize cache miss
- No dynamic memory allocation, all memory is allocated statically at startup.
- Directly accesses raw block devices for storage, bypassing filesystems
- Can recover from both network and disk failures
- Uses deterministic simulation to perform continuous and reproducible testing
- Performs assertions aggressively to check for program invariants at runtime

Tigerbeetle is written in [[Zig]], and the language seems to be a perfect fit for the project. Zig allows for a very low level control of memory allocation and alignment, as well as interacting with system primitives.

# References

https://tigerbeetle.com/blog/a-friendly-abstraction-over-iouring-and-kqueue
https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/TIGER_STYLE.md
https://www.usenix.org/system/files/conference/hotos15/hotos15-paper-mcsherry.pdf
https://unixism.net/loti/index.html
