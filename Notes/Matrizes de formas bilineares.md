---
created-at: 2024-05-14
---

Dado um [[Espaço vetorial]] $V$ com base $\mathcal{B}=\{u_1,\dots,u_n\}$ e uma [[Formas lineares e bilineares|forma bilinear]] $B: V \times V \to \mathbb{R}$, a [[Matriz de uma transformação linear|matriz]] $[B]_{\mathcal{B}}^{\mathcal{B}}$ associada à forma bilinear $B$ é chamada **matriz da forma bilinear** $B$ na base $\mathcal{B}$. A matriz associada à forma bilinear é dada por:

$$
\begin{gather}

[B]_{\mathcal{B}}^{\mathcal{B}} =
  \begin{bmatrix}
    B(u_1, u_1) & B(u_1, u_2) & \dots & B(u_1, u_n)\\
    B(u_2, u_1) & B(u_2, u_2) & \dots & B(u_2, u_n)\\
    \vdots & \vdots &\ddots & \vdots\\
    B(u_n, u_1) & B(u_n, u_2) & \dots & B(u_n, u_n)\\
  \end{bmatrix}

\end{gather}
$$

De forma que, dados dois vetores $u=x_1a_1 + \dots + x_na_n$ e $v=y_1a_1 + \dots + y_na_n$ , tem-se:

$$
\begin{gather}

B(u,v) =
  \begin{bmatrix}
    x_1 & \dots & x_n
  \end{bmatrix}
  \cdot
  \begin{bmatrix}
    B(a_1, a_1) & \dots & B(a_1, a_n)\\
    \vdots &\ddots & \vdots\\
    B(a_n, a_1) & \dots & B(a_n, a_n)\\
  \end{bmatrix}
  \cdot
  \begin{bmatrix}
    y_1 & \dots & y_n
  \end{bmatrix}

\end{gather}
$$