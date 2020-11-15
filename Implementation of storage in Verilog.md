# Implementation of storage in Verilog
The different elements that allow us to storage data in digital circuits can be implemented quite easily with the use of `if-else` statements. Here we find the verilog examples for the basic structures of storage.
In the [[Latches#Gated D Latch|latch]] module we have a very basic way of describing its behavior.

```verilog
module D_latch(D, Clk, Q);
	input D, Clk;
	output reg Q;
	
	always @(D, Clk)
		if(Clk)
			Q = D;
			
endmodule
```

For flip-flops we have to use the `posedge` and `negedge` keywords, these keywords describe the desired clock edge that trigger the circuit.

```verilog
module flipflop (D, Clock, Q)
	input D, Clock;
	output reg Q;
	
	always @(posedge Clock)
		Q = D;

endmodule
```

---

created: 15/11/2020
modified: 15/11/2020