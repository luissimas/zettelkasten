---
date: 2024-05-14
---

Seja $V$ um [[Espaço vetorial]] e $u_1, u_2, \dots, u_n \in V$. O conjunto $\{u_1, u_2, \dots, u_n\}$ é dito **linearmente independente (L.I.)** se e somente se a equação

$$
a_1 u_1, a_2 u_2, \dots, a_n u_n = 0
$$

tiver apenas a solução $a_1 = a_2 = \dots = a_n = 0$, chamada de *solução trivial*. Caso a equação seja satisfeita para algum $a_i \neq 0$, o conjunto é dito **linearmente dependente (L.D.)**.

Note que o subconjunto unitário $\{0\}$ de um espaço vetorial $V$ é **L.D.**, pois para qualquer $a \in \mathbb{R}$ a equação é satisfeita. De forma análoga, um subconjunto unitário $\{v\}, v \neq 0$ de um espaço vetorial $V$ é **L.I.**, pois a equação só é satisfeita para $a=0$.

Para verificar se um conjunto de vetores é **L.I.** ou **L.D.** devemos, sempre, resolver um **sistema linear homogêneo**. Nesse caso os vetores são **L.I.** se a única solução do sistema linear é a solução trivial, e os vetores são **L.D.** se o sistema admite infinitas soluções. Uma forma alternativa à resolução dos sistemas lineares é calcular os determinantes da matriz dos coeficientes. Seja $A$ a matriz dos coeficientes do sistema linear, se $\det(A) = 0$, então o sistema admite infinitas soluções, logo os vetores são **L.D.**; caso contrário, ou seja, se $\det(A) \neq 0$, então o sistema admite apenas a solução trivial, logo os vetores são **L.I.**.

O teorema enunciado a seguir relaciona a **dependência** com **combinação** linear:

O conjunto $\{u_1, u_2, \dots, u_n\}$ é **linearmente dependente (L.D.)** se e somente se um dos vetores $u_i$ for [[Combinação linear]] dos outros.