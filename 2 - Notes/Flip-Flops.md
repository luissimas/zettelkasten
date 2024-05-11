---
created-at: 2020-11-15
tags:
---
Flip-flops have a behaviour very similar to [[Latches|latches]], but they differ in the sense that in flip-flops, the stored signal can change only once during one clock cycle. Not only that, but the output state can change only on the *edge* of the clock signal. 
If the flip-flop allows state changes only when the clock signal goes from $0$ to $1$, we say that it is a *positive-edge-triggered* flip-flop. If it allows state changes only when the clock signal goes from $1$ to $0$, we say that it is a *negative-edge-triggered* flip-flop.

# Master-Slave D Flip-Flop
This way of implementation uses two [[Latches#Gated D Latch|gated D latches]] that are controled by the same clock. In this type of circuit the master and slave can never be enabled at the same time. This gives the circuit the characteristic of only changing the output state when the clock goes from $1$ to $0$, also called the *negative edge* of the clock.

![](masterslaveDflip-flop.png)


There is another implementation of the same circuit that is more cost-effective and uses NAND gates insted of two latches. In this case we have a implementation of a *positive-edge-triggered* flip-flop. If we needed a *negative-edge-triggered* flip-flop we would have to implement a similar circuit with NOR gates instead.

![](masterslaveDflip-flopanotherimplementation.png)


# Clear and Preset
This type of flip-flops allows two new inputs to change the value of the output without interference of the clock. This kind of implementation can be very usefull in a circuit like a counter, where we need to specify a start time and also clear the count.

![](clearandpresetflip-flops.png)


# T Flip-Flop
The T flip-flop is a simple modification do the D flip-flop. Here we conect the outputs to the inputs of the circuit and controll them using a control input $T$. The circuit maintains the state if $T=0$, and inverts its state if $T=1$.

![](Tflip-flops.png)

# JK Flip-Flop
This type of flip-flop is similar to the previous T flip-flop, but instead of using a single control input, it use two inputs $J$ and $K$. With this circuit we can combine the behavior of SR and T flip-flops. It works exactly like a implementation of a [[Latches#Gated SR Latch|sr latch]] using flip-flops. But when both input signals are equal to $1$, insted of having a unpredictable behavior, the circuit toggles its state like the T flip-flop.

![](JKflip-flops.png)