---
created-at: "2024-08-14"
---

Generics are a construct in [[Programming languages]] that allow us to define a set of types or operations that use a set of generic types. The main goal of using generics is to reduce code duplication and abstract the type of operations common to multiple types.

In [[Rust]], generics can be used to define functions, methods, enums and structs that operate over a generic set of types. Following the philosophy of [[Zero cost abstraction]], generics don't impose a runtime cost in Rust programs. The compiler achieves this by performing _monomorphization_ of the code, which simply means that it generates code with specific types from the generic types based on how the generic constructs are used in the program. With this, we can leverage a high level abstraction without paying any runtime cost.

Generics are used extensively with [[Algebraic data types]] such as `Option` and `Result` in Rust's standard library.

```rust
enum Option<T> {
    Some(T),
    None,
}

enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

In the following example, we define a function `largest` that has a generic type `T`. Since we do a comparison operation on the value of type `T`, Rust forces us to specify more about the type. In this case, `T` cannot be of any type, it has to be a type that implements the `std::cmp::PartialOrd` [[Traits|trait]].

```rust
fn largest<T: std::cmp::PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];

    for number in list {
        if number > largest {
            largest = number;
        }
    }

    return largest;
}
```
