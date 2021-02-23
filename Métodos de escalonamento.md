# Métodos de escalonamento
Sistemas chamados de escalonados possuem a seguinte forma:
$$
\begin{aligned}
\begin{cases}
    a_{11}x_1 &+ a_{12}x_2 &+ \cdots &+ a_{1n}x_n &= b_1 \\
    0 &+ a_{22}x_2 &+ \cdots &+ a_{2n}x_n &= b_2 \\
    \vdots &+ \vdots &+ \ddots &+ \vdots &= \vdots \\
    0 &+ 0 &+ \cdots &+ a_{mn}x_n &= b_m \\
\end{cases}
\end{aligned}
$$

Os sistemas na forma escalonada (triangular) são de simples resolução, pois basta fazer a resolução  iniciando da última linha. Por exemplo:
$$
  \begin{cases}
  \quad x+y+z=8\\
  \qquad y+4z=13\\
  \qquad\qquad2z=6
  \end{cases}
$$
$$
\begin{align}
  &z = \frac{6}{2} = 3\\
  &y = 13 - 4\cdot\left(3\right) = 1\\
  &x = 8 - 3 - 1 = 4
\end{align}
$$

---

created: 23/02/2021
modified: 23/02/2021