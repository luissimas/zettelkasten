---
created-at: "2024-08-04"
---

In [[Rust]], the concept of [[Ownership]] dictates that there cannot be more than one owner of a value at a time. We often want to give access to a value without giving the ownership of it, and to do that we use the concept of _borrowing_.

Borrowing is creating a _reference_ to a value. A _reference_ is like a [[Pointer]] in the sense that it's a memory address, but Rust guarantees that a reference always points to a valid memory location.

In the following example, the function `calculate_length` holds a reference to `s1`, and therefore can access its value without taking ownership of it. Because `calculate_length` does not own `s1`, when the function's scope ends the value is not dropped, only the reference stored in the parameter `s`. This means that we can keep using `s1` after the call to `calculate_length`, which would not be possible if `calculate_length` took ownership of `s1`.

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{s1}' is {len}.");
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

In this case, the memory layout would look something like the following:

![[trpl04-05.svg]]

Like variables, references are also [[Immutability by default|immutable by default]]. We can create mutable references using the `mut` keyword, allowing the value to be modified. This ensures that we explicitly define when a value will be mutated.

```rust
fn main() {
    let mut s = String::from("hello");

    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

An important thing to consider is that **when a value has a mutable reference, it can't have any other references**. This property eliminates a class of data race issues that occur when multiple parts of a program can read and write to the same reference. If a value doesn't have any mutable references, it can have any number of immutable references.

With [[Lifetimes]], Rust guarantees that there are no dangling references. If a value has a reference, the compiler ensures that the value will not go out of scope before the reference does.

# References

https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html
