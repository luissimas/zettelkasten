# Implementation of storage in Verilog
The different elements that allow us to storage data in digital circuits can be implemented quite easily with the use of `if-else` statements. Here we find the verilog examples for the basic structures of storage.

## Latches
[[Latches]] can be described in a simple way using a `if` statement. Here is a example a [[Latches#Gated D Latch|D_latch]] module

```verilog
module D_latch(D, Clk, Q);
	input D, Clk;
	output reg Q;
	
	always @(D, Clk)
		if(Clk)
			Q = D;
			
endmodule
```

## Flip-flops
For [[Flip-Flops|flip-flops]] we have to use the `posedge` and `negedge` keywords, these keywords describe the desired clock edge that trigger the evaluation of the expression.

```verilog
module flipflop(D, Clock, Q);
	input D, Clock;
	output reg Q;
	
	always @(posedge Clock)
		Q = D;

endmodule
```

## Counters and registers
To describe counters and registers we have to use the [[Non-blocking assignments|non-blocking assignments]], otherwise we'll end up with a circuit that doesn't make sense.

Here we can see a example of a genera *n-bit* register with *asynchronous* clear
```verilog
module nbit_register(D, Clock, Resetn, Q);
  parameter n = 16;
  input [n-1:0] D;
  input Clock, Resetn;
  output reg [n-1:0] Q;

  always @(negedge Resetn, posedge Clock)
    if(!Resetn)
      Q <= 0;
    else
      Q <= D;

endmodule
```

---

created: 15/11/2020
modified: 15/11/2020
