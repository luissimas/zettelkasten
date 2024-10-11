---
created-at: "2024-10-10"
---

In [[Rust]], trait objects are a way to achieve **runtime polymorphism** by leveraging [[Traits]] and [[Smart pointers]].

Trait objects are written with the `dyn` keyword followed by a set of trait bounds. The `dyn` keyword indicates that all method called for the given set of traits are **dynamically dispatched**, meaning that the concrete implementation will be resolved at runtime, and not at compile time, which is the case for [[Generics]].

```rust
pub trait Draw {
    fn draw(&self);
}

pub struct Screen {
    pub components: Vec<Box<dyn Draw>>,
}

impl Screen {
    pub fn run(&self) {
        for component in self.components.iter() {
            component.draw();
        }
    }
}
```

The main use case for trait objects is to be able to use store a set of **values that implement a given trait** without caring about what the concrete types are. Because we don't know that the concrete type is, we have to use some type of indirection such as `Box<T>` to store the pointer for the value on the heap.

Unlike [[Generics]], trait objects do **have a runtime cost**. Since the compiler can't know what types will be used at compile time, it has to generate extra runtime code that will perform _dynamic dispatching_. That is, handle calling the method on each struct given its pointer (usually via a lookup table).
