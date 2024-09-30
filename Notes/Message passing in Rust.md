---
created-at: 2024-09-30
---

In [[Rust]], we can use a [[Passagem de mensagem|message passing]] [[Concurrency]] model by using channels, using a style similar to [[Go]].

Channels can have a fixed sized pre-allocated buffer or be unbound. `send` operations on a full channel block until there's space to put the message. `recv` operations always block until a message is received, although we can use `try_recv` to check for the existence of a message without blocking.

A channel is closed when all **senders are dropped**. This is a very interesting semantics, as it removes the need for explicitly closing a channel and doing the cleanup manually. If a channel is closed, all `recv` operations on the receiver return an error.

We can also use channel receivers as [[Iterators]], which improves the ergonomics of the common case of a thread that just receives and processes messages. In this case, the iterator stops when the channel is closed.

```rust
use std::{sync::mpsc, thread, time::Duration};

fn create_consumer(name: String, tx: mpsc::Sender<String>) -> thread::JoinHandle<()> {
    thread::spawn(move || {
        for i in 1..=10 {
            let val = format!("Message {i} from {name}");
            tx.send(val).unwrap();
            thread::sleep(Duration::from_millis(300));
        }
    })
}

fn main() {
    let (tx, rx) = mpsc::channel();

    let consumer1 = create_consumer(String::from("first"), tx.clone());
    let consumer2 = create_consumer(String::from("second"), tx);

    for msg in rx {
        println!("Received: {msg}");
    }

    println!("Finished receiving.");

    consumer1.join().unwrap();
    consumer2.join().unwrap();
}
```
