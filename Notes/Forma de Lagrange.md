---
created-at: 2024-05-13
---

A forma de Lagrange nos permite obter o polinômio que interpola a função $f$ sem passar pelo processo de [[Resolução de sistemas lineares]]. O método consiste em obter um **conjunto de polinômios** chamados *polinômios de Lagrange*, definidos por:

$$L_k(x) = \prod_{j \neq k}{\frac{x-x_j}{x_k - x_j}}$$

Esses polinômios têm a propriedade de valerem $1$ para $x_k$ e $0$ para todos os outros $x_l$. Obtidos os polinômios de Lagrange, o polinômio que interpola $f$ é definido por:

$$p_n(x) = \sum_{k=0}^n{f(x_k) L_k(x)}$$

Segue abaixo uma implementação da forma de Lagrange que retorna o valor de um $x$ qualquer dentro do intervalo da função $f$ dados os pontos e valores correspondentes de $f$.

```python
import numpy as np


def lagrange(x, xs, fx):
    n = len(xs) - 1 # Grau do polinômio
    sum = 0

    for k in range(0, n + 1):
        prod = 1

        for j in range(0, n + 1):
            if j != k:
                prod = prod * (x - xs[j]) / (xs[k] - xs[j])

        sum = sum + (prod * fx[k])

    return sum


x = 1.5
xs = [-1, 0, 2]
fx = [4, 1, -1]

print(lagrange(x, xs, fx))
```