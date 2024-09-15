---
created-at: 2024-09-14
---

Smart pointers are pointers with added capabilities, usually to automatically manage memory and references. There are several types smart pointers in [[Rust]], and they usually implement those extra functionalities by making custom implementations of the `Drop` and `Clone` [[Traits]].

The `Box<T>` type is simply a pointer to some data allocated on the heap. The two main use cases for `Box<T>` are:

1. When we have a [[Trait object]], whose size cannot be determined at compile type
2. When we have a recursive type, such as [[Árvore|trees]] or [[Arrays and linked lists#Linked lists|linked lists]]

The `Rc<T>` type is a reference counted smart pointer that enables _multiple ownership_ of values in the heap. `Rc<T>` pointers can have either strong or weak (`Weak<T>`) references. When all strong references are dropped, the data on the heap is also dropped.

The `RefCell<T>` type is used to implement the interior mutability pattern, in which we use unsafe code to create a mutable reference from a value that is behind an immutable reference.

We can create a memory leak by using `Rc<T>` or `RefCell<T>` in a cycle. If two referenced counted values point to each other but there is no other references to them, the values will never be cleaned up even though there are no external references to them. A way to prevent these cycles is to use `Weak<T>` references when appropriate. For example, we can create a tree data structure in which each node has a reference to its parent without creating a memory leak by using a `Weak<T>` pointer to the parent node

```rust
#[derive(Debug)]
struct Node {
    value: i32,
    parent: RefCell<Weak<Node>>,
    children: RefCell<Vec<Rc<Node>>>,
}
```
