---
created-at: "2024-08-14"
---

In [[Rust]], a trait defines a set of methods that a type must implement to conform to a defined behavior. Traits are like [[Interfaces]], but with some differences. Combined with [[Generics]], traits are a powerful way of defining behavior in an abstract way.

At its core, traits are just a set of method definitions with optional default implementations. Any type that declares that it implements a given trait is then required to implement all methods with no default implementations defined by it. Unlike [[Go]], Rust requires types to explicitly declare that they implement a given trait.

As an example, we can define a trait `Summary` with a method `summarize` that has a default implementation and a method `summarize_author`, which does not have any default implementation. Note that we can still use `summarize_author` in the definition of `summarize`.

```rust
pub trait Summary {
    fn summarize_author(&self) -> String;

    fn summarize(&self) -> String {
        format!("(Read more from {}...)", self.summarize_author())
    }
}
```

We can then implement the `Summary` trait on other types.

```rust
pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    // Implement only the required `summarize_author` method
    fn summarize_author(&self) -> String {
        format!("@{}", self.username)
    }
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    // Implement the required `summarize_author` method
    fn summarize_author(&self) -> String {
        self.author.clone()
    }

    // Override the default implementation of `summarize`
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.summarize_author(), self.location)
    }
}
```

Finally, we can then specify a function that receives a type that implements the `Summary` trait. This is actually just syntax sugar for [[Trait bounds]].

```rust
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
```
