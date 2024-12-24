---
created-at: 2024-08-27
---

Type driven design is a [[Software development]] technique that consists of encoding as much business logic and program invariants into the type system as possible. The rational is that by doing so, we can leverage the compiler's static analysis and checks to enforce not only our program's syntax, but also its semantics.

Doing this effectively depends on a statically typed language that provides a rich and expressive type system, ideally with [[Algebraic data types]]. [[Rust]] and [[OCaml]] are examples of such languages.

> Parse, don't validate

# References

[The magic of Rust's type system](https://www.youtube.com/watch?v=NDIU1GSBrVI)
