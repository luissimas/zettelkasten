---
created-at: 2020-11-12
---
Is possible to implement [[Arithmetic logic circuits|arithmetic circuits]] in [[Verilog]] in a number of ways. One way is by creating a fulladder module that adds individual bits and outputs the result and the carrys and then defining a higher-level module that uses *n* instances of the full-adder. This is shown in the examples:

# Hierarchical implementation
```verilog
module adder4(carryin, X, Y, S, carryout)
	input carryin;
	input [3:0] X;
	input [3:0] Y;
	output [3:0] S;
	output carryout;
	wire [3:1] C;
	
	fulladd stage0 (carryin, X[0], Y[0], S[0], C[1]);
	fulladd stage1 (C[1], X[1], Y[1], S[1], C[2]);
	fulladd stage2 (C[2], X[2], Y[2], S[2], C[3]);
	fulladd stage3 (C[3], X[3], Y[3], S[3], carryout);
	
endmodule

module fulladd(Cin, x, y, s, Cout);
	input Cin, x, y;
	output s, Cout;
	
	assign s = x ^ y ^ Cin;
	assign Cout = (x & y) | (x & Cin) | (y & Cin);
	
endmodule
```

# General implementation
Using a more functional description and a *parameter n* we can describe a general implementation that can add *n* bits (in this case 32).
```verilog
module addern (carryin, X, Y, S, carryout);
	parameter n = 32;
	input carryin;
	input [n–1:0] X, Y;
	output reg [n–1:0] S;
	output reg carryout;
	reg [n:0] C;
	integer k;
	
	always @(X, Y, carryin)
	begin
		C[0] = carryin;
		for (k = 0; k < n; k = k+1)
		begin
			S[k] = X[k] ^ Y[k] ^ C[k];
			C[k+1] = (X[k] & Y[k]) (X[k] & C[k]) (Y[k] & C[k]);
		end
		carryout = C[n];
	end
endmodule
Figure 3.24
```