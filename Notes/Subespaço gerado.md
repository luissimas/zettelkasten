---
created-at: 2024-05-14
---

Seja $V$ um [[Espaço vetorial]] e $S = \{u_1, u_2, \dots, u_n\}$ um subconjunto de $V$. O subconjunto de $V$ formado por **todas as** [[Combinação linear|combinações lineares]] de elementos de $S$, ou seja:

$$[S] = \{a_1 u_1 + a_2 u_2 + \dots + a_n u_n \mid a_i \in \mathbb{R}, \forall i\}$$

é chamado de **espaço vetorial gerado** por $S$. Os vetores $u_1, u_2, \dots, u_n$ são chamados **geradores** de $[S]$. Note que $[S]$ é um subespaço vetorial de $V$.

Para mostrar que um conjunto $S = \{u_1, u_2, \dots, u_n\}$ de vetores gera um [[Subespaço vetorial|subespaço]] $V$, é necessário mostrar que, para qualquer $v \in V$, a equação

$a_1u_1 + a_2u_2 + \dots + a_nu_n = v$

tem **solução única**.