---
created-at: "2024-08-26"
---

Iterators are a pattern for **sequentially accessing values from a collection**. The idea is to abstract away the logic of how values are produced, creating a more generic pattern that can be used on a wider range of collections. 

In [[Rust]], iterators are implemented using the `Iterator` [[Traits|trait]], which provides more than 70 default methods but only requires the implementation of 1: the `next` method. The `next` method contains the logic on how the values are generated and when the iteration should stop.

```rust
pub trait Iterator {
    type Item;

    fn next(&mut self) -> Option<Self::Item>;

    // methods with default implementations elided
}
```

Iterators in Rust are _lazy_, which means that the operations are only executed when you call methods that actually consume the iterator in some way, such as `collect` or `take`. This means that we can also chain iterators like `map` and `filter` without actually evaluating any of them until it is needed.

```rust
fn process_text(text: &str, word: &str) -> Vec<Vec<String>> {
    text.lines()
        .filter(|line| line.contains(word))
        .map(|line| line.to_uppercase())
        .map(|line| {
            line.split(" ")
                .map(|word| word.to_string())
                .collect::<Vec<String>>()
        })
        .collect()
}
```

The `collect` method consumes the iterator, generating a new collection. This method is generic over the return type, and therefore can generate collections of many types such as `Vec` and `String`.

The `iter` method produces an iterator over immutable references, while `iter_mut` produces an iterator over immutable references and the `into_iter` method takes ownership of the collection and produces an iterator over the owned values.

# References

https://doc.rust-lang.org/book/ch13-02-iterators.html
https://www.youtube.com/watch?v=yozQ9C69pNs
