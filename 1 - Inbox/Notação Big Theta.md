---
created-at: 2023-01-28
---

A notação $\Theta$ é uma notação derivada da [[Análise assintótica]] e utilizada na análise de complexidade de algoritmos. Essa notação descreve tanto um limitante superior quanto um limitante inferior para a complexidade de um determinado algoritmo.

Dado um algoritmo cujo número de instruções executadas em função do tamanho da entrada é dado por $f(n)$, dizer que tal algoritmo tem complexidade $\Omega(g(n))$ é o mesmo que dizer que existem três constantes positivas $c_1$, $c_2$ e $n_0$ tais que $c_1g(n) \leq f(n) \leq c_2g(n) \quad \forall n \geq n_0$, ou seja, a partir de um determinado $n=n_0$ função $f(n)$ sempre está dentro do intervalo $[c_1g(n), c_2g(n)]$.

![[big-theta-example.png]]
