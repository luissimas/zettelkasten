---
created-at: 2023-02-11
---

Um autômato finito não-determinístico é definido como uma 5-upla ordenada

$$
M=(\Sigma, Q, \delta, q_0, F)
$$

na qual:

- $\Sigma$ é um [[Alfabeto]] de símbolos de entrada;
- $Q$ é um *conjunto finito* de estados possíveis;
- $\delta$ é uma *função de transição* tal que $\delta: Q \times \Sigma \to 2^Q$, ou seja, é uma função que, dado um estado e um símbolo do alfabeto de entrada, produz um **conjunto** de estados;
- $q_0$ é um elemento de $Q$ ($q_0 \in Q$) denominado *estado inicial*;
- $F$ é um subconjunto de $Q$ ($F \subseteq Q$) denominado *conjunto de estados finais*.

A principal diferença desse tipo de autômato para um [[Autômato finito determinístico]] reside no fato de que a função de transição é não-determinística, ou seja, produz um conjunto de estados ao invés de apenas um estado individual.

A computação de um autômato finito não-determinístico para uma [[Palavra]] de entrada $w$ consiste na sucessiva aplicação da *função de transição* $\delta$ a cada [[Símbolo]] de $w$ até que todos os símbolos sejam processados ou enquanto a função de transição for definida para o conjunto de estados atual e símbolo processado. Como a cada aplicação da função de transição pode levar a mais de um estado, é necessário considerar todos os estados resultantes da aplicação anterior na aplicação seguinte, dessa forma é possível processar todas as possibilidades de estados alternativos. O processamento, de uma palavra $w$ por um autômato finito $M$ tem dois resultados possíveis:

1. A palavra $w$ é **aceita**, e portanto faz parte da linguagem reconhecida por $M$ ($w \in L(M)$), se e somente se, após processar o último símbolo de $w$, existe **pelo menos um estado final** no conjunto de estados alternativos atingidos.
2. A palavra $w$ é **rejeitada**, e portanto não faz parte da linguagem reconhecida por $M$ ($w \notin L(M)$), se em algum momento do processamento de $w$ a função de transição $\delta$ for **indefinida** para o conjunto de estados atual e símbolo corrente ou se, após processar o último símbolo da fita, **todos** os estados alternativos atingidos são **não-finais**.

Quando comparado a um autômato finito determinístico, o autômato finito não-determinístico não apresenta nenhuma melhoria de poder representacional. Na verdade, ambas as classes de autômatos são **equivalentes**, ou seja, dado um autômato finito não-determinístico, é possível obter um autômato finito determinístico equivalente e vice-versa. Apesar disso, muitas vezes é mais fácil desenvolver um autômato finito não-determinístico do que um determinístico. Dessa forma, por vezes é mais fácil desenvolver um autômato finito não-determinístico e então obter o autômato finito determinístico equivalente do que tentar obter diretamente o autômato finito determinístico.

A conversão de um autômato finito não-determinístico em um autômato finito determinístico consiste em transformar cada combinação de estados do autômato não-determinístico em um estado do autômato determinístico.

O seguinte autômato finito não-determinístico é capaz de reconhecer a linguagem $L = \{w | w \text{ possui } aa \text{ ou } bb \text{ como subpalavra} \}$

$$
M = (\{a,b\}, \{q_0, q_1, q_f \}, \delta, q_0, \{q_f\})
$$

$$
\begin{tikzpicture} [node distance = 3cm, on grid, auto]

\node (q0) [state, initial, initial text = {}, initial where=left] {$q_0$};
\node (q1) [state, below left = of q0] {$q_1$};
\node (q2) [state, below right = of q0] {$q_2$};
\node (qf) [state, accepting, below right = of q1] {$q_f$};

\path [-stealth]
    (q0) edge[loop right] node {a,b}   (q0)
    (q0) edge node[above left] {a}   (q1)
    (q0) edge node {b}   (q2)
    (q1) edge[] node[below left] {a}  (qf)
    (q2) edge[] node {b}  (qf)
    (qf) edge[loop below] node {a,b} (qf)
\end{tikzpicture}
$$
