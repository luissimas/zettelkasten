---
created-at: "2024-08-26"
---

Closures are anonymous functions that can **capture values** from the scope in which they are defined. They are an implication of [[Functions as values]], and are usually present in [[Functional languages]].

In [[Rust]], closures can capture values from the scope in which they are defined in the same three ways that functions can take arguments (borrowing immutably, borrowing mutably and taking ownership), and these affect which `Fn` [[Traits]] they implement. The way that the closure capture the values that it uses can be inferred by the way that they are used in the body of the closure.

Closures are especially useful when combined with [[Higher order functions]] such as those provided by the [[Iterators|iterator]] trait.

```rust
pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    contents
        .lines()
        .filter(|line| line.contains(query))
        .collect()
}
```

There are three traits that closures can implement:

- `FnOnce`: closures that can be called **only once**. All closures implement at least this trait, and closures that move captured values out of their body only implement this trait.
- `FnMut`: closures that can be called **multiple times**, but might **mutate the environment** by mutating captured values. Any closure that implements this trait also implements `FnOnce`.
- `Fn`: closures that don't move or mutate values from the environment. Any closure that implements this trait also implements `FnMut` and `FnOnce`.

Note that the different traits for closures are direct implications of the [[Borrowing]] and [[Ownership]] rules.

```rust
use std::thread;

fn main() {
    let mut list = vec![1, 2, 3];

    let only_borrows = || println!("From closure: {list:?}");
    only_borrows();

    let mut borrows_mutably = || list.push(7);
    borrows_mutably();

    let moves = move || println!("From thread: {list:?}");
    thread::spawn(moves).join().unwrap();
}
```

# References

https://doc.rust-lang.org/book/ch13-01-closures.html
https://www.youtube.com/watch?v=dHkzSZnYXmk
