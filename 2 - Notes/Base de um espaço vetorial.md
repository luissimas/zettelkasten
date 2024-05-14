---
date: 2024-05-14
---

Seja $V$ um [[Espaço vetorial]] e $B = \{u_1, u_2, \dots, u_n\}$ um subconjunto de $V$. Dizemos que $B$ é uma **base** de $V$ se:

1.  $\{u_1, u_2, \dots, u_n\}$ são [[Dependência linear|linearmente independentes]]
2.  $\{u_1, u_2, \dots, u_n\}$ **geram** $V$

Como implicação da definição de [[Dependência linear]] e [[Subespaço gerado]], tem-se o seguinte teorema:

Se $B=\{u_1, u_2, \dots, u_n\}$ é uma base de um espaço vetorial $V$, então todo e qualquer vetor $v$ de $V$ pode ser escrito de **maneira única** como combinação linear dos vetores de $B$.

Sendo $B$ uma base de $V$, como qualquer vetor pode ser escrito de maneira única como combinação linear dos vetores de $B$, então os **escalares únicos** $a_1, a_2, \dots, a_n$ determinam um único vetor $v$. Por conta disso, os escalares $a_1, a_2, \dots, a_n$ são chamados de **coordenadas** ou **componentes** do vetor $v$ em relação à base $B$. Pode-se representar o vetor $v$ em relação à base $B$ da seguinte forma: 

$$
v = (a_1, a_2, \dots, a_n)
$$

Note que se, dado um espaço vetorial $V$ e um conjunto não nulo de vetores $\{u_1, u_2, \dots, u_n\}$ tais que $[u_1, u_2, \dots, u_n] = V$, então o conjunto $\{u_1, u_2, \dots, u_n\}$ **contém uma base** de $V$.

Um resultado importante que segue dos teoremas relacionados à base de um espaço vetorial é o de que **qualquer base** de um espaço vetorial $V$ tem o **mesmo número de elementos**.