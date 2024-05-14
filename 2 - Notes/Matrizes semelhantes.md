---
date: 2024-05-14
---

Dado um [[Transformação linear|operador linear]] $T: V \to V$, se $B$ e $B'$ são [[Base de um espaço vetorial|bases]] de $V$ e $[T]_B^B$ e $[T]_{B'}^{B'}$ são [[Matriz de uma transformação linear|matrizes]] que representam o operador nas bases $B$ e $B'$ respectivamente, então

$$[T]_{B'}^{B'} = Q^{-1}[T]_B^BQ$$

em que $Q = [A]_B^{B'}$ é a matriz de [[Mudança de base de um espaço vetorial|mudança da base]] $B'$ para a base $B$.

Nesse caso, $[T]_B^B$ e $[T]_{B'}^{B'}$ são chamadas de **matrizes semelhantes**. Portanto, duas matrizes são semelhantes quando definem em $V$ um mesmo operador linear $T$ em duas bases diferentes, ou seja, duas matrizes $[T]_B^B$ e $[T]_{B'}^{B'}$ são semelhantes se existe uma matriz inversível $Q$ tal que:

$$[T]_{B'}^{B'} = Q^{-1}[T]_B^BQ$$