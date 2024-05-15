---
date: 2024-05-15
---

Esse algoritmo de [[Algoritmos de busca informada]] utiliza como função de avaliação uma soma da **função de custo** e da **função heurística**, portanto $f(n) = g(n) + h(n)$. Sendo assim, esse algoritmo considera não só a estimativa do custo do caminho do nó $n$ até o objetivo, mas também o custo do caminho percorrido até o nó.

A garantia de que esse algoritmo encontra a **solução ótima** depende da definição da **função heurística**. Se a função heurística nunca superestima o custo de alcançar um objetivo, ou seja, $h(n)$ nunca ultrapassa o custo real do caminho de $n$ até o objetivo, então o algoritmo A\* encontra sempre a solução ótima.