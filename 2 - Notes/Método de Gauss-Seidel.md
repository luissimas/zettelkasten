---
created-at: 2024-05-13
---

O método de Gauss-Seidel é um [[Métodos iterativos para resolução de sistemas lineares|método iterativo para resolução de sistemas lineares]]. Esse ḿetodo é muito semelhante ao [[Método de Jacobi]]. A diferença entre os métodos consiste no fato de que, enquanto no método de Jacobi todos os elementos de $X^{(n)}$ são computados a partir de $X^{(n-1)}$, no método de Gauss-Seidel os elementos de $X^{(n)}$ já computados são usados para aproximar os elementos restantes de $X^{(n)}$.

Decompondo a matriz dos coeficientes do sistema linear $A$ numa soma da forma $A = D + L + U$ tal que:

$$
\begin{gather}
    D=
    \begin{bmatrix}
    a_{11} & 0 & \cdots & 0 \\
    0 & a_{22} & \cdots & 0 \\
    \vdots & \vdots &\ddots & \vdots \\
    0 & 0 & \cdots & a_{nk}
    \end{bmatrix}
    \quad
    L=
    \begin{bmatrix}
    0 & 0 & \cdots & 0 \\
    a_{21} & 0 & \cdots & 0 \\
    \vdots & \vdots &\ddots & \vdots \\
    a_{n1} & a_{n2} & \cdots & 0
    \end{bmatrix}
    \quad
    U=
    \begin{bmatrix}
    0 & a_{12} & \cdots & a_{1n} \\
    0 & 0 & \cdots & a_{2n} \\
    \vdots & \vdots &\ddots & \vdots \\
    0 & 0 & \cdots & 0
    \end{bmatrix}

 \end{gather}
$$
    
Com essa decomposição, o sistema original $AX = B$ pode ser rescrito na forma $(D+L)X = B - UX$, que pode ser convertida na seguinte equação de recorrência:

$$X^{(n)} = P - QX^{(n-1)}$$

onde $P=(D+L)^{-1}B$ e $Q=(D+L)^{-1}U$.

Dessa forma, os termos $P$ e $Q$ também podem ser calculados uma única vez e após isso pode-se aplicar os valores de $X^{(n-1)}$ na equação de recorrência para obter os valores de $X^{(n)}$.