---
created-at: 2021-11-11
---
Dada uma função $f(x,y)$ diferenciável em $(x_0, y_0)$, o plano definido por:

$$
z = f(x_0, y_0) + \frac{\partial f}{\partial x}{(x_0, y_0)}(x-x_0) + \frac{\partial f}{\partial y}{(x_0, y_0)}(y-y_0)
$$

é chamado de *plano tangente* ao gráfico de $f$ no ponto $(x_0, y_0, f(x_0, y_0))$. Note que só se define um plano tangente em $(x_0, y_0, f(x_0, y_0))$ se $f$ for diferenciável no ponto $(x_0, y_0)$.

O plano tangente pode ser representado em notação de produto escalar:

$$
\left(\frac{\partial f}{\partial x}{(x_0, y_0)}, \frac{\partial f}{\partial y}{(x_0, y_0)}, -1 \right) \cdot \left(x - x_0, y - y_0, z - f(x_0, y_0)\right) = 0
$$

Sendo assim, o *vetor normal* ao plano tangente em $(x_0, y_0, f(x_0, y_0))$ é definido pelas *derivadas parciais* naquele ponto, e possui sempre direção oposta ao eixo $z$.

$$
\left(\frac{\partial f}{\partial x}{(x_0, y_0)}, \frac{\partial f}{\partial y}{(x_0, y_0)}, -1 \right)
$$

Da mesma forma, a *reta normal* ao gráfico de $f$ em $(x_0, y_0, f(x_0, y_0))$ é  a reta que passa por $(x_0, y_0, f(x_0, y_0))$ e tem a direção do vetor normal ao plano, ou seja:

$$
r: (x,y,z) = (x_0, y_0, f(x_0, y_0)) + \lambda \left(\frac{\partial f}{\partial x}{(x_0, y_0)}, \frac{\partial f}{\partial y}{(x_0, y_0)}, -1 \right) \text{, } \qquad \forall \lambda \in \mathbb{R}
$$