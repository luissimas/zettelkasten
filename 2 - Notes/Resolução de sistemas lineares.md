---
date: 2024-05-13
---

Um sistema de equações lineares é um conjunto de $n$ equações em $k$ variáveis, geralmente escrito na seguinte forma:

$$
\begin{cases}
    a_{11}x_1 + \cdots + a_{1k}x_k = b_1 \\
    a_{21}x_1 + \cdots + a_{2k}x_k = b_2 \\
    \quad \vdots \quad + \ddots + \quad \vdots \quad = \space \vdots \\
    a_{n1}x_1 + \cdots + a_{nk}x_k = b_n \\
\end{cases}
$$

ou na forma matricial

$$
\begin{gather}

  \begin{bmatrix}
  a_{11} & \cdots & a_{1k} \\
  a_{21} & \cdots & a_{2k} \\
  \vdots & \ddots & \vdots \\
  a_{n1} & \cdots & a_{nk}
  \end{bmatrix}
  \cdot
  \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_k\end{bmatrix}
  =
  \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_k\end{bmatrix}
  \text{, ou} \quad Ax = b

\end{gather}
$$

Uma solução para o sistema linear é um **vetor** de números $(x_1, x_2, \dots, x_n)$ tais que a equação acima seja satisfeita. Existem diversos métodos para encontrar a solução de sistemas lineares, porém algumas delas podem rapidamente se tornar **muito custosas computacionalmente** quando aplicadas a sistemas lineares com um grande número de equações.

A ideia dos **métodos numéricos** para a resolução de sistemas de equações lineares é encontrar **métodos eficientes** para a resolução desses sistemas. Esses métodos se dividem em duas grandes categorias: os [[Métodos diretos para resolução de sistemas lineares|métodos diretos]] e os [[Métodos iterativos para resolução de sistemas lineares|métodos iterativos]].