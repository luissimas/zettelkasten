---
created-at: 2023-03-26
---

A Máquina de Turing é um **modelo computacional** teórico que define a capacidade computacional de qualquer computador de propósito geral. O modelo de máquina de Turing é capaz de reconhecer as linguagens **recursivamente enumeráveis**.

De maneira intuitiva, uma máquina de Turing é uma máquina composta por uma fita infinita de ambos os lados e uma unidade de controle, que possui um conjunto de estados e a capacidade de ler e escrever símbolos na fita, bem como de mover-se para a esquerda ou direita na fita. Dessa forma, é possível simular qualquer computação possível de ser realizada por um computador através de uma máquina de Turing.

Formalmente, uma máquina de Turing $M$ é uma 7-tupla ordenada

$$
M=(Q, \Sigma, \Gamma, \delta, q_0, B, F)
$$

na qual:

- $\Sigma$ é um [[Alfabeto]] de símbolos de entrada;
- $Q$ é um *conjunto finito* de estados;
- $\Gamma$ é um conjunto de símbolos da fita, de forma que $\Sigma \subseteq \Gamma$;
- $\delta$ é uma *função de transição* tal que $\delta: Q \times \Gamma \to Q \times \Gamma \times \{E,D\}$, ou seja, é uma função que, dado um estado e um símbolo da fita, produz um novo estado, escreve um símbolo na fita e movimenta a cabeça para a esquerda ou para a direita;
- $q_0$ é um elemento de $Q$ ($q_0 \in Q$) denominado *estado inicial*;
- $B$ é o símbolo branco, presente em $\Gamma$ mas não em $\Sigma$;
- $F$ é um subconjunto de $Q$ ($F \subseteq Q$) denominado *conjunto de estados finais*.

A computação de uma máquina de Turing para uma [[Palavra]] de entrada $w$ consiste na sucessiva aplicação da função de transição a partir do estado inicial e da cabeça da máquina posicionada no primeiro símbolo de $w$ até ocorrer uma condição de parada. O processamento de uma palavra $w$ por uma máquina de Turing tem três resultados possíveis:

1. Não há mais movimentos possíveis e o último estado é de aceitação. Nesse caso a palavra $w$ é **aceita**, e portanto faz parte da linguagem reconhecida por $M$ ($w \in L(M)$).
2. Não há mais movimentos possíveis e o último estado não é de aceitação. Nesse caso a palavra $w$ é **rejeitada**, e portanto não faz parte da linguagem reconhecida por $M$ ($w \notin L(M)$).
3. A máquina entra em **loop** infinito, e portanto não é possível decidir sua aceitação.

Máquinas de Turing que sempre param são chamadas de decisores, e as linguagens aceitas por elas são ditas linguagens recursivas, ou linguagens decidíveis.

Há diversas variações de máquinas de Turing, e uma particularmente interessante é a máquina de Turing com fita limitada. Nesse modelo, a máquina de Turing tem a fita limitada ao tamanho da entrada. Isso reduz seu poder computacional, e as permite reconhecer o conjunto de **linguagens sensíveis ao contexto**.
