---
created-at: 2024-05-15
---

Esse algoritmo difere dos demais [[Algoritmos de busca desinformada|algoritmos de busca]] no sentido de que ele leva em conta o custo dos movimentos de um nó ao outro. A **função de custo** faz parte da definição do problema, e é utilizada por esse algoritmo para decidir qual nó expandir em seguida.

O algoritmo consiste em expandir o nó inicial, manter uma lista dos nós não expandidos ordenada pelo custo dos nós, e então visitar e expandir cada nó de acordo com a ordem dessa lista. Dessa forma os nós menos custosos são sempre verificados primeiro. Quando um nó é expandido, é necessário verificar se ele já havia sido visitado antes (mantendo um alista de nós já expandidos), caso ele já tenha sido visitado, é necessário comparar o custo do caminho atual com o do caminho anterior para aquele nó, e manter apenas o caminho menos custoso. Um ponto importante é que a verificação de nó objetivo só deve ser feita no nó selecionado, e não nos nós expandidos, pois com o primeiro método há a garantia de encontrar sempre o caminho menos custoso para o nó objetivo.

Note que o algoritmo de busca de custo uniforme garante sempre a **solução ótima**, ou seja, a solução de menor custo para o problema.