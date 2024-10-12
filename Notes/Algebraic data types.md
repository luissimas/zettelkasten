---
created-at: "2024-08-06"
---

Algebraic data types are types created from the **combination of other types**. They are common in statically types functional programming languages such as [[Haskell]] and [[OCaml]]. [[Rust]] also has algebraic data types in the form of enums and structs.

The main classes of algebraic data types are _product types_ (tuples, records etc) and _sum types_ (enums, tagged unions, disjoint unions etc). Usually, languages with algebraic data types also provide [[Pattern matching]] mechanisms to operate on them.

I really like to have algebraic data types. It makes the type system rich enough to encode complex domain knowledge, making it easy to verify program behavior at compile time.

This [[Rust]] example shows how to use enums with pattern matching to achieve a polymorphic behavior when calculating the area of a geometric shape.

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
