---
created-at: "2024-12-15"
---

In [[Go]] interfaces are implemented implicitly. An implication of this is that a struct that implements a given interface does not reference it. Because of this, the traditional goto reference [[LSP]] command is not enough to find the implementations of an interface.

Luckily, LSP also has a specific command for going to the implementations of the interface, and gopls supports it.

```lua
map('gi', require('telescope.builtin').lsp_implementations, '[G]oto [I]mplementation')
```
