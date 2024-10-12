---
created-at: "2024-10-12"
---

Pattern matching is a programming construct in which we can match a given expression or value against a pattern. This can be used to implement control flow logic in a more expressive and concise way than it is possible with traditional conditional statements. Pattern matching is a common feature in [[Functional languages]] such as [[Haskell]], [[OCaml]] and [[Elixir]].

In [[Rust]], pattern matching can be used in a variety of ways, from `let` and `match` expressions for flow control to function parameters as a way to destructure complex data. Like in [[OCaml]], [[Rust]]'s `match` expressions are **exhaustive**, meaning they must handle all possible cases for a given matched expression.

When combined with [[Algebraic data types]], pattern matching can become a very powerful and elegant tool to describe control flow and computation in general.

```rust
use std::f32::consts::PI;

enum Shape {
    Rectangle { width: u32, height: u32 },
    Circle { radius: u32 },
}

impl Shape {
    fn area(&self) -> f32 {
        match self {
            Shape::Circle { radius } => PI * (radius.pow(2) as f32),
            Shape::Rectangle { width, height } => (width * height) as f32,
        }
    }
}
```
