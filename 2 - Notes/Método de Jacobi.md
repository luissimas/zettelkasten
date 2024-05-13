---
date: 2024-05-13
---

O método de Jacobi é um [[Métodos iterativos para resolução de sistemas lineares|método iterativo para resolução de sistemas lineares]]. Esse método consiste em reescrever a equação matricial $AX = B$ em uma forma de [[Método do ponto fixo para resolução de sistemas lineares|ponto fixo]] $X = F(X)$. Para isso pode-se isolar os termos diagonais da matriz no sistema, chegando a um método iterativo cuja equação de recorrência é:

$$X^{(n)} = P + QX^{x-1}$$

onde $P = D^{-1}B$, $Q= I - D^{-1}A$ e $D$ é a matriz diagonal:

$$
\begin{gather}
    D=
    \begin{bmatrix}
    a_{11} & 0 & \cdots & 0 \\
    0 & a_{22} & \cdots & 0 \\
    \vdots & \vdots &\ddots & \vdots \\
    0 & 0 & \cdots & a_{nk}
	\end{bmatrix}
\end{gather}
$$
    
Dessa forma, basta calcular os termos $P$ e $Q$ uma única vez e depois disso aplicar os valores de $X^{(n-1)}$ na equação de recorrência para obter os valores de $X^{(n)}$. Veja que é necessário iniciar com um valor para $X^{(0)}$.

