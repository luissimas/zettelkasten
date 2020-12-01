# Finite state machines in Verilog
It's possible to implement [[Finite state machines|finite state machines]] in [[Verilog]] using the both [[Verilog#Behavioral|behavioral]] or [[Verilog#Structural|structural]] specification. Using the first one is (as always) more intuitive, but in this case can require more structures and specification. It's important to mention that when using the second, we have to do all the minimization and extraction of the logic functions in advance.
Here we have a simple way of describing a *FSM* using the *behavioral* specification:
```verilog
module simple (Clock, Rese)
•
Synchronous Sequential Circuits
module simple (Clock, Resetn, w, z);
input Clock, Resetn, w;
output z;
reg [2:1] y, Y;
parameter [2:1] A = 2’b00, B = 2’b01, C = 2’b10;
// Define the next state combinational circuit
always @(w, y)
case (y)
A: if (w)
Y = B;
else
Y = A;
B: if (w)
Y = C;
else
Y = A;
C: if (w)
Y = C;
else
Y = A;
default:
Y = 2’bxx;
endcase
// Define the sequential block
always @(negedge Resetn, posedge Clock)
if (Resetn == 0) y < = A;
else y < = Y;
// Define output
assign z = (y == C);
endmodule
Figure 6.29
```

---

created: 01/12/2020
modified: 01/12/2020