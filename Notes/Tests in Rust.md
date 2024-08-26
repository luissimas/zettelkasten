---
created-at: "2024-08-18"
---

Like [[Go]] and [[Elixir]], [[Rust]] has first-class support for [[Software testing|automated tests]]. Like [[Elixir]], [[Rust]] also has support for [[Doctests]], which is great.

Usually, tests are defined in the same file as the code under test. We create a new `test` module and specify the `cfg` attribute to conditionally compile the test module only in test mode. Tests are defined using the `test` attribute, and in them we can use several assertion macros provided by the standard library to assert behavior.

```rust
pub fn add(x: i32, y: i32) -> i32 {
    x + y
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn adds_numbers() {
        let result = add(69, 42);
        assert_eq!(result, 111);
    }
}
```
