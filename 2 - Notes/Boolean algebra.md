# Boolean algebra
Boolean algebra was created by *George Boole* and is a very powerful tool to describe and design logic circuits. In Boolean algebra the elements can only assume the binary values: $0$ or $1$. 
Boolean algebra is based on the following set of axioms:

$$
\begin{align}
&1a.\qquad0\cdot0=0  \qquad\qquad&&1b.\qquad1+1=1\\
&2a.\qquad1\cdot1=1  &&2b.\qquad0+0=0\\
&3a.\qquad0\cdot1=1\cdot0=0 &&3b. \qquad1+0=0+1=1\\
&4a.\qquad\text{If } x=0\text{, then }\overline{x}=1\qquad &&4b.\qquad \text{If } x=1\text{, then }\overline{x}=0\\
&5a.\qquad x\cdot0=0&&5b. \qquad x+1=1\\
&6a.\qquad x\cdot1=x&&6b. \qquad x+0=x\\
&7a.\qquad x\cdot x=x&&7b. \qquad x+x=x\\
&8a.\qquad x\cdot\overline{x}=0&&8b. \qquad x+\overline{x}=1\\
&9a.\qquad \overline{\overline{x}}=x\\
\end{align}
$$

We also have some properties to deal with multiple variables:
$$
\begin{align}
&10a.\qquad x\cdot y=y\cdot x &&10b.\qquad x+y=y+x \qquad&&& \text{Commutative}\\
&11a.\qquad x\cdot(y\cdot z)=(x\cdot y)\cdot z&&11b.\qquad x+(y+z)=(x+y)+z \qquad &&&\text{Associative} \\
&12a.\qquad x\cdot(y+z)=x\cdot y + x\cdot z&&12b.\qquad x+y\cdot z=(x+y)\cdot(x+z)\qquad &&&\text{Distributive} \\
&13a.\qquad x+x\cdot y=x &&13b.\qquad x\cdot(x+y)=x\qquad &&&\text{Absorption} \\
&14a.\qquad x\cdot y+x\cdot\overline{y}=x &&14b.\qquad (x+y)\cdot(x+\overline{y})=x \qquad &&&\text{Combining}\\
&15a.\qquad \overline{x\cdot y}=\overline{x}+\overline{y} &&15b.\qquad\overline{x+y}=\overline{x}\cdot\overline{y}\qquad &&&\text{DeMorgan}\\
&16a.\qquad x+\overline{x}\cdot y=x+y &&16b.\qquad x\cdot(\overline{x}+y)=x\cdot y \\
&17a.\qquad x\cdot y+y\cdot z+\overline{x}\cdot z=x\cdot y+\overline{x}\cdot z &&17b.\qquad (x+y)\cdot(y+z)\cdot(\overline{x}+z)=(x+y)\cdot(\overline{x}+z) \qquad &&&\text{Consensus}\\
\end{align}
$$



---

created: 07/11/2020
modified: 09/11/2020
