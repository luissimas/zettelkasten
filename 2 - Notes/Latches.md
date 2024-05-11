# Latches
Latches are the base structures that allows circuits to store information, there are several implementations of latches. The main idea is that a latch recieves two inputs: *Set* and *Reset*. The circuit is implemented in a way that when both inputs are $0$, last stated is maintained with no change.
## Basic Latch
This is the core structure of every latch, here we have the basic behaviour. It's important to note that when both inputs are equal to $1$ we can't predic the behaviour of the circuit. This implementation is not very usefull by itself, since we can't predict when the state of the circuit will change.

![](basiclatch.png)

## Gated SR Latch
With this type of latch we can enable or disable the circuit with a control signal, denoted as *Clk*. When $Clk = 0$ the inputs are always $0$, thus the state of the circuit is maintained. When $Clk = 1$ the circuit behaves in the same way as the basic latch.
![](gatedsrlatch.png)


## Gated D Latch
This latch simplifies the previous latches, instead of two inputs (S and R) we now have only one input D (Data). One very usefull application of this type of latch is in adder/subtractor units, where we have to store the bits of the result.
![](gatedDlatch.png)


## Propagation Delay
One key factor to consider is that in real aplications, there is a propagation delay to the signals inside a circuit. Therefore, in a latch we can sometimes have situations were the input signals change at the same time as the *Clk* signal. This could cause unpredictable results and lost of the input signal. In the image we can see represented in the diagram the "time" frame in wich the input signal has to be *stable* in order to make sure that de propagation delay will not mess up the signal.
![](propagationdelay.png)

This created the need for a type of circuit that can sync the *Clk* changes in a way that allows the input signals to always be stable for the change. These circuits are called [[Flip-Flops]].

---

created: 14/11/2020
modified: 14/11/2020
