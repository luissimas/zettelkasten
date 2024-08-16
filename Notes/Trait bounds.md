---
created-at: "2024-08-16"
---

In [[Rust]], [[Traits]] can be used to define a particular behavior in an abstract way that can be then implemented by concrete types. When creating a function that operates on [[Generics|generic]] values, we sometimes need to specify **constraints** for the possible types on the generic in terms of **which traits they implement**. These constraints are called **trait bounds**, because they bound the possible concrete types for a generic type based on one or more traits. 

With trait bounds, we can enforce at compile time that all concrete types used in generic functions implement the traits needed by those functions.

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

We can also specify that a given type must implement multiple traits to satisfy the requirements of the function. In the following example, `T` must implement both the `Display` and `Clone` traits, while `U` must implement the `Clone` and `Debug` traits.

```rust
fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {
    !todo();
}
```

An equivalent way of expressing the same constraints is using the `where` keyword, which reads much nicer in more complex cases.

```rust
fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{
    !todo();
}
```
