# Counters
Counter circuits are very useful for a series of aplications. They can be implemented using the [[Arithmetic logic circuits#Adder and subtractor circuit|adder/subtractor]] circuit or with [[Flip-Flops|flip-flops]]. Since the focus here is to increment or decrement a count by 1, it's much more efficient to use the implementation with flip-flops.

## Asynchronous Counters
The simplest way to implement counters is using T flip-flops. The problem with this implementation is that there is a propagation delay in the circuit.

![](countertflip-flops.png)

We can also implement a down-counter using the same elements, but we have to connect the flip-flops in a different way.

![](downcountertflip-flops.png)

## Synchronous Counters
In order to solve the propagation delay of the asynchronous counters, we can connect all flip-flops to the same clock. Here we control if the flip-flop will change its state based on the state of the previous flip-flops.

![](synccounter.png)

We can implement the ability to enable and clear the counters with the simple adition of the *enable* and the *clear* control signals to the flip-flops.

![](clearenablesynccounter.png)

## Counters with Parallel Load 
This type of counters allow us to start the count with an arbitary external value. Here we implement a synchronous counter with [[Flip-Flops#Master-Slave D Flip-Flop|D flip-flops]] and [[Multiplexers|multiplexers]]. We also have to add the control input *Load*. When $Load=0$ the circuit counts. When $Load=1$ the circuit loads a new value from the inputs to the flip-flops.

![](parallelloadcounter.png)

## Reset Synchronization
This type of implementation allow us to reset the count to $0$ when the count gets to an specific value. Here we use a synchronous counter with parallel load, its parallel load feature is used to reset the counter when the count reaches, in this case, $5$.

![](synresetcounter.png)

## BCD Counter
This type of counter is very interesting because it allows us to code the binary count to decimal representation.

![](bcdcounter.png)

---

created: 15/11/2020
modified: 15/11/2020
