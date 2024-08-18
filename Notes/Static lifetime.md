---
created-at: "2024-08-18"
---

In [[Rust]], there's a special [[Lifetimes|lifetime]] called `'static`. This lifetime specifies that a reference can live for the entire duration of the program.

By default, all string literals have a static lifetime assigned to them. This is because string literals are included in the final compiled binary, so they are always available and references to them are always valid.

```rust
let s: &'static str = "I have a static lifetime.";
```
