---
created-at: "2024-09-25"
---

[[Rust]] extends memory safety guarantees to [[Concurrency]]. This means that the compiler is able to detect potential concurrency issues at compile time.

As a low level language, Rust is flexible in the sense of offering multiple concurrency models. We can use a [[Message passing in Rust|message passing]] model with channels, similar to [[Go]], and also use [[Shared memory in Rust|shared memory]] with concurrent data structures and traditional locking mechanisms when needed.

In the [[Rust standard library|standard library]], Rust offers direct access to the OS thread API. This means that by default there are no [[Green threads]] or a runtime to manage them. This makes sense when taking into account that a runtime to manage user space threads imposes a higher cost that would be unacceptable for environments with limited resources such as embedded devices. With that said, there are popular runtimes that offer abstractions on top of traditional OS threads such as [[Tokio]].

Besides the lower level OS concurrency primitives and channels, Rust also provides two [[Traits]] to describe the semantics of transferring values between threads: `Send` and `Sync`. Implementing those traits manually require the use of unsafe code, and this is usually needed when implementing new concurrent data structures.

The `Send` [[Traits|trait]] indicates that a type can have its ownership safely transferred across threads. Almost all primitive types implement `Send`, and any custom type that is entirely composed of types that implement `Send` implicitly implement it as well.

The `Sync` [[Traits|trait]] indicates that a type can have its references transferred across threads. Much like `Send`, almost all primitive types implement `Sync`, and it is implicitly implemented for custom types that are composed of types that implement `Sync`.
