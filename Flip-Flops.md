# Flip-Flops
Flip-flops have a behaviour very similar to [[Latches|latches]], but they differ in the sense that in flip-flops, the stored signal can change only once during one clock cycle. The output state can change only on the *edge* of the clock signal.

## Master-Slave D Flip-Flop
This way of implementation uses two [[Latches#Gated D Latch|gated D latches]] that are controled by the same clock. In this type of circuit the master and slave can never be enabled at the same time. This gives the circuit the characteristic of only changing the output state when the clock goes from $1$ to $0$, also called the *negative edge* of the clock.

![[masterslaveDflip-flop.png]]

There is another implementation of the same circuit that is cost-effective and uses NAND gates insted of two latches. In this case we have a implementation of a *positive-edge-triggered* flip-flop. If we needed a *negative-edge-triggered* flip-flop we would have to implement a similar circuit with NOR gates instead.

![[masterslaveDflip-flopanotherimplementation.png]]

## Clear and Preset
## T Flip-Flop
## JK Flip-Flop

---

created: 15/11/2020
modified: 15/11/2020