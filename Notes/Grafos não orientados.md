# Grafos não orientados
Um grafo não orientado é um par $(V, A)$ onde:
- $V$ é um conjunto qualquer (de vértices).
- $A$ é uma relação em $V$, ou seja, um subconjunto do produto cartesiano $V \times V$ onde cada aresta é um **par não ordenado** de vértices.

Dados dois vértices $v$ e $w$, dizemos que uma aresta com *extremos* $v$ e $w$ **incide** em $v$ e em $w$. Portanto, a relação de incidência relaciona uma aresta aos vértices de seus extremos.

Dois vértices $v$ e $w$ são ditos **vizinhos** em um grafo $G$ se e somente se existe uma aresta em $G$ com extremos $v$ e $w$. Veja que a relação de adjacência é uma relação simétrica entre vértices.

O **grau** de um vértice $v$ em um grafo $G$ é o *número de arestas* que incidem em $v$. Geralmente denota-se o grau de um vértice $v$ como $d_G(v)$, ou simplesmente $d(v)$.

> **Teorema 1**
> Em qualquer grafo $G = (V,A)$, a soma dos graus de todos os vértices é igual ao dobro do número de arestas, ou seja:

$$
\sum_{v \in V}{d_G(v)}= 2\cdot |A|
$$

## Representação matricial
Existem duas principais formas de representar grafos não orientados através de matrizes. Essas formas de representação variam principalmente em qual das relações do grafo é o foco de representação.

### Matriz de adjacência
A matriz de *adjacência* de um grafo $G = (V, A)$ com $n$ vértices é dada por uma matriz booleana $M$ de $n$ linhas e $n$ colunas ($n \times n$). Cada célula $M_{ij}$ recebe o valor $1$ se e somente se $A$ contém uma aresta com extremos $v_i$ e $v_j$ ou $v_j$ e $v_i$, caso contrário a célula recebe o valor $0$.
Note que a matriz $M$ sempre será simétrica, pois pelo fato do grafo ser não orientado a relação de adjacência é simétrica entre os vértices.

### Matriz de incidência
A matriz de *incidência* de um grafo $G = (V,A)$ com $n$ vértices e $m$ arestas é dada por uma matriz booleana $M$ de $n$ linhas e $m$ colunas ($n \times m$). Cada célula $M_{ik}$ recebe o valor $1$ se e somente se o vértice $v_i$ é um extremo da aresta $e_k$, caso contrário a célula recebe o valor $0$.

---

created: 26/10/2021
