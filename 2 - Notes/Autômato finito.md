---
created-at: 2023-02-11
---

Um Autômato Finito é **modelo computacional sequencial** representado através de um sistema de estados finitos.

Autômatos Finitos podem ser interpretados como uma máquina **sem memória auxiliar** que processa uma fita de [[Símbolo|símbolos]] sequencialmente sem alterar a fita. O processamento da fita consiste em, dado o símbolo corrente e o estado atual da máquina, alterar o estado atual com base em um programa ou função de transição.

Diferentes autômatos podem aceitar uma mesma linguagem. Por conta disso, dizemos que dois autômatos finitos $M_1$ e $M_2$ são ditos **equivalentes** se e somente se eles geram a mesma linguagem, ou seja, $L(M_1) = L(M_2)$.

Uma [[Linguagem formal|linguagem]] $L$ é [[Linguagens regulares|regular]] se e somente se existe um autômato finito $M$ capaz de reconhecer $L$, ou seja, tal que $L = L(M)$.

Um autômato finito pode ser representado na forma de um diagrama no qual os estados são representados como nós e as transições são arestas entre os nós.

Em geral, existem três tipos de Autômatos Finitos:

- [[Autômato finito determinístico]]
- [[Autômato finito não determinístico]]
- [[Autômato finito com movimentos vazios]]

Em termos de [[Análise assintótica|complexidade de algoritmos]], autômatos finitos pertencem à classe mais eficiente em termos de tempo de processamento, usualmente executando um número de operações proporcional ao tamanho da cadeia a ser reconhecida. Em geral, o tempo de processamento não depende do autômato considerado. Entretanto, é possível otimizar um autômato através da [[Minimização de um autômato finito|minimização de estados]].
