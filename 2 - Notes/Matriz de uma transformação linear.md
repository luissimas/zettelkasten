---
date: 2024-05-14
---

Dada uma [[Transformação linear]] $T: U \to V$, sendo $\dim U = n$ e $\dim V = m$. Considerando as [[Base de um espaço vetorial|bases]] $B=\{u_1, u_2, \dots, u_n\}$ e $B'=\{v_1, v_2, \dots, v_m\}$ como bases de $U$ e $V$, respectivamente, é possível escrever os vetores $T(u_i)$ como [[Combinação linear]] dos vetores da base $B'$ da seguinte forma;

$$
\begin{aligned}
  T(u_1) &= a_{11} v_1 + a_{21} v_2 + \dots + a_{m1} v_m\\
  T(u_2) &= a_{12} v_1 + a_{22} v_2 + \dots + a_{m2} v_m\\
  &\vdots\\
  T(u_n) &= a_{1n} v_1 + a_{2n} v_2 + \dots + a_{mn} v_m\\
\end{aligned}
$$

A partir dessas combinações, é possível obter uma matriz de dimensão $m \times n$, chamada **matriz associada** à transformação linear $T$

$$
\begin{gather}

\left[T\right]^B_{B'} =
  \begin{bmatrix}
    a_{11} & a_{12} & \dots & a_{1n}\\
    a_{21} & a_{22} & \dots & a_{2n}\\
    \vdots & \vdots &\ddots & \vdots\\
    a_{m1} & a_{m2} & \dots & a_{mn}\\
  \end{bmatrix}

\end{gather}
$$