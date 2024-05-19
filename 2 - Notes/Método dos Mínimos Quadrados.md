---
created-at: 2024-05-13
---

O Método dos Mínimos Quadrados consiste em, dado um **conjunto** de $n$ **pontos** $\{(x_0, f(x_0)), (x_1, f(x_1)), \dots, (x_{n-1}, f(x_{n-1}))\}$, **determinar uma função** $\varphi(x)$ que **melhor se aproxime** de $f$. Geralmente, escrevemos a função $\varphi$ como uma **combinação linear** de funções $g_i(x)$, tal que: $\varphi(x) = a_1g_1(x) + a_2g_2(x) + \dots + a_ig_i(x)$.

Primeiramente vamos definir o método para o caso básico no qual a função $\varphi$ é uma combinação linear de $2$ funções $g_1$ e $g_2$, após isso vamos generalizar o método para qualquer número de funções.

# Duas variáveis

O problema de quadrados mínimos lineares discreto de duas variáveis consiste em, dadas duas funções $g_1(x)$ e $g_2(x)$, **determinar duas constantes** reais $a_1$ e $a_2$ tais que a função $\varphi(x) = a_1g_1(x) + a_2g_2(x)$ esteja o mais próximo possível dos pontos conhecidos. Naturalmente, para determinar o quão próximas são as aproximações é necessário definir o **erro**, que pode ser definido como $e(x_i) = \varphi(x_i) - f(x_i)$. Dessa forma, é possível transformar o problema em um problema de otimização da forma:

$$\min E(a_1, a_2) = \min \sum_{i=0}^{n-1}|e(x_i)|^2 = \min \sum_{i=0}^{n-1}|\varphi(x_i) - f(x_i)|^2$$

Resolvendo esse problema de otimização, obtém-se o seguinte sistema linear, que permite encontrar os valores das constantes $a_1$ e $a_2$ que minimizam o erro da estimativa para a função $f$:

$$
\begin{cases}
  \displaystyle \left(\sum_{i=0}^{n-1}g_1(x_i)^2\right)a_1 + \left(\sum_{i=0}^{n-1}g_1(x_i)g_2(x_i)\right)a_2 = \sum_{i=0}^{n-1}g_1(x_i)f(x_i)\\
  \displaystyle \left(\sum_{i=0}^{n-1}g_1(x_i)g_2(x_i)\right)a_1 + \left(\sum_{i=0}^{n-1}g_2(x_i)^2\right)a_2 = \sum_{i=0}^{n-1}g_2(x_i)f(x_i)\\
\end{cases}
$$

Esse método pode ser facilmente implementado da seguinte forma:

```python
import numpy as np

x = [-0.6975, -0.6762, 0.0176, 0.4512, 0.7559]
fx = [2.0840, 2.0330, 0.8472, 0.6773, 0.4318]


def g1(x):
    return 1
    # return np.sin(x)


def g2(x):
    return np.exp(-x)
    # return np.cos(x)


def a11(x):
    n = 0

    for i in range(len(x)):
        n = n + (g1(x[i]) ** 2)

    return n


def a12(x):
    n = 0

    for i in range(len(x)):
        n = n + (g1(x[i]) * g2(x[i]))

    return n


def a22(x):
    n = 0

    for i in range(len(x)):
        n = n + (g2(x[i]) ** 2)

    return n


def y1(x, fx):
    n = 0

    for i in range(len(x)):
        n = n + (g1(x[i]) * fx[i])

    return n


def y2(x, fx):
    n = 0

    for i in range(len(x)):
        n = n + (g2(x[i]) * fx[i])

    return n


A = [[a11(x), a12(x)], [a12(x), a22(x)]]
b = [y1(x, fx), y2(x, fx)]

print("A = ", A)
print("b = ", b)

result = np.linalg.solve(A, b)

print("a1 = ", result[0])
print("a2 = ", result[1])
```

# Caso geral

No caso geral, o problema de quadrados mínimos consiste em **obter coeficientes** $a_1, a_2, \dots, a_n$ que minimizem a seguinte função:

$$\min E(a_1, a_2, \dots, a_n) = \min \sum_{i=1}^{m}|e(x_i)|^2 = \min \sum_{i=1}^{m}|\varphi(x_i) - f(x_i)|^2$$

sendo a função $\varphi(x)$ definida como:

$$\varphi(x_i) = a_1g_1(x_i) + a_2g_2(x_i) + \dots + a_ng_n(x_i)$$

Resolvendo esse problema de otimização através de derivadas parciais, obtém-se $n$ equações (as $n$ derivadas parciais igualadas a $0$). Manipulando as equações, é possível obter o seguinte sistema linear, que permite encontrar o valor dos coeficientes $a_1, a_2, \dots, a_n$:

$$
\begin{cases}
  \displaystyle \left(\sum_{i=1}^{m}g_1(x_i)g_1(x_i)\right)a_1 + \left(\sum_{i=1}^{m}g_1(x_i)g_2(x_i)\right)a_2 + \dots + \left(\sum_{i=1}^{m}g_1(x_i)g_n(x_i)\right)a_n = \sum_{i=1}^{m}f(x_i)g_1(x_i)\\
  \displaystyle \left(\sum_{i=1}^{m}g_2(x_i)g_1(x_i)\right)a_1 + \left(\sum_{i=1}^{m}g_2(x_i)g_2(x_i)\right)a_2 + \dots + \left(\sum_{i=1}^{m}g_2(x_i)g_n(x_i)\right)a_n = \sum_{i=1}^{m}f(x_i)g_2(x_i)\\
  \qquad \vdots\\
  \displaystyle \left(\sum_{i=1}^{m}g_n(x_i)g_1(x_i)\right)a_1 + \left(\sum_{i=1}^{m}g_n(x_i)g_2(x_i)\right)a_2 + \dots + \left(\sum_{i=1}^{m}g_n(x_i)g_n(x_i)\right)a_n = \sum_{i=1}^{m}f(x_i)g_n(x_i)\\
\end{cases}
$$

A implementação desse método consiste na construção e resolução deste sistema linear, como pode ser verificado a seguir:

```python
import numpy as np
import csv


def termoA(x, g, i, j, m):
    num = 0

    for k in range(0, m):
        num = num + (g[i](x[k]) * g[j](x[k]))

    return num


def termoB(x, fx, g, i, m):
    num = 0

    for k in range(0, m):
        num = num + (fx[k] * g[i](x[k]))

    return num


def matrizAumentada(x, fx, g, n):
    m = len(x)
    A = np.empty((n, n))
    b = np.empty((n))

    for i in range(0, n):
        for j in range(i, n):
            A[i][j] = termoA(x, g, i, j, m)

            if i != j:
                A[j][i] = A[i][j]

        b[i] = termoB(x, fx, g, i, m)

    return A, b


x = [-1, -0.5, 0, 0.5, 1]
fx = [8.4, 2.7, 2.6, 2.8, 5.6]
g = [lambda x: 1, lambda x: np.sin(np.pi * x), lambda x: x * np.cos(np.pi * x)]
n = len(g)


A, b = matrizAumentada(x, fx, g, n)


a = np.linalg.solve(A, b)

print("A: ", A)
print("b: ", b)
print("Coeficientes: ", a)
```