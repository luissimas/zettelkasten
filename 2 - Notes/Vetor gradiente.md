---
created-at: 2021-11-12
tags:
---
Dada uma função $f$ que admite derivadas parciais em $(x_0, y_0)$, o vetor

$$
  \nabla f(x_0, y_0) = \left( \frac{\partial f}{\partial x}(x_0, y_0) \frac{\partial f}{\partial y}(x_0, y_0) \right)
$$

é chamado *vetor gradiente* de $f$ em $(x_0, y_0)$.

Dada uma função $f$ diferenciável em $(x_0, y_0)$, $\nabla f(x_0, y_0)$ é perpendicular em $(x_0, y_0)$ a toda curva de nível de $f$ que passa por $(x_0, y_0)$. Dessa forma, a reta que passa por $(x_0, y_0)$ e é perpendicular a $\nabla f(x_0, y_0)$ é chamada de *reta tangente*, em $(x_0, y_0)$, à curva de nível $f(x,y) = c$. A equação dessa reta é definida por:

$$
  \nabla f(x_0, y_0) \cdot \left[(x,y) - (x_0, y_0)\right] = 0
$$