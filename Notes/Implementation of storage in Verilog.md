---
created-at: 2020-11-15
---
The different elements that allow us to storage data in digital circuits can be implemented quite easily with the use of `if-else` statements. Here we find the [[Verilog|verilog ]] examples for the basic structures of storage.

# Latches
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

# Flip-flops
For [[Flip-Flops|flip-flops]] we have to use the `posedge` and `negedge` keywords, these keywords describe the desired clock edge that trigger the evaluation of the expression.

```verilog
module flipflop(D, Clock, Q);
	input D, Clock;
	output reg Q;
	
	always @(posedge Clock)
		Q = D;

endmodule
```
# Registers and Counters
To describe [[Counters|counters ]] and [[Registers|registers ]] we have to use the [[Non-blocking assignments|non-blocking assignments]], otherwise we'll end up with a circuit that doesn't make sense.

## Registers
Here we can see a example of a general *n-bit* register with *asynchronous* clear:
```verilog
module nbit_register(D, Clock, Resetn, Q);
  parameter n = 16; //The desired value
  input [n-1:0] D;
  input Clock, Resetn;
  output reg [n-1:0] Q;

  always @(negedge Resetn, posedge Clock)
    //Check if we should reset or just load the value
    if(!Resetn)
      Q <= 0;
    else
      Q <= D;

endmodule
```

A general description for a *n-bit* parallel-access shift register can be done like the following example:
```verilog
module nbit_shifter_load(R, L, w, Clock, Q);
  parameter n = 16; //The desired value
  input [n-1:0] R;
  input L, w, Clock;
  output reg [n-1:0] Q;
  integer k;

  always @(posedge Clock)
    //Checks if we should shift or load from the input
    if(L)
      Q<=R;
    else
      //Create n flip-flops for the register
      begin
        for(k=0;k<n-1;k=k+1)
          Q[k]<=Q[k+1];
        Q[n-1]<=w;
      end

endmodule
```

## Counters
We can describe a generic *up/down* counter with load capability like this:
```verilog
module updown_n_count(R, Clock, L, E, up_down, Q);
  parameter n = 8; //The desired value
  input [n-1:0] R;
  input Clock, L, E, up_down;
  output reg [n-1:0] Q;

  always @(posedge Clock)
    //Checks if we should count or load from the input
    if(L)
      Q<=R;
    else if(E)
      Q<=Q+(up_down ? 1:-1);

endmodule
```