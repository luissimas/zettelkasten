---
created-at: "2024-08-01"
---

Conway's game of life is probably the most popular cellular automaton. I've known it for a long time, but until now I never really tried to implement it.

The idea is to construct a grid with each position representing a cell that can be alive or dead. We then apply a set of rules to each cell in the grid to obtain the next generation of cells in a new grid. The set of rules is applied as a [[Pure function]] to the grid.

The game has the following set of rules to dictate whether a cell lives or dies:

1. Any live cell with two or three live neighbors lives on to the next generation
2. Any dead cell with exactly three live neighbors becomes a live cell in the next generation
3. Any other cell becomes a dead cell in the next generation

My first implementation of Conway's game of life was in [[Rust]], displaying the cells in the terminal as [[Unicode]] characters using the [crossterm](https://crates.io/crates/crossterm) library to manipulate the terminal.
