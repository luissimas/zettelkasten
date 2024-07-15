---
created-at: 2021-10-26
---
Um grafo é *orientado* quando suas arestas especificam claramente o *vértice de partida* e o *vértice de chegada*.

Um grafo orientado é um par $(V, A)$ onde:
- $V$ é um conjunto qualquer (de vértices).
- $A$ é uma relação em $V$, ou seja, um subconjunto do produto cartesiano $V \times V$ onde cada aresta é um **par ordenado** de vértices.

Dados dois vértices $v$ e $w$, a aresta $vw$ parte do vértice $v$ e chega no vértice $w$. Dessa forma, a relação de **incidência** é uma relação entre o conjunto de arestas $A$ e o conjunto de vértices $V$.

Dados dois vértices $v$ e $w$, diz-se que o vértice $v$ *domina* (ou atinge) o vértice $w$ se e somente se existe uma aresta de $G$ com *origem* $v$ e *destino* $w$. Portanto, a relação de **adjacência** é uma relação entre vértices.

Em um grafo orientado existem dois tipos de graus, os de entrada e os de saída.
O **grau de entrada** de um vértice $v$ (denotado por $d_{G}^{+}(v)$) é o número de arestas que **chegam** a $v$.
O **grau de saída** de um vértice $v$ (denotado por $d_{G}^{-}(v)$) é o número de arestas que **partem*** de $v$.
O **grau** de um vértice $v$ é simplesmente a soma de seus graus de entrada e saída, ou seja:
$$
d_G(v) = d_G^{+}(v) + d_G^{-}(v)
$$

**Teorema 2**
Em qualquer grafo orientado $G = (V,A)$, a soma dos graus de entrada (ou de saída) de todos os vértices é igual ao número de arestas, ou seja:

$$
\sum_{v \in V}{d_G^+(v)} = \sum_{v \in V}{d_G^-(v)} = |A|
$$

# Representação matricial
Assim como nos grafos não orientados, existem duas principais formas de representar grafos orientados através de matrizes.

## Matriz de adjacência
A matriz de *adjacência* de um grafo orientado $G = (V, A)$ com $n$ vértices é dada por uma matriz booleana $M$ de $n$ linhas e $n$ colunas ($n \times n$). Cada célula $M_{ij}$ recebe o valor $1$ se e somente se $A$ contém uma aresta com origem $v_i$ e destino $v_j$, caso contrário a célula recebe o valor $0$.

## Matriz de incidência
A matriz de *incidência* de um grafo orientado $G = (V,A)$ com $n$ vértices e $m$ arestas é dada por uma matriz booleana $M$ de $n$ linhas e $m$ colunas ($n \times m$). Cada célula $M_{ik}$ recebe o valor $1$ se e somente se o vértice $v_i$ é um extremo da aresta $e_k$, caso contrário a célula recebe o valor $0$.
É possível ainda construir duas matrizes de incidência, uma de entrada ($M^+$) e outra de saída ($M^-$). Nesse caso, a célula $M_{ik}^+$ é $1$ se e somente se a aresta $e_k$ entra no vértice $v_i$, e a célula $M_{ik}^-$ é $1$ se e somente se a aresta $e_k$ sai do vértice $v_i$.
Uma outra representação possível é combinar as matrizes de entrada e de saída em uma única matriz $M_{ik}$ cujos elementos são inteiros pertencentes ao conjunto ${-1, 0, 1}$. Nesse caso, o elemento $M_{ik}$ é:
- $1$ se a aresta $e_k$ entra no vértice $v_i$
- $-1$ se a aresta $e_k$ sai do vértice $v_i$
- $0$ se a aresta $e_k$ não incide no vértice $v_i$