---
created-at: 2021-02-22
tags:
---
Sistemas lineares são caracterizados por conterem equações nas quais as variáveis são multiplicadas apenas por constantes e apresentam a seguinte forma:
$$
\begin{cases}
  a_1x+b_1y+c_1z=D_1\\
  a_2x+b_2y+c_2z=D_2
\end{cases}
$$
A solução de um sistema linear deve satisfazer todas as equações do sistema, portanto as equações devem ser **resolvidas simultaneamente**. Essa solução pode assumir diferentes formas, pode ser um número, um conjunto ou até mesmo não existir uma solução que satisfaça o sistema.

# Forma matricial
É possível representar os sistemas lineares como matrizes, isso facilita sua representação e solução. De forma genérica, um determinado sistema dado por:
$$
\begin{cases}
    a_{11}x_1 + \cdots + a_{1n}x_n = b_1 \\
    a_{21}x_1 + \cdots + a_{2n}x_n = b_2 \\
    \quad \vdots \quad + \ddots + \quad \vdots \quad = \space \vdots \\
    a_{m1}x_1 + \cdots + a_{mn}x_n = b_m \\
\end{cases}
$$
pode ser representado na forma matricial por:

$$
A =
\begin{bmatrix}
a_{11} & \cdots & a_{1n} \\
a_{21} & \cdots & a_{2n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{bmatrix}

\text{ e }
\widetilde{A} = [A|B] =
\begin{bmatrix}
a_{11} & \cdots & a_{1n} & b_1 \\
a_{21} & \cdots & a_{2n} & b_2 \\
\vdots & \ddots & \vdots & \vdots \\
a_{m1} & \cdots & a_{mn} & b_m
\end{bmatrix}
$$

sendo $A$ a **matriz dos coeficientes** e $\widetilde{A}$ a **matriz ampliada (completa)** do sistema.
Também é possível representar o sistema através da equação matricial $AX=B$, sendo:
$$
A =
\begin{bmatrix}
a_{11} & \cdots & a_{1n} \\
a_{21} & \cdots & a_{2n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{bmatrix}
, \qquad
X =
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix}
, \qquad
B =
\begin{bmatrix}
b_1 \\
b_2 \\
\vdots \\
b_m
\end{bmatrix}
$$