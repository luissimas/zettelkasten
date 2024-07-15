---
created-at: 2024-05-14
---

Dado um [[Espaço vetorial euclidiano]] $V$, um [[Transformação linear|operador linear]] $T: V \to V$ é dito **ortogonal** se preservar a norma de cada vetor $v \in V$, ou seja:

$$||T(u)|| = ||u|| \quad \forall u \in V$$

Se $T$ é um operador ortogonal, então a [[Matriz de uma transformação linear|matriz]] $A$ da transformação $T$ é também **ortogonal**, ou seja:

$$A^{-1} = A^t$$

isto é, a inversa da matriz $A$ coincide com sua transposta. Note que se $A$ é ortogonal, então $\det(A) = \pm 1$. Além disso, as colunas (ou linhas) de uma matriz ortogonal são sempre vetores **ortonormais**.

Todo operador linear ortogonal $T:V \to V$ **preserva** o **produto escalar** de vetores, ou seja, para quaisquer vetores $u, v \in V$ tem-se:

$$T(u) \cdot T(v) = u \cdot v$$