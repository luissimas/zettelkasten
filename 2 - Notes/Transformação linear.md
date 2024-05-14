---
date: 2024-05-14
---

Sejam $V$ e $W$ [[Espaço vetorial|espaços vetoriais]] reais, uma **transformação linear** (ou aplicação linear) é uma função $T: V \to W$ tal que, para quaisquer $u, v \in V$ e $\alpha \in \mathbb{R}$, as seguintes condições forem satisfeitas:

1.  $T(u+v) = T(u) + T(v)$
2.  $T(\alpha v) = \alpha T(v)$
3.  $T(0) = 0$

Quando uma transformação linear $T$ associa elementos de um mesmo conjunto $V$, ou seja, $T: V \to V$, ela é chamada de **operador linear** sobre $V$.

O seguinte teorema garante a **existência e unicidade** de uma transformação linear, esse resultado nos permite obter transformações lineares a partir dos resultados de sua aplicação em vetores que constituem uma [[Base de um espaço vetorial]].

Sejam $U$ e $V$ espaços vetoriais reais, $\{u_1, u_2, \dots, u_n\}$ uma **base** de $U$ e $v_1, v_2, \dots, v_n \in V$ um conjunto de vetores. Existe uma **única transformação linear** $T: U \to V$ tal que:

$$T(u_1) = v_1, T(u_2) = v_2, \dots, T(u_n) = v_n$$
