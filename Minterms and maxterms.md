# Minterms and Maxterms 
We can obtain the canonical expression for a given function applying minterms or maxterms.

$$
\begin{array}{|ccc|c|c|c|}
\hline
x_1&x_2&x_3&f(x_1,x_2,x_3)&\text{Minterm}& \text{Maxterm} \\ \hline
0&0&0&0&m_0=\bar{x}_1\bar{x}_2\bar{x}_3&M_0=x_1+x_2+x_3\\
\hline
0&0&1&1&m_1=\bar{x}_1\bar{x}_2x_3&M_1=x_1+x_2+\bar{x}_3\\
\hline
0&1&0&0&m_2=\bar{x}_1x_2\bar{x}_3&M_2=x_1+\bar{x}_2+x_3\\
\hline
0&1&1&0&m_3=\bar{x}_1x_2x_3&M_3=x_1+\bar{x}_2+\bar{x}_3\\
\hline
1&0&0&1&m_4=x_1\bar{x}_2\bar{x}_3&M_4=\bar{x}_1+x_2+x_3\\
\hline
1&0&1&1&m_5=x_1\bar{x}_2x_3&M_5=\bar{x}_1+x_2+\bar{x}_3\\
\hline
1&1&0&1&m_6=x_1x_2\bar{x}_3&M_6=\bar{x}_1+\bar{x}_2+x_3\\
\hline
1&1&1&0&m_7=x_1x_2x_3&M_7=\bar{x}_1+\bar{x}_1+\bar{x}_3\\
\hline
\end{array}
$$

Given the function $f(x_1, x_2, x_3)$ above, we can obtain its canonical expression in two ways:

$$
\begin{array}{c}
f(x_1,x_2,x_3)=\sum(m_1,m_4,m_5,m_6)\\
f(x_1,x_2,x_3)=\Pi(m_0,m_2,m_3,m_7)
\end{array}
$$

Example:
$$\begin{array}{|c|c|c|}
\hline
x_1 & x_2 & f(x_1,x_2) \\ \hline
0&0&1\\
\hline
0&1&1\\
\hline
1&0&0\\
\hline
1&1&1\\
\hline
\end{array}\\
$$
$$
\begin{array}{c}
f(x_1,x_2)=\bar{x}_1\bar{x}_2+\bar{x}_1x_2+x_1x_2\\
f(x_1,x_2)=\bar{x}_1(\bar{x}_2x_2)+x_1x_2\\
f(x_1,x_2)=\bar{x}_1+x_1x_2\\
f(x_1,x_2)=\bar{x}_1+x_2\\
\end{array}
$$

---

links: 
created: 09/11/2020
modified: 09/11/2020