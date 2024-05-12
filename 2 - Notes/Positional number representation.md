---
created-at: 2020-11-11
---
We can represent negative numbers using the binary system in a number of ways. In this note I'll focus on 2's complement, where the most-significant bit (MSB) denotes the sign of the number, because it's the most pratical way to represent when dealing with digital circuits.
To find the 2's complement of a binary number we take the following action while examining the bits from right to left:
1. Copy all bits that are 0 and the first that is 1;
2. Complement (invert) the rest of the bits.

For example, 10110100 in 2's complement is written as 01001100. In the following table we have the representation of all four-bit numbers in different representations.
$$
\begin{array}{|c|c|c|c|}
\hline
&\textbf{Sign and magnitude}&\textbf{1's complement}&\textbf{2's complement}\\
\hline
0111&+7&+7&+7\\
\hline
0110&+6&+6&+6\\
\hline
0101&+5&+5&+5\\
\hline
0100&+4&+4&+4\\
\hline
0011&+3&+3&+3\\
\hline
0010&+2&+2&+2\\
\hline
0001&+1&+1&+1\\
\hline
0000&+0&+0&+0\\
\hline
1000&−0&−7&−8\\
\hline
1001&−1&−6&−7\\
\hline
1010&−2&−5&−6\\
\hline
1011&−3&−4&−5\\
\hline
1100&−4&−3&−4\\
\hline
1101&−5&−2&−3\\
\hline
1110&−6&−1&−2\\
\hline
1111&-7&-0&-1\\
\hline
\end{array}
$$