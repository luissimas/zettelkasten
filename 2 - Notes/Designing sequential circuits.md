---
created-at: 2020-11-30
tags:
---
In order to design [[Sequential circuits|sequential circuits]], it's very important to follow a set of steps that ensure the design of the most efficient circuit possible.
1. Functional description and understand the behavior of the circuit.
2. Create a [[State diagram and table|diagram and a table]] that represents the desired behavior of the circuit. Here we also have to choose which type of flip-flops and which model (*Mealy* or *Moore*) will be used.
3. Synthesize the *state table* and find the minimal-cost function using [[Karnaugh maps]] or other [[Logic synthesis|logic synthesis]] technique.
4. Draw the logic diagram of the circuit.
5. Elaborate a * timing diagram* for the circuit to test if the circuit behaves as it should