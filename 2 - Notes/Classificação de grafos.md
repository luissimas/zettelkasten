---
created-at: 2021-11-08
tags:
---
Além das classificações fundamentais dos grafos em *orientados* e *não orientados*, existem ainda outras importantes características para categorizar esses elementos.

# Grafo vazio
Um grafo é dito *vazio* quando seu conjunto de vértices $V$ é vazio e, por consequência disso, seu conjunto de arestas $A$ também é vazio, ou seja:

$$
  V = \emptyset \qquad \text{ e } \qquad A = \emptyset
$$

Assim como existe apenas um único conjunto vazio, também existe apenas um **único** grafo vazio.

# Grafo sem arestas
Um grafo é dito *sem arestas* quando seu conjunto de vértices $V$ não é vazio, mas o conjunto de arestas $A$ é vazio, ou seja:

$$
  V \neq \emptyset \qquad \text{ e } \qquad A = \emptyset
$$

# Grafo infinito
Um grafo é *infinito* se ele contém infinitos vértices e/ou infinitas arestas.

# Grafo finito
Grafos são ditos finitos quando o conjunto de vértices e arestas têm ambos uma cardinalidade finita.

# Arestas paralelas
Dado um *grafo não orientado* $G$, duas arestas são ditas paralelas se elas têm os **mesmos extremos**. Se $G$ for um *grafo orientado*, então para que duas arestas sejam paralelas é necessário que elas tenham os mesmos extremos e a mesma orientação. Caso tenham os mesmos extremos mas orientações opostas, elas são ditas *antiparalelas*.

# Laço
Uma aresta que liga um vértice a ele mesmo é chamada de *laço*.

# Grafo simples
Um grafo é dito *simples* se ele **não possui** *laços* nem *arestas paralelas*.

# Grafo regular
Um grafo é *regular* se todos os seus vértices têm o **mesmo grau** (no caso de grafos orientados, os vértices devem ter o mesmo grau de entrada e saída). Se o grau dos vértices de um grafo regular $G$ é $r$, ele é dito r-regular.

# Grafo completo
Um grafo $G$ é dito *completo* se ele não tem laços e possui **exatamente uma** aresta entre cada par de vértices. Um grafo completo com $n$ vértices é sempre um *grafo simples* e (n-1)-regular.

# Subgrafo
Um grafo $H = (T,B)$ é *subgrafo* de outro grafo $G = (V,A)$ se as seguintes condições forem satisfeitas:
- $T \subseteq V$
- $B \subseteq A$
- Cada aresta de $B$ tem os mesmos extremos em $H$ e $G$. Caso $G$ seja orientado, as arestas de $H$ precisam ter a mesma orientação.

Se $T=V$, ou seja, se o conjunto de vértices do subgrafo for igual ao conjunto de vértices do grafo original, então o subgrafo $H$ é chamado de *subgrafo gerador* ou *subgrafo espalhado*.

# Subgrafo induzido por um conjunto de vértices
Se $X$ é um subconjunto de $V$ em $G=(V,A)$, o *subgrafo de* $G$ *induzido por* $X$, denotado por $G[X]$, é o maior subgrafo de $G$ no qual o conjunto de vértices é $X$.

# Subgrafo induzido por um conjunto de arestas
Se $Y$ é um subconjunto de $A$ em $G=(V,A)$, o *subgrafo de* $G$ *induzido por* $Y$, denotado por $G[Y]$, é o menor subgrafo de $G$ no qual o conjunto de arestas é $X$.

# União e intersecção
Como grafos são definidos em termos de conjuntos, é possível realizar operações de *união* e *intersecção* entre subgrafos de um mesmo grafo.

A **união** de dois subgrafos de um mesmo grafo $G$ é obtida fazendo-se a união de sues conjuntos de vértices e a união de seus conjuntos de arestas.

A **intersecção** de dois subgrafos de um mesmo grafo $G$ é obtida fazendo-se a intersecção de seus conjuntos de vértices e a intersecção de seus conjuntos de arestas.

# Grafos complementares
Dois grafos simples $G$ e $H$ são complementares se as seguintes condições forem satisfeitas:

- Ambos os grafos têm o **mesmo conjunto** de vértices $V$
- Para qualquer par de vértices distintos $u$ e $v$ de $V$, a aresta $uv$ ou $(u, v)$ está em $G$ se e somente se ela **não está** em $H$.

O complemento de $G$ é denotado por $\overbar{G}$.