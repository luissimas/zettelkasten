---
created-at: "2024-12-25"
---

[[Rust]] implicitly dereferences references and [[Smart pointers]] in many cases. The `Deref` [[Traits|trait]] is used to define how a type will be dereferenced.

If a given type `T` implements `Deref<Target = U>`, then:

- Values of type `&T` are coerced to values of type `&U`
- `T` implicitly **implements all the methods** of type `U` which take the `&self` receiver.

This feature allows for a more ergonomic usage of references and smart pointers. It also enables the implementation of some patterns that involve wrapping a given type in a new type.

We can, for example, implement a type `MyBox` generic over `T` that implements the `Deref` trait. We can then use references to `MyBox` as if they were references to `T`.

```rust
use std::ops::Deref;

struct MyBox<T>(T);

impl<T> MyBox<T> {
    fn new(x: T) -> MyBox<T> {
        MyBox(x)
    }
}

impl<T> Deref for MyBox<T> {
    type Target = T;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

fn hello(name: &str) {
    println!("Hello, {name}!");
}

fn main() {
    let m = MyBox::new(String::from("Rust"));
    hello(&m);
}
```

# References

https://doc.rust-lang.org/std/ops/trait.Deref.html#deref-coercion
https://doc.rust-lang.org/book/ch15-02-deref.html
