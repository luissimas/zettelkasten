---
created-at: 2024-05-13
---

Tomando uma função polinomial $g(x_k) = p_n(x_k)$ tal que $p_n(x_k) = a_0 + a_1x_k^1 + \dots + a_nx_k^n$, é possível obter o seguinte **sistema linear**:

$$
\begin{cases}
   a_0 + a_1x_0^1 + \cdots + a_nx_0^n = f(x_0)\\
   a_0 + a_1x_1^1 + \cdots + a_nx_1^n = f(x_1)\\
    \; \: \vdots \; + \quad \vdots \; \: + \ddots + \quad \vdots \quad = \quad \vdots \\
   a_0 + a_1x_n^1 + \cdots + a_nx_n^n = f(x_n)
\end{cases}
$$

Encontrando os coeficientes $a_i$, encontra-se também a função $g$.

Na representação matricial desse sistema na forma $Ax = B$:

$$
\begin{gather}

\begin{bmatrix}
   1 & x_0 & \cdots & x_0^n \\
   1 & x_1 & \cdots & x_1^n \\
    \vdots & \vdots & \ddots & \vdots \\
   1 & x_n & \cdots & x_n^n
\end{bmatrix}
\cdot
\begin{bmatrix}
  a_0\\
  a_1\\
  \vdots\\
  a_n\\
\end{bmatrix}
 =
\begin{bmatrix}
  f(x_0)\\
  f(x_1)\\
  \vdots\\
  f(x_n)\\
\end{bmatrix}

\end{gather}
$$

A matriz $A$ é uma *matriz de Vandermonde*, que **possui solução única**, ou seja, existe um único polinômio $p_n(x)$ que gera os valores dados por $f(x_1)$.

Abaixo é possível verificar uma implementação simples do método de [[Interpolação de dados|interpolação]] polinomial utilizando matriz de Vandermonde. O problema consiste em gerar as matrizes $A$ e $B$ do sistema linear com base nos valores de $x_i$ e $f(x_i)$ para então calcular os coeficientes $a_i$ do polinômio $p_n(x)$.

```python
import numpy as np


def vandermonde(x, fx):
    n = len(x)
    A = np.empty((n, n))
    B = np.empty((n))

    for i in range(0, n):
        A[i, 0] = 1

        for j in range(1, n):
            A[i, j] = A[i, j - 1] * x[i]

        B[i] = fx[i]

    return A, B


# x = [0, 1, 2, 3]
# fx = [1, 1, 2, 6]
x = [-6, 6]
fx = [9, 7]
A, B = vandermonde(x, fx)
x = np.linalg.solve(A, fx)

print(x)
```