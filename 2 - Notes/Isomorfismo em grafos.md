---
created-at: 2021-11-09
tags:
---
O isomorfismo é uma [[Relações | relação de equivalência]] em grafos que determina se dois grafos possuem a mesma estrutura. A isomorfia é um dos conceitos mais importantes na teoria dos grafos, pois permite compartilhar soluções de problemas entre gráficos distintos porém com a mesma estrutura.

Dois grafos $G$ e $H$ são *isomorfos* ($G \cong H$) se existem *funções bijetoras* $f: V(G) \to V(H)$ e $g: A(G) \to A(H)$ tais que um vértice $v$ é extremo de uma aresta e no grafo $G$ se e somente se $f(v)$ é extremo da aresta $g(e)$ no grafo $H$. No caso de grafos orientados, a direção da aresta também precisa ser preservada.

Se dois grafos são isomorfos, eles partilham muitas propriedades. Dessa forma, para determinar se dois grafos são de fato isomorfos, é necessário verificar se ambos partilham diversas propriedades como o número (e grau) de vértices, número de arestas, ciclos etc.