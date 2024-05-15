---
date: 2024-05-15
---

Esse algoritmo de [[Algoritmos de busca informada]] utiliza como função de avaliação apenas a **função heurística**, ou seja, $f(n) = h(n)$. Dessa forma, os nós considerados mais próximos do objetivo são expandidos primeiro.

Note que não há nenhuma garantia de que esse algoritmo encontra a solução ótima. Entretanto, esse algoritmo é **geralmente** muito **rápido** (pois a função heurística geralmente é de baixo custo computacional). Isso torna o algoritmo de busca gulosa desejável em situações onde o desempenho é preferível ao invés da solução ótima.