---
created-at: 2024-05-14
---

Sabendo que todo [[Espaço vetorial]] tem mais de uma [[Base de um espaço vetorial|base]], a mudança de base consiste em, **dadas as coordenadas** de um vetor $v \in V$ em uma base $B$, **determinar as coordenadas** de $v$ **em uma outra base** $B'$.

Sejam $B=\{u_1, u_2, \dots, u_n\}$ e $B'=\{w_1, w_2, \dots, w_n\}$ duas bases de um mesmo espaço vetorial $V$ de [[Dimensão de um espaço vetorial|dimensão]] $n$. Dado um vetor $v \in V$, é possível escrevê-lo de duas formas:

Na base $B$:

$$v = x_1u_1 + x_2u_2 + \dots + x_nu_n$$

ou na base $B'$:

$$v = y_1w_1 + y_2w_2 + \dots + y_nw_n$$

Note que as **coordenadas** $x_1, x_2, \dots, x_n$, relativas à base $B$, e as coordenadas $y_1, y_2, \dots, y_n$, relativas à base $B'$ são **únicas**.

Escrevendo os vetores $w_i$ como [[Combinação linear]] dos vetores $u_j$, é possível obter a equivalência dos coeficientes através da seguinte equação matricial:

$$
\begin{gather}

  \begin{bmatrix}
  x_1 \\
  \vdots \\
  x_n
  \end{bmatrix}
 =
\begin{bmatrix}
a_{11} & \dots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{n1} & \dots & a_{nn}
\end{bmatrix}
\cdot
\begin{bmatrix}
  y_1 \\
  \vdots \\
  y_n
\end{bmatrix}

\end{gather}
$$

Denotando $[a_{i_j}]_{n \times n} = A$, temos:

$$[v]_B = A \cdot [v]_{B'}$$

A matriz $A$ é chamada de **matriz de mudança da base** $B$ para a base $B'$.