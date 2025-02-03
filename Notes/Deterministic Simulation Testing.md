---
created-at: "2024-12-30"
---

Deterministic Simulation Testing is a technique for [[Software testing|testing]] [[Distributed systems]]. It consists of controlling all non-deterministic behavior in a **deterministic simulator** that is able to **inject faults** and most importantly: **reproduce behaviors**. This is usually implemented via dependency injection or even using a deterministic hypervisor. [[Tigerbeetle]] is the first project that I've heard of that uses this technique.

The core idea is to develop the software **abstracting all I/O** via an interface. The interface will then have two implementations: one that does the actual I/O via syscalls in the [[Sistema operacional|OS]] and one that simulates those calls in memory. The simulator then receives (or generates) a **random seed** that is used to generate a series of behaviors in the system and executes the system using the in-memory I/O implementation. Since the simulator controls all I/O, it can inject faults on the system to simulate network or disk failures.

When the simulator finds a bug on the system, it then prints out information about the failure and the random seed that was used to produce the incorrect behavior. This enables developers to run the simulation again providing the random seed to **reproduce the bug deterministically**.

This technique makes the most sense in **critical systems** that are usually very **hard to test**, such as databases. It doesn't make much sense to use DST for an HTTP API for example, since it's a very simple and well understood type of system.

One thing to keep in mind is that when doing DST you must abstract all I/O out of the core business logic of the program. The implication of this is that you must very careful when **introducing dependencies**, because they can inadvertently break that rule if they do some sort of I/O internally. For that reason, DST usually implies minimizing dependencies or even adopting a zero-dependency policy, like [[Tigerbeetle]] does.

# References

https://notes.eatonphil.com/2024-08-20-deterministic-simulation-testing.html
