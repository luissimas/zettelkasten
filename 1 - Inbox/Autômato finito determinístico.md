---
created-at: 2023-02-11
---

Um autômato finito determinístico é definido como uma 5-upla ordenada

$$
M=(\Sigma, Q, \delta, q_0, F)
$$

na qual:

-  $\Sigma$ é um [[Alfabeto]] de símbolos de entrada;
-  $Q$ é um *conjunto finito* de estados possíveis;
-  $\delta$ é uma *função de transição* tal que $\delta: Q \times \Sigma \to Q$, ou seja, é uma função que, dado um estado e um símbolo do alfabeto de entrada, produz um novo estado;
-  $q_0$ é um elemento de $Q$ ($q_0 \in Q$) denominado *estado inicial*;
-  $F$ é um subconjunto de $Q$ ($F \subseteq Q$) denominado *conjunto de estados finais*.

A computação de um autômato finito para uma [[Palavra]] de entrada $w$ consiste na sucessiva aplicação da *função de transição* $\delta$ a cada [[Símbolo]] de $w$ até que todos os símbolos sejam processados ou enquanto a função de transição for definida para o estado atual e símbolo processado. O processamento de uma palavra $w$ por um autômato finito $M$ tem dois resultados possíveis:

1.  A palavra $w$ é **aceita**, e portanto faz parte da linguagem reconhecida por $M$ ($w \in L(M)$), se e somente se, após processar o último símbolo de $w$, o autômato assume um **estado final**.
2.  A palavra $w$ é **rejeitada**, e portanto não faz parte da linguagem reconhecida por $M$ ($w \notin L(M)$), se em algum momento do processamento de $w$ a função de transição $\delta$ for **indefinida** para o estado atual e símbolo corrente ou se, após processar o último símbolo da fita, o autômato assume um **estado não-final**.

O seguinte autômato finito é capaz de reconhecer a linguagem $L = \{w | w \text{ possui } aa \text{ ou } bb \text{ como subpalavra} \}$

$$
M = (\{a,b\}, \{q_0, q_1, q_f \}, \delta, q_0, \{q_f\})
$$

$$
\begin{tikzpicture} [node distance = 3cm, on grid, auto]

\node (q0) [state, initial, initial text = {}, initial where=above] {$q_0$};
\node (q1) [state, below left = of q0] {$q_1$};
\node (q2) [state, below right = of q0] {$q_2$};
\node (qf) [state, accepting, below right = of q1] {$q_f$};

\path [-stealth]
    (q0) edge node[above left] {a}   (q1)
    (q0) edge node {b}   (q2)
    (q1) edge[bend left=10] node {b}   (q2)
    (q2) edge[bend left=10] node {a}   (q1)
    (q1) edge[] node[below left] {a}  (qf)
    (q2) edge[] node {b}  (qf)
    (qf) edge[loop below] node {a,b} (qf)
\end{tikzpicture}
$$
