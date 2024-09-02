---
created-at: "2024-07-16"
---

O método de Simpsons é usado para fazer a [[Integração numérica]] de funções. Esse método consiste em aproximar a função por um polinômio de grau $2$ para então obter a área do gráfico da função aproximada.

![[metodosimpson.png]]

Dada uma função $f(x)$, é possível aproximar sua [[Integrais definidas|integral definida]] em um intervalo $[a,b]$ através da seguinte definição:

$$\int_{x_0}^{x_2} \, dx \approx \frac{h}{3}(f(x_0) + 4f(x_1) + f(x_2))$$

com $x_0 = a$, $x_1 = \frac{a+b}{2}$, $x_2 = b$.

Vale notar que esse método produz resultados **exatos** caso $f$ seja um **polinômio** de **grau** menor ou igual a $3$. Caso contrário, o limitante superior para o erro da aproximação é dado pela seguinte expressão:

$$|E| \leq \frac{h^5}{90} \max(|f^{(4)}(x)| \, x \in [a, b])$$

onde $h = \frac{b-a}{2}$.

O método pode ser implementado em python de uma maneira relativamente simples:

```python
import numpy as np


def simpsons(i, f):
    x0 = i[0]
    x1 = (i[0] + i[1]) / 2
    x2 = i[1]

    h = (x2 - x0) / 2

    return h / 3 * (f(x0) + 4 * f(x1) + f(x2))


i = [0, 1]
f = lambda x: np.exp(-(x ** 2))

print(simpsons(i, f))
```

De forma similar ao método dos trapézios, é possível **subdividir o intervalo de integração** e aplicar o método para cada um dos subintervalos. Note entretanto que, pela natureza do método, é necessário subdividir o intervalo de integração em um **número par de subintervalos**. Dessa forma, o **método de Simpson repetido** para $n$ subintervalos é definido por:

$$\int_{x_0}^{x_n} \, dx \approx \frac{h}{3}(f(x_0) + f(x_n) + 4[f(x_1) + f(x_3) + \dots + f(x_{n-1})] + 2[f(x_2) + f(x_4) + \dots + f(x_{n-2})])$$

O limitante superior para o [[Erros em métodos de aproximação|erro da aproximação]] é dado pela soma dos erros obtidos em cada subintervalo, dessa forma, para $n$ subintervalos:

$$|E| \leq \frac{(b-a)h^4}{180} \max(|f^{(4)}(x)| \, x \in [a, b])$$

onde $h = \frac{b-a}{2n}$.

O método de Simpsons repetido pode ser implementado em python da seguinte forma:

```python
import numpy as np


def simpsons(i, f, n):
    x, h = np.linspace(i[0], i[1], num=n + 1, retstep=True)
    sum = f(x[0]) + f(x[n])

    for i in range(1, n):
        sum = sum + ((2 if i % 2 == 0 else 4) * f(x[i]))

    return (h / 3) * sum


i = [0, 6]
f = lambda x: np.cos(4 * x)

print(simpsons(i, f, 92))
```
