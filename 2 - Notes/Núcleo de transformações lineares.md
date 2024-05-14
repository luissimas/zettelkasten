---
date: 2024-05-14
---

Seja $T: U \to V$ uma [[Transformação linear]]. O **núcleo** de $T$, denotado por $Ker(T)$ (ou $N(T)$), é o conjunto dos vetores $u \in U$ que **são levados ao vetor nulo de** $V$, ou seja:

$$Ker(T) = \{u \in U \mid T(u) = 0 \in V\}$$

![[nucleotransformacao.png]]

Note que se $T: U \to V$ é uma transformação linear, então $Ker(T)$ é um [[Subespaço vetorial]] de $V$.

Uma transformação linear $T: U \to V$ é **injetora** se e somente se $Ker(T) = \{0\}$.

Dada uma transformação linear $T: U \to V$, se $V$ e $U$ são espaços vetoriais de dimensão finita, então $\dim V = \dim Ker(T) + \dim Im(T)$. Desse mesmo teorema segue que, se $\dim U = \dim V$, então $T$ é **injetora** se e somente se é **sobrejetora**.