# Arithmetic logic circuits
To add and subtract signed numbers in digital circuits the most common [[Positional number representation|representation]] is the 2's complement, because it's very straightforward and fast for digital circuits to perform. We perform addition by adding the individual bits of the numbers and then verifying if there was a overflow or not. 
Arithmetic overflow occurs only when we have two numbers with the same sign, then it's possible that the result does not fit in the 2's complement range of representation, in this case we say that an arithmetic overflow has ocurred. To determine if a overflow has ocurred we simply look at the last 2 carry-outs, if they have different values, then there was an overflow.
Here are some examples of adition and subtraction (subtraction is just adding a negative number to a positive number):
$$
\begin{split}
&
\begin{array}{cc}
&(+7)\\
+&(+2)\\
\hline
&(+9)
\end{array}
\qquad
\begin{array}{cc}
&0111\\
+&0010\\
\hline
&1001\\
&(Overflow)
\end{array}

\qquad
\qquad
\qquad
\qquad

\begin{array}{cc}
&(-7)\\
+&(+2)\\
\hline
&(-5)
\end{array}
\qquad
\begin{array}{cc}
&1001\\
+&0010\\
\hline
&1011
\end{array}
\qquad

\\\\\\
&
\begin{array}{cc}
&(+5)\\
+&(-2)\\
\hline
&(+3)
\end{array}
\qquad
\begin{array}{cc}
&0101\\
+&1110\\
\hline
1&0011
\end{array}

\qquad
\qquad
\qquad
\qquad

\begin{array}{cc}
&(-7)\\
+&(-2)\\
\hline
&(-9)
\end{array}
\qquad
\begin{array}{cc}
&1001\\
+&1110\\
\hline
1&0111\\
&(Overflow)
\end{array}

\end{split}
$$

## Adder and subtractor circuit
To make a circuit that performs both addition and subtraction we can put a set of XOR gates (with a selector to complement or not the number to be subtracted) before a standart adder circuit, like is shown in the example: 
![AdderSubtractorUnit](../Attachments/LD/adder_sub.png)

---

created: 11/11/2020
modified: 11/11/2020
