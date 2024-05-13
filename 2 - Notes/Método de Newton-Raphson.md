---
date: 2024-05-13
---

O método de Newton-Raphson é utilizado para a [[Resolução de equações não lineares]]. Esse método é resultado da aplicação do *Teorema de Taylor* com o [[Método do Ponto Fixo]], resultando em um método que **converge mais rápido** para a solução, porém com **mais condições de convergência**.

Para este método, escreve-se a função $\varphi$ da seguinte maneira:

$$\varphi(x) = x - \frac{f(x)}{f'(x)}$$

Sendo assim, é gerada uma sequência $(p_n)$ na forma:

$$p_{n+1} = p_n - \frac{f(p_n)}{f'(p_n)}$$

Assim como no método do ponto fixo, a sequência **converge** para o valor da solução $x = \varphi(x)$.

Note que é assumido que $f'(x) \neq 0$ para todos os componentes da sequência gerada. Sendo assim, a função $f$ tem que ter uma [[Derivada]] contínua e esta derivada não pode se anular no intervalo de busca da solução. Além disso, por conta do Teorema de Taylor, o ponto inicial $p_0$ deve estar próximo da solução para que a convergência seja garantida.

```python
import numpy as np
import math


def f(x):
    return x * np.sin(x)


def df(x):
    return np.sin(x) + x * np.cos(x)


p0 = 0.9

list = [p0]

i = 1
max = 8

while i <= max:
    pn = list[i - 1]
    pnext = pn - (f(pn) / df(pn))

    list.append(pnext)
    print("Iteração %d: %.6f" % (i, pnext))
    # print("|p%d - p%d| = %.5f" % (i, i - 1, math.fabs(pnext - pn)))

    if list[i] == list[i - 1]:
        break

    i = i + 1
```