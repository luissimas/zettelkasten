---
created-at: 2021-11-08
---
Para percorrer grafos, utiliza-se do conceito de *passeio*. Existem diversas variações de passeios de acordo com diferentes restrições ao trajeto a ser percorrido no grafo.

Um *passeio* em um grafo $G$ é uma sequência $P=(v_0, e_1, v_1, \dots, e_k, v_k)$ na qual cada $v_i$ é um *vértice* de $G$, cada $e_i$ é uma *aresta* de $G$ e os extremos de $e_i$ são $v_{i-q}$ e $v_i$.

Dado um passeio $P=(v_0, e_1, v_1, \dots, e_k, v_k)$, seu *comprimento* é dado pelo **número de arestas** no passeio, ou seja, $|P| = k$.

Em um *grafo orientado*, o passeio $P=(v_0, e_1, v_1, \dots, e_k, v_k)$ deve respeitar a **orientação** de cada aresta, ou seja, cada aresta $e_i$ tem *origem* no vértice $v_{i-1}$ e término em $v_i$.

# Passeio trivial
Um passeio com apenas **um vértice** e **nenhuma aresta** é chamado de *passeio trivial*. Esse passeio $P=(V_0)$ possui comprimento $0$, ou seja, $|P|=0$

# Trilha
Uma *trilha* é um passeio onde todas as **arestas** são **distintas**. Note que os vértices podem se repetir.

# Caminho
Um *caminho* é um passeio onde todos os **vértices** são **distintos**. Note que todo caminho também é uma trilha, pois se não há repetição de vértices, então também não há repetição de arestas.

# Passeio inverso
O *passeio inverso* de $P=(v_0, e_1, v_1, \dots, e_k, v_k)$ no grafo $G$, denotado por $P^{-1}$, é obtido **invertendo a ordem** da sequência de vértices e arestas de $P$, ou seja: $P^{-1} = (v_k, e_k, v_{k-1}, \dots, e_1, v_0)$.

# Concatenação de passeios
Dados dois passeios $P=(v_0, e_1, v_1, \dots, e_k, v_k)$ e $Q=(w_0, f_1, w_1, \dots, f_j, w_j)$ em um grafo $G$ tais que o **término** de $P$ **coincide** com o **início** de $Q$ ($v_k = w_0$). A *concatenação* $P \cdot Q$ de $P$ com $Q$ é a sequência $(v_0, e_1, v_1, \dots, e_k, v_k, f_1, w_1, \dots, f_j, w_j)$. Note que a concatenação de dois passeios em $G$ também é um passeio em $G$.

# Passeio fechado
Um passeio é dito *fechado* se ele começa e termina no **mesmo vértice**.

# Ciclo
Um *ciclo* (ou circuito) é um *passeio fechado* com comprimento maior ou igual a $1$ que não repete vértices nem arestas, exceto **início** e **término**.
Um grafo no qual existe um *ciclo* que passa por **todos** os *vértices* e **todas** as *arestas* é chamado de *grafo ciclo*.
Se um grafo não possui nenhum *ciclo*, ele é chamado de *acíclico*.