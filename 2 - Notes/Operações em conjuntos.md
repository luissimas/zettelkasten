# Operações em conjuntos

## União
A união de dois conjuntos $A$ e $B$ é o conjunto de todos os elementos que pertencem a $A$ **ou** a $B$.

>$$
  A \cup B = \{x | x \in A \textbf{ ou } x \in B\}
>$$

## Intersecção
A *intersecção* de dois conjuntos $A$ e $B$ é o conjunto de todos os elementos que pertencem a $A$ **e** a $B$.

>$$
  A \cap B = \{x | x \in A \textbf{ e } x \in B\}
>$$

Se $A \cap B = \varnothing$, então $A$ e $B$ são conjuntos *disjuntos*.

## Complementar absoluto
O *complementar absoluto* de um conjunto $A$, denotado por $A'$, $\bar{A}$ ou $A^c$ é o conjunto formado por todos os elementos que pertencem a $\mathbb{U}$ mas **não pertencem** a $A$.

>$$
  A' = \{x | x \in \mathbb{U} \textbf{ e } x \not \in A\}
>$$

## Complementar relativo (diferença)
A *diferença* entre dois conjuntos $A$ e $B$, denotada por $A-B$ ou $A \setminus B$  é o conjunto dos elementos que pertencem a $A$ mas não pertencem a $B$.

>$$
  A - B = \{x | x \in A \textbf{ e } x \not \in B\} = A \cap B'
>$$

## Diferença simétrica
A *diferença simétrica* entre dois conjuntos $A$ e $B$ é o conjunto dos elementos que pertencem a $A$ ou a $B$ mas **não a ambos**.

>$$
  A \oplus B = (A \cup B) - (A \cap B)
>$$

## Produto cartesiano
O *produto cartesiano* de dois conjuntos $A$ e $B$, denotado por $A \times B$, é o conjunto de **pares ordenados** $(a, b)$ tal que $a \in A$ e $b \in B$. Note que a ordem dos conjuntos altera o resultado do produto, pois altera a ordem dos elementos nos pares do conjunto resultante.

> Dados quaisquer conjuntos $A_1, A_2, \dots, A_n$, o conjunto de todas as *n-tuplas* $(a_1, a_2, \dots, a_n)$ onde $a_1 \in A_1, a_2 \in A_2, \dots, a_n \in A_n$ é chamado de produto cartesiano de $A_1, A_2, \dots, A_n$.
>$$
  A_1 \times A_2 \times \dots \times A_n = \prod_{i=1}^{n}{A_i}
>$$

O produto cartesiano entre um conjunto $A$ e o próprio conjunto é denotado por $A \times A = A^2$.

---

created: 17/08/2021
