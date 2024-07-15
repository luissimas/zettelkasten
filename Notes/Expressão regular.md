---
created-at: 2023-02-12
---

Toda [[Linguagens regulares|linguagem regular]] pode ser descrita por uma expressão regular. Expressões regulares são um formalismo **denotacional** e também **gerador**, pois além de descrever uma linguagem regular, as expressões regulares fornecem a informação necessária para inferir suas regras de geração.

Uma expressão regular sobre um alfabeto $\Sigma$ pode ser definida indutivamente da seguinte forma:

1. Base da indução:
    1. A expressão $\varnothing$ é uma expressão regular que denota a linguagem vazia $\varnothing$.
    2. A expressão $\epsilon$ é uma expressão regular e denota a linguagem que contém exclusivamente a palavra vazia $\{\epsilon\}$.
    3. Para qualquer símbolo $x \in \Sigma$, $x$ é uma expressão regular e denota a linguagem que contém exclusivamente a palavra constituída pelo símbolo $x$ $\{x\}$.
2. Passo de indução: Se $r$ e $s$ são expressões regulares e denotam as linguagens $R$ e $S$, respectivamente, então:
    1. *União:* a expressão $(r+s)$ denota a linguagem $R \cup S$.
    2. *Concatenação*: a expressão $(rs)$ denota a linguagem $RS = \{uv | u \in R, v \in S\}$.
    3. *Concatenação sucessiva*: a expressão $(r^*)$ denota a linguagem $R^*$.

A precedência dos três operadores das linguagens regulares respeitam a seguinte ordem de prioridade (da maior para a menor prioridade):

1. Concatenação sucessiva
2. Concatenação
3. União

Se $r$ é uma expressão regular, a linguagem denotada por $r$ é dita *linguagem gerada por* $r$, denotada por $L(r)$.
