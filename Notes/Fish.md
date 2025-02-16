---
created-at: "2025-02-16"
---

[Fish](https://fishshell.com/) is a [[Shell]] focused **interactive usage**. Fish provides a rich feature set with good defaults, requiring minimal configuration. It has great autocompletion, command history, tab completion and also supports asynchronous execution of prompts. It's syntax is simple to use, and it has [[Orthogonality]] as one of its core [design goals](https://fishshell.com/docs/current/design.html).

I switched to fish recently after using bash for years. The main thing for me is that fish **just works** out of the box and has all the features I like without the need for any external dependencies. In bash, I was using [starship](https://starship.rs/) as a prompt, and that's one more thing to manage beyond my shell.

It is important to note that fish is **intentionally not POSIX compliant**, which means it can't execute all shell scripts that are written in sh, bash, zsh or any other POSIX compliant shell language. Therefore, it's best to just use it as an interactive shell and not the default shell for everything on the system. The way I achieve this is by setting my terminal emulator and tmux to run fish as their default shell, while keeping bash as my default login shell.

Fun fact: fish was recently ported from C++ to [[Rust]].

# Private mode

Fish has a private mode, which hides old command history and does not persist the current commands to the history file. This is useful for both hiding your history when sharing your screen as well as preventing writing sensitive information to the history file.

To enter private mode, just start fish with the `--private` flag.

```fish
fish --private
```

# References

https://fishshell.com/docs/current/design.html
