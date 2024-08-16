---
created-at: 2024-08-02
---

Rust is a systems programming language designed with performance and safety in mind. The idea is that the compiler is strict enough to catch a large class of bugs, including null pointers and concurrency bugs.

Rust mixes features from [[Functional languages]] (mostly [[OCaml]]) with low-level concepts and imperative programming constructs. Combined with the philosophy of [[Zero cost abstraction]], this results in a high level systems programming language with great abstractions without giving up performance or control over the lower level details.

> Fast, reliable, productive - pick three

One strong advantage of having a expressive type system and a compiler that enforces this type system is that we can encode much of our program's constraints in the type system and have it verified at compile time. With that, we reduce the need for runtime checks leading to both more safety and performance.
