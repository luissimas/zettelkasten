---
date: 2024-05-14
---

Dado um [[Espaço vetorial]] $V$, um **produto interno** é qualquer função $f: V \times V \to \mathbb{R}$, indicada por $u \cdot v$ ou $\langle u, v \rangle$, tal que para quaisquer $u, v, w \in V$ e $\alpha \in \mathbb{R}$ os seguintes axiomas sejam verdadeiros:

1. $u \cdot v = v \cdot u$
2. $u \cdot (v + w) = u \cdot v + u \cdot w$
3. $(\alpha u) \cdot v= \alpha (u \cdot v)$
4. $u \cdot v = v \cdot u$

Um espaço vetorial real de [[Dimensão de um espaço vetorial|dimensão]] finita no qual está definido um produto interno é chamado de **espaço vetorial euclidiano**.

Dado um vetor $u \in V$, sendo $V$ um espaço com produto interno $\langle \cdot, \cdot \rangle$, a **norma** (ou comprimento, ou módulo) de $v$, relativamente a este produto interno, é o número real não-negativo denotado por $||v||$, definido por:

$$||v|| = \sqrt{\langle v, v \rangle}$$

Se $||v|| = 1$, então $v$ é chamado **vetor unitário**. Dado um vetor não-nulo $v \in V$, sendo $V$ um espaço euclidiano, o vetor $u$ definido por:

$$u = \frac{v}{||v||}$$

é unitário.

Dados dois vetores não-nulos $u$ e $v$, o **ângulo** $\theta$ entre os vetores é dado por:

$$\cos{\theta} = \frac{u \cdot v}{||u||||v||}, \quad 0 \leq \theta \leq \pi$$

Dado um espaço vetorial euclidiano $V$, dois vetores $u, v \in V$ são ditos **ortogonais** (denotado por $u \perp v$) se e somente se $u \cdot v = 0$. Da mesma forma, dado um conjunto de vetores $\{u_1, \dots, u_n\} \subset V$ é **ortogonal** se dois quaisquer vetores distintos do conjunto são ortogonais, ou seja, se $u_i \cdot v_j = 0$, $i \neq j$. Um conjunto ortogonal no qual cada elemento tem norma igual a $1$ é dito um conjunto **ortonormal**.
