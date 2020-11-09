# Logic functions
Logic functions are capable of combine input signals to produce an output signal, we can combine several logic functions in a logic circuit. In this note are described the behavior of the basic functions and de XOR function.

## AND
The AND function represents a combination of switches connected in *series*. This behavior can be described by the expression $L(x_1,x_2)=x_1\cdot x_2$
$$
\begin{array}{|c|c|c|}
\hline
x_1&x_2&x_1\cdot x_2\\
\hline
0&0&0\\
\hline
0&1&0\\
\hline
1&0&0\\
\hline
1&1&1\\
\hline
\end{array}
$$

## OR
The OR function represents a combination of switches connected in *parallel*. This behavior can be described by the expression $L(x_1,x_2)=x_1+x_2$
$$
\begin{array}{|c|c|c|}
\hline
x_1&x_2&x_1+x_2\\
\hline
0&0&0\\
\hline
0&1&1\\
\hline
1&0&1\\
\hline
1&1&1\\
\hline
\end{array}
$$

## NOT
The NOT function simply inverts the input signal. This behavior can be described by the expression $L(x)=\overline{x}$
$$
\begin{array}{|c|c|}
\hline
x_1&\overline{x}\\
\hline
0&1\\
\hline
1&0\\
\hline
\end{array}
$$

## XOR
The XOR function is the result of combining the three basic functions. This behavior can be described by the expression $L(x_1,x_2)=x_1\oplus x_2$
$$
\begin{array}{|c|c|c|}
\hline
x_1&x_2&x_1\oplus x_2\\
\hline
0&0&0\\
\hline
0&1&1\\
\hline
1&0&1\\
\hline
1&1&0\\
\hline
\end{array}
$$


---

links: 
created: 07/11/2020
modified: 07/11/2020