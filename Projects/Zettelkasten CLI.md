---
created-at: "2024-12-30"
---

I've been learning [[Rust]] for the past few weeks and I feel like I'm almost at a point where I can build something useful with it without banging my head too much. I've been wanting to aggregate the several scripts that I have to manage my [[Zettelkasten]] into a more structured CLI.

The idea is to encapsulate several aspects of my note-taking process. The initial set of features:

- [X] Create new notes and open them in editor
- [X] Read configuration file
- [X] Prompt to create configuration file
- [ ] Read config from Obsidian vault
- [ ] Apply templates defined in vault
- [ ] Handle non-interactive terminals
- [ ] List and search notes
- [ ] Show broken links
- [ ] Show potential missing links

There's a great tool to visualize a Zettelkasten in the CLI called [rucola](https://github.com/Linus-Mussmaecher/rucola). It does part of what I want to accomplish, but it seems to be more focused on the TUI interface and in visualizing the notes. I want my tool to be CLI first and more focused on quick input.

This might be a good library for templating: https://docs.rs/minijinja/latest/minijinja/
