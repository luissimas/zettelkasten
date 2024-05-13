---
date: 2024-05-13
---

O [[Método do Ponto Fixo]] se baseia na ideia de que há pontos (chamados de pontos fixos) de funções que, quando aplicados à função resultam neles mesmos. Esse método pode ser usado na resolução de sistemas lineares. Consideramos um sistema de equações lineares de solução única, com $n$ equações e variáveis:

$$
\begin{cases}
    a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\
    a_{21}x_1 + a_{22}x_2 +\cdots + a_{2n}x_n = b_2 \\
    \quad \vdots \quad + \quad \vdots \quad + \ddots + \quad \vdots \quad = \quad \vdots \\
    a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n = b_n \\
\end{cases}
$$

Na forma matricial:

$$
\begin{gather}

AX = B \text{, onde}
A =
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1k} \\
a_{21} & a_{22} & \cdots & a_{2k} \\
\vdots & \vdots &\ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nk}
\end{bmatrix}
\quad
X =
\begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_n\\
\end{bmatrix}
B =
\begin{bmatrix}
b_1\\
b_2\\
\vdots\\
b_n\\
\end{bmatrix}

\end{gather}
$$

A convergência dos [[Métodos iterativos para resolução de sistemas lineares|métodos iterativos]] depende do sistema linear considerado. Existem algumas **condições de convergência** que podem ser expressas em termos de normas vetoriais ou matriciais. Para os dois métodos apresentados a seguir, uma **condição suficiente para a convergência** é que a matriz $A$ seja **diagonalmente dominante**, isto é, se para cada linha da matriz o valor absoluto do elemento diagonal da linha é maior que a soma dos valores absolutos dos outros elementos da linha. Dois métodos que utilizam essa ideia fundamental são: o [[Método de Jacobi]] e o [[Método de Gauss-Seidel]].