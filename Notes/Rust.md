---
created-at: 2024-08-02
---

Rust is a systems programming language designed with **performance and memory safety** in mind. The idea is that the compiler is strict enough to catch a large class of memory and concurrency bugs.

Rust mixes features from [[Functional languages]] (mostly [[OCaml]]) with low-level concepts and imperative programming constructs. Combined with the philosophy of [[Zero cost abstraction]], this results in a **high level** systems programming language with great abstractions without giving up performance or control over the lower level details. With Rust, we are able to work with high level abstractions and reach for lower level constructs when needed.

> Fast, reliable, productive - pick three

One strong advantage of having an expressive type system and a compiler that enforces this type system is that we can use [[Type-driven design]] to encode much of our program's constraints in the type system and have it verified at compile time. With that, we reduce the need for runtime checks leading to both more safety and performance.

# Actionable goals

- [X] Finish The Book
- [X] Finish rustlings
- [x] Write a TUI kinda app with it - Implemented [[Conway's game of life]]
- [ ] Write an HTTP API with it that access a database
- [ ] Write a CLI with it
