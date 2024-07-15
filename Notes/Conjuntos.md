---
created-at: 2021-08-16
---
> Um *conjunto* é uma coleção de objetos **não ordenada** e **sem repetição**. De maneira geral, todos os objetos de um conjunto têm alguma propriedade em comum, sendo essa a razão pela qual os elementos foram agrupados.

# Pertinência a um conjunto
Cada objeto de um conjunto **pertence** ao dado conjunto. A relação de pertinência a um conjunto é denotada pelo símbolo $\in$.
- $x \in A$ significa que o objeto $x$ **é** um elemento do conjunto $A$.
- $x \notin A$ significa que o objeto $x$ **não é** um elemento do conjunto $A$.

# Descrição de conjuntos
Existem algumas formas de descrever um conjunto:

1. Listar total ou parcialmente os elementos do conjunto: $A = \{a, b, c\}$, $B = \{2, 4, 6, \dots\}$
2. Explicitar ao menos um elemento do conjunto e descrever os outros em termos de elementos já conhecidos: $\text{i. } 2 \in B \quad$ e $\quad\text{ii. Se } n \in B \text{, então } (n + 2) \in B$
3. Descrever uma propriedade que carateriza todos os elementos do conjunto: $B = \{x | x \text{ é um inteiro par, } x > 0\}$

Um conjunto vazio $\varnothing$ é um conjunto sem nenhum elemento.

# Cardinalidade
A cardinalidade (ou tamanho) de um conjunto é o **número de elementos** desse conjunto. A cardinalidade de um conjunto $A$ pode ser denotada por $|A|$ ou $\#A$.
Um conjunto é dito **finito** se sua cardinalidade é um número natural $n$, caso contrário, o conjunto é dito **infinito**, tendo sua cardinalidade denotada por $\infty$.
A cardinalidade do conjunto vazio é zero, ou seja $|\varnothing| = 0$.

# Conjunto universo
O *conjunto universo* define o **contexto** dos objetos em discussão. Esse conjunto é geralmente denotado por $\mathbb{U}$. Quando há a possibilidade de ambiguidade na descrição de um conjunto, utiliza-se o conjunto universo para definir o contexto trabalhado no determinado momento.

# Subconjunto
Um conjunto $A$ é um **subconjunto** de $B$ se todo elemento de $A$ também é elemento de $B$. Essa relação pode ser denotada por:
- $A \subseteq B$: $A$ está contido em $B$
- $B \supseteq A$: $B$ contém $A$

$A$ não é subconjunto de $B$ se pelo menos um elemento de $A$ não pertence a $B$, essa relação é denotada por $A \not\subset B$.

Algumas propriedades importantes da contingência de conjuntos:
1. Todo conjunto é subconjunto do conjunto universo e contém o conjunto vazio: $\varnothing \subseteq A \subseteq \mathbb{U}$
2. Todo conjunto é subconjunto de si mesmo: $A \subseteq A$
3. Transitividade: se $A \subseteq B$ e $B \subseteq C$ então $A \subseteq C$
4. Igualdade: $A = B$ se e somente se $A \subseteq B$ e $B \subseteq A$

# Conjunto potência
O conjunto potência (ou conjunto das partes) de um conjunto $S$, denotado por $2^S$ ou $\wp (P)$, é aquele formado por **todos** os subconjuntos de $S$. Note que para qualquer conjunto $S$, $\wp (P)$ sempre contém pelo menos $\varnothing$ e $S$ como elementos.

# Partições
Dado um conjunto não-vazio $A$, uma *partição* $P$ de $A$ é uma subdivisão de $A$ em conjuntos não-vazios, disjuntos dois a dois de tal forma que a união de todos os elementos de $P$ é $A$.