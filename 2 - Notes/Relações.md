---
created-at: 2021-09-17
---
Uma relação $R$ é um [[Conjuntos|conjunto]] de *tuplas* $(a_1,a_2, \dots, a_n)$ com $a_1 \in A_1$, $a_2 \in A_2$, $\dots$, $a_n \in A_n$. Note que $R$ é necessariamente um subconjunto do conjunto definido pelo produto cartesiano [[Operações em conjuntos|produto cartesiano]] $A_1 \times A_2 \times \dots \times A_n$ Essas tuplas de objetos são relacionadas através de uma **lei de associação**.
As relações compostas por *pares* de elementos, ou seja, apenas dois elementos por tupla, são chamadas de *relações binárias.* Dessa forma, $x R y$ indica que o par ordenado $(x,y)$ satisfaz a relação $R$.
Se uma relação associa elementos de um mesmo conjunto, esta é chamada de *autorrelação*.

# Domínio
O *domínio* de uma relação $R$ é o conjunto de todos os **primeiros** elementos dos pares ordenados que estão em $R$.
$$
Dom(R) = \{a | (a,b) \in R\}
$$

# Imagem
A *imagem* de uma relação $R$ é o conjunto de todos os **segundos** elementos dos pares ordenados que estão em $R$.
$$
Img(R) = \{b | (a,b) \in R\}
$$

# Representação gráfica
Existem diversas formas de representar relações de uma forma mais legível, ou às vezes mais eficiente de um ponto de vista computacional.

## Matriz retangular
Esse tipo de representação é usada para relações binárias. Dada uma relação $R$ de $A$ para $B$, a matriz que representa essa relação terá suas linhas representando os elementos de $A$ e suas colunas representando os elementos de $B$. Cada elemento da matriz terá $0$ ou $1$, indicando se o dado elemento do conjunto $A$ está ou não relacionado com o elemento do conjunto $B$.

## Diagrama de setas
Os elementos de $A$ e $B$ são representados em dois *discos disjuntos* e são inseridas setas dos elementos de $A$ para $B$, se o elemento de $A$ estiver relacionado com o dado elemento de $B$.

## Grafo orientado para uma autorrelação
Essa representação é usada para representar relações entre os elementos de um mesmo conjunto. Os elementos do conjunto são representados por *vértices* no grafo e são inseridas setas de um elemento ao outro caso eles estabeleçam uma relação.