---
created-at: 2023-01-28
---

A notação Big-O é uma notação derivada da [[Análise assintótica]] e muito utilizada na análise de complexidade de algoritmos. Essa notação busca descrever o **limitante superior** da complexidade (número de instruções executadas) para um determinado algoritmo.

Dado um algoritmo cujo número de instruções executadas em função do tamanho da entrada é dado por $f(n)$, dizer que tal algoritmo tem complexidade $O(g(n))$ é o mesmo que dizer que existem duas constantes positivas $c$ e $n_0$ tais que $f(n) \leq cg(n) \quad \forall n \geq n_0$, ou seja, se multiplicarmos a função $g(n)$ por um escalar $c$, a partir de um determinado ponto $n_0$ ela limita superiormente $f(n)$.

![[big-o-example.png]]