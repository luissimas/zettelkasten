---
date: 2024-05-13
---

O método da eliminação de Gauss é um [[Métodos diretos para resolução de sistemas lineares|método direto para resolução de sistemas lineares]]. Esse método consiste em aplicar transformações no sistema até que se atinja uma **forma triangular**, ou seja

$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1k} \\
0 & a_{22} & \cdots & a_{2k} \\
\vdots & \ddots & \vdots \\
0 & 0 & \cdots & a_{nk}
\end{bmatrix}
$$

A partir do momento em que se chega ao sistema triangular, a resolução consiste apenas em aplicar substituição reversa nesse sistema.

O número total de operações $k$ para esse método é dado pela seguinte equação:

$$
k = \frac{2}{3}n^3 + \frac{3}{2}n ^2 - \frac{7}{6}n
$$

em que $n$ é o número de equações.

Uma preocupação com esse método é a propagação dos [[Erros em métodos de aproximação|erros de arredondamento]] da máquina nas operações entre as linhas. Uma maneira de reduzir esse problema é usar o chamado **pivoteamento**, que consiste em, através da troca de linhas, fazer com que o pivô (elemento da diagonal que será usado para na eliminação) tenha o maior valor em módulo possível dentre os demais elementos da coluna.

