---
created-at: 2024-05-15
---

Esse [[Algoritmos de busca desinformada|algoritmo de busca desinformada]] consiste em expandir o nó mais interno até que o nó desse ramo não tenha mais sucessores, após isso retrocede-se ao nó mais profundo e o processo é repetido.

Esse algoritmo **não garante** o caminho mais curto nem a solução ótima, mesmo se as ações tiverem o mesmo custo.

Note que em sua versão mais simples, a busca em profundidade apresenta algumas limitações. Uma delas é a possibilidade de expansão indefinida em um ramo, sem que a solução seja encontrada. Pensando nisso, algumas variações da busca em profundidade foram desenvolvidas na tentativa de remediar algumas dessas limitações fundamentais:

-   Busca Limitada: define previamente um nível máximo para a expansão dos nós (note que caso o objetivo esteja em um nível abaixo do limite, ele não será encontrado).
-   Busca Limitada Interativa: uma versão melhorada da busca limitada na qual o limite é dinâmico e vai sendo incrementado até que a solução seja atingida.
-   Backtracking: apenas o caminho sendo explorado é armazenado, os filhos de cada nó são gerados e explorados um por vez.