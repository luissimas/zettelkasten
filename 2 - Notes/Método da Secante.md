---
date: 2024-05-13
---

O método da secante é utilizado para a [[Resolução de equações não lineares]]. Esse método segue a mesma ideia do [[Método de Newton-Raphson]], porém **ao invés de usar a** [[Derivada]] da função cuja raiz é buscada, **usa-se uma aproximação** para ela.

Com a definição de derivada, é possível aproximar $f'(p_n)$ e gerar a seguinte sequência:

$$p_{n+1} = p_n - \frac{f(p_n)(p_n - p_{n-1})}{f(p_n) - f(p_{n-1})}$$

```python
import numpy as np


def f(x):
    return np.sin(7 * x) - 0.2 * x


p0 = 0.4
p1 = 0.5

list = [p0, p1]

i = 1

while list[i] != list[i - 1]:
    pn = list[i]
    pn1 = list[i - 1]

    pnext = pn - ((f(pn) * (pn - pn1)) / (f(pn) - f(pn1)))

    list.append(pnext)
    print("Iteração %d: %.6f" % (i, pnext))
    i = i + 1
```