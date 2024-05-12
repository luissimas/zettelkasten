---
created-at: 2020-11-07
---
In logic circuits information is represented as eletronic signals that represent the voltage level in a circuit. This signals are usually denoted as $0$ and $1$. Binary numbers can be converted to decimal using the following formula:
$$
V(B)=b_{n-1}\times2^{n-1}+b_{n-2}\times2^{n-2}...b_1\times2^1+b_0\times2^0
$$
Converting a decimal number to a binary is not that simple, as we have to divide the decimal number by $2$ multiple times like in the example:
$$
\begin{array}{ccc}
&\text{Remainder}&\\
857\div2=428&1&\text{LSB}\\
428\div2=214&0&\\
214\div2=107&0&\\
107\div2=53&1&\\
53\div2=26&1&\\
26\div2=13&0&\\
13\div2=6&1&\\
6\div2=3&0&\\
3\div2=1&1&\\
1\div2=0&1&\text{MSB}\\
\end{array}

(857)_{10}=(1101011001)_2
$$
In [[LD MOC#Chapter 3 sections 3 1 to 3 5|Chapter 3]] we return to this subject when discussing the representation of negative numbers.