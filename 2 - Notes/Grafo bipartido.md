# Grafo bipartido
Dado um grafo $G = (V, A)$, uma *bipartiçã* de $V$ é um par não ordenado de subconjuntos $V^-$ e $V^+$ tais que:

- $V^- \cup V^+ = V$
- $V^- \cap V^+ = \emptyset$
- Toda aresta de $G$ tem um extremo em $V^-$ e outro em $V^+$

Um grafo $G$ com uma bipartição $V^-$, $V^+$ é chamado de *grafo bipartido*.

Uma condição necessária e suficiente para que um grafo seja bipartido é que ele **não possua** ciclos de comprimento ímpar. Portanto, toda [árvore](Árvore.md) é um grafo bipartido.

## Grafo bipartido completo
Um grafo *bipartido completo* é um grafo bipartido no qual **todo vértice** $V^-$ de $G$ é **adjacente** a **todo vértice** $V^+$ de $G$.

---

created: 17/11/2021
