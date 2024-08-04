---
created-at: 2024-08-04
---

The concept of _ownership_ is unique to [[Rust]]. It enables Rust to make memory safety guarantees without the need for a garbage colector. That means that we can get strong safety guarantees without any runtime overhead.

> All data stored on the stack must have a known, fixed size. Data with an unknown size at compile time or a size that might change must be stored on the heap instead.

The main purpose of ownership is to manage data allocated on the **heap**. Here are the three rules of ownership:

- Each value as a _owner_
- There can be only one _owner_ at a time
- The value is dropped when the _owner_ goes out of scope

When a variable whose value is allocated on the heap goes out of scope, Rust calls the `drop` method on it to free memory. This method is defined in the [Drop trait](https://doc.rust-lang.org/std/ops/trait.Drop.html), and is automatically generated for custom types by recursively calling `drop` on all fields.

With that in mind, Rust also needs to handle the case in which two variables hold a reference to the same data on the heap. If the `drop` method is called for both variables, the memory would be freed twice, resulting in corrupted memory. To deal with this, Rust has the concept of _move_.

In the following example, the `String` type allocates data in the heap, and therefore assigning `s1` to `s2` only copies the stack data containing length, capacity and the reference for the data in the heap. To prevent both `s1` and `s2` to own the reference for the heap data at the same time, Rust invalidates `s1` after it is assigned to `s2`. From that point on, using `s1` results in an error. With this, Rust guarantees that the memory won't be freed twice.

```rust
let s1 = String::from("hello");
let s2 = s1;
println!("s1={s1} s2={s2}"); // error[E0382]: borrow of moved value: `s1`
```

This is what actually happens in the memory when we assign the value of `s1` to `s2`:

![[trpl04-02.svg]]

To actually make a deep copy of the data on the heap, we can use the `clone` method.

```rust
let s1 = String::from("hello");
let s2 = s1.clone();
println!("s1={s1} s2={s2}"); // no error
```

This would result in the following memory layout:

![[trpl04-03.svg]]

It is important to note that Rust **never implicitly copies data allocated on the heap**, because it can be an arbitrarily expensive operation. Types that are allocated on the stack instead of the heap can implement the `Copy` trait to be implicitly copied instead of moved. With that said, Rust does not allow a type to implement both the `Copy` and the `Drop` trait. Because all types that are allocated on the heap implement the `Drop`, heap memory is never implicitly copied.

The move semantics for function calls are similar to ones for variable assignment (after all, we're assigning a value to the function's parameter), but the function itself creates a new scope that drops the parameter. Returning a value from a function gives back the ownership to the assigned return value, and because of that the value on the heap is not dropped at the end of the function.

```rust
fn main() {
    let integer = 42;
    makes_copy(integer);
    println!("Integer value is: {integer}"); // no error because `integer` is copied

    let string = String::from("hello");
    takes_ownership(string);
    println!("String value is: {string}"); // error[E0382]: borrow of moved value: `string`
}

fn takes_ownership(string: String) {
    println!("{string}")
} // After the end of this scope, `string` is dropped

fn makes_copy(integer: i32) {
    println!("{integer}")
}
```
