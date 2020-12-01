# Verilog
Verilog is a [[Hardware description language|hardware description language]] that provides a very good design portability. In Verilog we can describe a circuit in a number of ways, the main three are: functional, structural and behavioral.
## Structural
In the structural specification we describe the circuit with a basic set of logic gates in a module, like in the example of a multiplexer with 2 inputs:
```verilog
module example1(x1,x2,s,f);
	input x1, x2, s;
	output f;
	
	not(k, s);
	and(g, k, x1);
	and(h, s, x2);
	or(f, g, h);
	
endmodule
```

## Functional
The functional specification offers a higher level of abstraction when compared with the structural specification. Here we can describe the circuit using the logic function expression.
```verilog
module example2(x1,x2,s,f);
	input x1, x2, s;
	output f;
	
	assign f = (⁓s & x1) | (s & x2);
	
endmodule
```

Here the keyword `assign` specifies that whenever a signal in the expression changes, the value of `f` will be re-evaluated.

## Behavioral
The behavioral specification allows us to describe the behavior of a logic circuit in a even more abstract way. We can describe the same 2 input multiplexer like this:
```verilog
module example3(input x1,x2,s,f);
	input x1, x2, s;
	output reg f;
	
	always @(x1, x2, s)	
		if(s==0)
			f=x1;
		else
			f=x2;
		
endmodule
```

Here the procedural statement `if-else` is contained inside the `always` block, which also causes the expression to be evaluated every time one or more values inside the `@()` list change. If a signal is assigned a value inside a procedural statement, then it has to be declared using the keyword `reg`. 
When multiple statements are included in an `always` block, the `begin` and `end` keywords are needed; otherwise, these keywords can be omitted.

---

created: 09/11/2020
modified: 15/11/2020