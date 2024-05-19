---
created-at: 2024-05-15
---

A busca pela melhor escolha utiliza as heurísticas na forma de uma **função de avaliação** $f(n)$, que aplicada a um estado retorna um valor numérico. A função de avaliação é utilizada para determinar o **quão desejável** é expandir um determinado nó.

De maneira semelhante aos algoritmos de busca desinformada, esse tipo algoritmo mantém listas de nós abertos e fechados, mas armazena também para cada nó expandido o valor da função de avaliação aplicada a ele. Dessa forma, o algoritmo **expande primeiro** os nós com o **melhor valor** da função de avaliação.

A **função de avaliação** pode levar em conta duas métricas:

-   A **função de custo** $g(n)$, que representa o custo do caminho da raiz até o nó $n$.

 -   A **função heurística** $h(n)$, que representa a estimativa de custo do caminho do nó $n$ até o objetivo.

Vale destacar que o algoritmo de busca pela melhor escolha é na realidade um **modelo** que **engloba diversos outros algoritmos** de busca informada. A ideia geral do algoritmo se mantém, mas as variações de algoritmos surgem nas **diferentes definições** para a **função de avaliação**. Os algoritmos [[A*]] e [[Greedy search]] são exemplos desse método.


