---
created-at: 2021-11-09
tags:
---
A conectividade em grafos nos permite modelar conexões entre vértices de um grafo através das ideias de *passeio*. A definição de conectividade varia de acordo com o tipo (orientado ou não orientado) do grafo.

Dado um grafo **não orientado** $G = (V, A)$, dizemos que um vértice $u \in V$ está *conectado* ou *ligado* a um vértice $v \in V$ se e somente se existe um **caminho** em $G$ com **início** em $u$ e término em $v$.

Um grafo não vazio é *conexo* quando **quaisquer dois** de seus vértices estão conectados.

# Componentes
As *componentes* de um grafo $G$ são os **subgrafos conexos** de $G$ que são *maximais* na relação "é subgrafo de", ou seja, são os maiores subgrafos conexos possíveis que compõe $G$. Isso implica que cada componente de um grafo $G$ é essencialmente um grafo independente, sem conexão com as outras componentes. Note que, se um grafo $G$ é *conexo*, então ele possui apenas uma componente (o próprio $G$).

Dessa forma, é possível afirmar que um grafo é *conexo* se e somente se ele **exatamente uma** *componente conexa*, caso contrário ele é dito *desconexo*. Note que o grafo vazio não é conexo nem desconexo, pois não possui vértices. Um grafo sem arestas é dito *totalmente desconexo*.

# Aresta e vértice de corte
Uma *aresta de corte* $e$ é uma aresta de um grafo $G$ que, se removida, gera um grafo $G'$ que tem uma *componente conexa* a mais em relação a $G$.

Um *vértice de corte* $v$ é um vértice de um grafo $G$ que, se removido, gera um grafo $G'$ que tem uma *componente conexa* a mais em relação a $G$.

# Conectividade em grafos orientados
Nos grafos orientados a conectividade entre dois vértices deve valer para os dois sentidos.

Um grafo **orientado** $G = (V, A)$ é fortemente conexo se para quaisquer dois vértices $u, v \in V$ existe um *passeio orientado* de $u$ para $v$ e de $v$ para $u$.

As componentes fortemente conexas de um grafo orientado $G$ são os *subgrafos fortemente orientados* de $G$ que são maximais na relação "é subgrafo de".