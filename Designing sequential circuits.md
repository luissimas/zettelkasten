# Designing sequential circuits
In order to design [[Notes/Sequential circuits|sequential circuits]], it's very important to follow a set of steps that ensure the design of the most efficient circuit possible.
1. Functional description and understand the behavior of the circuit.
2. Create a [[State Diagram and Table|diagram and a table]] that represents the desired behavior of the circuit. Here we also have to choose which type of flip-flops and which model (*Mealy* or *Moore*) will be used.
3. Synthesize the *state table* and find the minimal-cost function using [[Notes/Karnaugh maps]] or other [[Notes/Logic synthesis|logic synthesis]] technique.
4. Elaborate a * timing diagram* for the circuit the test if the circuit behaves as it should
5. Draw the logic diagram of the circuit.

---

created: 30/11/2020
modified: 30/11/2020