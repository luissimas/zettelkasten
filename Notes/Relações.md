# Relações
Uma relação $R$ é um [[Conjuntos|conjunto]] de *tuplas* $(a_1,a_2, \dots, a_n)$ com $a_1 \in A_1$, $a_2 \in A_2$, $\dots$, $a_n \in A_n$. Note que $R$ é necessariamente um subconjunto do conjunto definido pelo produto cartesiano [[Operações em conjuntos|produto cartesiano]] $A_1 \times A_2 \times \dots \times A_n$ Essas tuplas de objetos são relacionadas através de uma **lei de associação**.
As relações compostas por *pares* de elementos, ou seja, apenas dois elementos por tupla, são chamadas de *relações binárias.* Dessa forma, $x R y$ indica que o par ordenado $(x,y)$ satisfaz a relação $R$.
Se uma relação associa elementos de um mesmo conjunto, esta é chamada de *autorrelação*.

## Domínio
O *domínio* de uma relação $R$ é o conjunto de todos os **primeiros** elementos dos pares ordenados que estão em $R$.
$$
Dom(R) = \{a | (a,b) \in R\}
$$

## Imagem
A *imagem* de uma relação $R$ é o conjunto de todos os **segundos** elementos dos pares ordenados que estão em $R$.
$$
Img(R) = \{b | (a,b) \in R\}
$$

## Representação gráfica
Existem diversas formas de representar relações de uma forma mais legível, ou às vezes mais eficiente de um ponto de vista computacional.

### Matriz retangular
Esse tipo de representação é usada para relações binárias. Dada uma relação $R$ de $A$ para $B$, a matriz que representa essa relação terá suas linhas representando os elementos de $A$ e suas colunas representando os elementos de $B$. Cada elemento da matriz terá $0$ ou $1$, indicando se o dado elemento do conjunto $A$ está ou não relacionado com o elemento do conjunto $B$.

### Diagrama de setas
Os elementos de $A$ e $B$ são representados em dois *discos disjuntos* e são inseridas setas dos elementos de $A$ para $B$, se o elemento de $A$ estiver relacionado com o dado elemento de $B$.

### Grafo orientado para uma autorrelação
Essa representação é usada para representar relações entre os elementos de um mesmo conjunto. Os elementos do conjunto são representados por *vértices* no grafo e são inseridas setas de um elemento ao outro caso eles estabeleçam uma relação.

## Propriedades das autorrelações
As relações podem apresentar propriedades muito importantes para suas aplicações em problemas computacionais.

### Reflexiva
Dada uma relação $R$ definida em um conjunto $A$, $R$ é **reflexiva** se **para todo** $x \in A$ temos $x R x$, ou seja, se **todo** elemento de $A$ está relacionado a ele mesmo.

### Antirreflexiva
Dada uma relação $R$ definida em um conjunto $A$, $R$ é **antirreflexiva** (ou irreflexiva) se **para todo** $x \in A$ temos $x \not{R} x$, ou seja, se **nenhum** elemento de $A$ está relacionado a ele mesmo.

### Simétrica
Dada uma relação $R$ definida em um conjunto $A$, $R$ é **simétrica** se **para todo** $x, y \in A$ temos $x R y \implies y R x$.

### Antissimétrica
Dada uma relação $R$ definida em um conjunto $A$, $R$ é **antissimétrica** se **para todo** $x, y \in A$ temos $x R y \land y R x \implies x = y$.

### Transitiva
Dada uma relação $R$ definida em um conjunto $A$, $R$ é **transitiva** se **para todo** $x, y, z \in A$ temos $x R y \land y R z \implies x R z$.

## Relação de equivalência
Dada uma relação $R$ em um conjunto $A$, dizemos que $R$ é uma **relação de equivalência** se $R$ é *reflexiva*, *simétrica* e *transitiva*.

### Classes de equivalência
Dada uma relação de equivalência $R$ em um conjunto $A$ e seja $a \in A$. A **classe de equivalência** de $a$, denotada por $[a]$, é o conjunto de todos os elementos do conjunto $A$ que estão R-relacionados com $a$.

$$
[a] = \{x | x \in A \text{ e } x R a\}
$$

#### Conjunto quociente
Um **conjunto quociente** é a coleção de **todas** as *classes de equivalência* de elementos de $A$ por uma relação de equivalência $R$.

$$
A/R = \{[a] | a \in A\}
$$

## Relação de ordem
Dada uma relação $R$ em um conjunto $A$, dizemos que $R$ é uma **relação de ordem parcial** (denotada por $\preceq $) se $R$ é *reflexiva*, *antissimétrica* e *transitiva*. Um conjunto $A$ juntamente com uma ordem parcial $R$ é chamado de **conjunto parcialmente ordenado**, ou **conjunto ordenado**. Um *conjunto parcialmente* ordenado é denotado pelo par $(A, R)$, em que $R$ é uma relação de ordem parcial no conjunto $A$, que é chamado de *conjunto fundamental* do par ordenado.

### Elementos comparáveis
É possível definir, a partir das relações de ordem, se dois elementos de um conjunto são *comparáveis*. Dado um conjunto *parcialmente ordenado* $(A, R)$ e $x, y \in A$, $x$ e $y$ são *comparáveis* se e somente se $x R y$ ou $y R x$. Portanto, dois elementos de um conjunto parcialmente ordenado são comparáveis apenas se estiverem relacionados por meio da relação de ordem parcial $R$.
Uma *ordem total*, ou *ordem linear*, é um conjunto parcialmente ordenado no qual **não existem** elementos **não comparáveis**.

### Relação de ordem parcial estrita
Dada uma relação $R$ em um conjunto $A$, dizemos que $R$ é uma **relação de ordem parcial estrita** se $R$ é *antirreflexiva*, *antissimétrica* e *transitiva*.

### Diagrama de Hasse
O diagrama de Hasse é uma representação visual de um *conjunto parcialmente ordenado*. Nessa representação, cada elemento do conjunto fundamental é representado por um ponto (ou vértice), os elementos relacionados por meio da relação de ordem parcial são unidos por um segmento de reta. Se o par $(x,y)$ está na relação de ordem parcial do conjunto, então $x$ é colocado abaixo de $y$ e os dois são unidos por um segmento de reta.

### Cadeia e anticadeia
Dado um conjunto parcialmente ordenado $P = (A, R)$ e um subconjunto $C$ tal que $C \subseteq A$. Dizemos que $C$ é uma **cadeia** de $P$ se os elementos de todos os pares em $C$ são comparáveis. Dizemos que $C$ é uma **anticadeia** de $P$ se, para todos os pares de elementos distintos em $C$, os elementos não são comparáveis.

### Mínimos e máximos
Dado um conjunto parcialmente ordenado $(A,R)$ e $x, y \in A$. Dizemos que $x$ é **elemento mínimo** se para todo $z \in A$ temos $x R z$. Dizemos que $y$ é **elemento máximo** se para todo $z \in A$, temos $z R y$. Note que, se existirem no conjunto, os elementos *mínimo* e *máximo* são **únicos.**

### Minimal e maximal
Dado um conjunto parcialmente ordenado $(A,R)$ e $x, y \in A$. Dizemos que $x$ é **elemento minimal** não existe $z \in A$ tal que $z R x$. Dizemos que $y$ é **elemento maximal** não existe $z \in A$, tal que $y R z$. Note que o elemento *mínimo* é sempre *minimal*, e o elemento *máximo* é sempre *maximal*, entretanto a **recíproca não é verdadeira**.

---
created: 17/09/2021
