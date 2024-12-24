---
created-at: "2024-12-24"
---

[[Rust]] is designed for memory safety. To achieve that, it performs static analysis (compile time checks) on the program. This **static analysis is conservative**, and can **reject valid programs**. Also, low level [[Systems programming]] simply requires interacting with unsafe primitives from the operating system or the hardware itself. As a way to **bypass some of those compiler restrictions**, Rust provides a sub-language called _unsafe Rust_.

Unsafe Rust is a superset of Rust that can be written only inside `unsafe` blocks. With unsafe Rust, we have five extra "superpowers" that allow us to:

- Dereference a raw pointer
- Call an unsafe function or method
- Access or modify a mutable static variable
- Implement an unsafe [[Traits|trait]]
- Access fields of a `union`

It's worth noting that all other [[Ownership]] and [[Borrowing]] rules are still enforced by the compiler even in unsafe blocks. Unsafe Rust is not about throwing all the static analysis (and all Rust's benefits) through the window, is about restricting the surface area of memory bugs to the unsafe blocks, using them only when needed. When a memory bug occurs, the programmer knows that it could only be caused by an unsafe block, which reduces debugging effort significantly.

When using unsafe Rust, a common practice is to create a safe abstraction around the unsafe implementation. This prevents the leaking of `usafe` blocks to all the clients of the unsafe code. Wrapping a C library and interacting with the operating system are examples of tasks that require the use of unsafe code, and that are commonly wrapped in a safe abstraction to be consumed in regular Rust code.

It is also a good idea to use [[Assertions]] to perform runtime checks of program invariants inside unsafe blocks.

# References

https://doc.rust-lang.org/stable/book/ch19-01-unsafe-rust.html
