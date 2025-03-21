---
created-at: 2023-02-11
---

Um autômato finito com movimentos vazios é definido como uma 5-upla ordenada

$$
M=(\Sigma, Q, \delta, q_0, F)
$$

na qual:

- $\Sigma$ é um [[Alfabeto]] de símbolos de entrada;
- $Q$ é um *conjunto finito* de estados possíveis;
- $\delta$ é uma *função de transição* tal que $\delta: Q \times (\Sigma \cup \{\epsilon\}) \to 2^Q$, ou seja, é uma função que, dado um estado e um símbolo do alfabeto de entrada ou a cadeia vazia, produz um **conjunto** de estados;
- $q_0$ é um elemento de $Q$ ($q_0 \in Q$) denominado *estado inicial*;
- $F$ é um subconjunto de $Q$ ($F \subseteq Q$) denominado *conjunto de estados finais*.

Exceto pelo fato do autômato finito com movimentos vazios poder aceitar a cadeia vazia na função de transição, sua definição e implicações são as mesmas do [[Autômato finito não determinístico]].

A computação de um autômato finito com movimentos vazios para uma [[Palavra]] de entrada $w$ consiste na sucessiva aplicação da *função de transição* $\delta$ a cada [[Símbolo]] de $w$ até que todos os símbolos sejam processados ou enquanto a função de transição for definida para o conjunto de estados atual e símbolo processado. Como a cada aplicação da função de transição pode levar a mais de um estado, é necessário considerar todos os estados resultantes da aplicação anterior na aplicação seguinte, dessa forma é possível processar todas as possibilidades de estados alternativos. Como o autômato possui transições vazias, é necessário também aplicar à cada estado a cadeia vazia e adicionar os estados resultantes e o de origem ao conjunto de estados alternativos. O processamento, de uma palavra $w$ por um autômato finito $M$ tem dois resultados possíveis:

1. A palavra $w$ é **aceita**, e portanto faz parte da linguagem reconhecida por $M$ ($w \in L(M)$), se e somente se, após processar o último símbolo de $w$, existe **pelo menos um estado final** no conjunto de estados alternativos atingidos.
2. A palavra $w$ é **rejeitada**, e portanto não faz parte da linguagem reconhecida por $M$ ($w \notin L(M)$), se em algum momento do processamento de $w$ a função de transição $\delta$ for **indefinida** para o conjunto de estados atual e símbolo corrente ou se, após processar o último símbolo da fita, **todos** os estados alternativos atingidos são **não-finais**.

Quando comparado com um autômato finito não-determinístico, o autômato finito com movimentos vazios não apresenta nenhuma melhoria de poder representacional. Na verdade, ambas as classes de autômatos são **equivalentes**, ou seja, dado um autômato finito com movimentos vazios, é possível obter um autômato finito não-determinístico equivalente e vice-versa (e, consequentemente, um autômato finito determinístico). Entretanto, o autômato finito com movimentos vazios pode facilitar a representação em alguns casos específicos.

A conversão de um autômato finito com movimentos vazios em um autômato finito não-determinístico consiste na construção de uma função de transição sem movimentos vazios na qual o conjunto de estados destino de cada transição não-vazia é ampliado com **todos** os demais estados possíveis de serem atingidos exclusivamente por transições vazias.

O seguinte autômato finito com movimentos vazios é capaz de reconhecer a linguagem $L = \{w | w \text{ possui como sufixo } a \text{ ou } bb \text{ ou } ccc \}$

$$
M = (\{a,b,c\}, \{q_0, q_1, q_2, q_3, q_4, q_5, q_6, q_f \}, \delta, q_0, \{q_f\})
$$

$$
\begin{tikzpicture} [node distance = 3cm, on grid, auto]

\node (q0) [state, initial, initial text = {}] {$q_0$};

\node (q2) [state, right = of q0] {$q_2$};
\node (q3) [state, right = of q2] {$q_3$};

\node (q1) [state, above right = of q2] {$q_1$};

\node (q4) [state, below left = of q2] {$q_4$};
\node (q5) [state, right = of q4] {$q_5$};
\node (q6) [state, right = of q5] {$q_6$};

\node (qf) [state, accepting, right = of q3] {$q_f$};

\path [-stealth]
    (q0) edge[loop above] node {a,b,c} (q0)

    (q0) edge node {$\epsilon$} (q1)
    (q0) edge node {$\epsilon$} (q2)
    (q0) edge node {$\epsilon$} (q4)

    (q1) edge node {a} (qf)

    (q2) edge node {b} (q3)
    (q3) edge node {b} (qf)

    (q4) edge node {c} (q5)
    (q5) edge node {c} (q6)
    (q6) edge node {c} (qf)
\end{tikzpicture}
$$
