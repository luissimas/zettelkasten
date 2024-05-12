---
created-at: 2021-11-17
---
Árvores são um tipo específico de [grafo](Grafos.md), sendo utilizadas para modelar uma classe muito grande de problemas computacionais.

Uma *árvore* é um grafo *conexo acíclico*. Note que um grafo com um vértice e nenhuma aresta é, por definição, uma árvore.

As árvores possuem propriedades, algumas das quais são listadas aqui:

- Todo subgrafo conexo de uma árvore é também uma árvore.
- Há um único caminho entre cada par de vértices.
- Adicionar uma aresta entre dois nós não adjacentes em uma árvore cria um grafo com um ciclo.
- Toda aresta em uma árvore é uma aresta de corte.
- O número de vértices em uma árvore é uma unidade maior do que o número de arestas

# Árvore geradora
Uma *árvore geradora* de um grafo $G$ é um *subgrafo gerador* de $G$ que é uma árvore.

# Floresta
Uma *floresta* é um *grafo acíclico*, ou seja, é um grafo cujas componentes conexas são árvores.