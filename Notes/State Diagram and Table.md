# State Diagram and Table
These are the first steps do to when designing a [[Finite state machines|finite state machine]]. They allow us to determine how many states are needed and which transitions are possible from one state to another.
First we define a *starting state*, this is the state that the circuit should enter when power is turned on or when a *reset* signal is applied. After that we define the other states of the circuit. The following diagram is from a example in the book, and it shows all the possible states of the circuit and the *triggers* that changes them to another state.
![[Attachments/LD/statediagram.png]]
The state table is a more formal and readable way of describing the changes in the state of the circuit:
![[Attachments/LD/statetable.png]]

---

created: 30/11/2020
modified: 30/11/2020