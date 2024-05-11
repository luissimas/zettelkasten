---
created-at: 2020-11-15
tags:
---
While [[Flip-Flops|flip-flops]] store only one bit of information, registers are able to store multiple bits of information. How? Well, registers are basically a set of flip-flops arranged in a way that allows the storage of multiple bits of information.

# Shift Register
This type of register has the ability to shift its contents. This is possible by transferring the state of each flip-flop to the next. This implementation is not very useful because we don't have control of the shifting process.

![](shiftregister.png)

# Parallel-Access Shift Register
This type of register also has the ability to shift its contents, but it does that in a parallel way. Here we have a control signal $\overline{Shift}/Load$ that selects the mode of operation. If $\overline{Shift}/Load=0$, then the circuit operates as a shift register. If  $\overline{Shift}/Load=1$, then the circuit loads the inputs into the register.

![](paralelacessshiftregister.png)