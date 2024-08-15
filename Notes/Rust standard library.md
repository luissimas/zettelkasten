---
created-at: "2024-08-14"
---

Unlike in [[Go]], the standard library in [[Rust]] is very minimal and does only provide the most basic functionality. As an example, to generate random numbers we have to use the [rand](https://docs.rs/rand/latest/rand/) crate.

> Rust's core and the standard library are intentionally minimal; batteries are not included. Rustaceans are instead encouraged to add libraries, called crates, to the language by sharing them on crates.io.

Rust has a philosophy to be very **community driven**, and this is one of the results of that philosophy. On the other hand, the friction to create and publish a new crate is quite low, so the whole ecosystem is pushed on that direction.

This results in a lot of crates, and many that solve the same problem. In Rust we don't have the uniformity of packages that [[Elixir]] has, but it's also not as bad as the [[JavaScript]] ecosystem.
