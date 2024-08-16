---
created-at: "2024-08-16"
---

A very powerful implication of [[Trait bounds]] in [[Rust]] is that we can **implement a [[Traits|trait]] for any type that implements another trait**. These are called _blanket implementations_, and are used extensively in Rust's standard library.

For example, we can define that any type that implements the `Display` trait also implements the `ToString` trait.

```rust
impl<T: Display> ToString for T {
    // --snip--
}
```
