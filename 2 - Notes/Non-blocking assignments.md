---
created-at: 2020-11-15
tags:
---
In [[Verilog]] we have two type of assignments:
- Blocking assignments: `=`
- Non-blocking assignments: `<=`

The main difference is that in the blocking assignments the order matters, while in the non-blocking assignments the assignments are done simultaneously.
To show the difference:
```verilog
module example_blocking(D, Clock, Q1, Q2);
	input D, Clock;
	output reg Q1, Q2;
	
	always @(posedge Clock)
	begin
		Q1 = D;
		Q2 = Q1;
	end

endmodule
```
Produces:
![](blocking.png)


```verilog
module example_nonblocking(D, Clock, Q1, Q2);
	input D, Clock;
	output reg Q1, Q2;
	
	always @(posedge Clock)
	begin
		Q1 <= D;
		Q2 <= Q1;
	end

endmodule
```
Produces:
![](nonblocking.png)