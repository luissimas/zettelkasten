---
created-at: "2024-08-16"
---

Lifetimes are a concept unique to [[Rust]] and its [[Ownership]] and [[Borrowing]] system. In [[Rust]], every [[Borrowing|reference]] has a lifetime, which is the scope for which that reference is valid. Just like types, usually lifetimes can be inferred by the compiler and don't need to be explicitly annotated. Just like types, sometimes the compiler cannot infer the lifetime of a reference, and thus we need to annotated it with _lifetime annotations_.

Lifetime annotations describe the **relationship** between the lifetime of **multiple references**, allowing the compiler to check that we don't end up with invalid or dangling references.

A classical example of lifetime annotations is the `longest` function, which takes two references and returns another reference. In this case, the compiler cannot infer how the returned reference is associated with the input parameters. But they must be related somehow, because we cannot return a reference to a value owned by the function, because it would be dropped at the end of the function scope, and we'd be left with a dangling reference. As such, we must specify a generic lifetime parameter `'a` that specifies that the returned reference will be valid as long as the references `x` and `y` are valid. With this, the compiler can enforce the relationship between those lifetimes and will not let us use the returned reference after the values referenced by either `x` or `y` go out of scope.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        return x;
    }
    return y;
}
```

We also need to use lifetime annotations on structs when some field is a reference instead of an owned value. In this case, we also need to use the lifetime annotations on `impl` blocks for the struct.

```rust
struct ImportantExcerpt<'a> {
    part: &'a str,
}

impl<'a> ImportantExcerpt<'a> {
    fn level(&self) -> i32 {
        3
    }
}
```

It's worth mentioning that Rust also has _lifetime elision rules_, that allow the compiler to infer lifetimes in certain situations without the need for lifetime annotations.
