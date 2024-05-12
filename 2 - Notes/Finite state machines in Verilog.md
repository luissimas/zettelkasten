---
created-at: 2020-12-01
---
It's possible to implement [[Finite state machines|finite state machines]] in [[Verilog]] using the both [[Verilog#Behavioral|behavioral]] or [[Verilog#Structural|structural]] specification. Using the first one is (as always) more intuitive, but in this case can require more structures and specification. It's important to mention that when using the second, we have to do all the minimization and extraction of the logic functions in advance.
Here we have a simple way of describing a *FSM* using the *behavioral* specification:
```verilog
module simpleFSM (Clock, Resetn, w, z);
	input Clock, Resetn, w;
	output z;
	reg [2:1] y, Y;
	// Associating each state letter with a combination of Y
	parameter [2:1] A = 2’b00, B = 2’b01, C = 2’b10;
	// Define the next state combinational circuit
	always @(w, y)
		case (y)
			A:  if (w) Y = B;
				else Y = A;
			B:  if (w) Y = C;
				else Y = A;
			C:  if (w) Y = C;
				else Y = A;
			// Undefined case
			default: Y = 2’bxx;
		endcase
	// Define the sequential block 
	always @(negedge Resetn, posedge Clock)
		// If the reset signal is given, we go back to the first state
		if (Resetn == 0) y <= A;
		// Otherwise, we save the state to be used next time
		else y <= Y;
	// Define output in a continuous assignment
	assign z = (y == C);
endmodule
```
This is a pretty comprehensive way of describing the desired behavior, note that in the assignment `z = (y == C)` what is happening is: `z` is receiving the result of a logic expression, this means that if the circuit is in state `C`, then `z = 1`.
In this other example we have the same circuit, but implemented using a *structural* specification:
```verilog
// Main module
module simpleFMS (
	input clk, rst, w,
	output z);
	wire Y1, Y2;
	
	// Flip-flop modules
	dff y1 (clk, rst, w, Y1);
	dff y2 (clk, rst, Y1, Y2);
	assign z = Y1 & Y2;
endmodule

// Flip-flop module
module dff(
	input clk, rst, d,
	output reg q, nq);
	
	always @(posedge clk or posedge rst)
		if (rst)
			q = 0;
		else
			q = d;
	assign nq = !q;
endmodule
```