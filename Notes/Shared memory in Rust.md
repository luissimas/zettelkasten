---
created-at: 2024-09-30
---

In [[Rust]], we can use a [[Memória compartilhada|shared memory]] [[Concurrency]] model by means of concurrent data structures and traditional locking mechanisms such as mutexes.

`Mutex<T>` is a [[Smart pointers|smart pointer]] that provides mutual exclusion access to its inner value. To access a mutable reference to the inner value, we have to acquire the lock and then operate on a `MutexGuard` value, which can be dereferenced to the actual inner value. The lock from `Mutex<T>` is automatically released when the `MutexGuard` value is dropped.

To share a `Mutex<T>` across threads, we have to use an atomically referenced counted `Arc<T>` smart pointer. With this, we can safely count the references for the `Mutex<T>` across threads and ensure its proper cleanup.

```rust
use std::{
    sync::{Arc, Mutex},
    thread,
};

fn main() {
    let counter = Arc::new(Mutex::new(0));

    let handles = (1..=10).map(|_| {
        let counter = Arc::clone(&counter);
        thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        })
    });

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", *counter.lock().unwrap());
}
```
