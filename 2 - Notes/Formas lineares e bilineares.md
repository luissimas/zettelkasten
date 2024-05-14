---
date: 2024-05-14
---

Dado um [[Espaço vetorial]] $V$, uma **forma linear** $T$ é uma [[Transformação linear]] que associa vetores de $V$ ao conjunto dos reais, ou seja, $T: V \to \mathbb{R}$.

Da mesma forma, dado um espaço vetorial $V$, uma **forma bilinear** $B$ é uma aplicação que associa dois vetores de $V$ ao conjunto dos reais, ou seja, $B: V \times V \to \mathbb{R}$. Além disso, as formas bilineares devem satisfazer as seguintes condições:

1.  Para todo $w \in V$, $B(u,w)$ é uma forma linear relativamente à primeira variável, ou seja:

    $$B(u_1 + u_2, w) = B(u_1, w) + B(u_2, w) \quad \text{e} \quad B(\alpha u, w) = \alpha B(u, w) \quad \forwall u_1, u_2, u \in V, \alpha \in \mathbb{R}$$

2.  Para todo $v \in V$, $B(u,w)$ é uma forma linear relativamente à segunda variável, ou seja:

    $$B(u, w_1 + w_2) = B(u, w_1) + B(u, w_2) \quad \text{e} \quad B(u, \alpha w) = \alpha B(u, w) \quad \forwall w_1, w_2, u \in V, \alpha \in \mathbb{R}$$

Uma forma bilinear $B: V \times V \to \mathbb{R}$ é dita **simétrica** se para todos os vetores $u, v \in V$ tem-se:

$$B(u,v) = B(v, u)$$
