---
created-at: "2024-08-10"
---

The alternate screen is a separate text buffer that many terminal emulators implement. It functions like the main terminal screen, but applications can write to it freely without worrying about clearing the user's prompt. 

Alternate screen buffers are essential for implementing TUIs such as games, text editors or any other application that wants to print to the full terminal screen without disrupting the user's main terminal window and prompt.

Here's an example of printing an updating counter to the alternate screen in [[Rust]] using [crossterm](https://crates.io/crates/crossterm):

```rust
use crossterm::{
    cursor::{Hide, MoveTo, Show},
    execute,
    style::Print,
    terminal::{EnterAlternateScreen, LeaveAlternateScreen},
};
use std::{
    io::{self, stdout},
    sync::{
        atomic::{AtomicBool, Ordering},
        Arc,
    },
    thread::sleep,
    time::Duration,
};

fn main() -> io::Result<()> {
    // Flag to handle SIGINT (Ctrl+C)
    let stop_signal = Arc::new(AtomicBool::new(false));
    signal_hook::flag::register(signal_hook::consts::SIGINT, Arc::clone(&stop_signal))?;

    // Enter alternate screen terminal buffer
    execute!(stdout(), EnterAlternateScreen, Hide)?;

    // Initialize a sample counter
    let mut count = 0;

    // While no stop signal was received, keep iterating
    while !stop_signal.load(Ordering::Relaxed) {
        execute!(
            stdout(),
            MoveTo(0, 0),
            Print(format!("Counter value: {count}"))
        )?;
        count += 1;
        sleep(Duration::from_secs(1));
    }

    // Reset terminal screen
    execute!(io::stdout(), LeaveAlternateScreen, Show)
}
```

I've used this concept extensively when implementing [[Conway's game of life]].

# References

https://ratatui.rs/concepts/backends/alternate-screen/
