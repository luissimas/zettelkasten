---
created-at: 2023-01-28
---

A notação $\Omega$ é uma notação notação derivada da [[Análise assintótica]] e utilizada na análise de complexidade de algoritmos. Essa notação descreve o **limitante inferior** da complexidade de um determinado algoritmo.

Dado um algoritmo cujo número de instruções executadas em função do tamanho da entrada é dado por $f(n)$, dizer que tal algoritmo tem complexidade $\Omega(g(n))$ é o mesmo que dizer que existem duas constantes positivas $c$ e $n_0$ tais que $f(n) \geq cg(n) \quad \forall n \geq n_0$, ou seja, se multiplicarmos a função $g(n)$ por um escalar $c$, a partir de um determinado ponto $n_0$ ela limita inferiormente $f(n)$.

![[big-omega-example.png]]