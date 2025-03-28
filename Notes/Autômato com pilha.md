---
created-at: 2023-03-03
---

Um autômato com pilha é um **modelo computacional** análogo ao [[Autômato finito]], porém conta com uma **pilha** como **memória auxiliar** e é não-determinístico. A pilha é independente da fita de entrada e não possui limite de tamanho, o que permite a implementação de um contador para símbolos de entrada. Diferentemente dos autômatos finitos, o não-determinismo dos autômatos com pilha aumenta a capacidade de representação, permitindo-os reconhecer a classe das [[Linguagens livres de contexto]]. Como exemplo, o reconhecimento da linguagem $L=\{ww^r \mid w \in \Sigma^*, \space w^r = reverse(w) \}$ sobre qualquer alfabeto $\Sigma$ só é possível por um autômato com pilha não-determinístico.

Um resultado interessante é que qualquer linguagem livre de contexto pode ser reconhecida por um autômato com pilha com somente um estado. Isso mostra que a estrutura de pilha é suficiente como única memória, dispensando a necessidade de usar os estados para memorizar o contexto passado.

Uma [[Linguagem formal|linguagem]] $L$ é [[Linguagens livres de contexto|livre de contexto]] se e somente se existe um autômato com pilha $P$ capaz de reconhecer $L$, ou seja, tal que $L = L(P)$.

Um autômato com pilha é definido como uma 7-tupla ordenada

$$
P = (Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)
$$

na qual:

- $Q$ é um *conjunto finito* de estados possíveis;
- $\Sigma$ é um [[Alfabeto]] de símbolos de entrada;
- $\Gamma$ é um alfabeto de pilha finito, ou seja, um conjunto de símbolos que podem ser inseridos na pilha;
- $\delta$ é uma *função de transição* tal que $\delta: Q \times (\Sigma \cup {\epsilon}) \times (\Gamma \cup {\epsilon})  \to 2^{Q \times \Gamma^*}$, ou seja, é uma função que, dado um **estado**, um **símbolo de entrada** e um **símbolo da pilha**, produz um par $(p, y)$, no qual $p$ é o novo estado e $y$ é a cadeia de símbolos que substitui o símbolo no topo da pilha. Note ainda que o autômato aceita transição vazia tanto nos símbolos de entrada quanto na pilha, podendo fazer transições espontâneas para ambos os elementos;
- $q_0$ é um elemento de $Q$ ($q_0 \in Q$) denominado *estado inicial*;
- $Z_0$ é o símbolo inicial da pilha;
- $F$ é um subconjunto de $Q$ ($F \subseteq Q$) denominado *conjunto de estados finais*.

A *configuração instantânea* de um autômato resume o estado da execução em um determinado momento, e facilita o seu acompanhamento. A configuração instantânea de um autômato de pilha é uma tripla $(q, w, y)$ onde $q$ é o estado atual, $w$ é a parte restante da entrada e $y$ é o conteúdo da pilha. Um movimento genérico em um autômato com pilha pode ser representado através da configuração instantânea resultante após o processamento do símbolo. Por exemplo, o seguinte movimento assume um autômato no estado $q$ processando um símbolo $a$ da entrada (sendo $w$ o restante da entrada) e $X\beta$ na pilha. Após processar o símbolo $a$, o autômato assume o estado $p$, substituindo o símbolo $X$ por $\alpha$ no topo da pilha.

$$
(q,aw,X\beta) \vdash (p,w,\alpha \beta)
$$

A notação $\vdash^*$ indica uma sequência de movimentos, e pode ser utilizada para representar o processamento de uma cadeia.

A computação de um autômato $P$ com pilha para uma [[Palavra]] de entrada $w$ consiste na sucessiva aplicação da *função de transição* $\delta$ a cada [[Símbolo]] de $w$ até que uma condição de parada seja atingida. Existem duas formas de decidir se um autômato com pilha aceita ou não uma entrada:

- A aceitação por **estado final** consiste na aceitação de uma cadeia apenas se, ao terminar de ler toda a cadeia, o autômato se encontra em um estado final, ou seja, $L(P) = \{w \mid (q_0, w, Z_0) \vdash^* (q, \epsilon, \alpha\} \mid q \in F$. Nessa forma de aceitação não importa o conteúdo da pilha ao final da leitura.
- A aceitação por **pilha vazia** consiste na aceitação de uma cadeia apenas se, ao terminar de ler toda a cadeia, a pilha do autômato se encontra vazia, ou seja, $L(P) = \{w \mid (q_0, w, Z_0) \vdash^* (q, \epsilon, \epsilon\}$. Nessa forma de aceitação não importa o estado do autômato ao final da leitura, e é inclusive possível omitir o componente $F$ (conjunto de estados finais) do autômato.

Ambas as formas são equivalentes, e é possível converter um autômato com pilha com aceitação por estado final para um autômato com pilha com aceitação por pilha vazia e vice-versa.

Sendo assim, a computação de um autômato com pilha para uma palavra de entrada $w$ pode ter dois resultados:

1. A palavra $w$ é **aceita**, e portanto faz parte da linguagem reconhecida por $M$ ($w \in L(M)$), se e somente se, após processar o último símbolo de $w$, o autômato assume um **estado final** ou a **pilha é vazia**, dependendo da definição utilizada.
2. A palavra $w$ é **rejeitada**, e portanto não faz parte da linguagem reconhecida por $M$ ($w \notin L(M)$), se em algum momento do processamento de $w$ a função de transição $\delta$ for **indefinida** para o estado atual e símbolo corrente ou se, após processar o último símbolo da fita, o autômato assume um **estado não-final** ou a pilha é **não-vazia**, dependendo da definição utilizada.

O seguinte autômato com pilha é capaz de reconhecer a linguagem $L=\{ww^r \mid w \in \Sigma^*, \space w^r = reverse(w) \}$

$$
P = (\{q_0, q_1, q_f\}, \{0,1\}, \{0,1,\$\}, \delta, q_0, Z_0, \{q_f\})
$$

$$
\begin{tikzpicture} [node distance = 3cm, on grid, auto]

\node (q0) [state, initial, initial text = {}, initial] {$q_0$};
\node (q1) [state, right = of q0] {$q_1$};
\node (qf) [state, accepting, right = of q1] {$q_f$};

\path [-stealth]
    (q0) edge[loop above] node[align=center]{
 0, \$/0\$\\
 1, \$/1\$\\
 0, 0/00\\
 0, 1/01\\
 1, 0/10\\
 1, 1/11
}   (q0)
    (q0) edge node[align=center]{
 $\epsilon$, \$/\$\\
 $\epsilon$, 0/0\\
 $\epsilon$,  1/1
}   (q1)
    (q1) edge[loop above] node[align=center]{
 0, 0/$\epsilon$\\
 1, 1/$\epsilon$\\
}   (q1)
    (q1) edge node[align=center]{$\epsilon$, \$/\$}   (qf)
\end{tikzpicture}
$$
