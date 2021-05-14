# Lógica proposicional
A lógica proposicional tem o objetivo mapear o conhecimento em uma linguagem sem ambiguidades processável matematicamente.
Existem dois princípios fundamentais na lógica proposicional:

- **Princípio da não contradição: ** uma proposição não pode ser verdadeira e falsa ao mesmo tempo.
- **Princípio do terceiro excluído: ** toda proposição ou é verdadeira ou falsa, não há terceiro valor possível.

É importante antes de mais nada entender o conceito de **proposição**, pois as proposições são as estruturas básicas que compõe a lógica proposicional.
Uma *proposição* é um enunciado completo que exprime um pensamento de sentido completo no qual podemos atribuir um *valor-verdade*. Proposições afirmam fatos ou exprimem juízos que podem (ou não) representar a realidade. Atribuímos às proposições *valores lógicos*, que podem ser *verdadeiro($V$)* ou *falso($F$)*.
Uma proposição pode ser classificada em um dos dois tipos:

- Atômica (fórmula atômica): formada por uma e somente uma proposição, não possui nenhum conectivo lógico.
- Composta (fórmula composta): formada por duas ou mais proposições atômicas ligadas por conectivos lógicos.

Como qualquer outra linguagem, a lógica proposicional é composta por **sintaxe** e **semântica**.

## Sintaxe
A sintaxe especifica quais são os símbolos utilizados na linguagem e como esses símbolos se combinam para formar uma sequência válida.

### Alfabeto
Chamamos de *alfabeto* da lógica proposicional o conjunto de símbolos a partir dos quais sequências válidas são construídas. Os símbolos que compõe esse alfabeto são:

- Dois símbolos de pontuação: *(* e *)*.
- Dois símbolos de verdade: verdadeiro *($V$)* e falso *($F$)*.
- Um conjunto de *átomos*: *p, q, r, s, t etc...*
- Cinco conectivos lógicos: $\neg$, $\land$, $\lor$, $\implies$ e $\iff$

### Conectivos (operadores) lógicos
As proposições compostas (ou fórmulas compostas) são formadas por proposições atômicas ligadas por conectivos lógicos, na lógica proposicional existem cinco conectivos:

- Negação ($\neg$): não; é falso que.
- Conjunção ($\land$): e; mas; também; além disso.
- Disjunção ($\lor$): ou.
- Condicional ($\implies$): se ***p***, então ***q***; ***p*** implica ***q***.
- Bicondicional ($\iff$): ***p*** se e somente se ***q***; ***p*** é condição necessária e suficiente para ***q***.

Assim como na matemática, os operadores possuem ordem de precedência. Da maior para a menor precedência, os operadores se organizam da seguinte forma:

1. $\neg$ (maior precedência)
2. $\land$
3. $\lor$
4. $\implies$
5. $\iff$ (menor precedência)

## Semântica
A semântica especifica como as sequências válidas da linguagem se relacionam entre si e qual o valor-verdade dessa relação.

### Interpretação ($I$)
Chamamos de *interpretação* o valor-verdade associado à uma fórmula. Podemos também dizer que a *interpretação* é uma **função** cujo contradomínio é o conjunto composto pelos elementos $V$ e $F$.
Cada um dos operadores lógicos possui uma interpretação específica

- Negação ($\neg$): Inverte o valor-verdade da fórmula.

| $p$ | $\neg p$ |
|:---:|:--------:|
| $V$ |   $F$    |
| $F$ |   $V$    |

- Conjunção ($\land$): É $V$ apenas se **todos** os valores-verdade de suas subfórmulas forem $V$.

| $p$ | $q$ | $p \land q$ |
|:---:|:---:|:-----------:|
| $V$ | $V$ |     $V$     |
| $V$ | $F$ |     $F$     |
| $F$ | $V$ |     $F$     |
| $F$ | $F$ |     $F$     |

- Disjunção ($\lor$): É $V$ se o valor-verdade de **pelo menos uma** de suas subfórmulas for $V$.

| $p$ | $q$ | $p \lor q$ |
|:---:|:---:|:----------:|
| $V$ | $V$ |    $V$     |
| $V$ | $F$ |    $V$     |
| $F$ | $V$ |    $V$     |
| $F$ | $F$ |    $F$     |

- Condicional ($\implies$): É V se o valor-verdade do antecedente é $F$ ou se o valor-verdade do consequente é $V$.

| $p$ | $q$ | $p \implies q$ |
|:---:|:---:|:--------------:|
| $V$ | $V$ |      $V$       |
| $V$ | $F$ |      $F$       |
| $F$ | $V$ |      $V$       |
| $F$ | $F$ |      $V$       |

- Bicondicional ($\iff$): É $V$ se o valor-verdade de suas subfórmulas forem **iguais**.

| $p$ | $q$ | $p \iff q$ |
|:---:|:---:|:--------------:|
| $V$ | $V$ |      $V$       |
| $V$ | $F$ |      $F$       |
| $F$ | $V$ |      $F$       |
| $F$ | $F$ |      $V$       |

### Tabela-verdade
O número de linhas de uma tabela-verdade para uma determinada expressão é igual a $2^n$, em que $n$ é o número total de átomos na expressão. É importante também sempre organizar as colunas da tabela-verdade na ordem de precedência dos operadores da expressão.

### Classificação de fórmulas
Fórmulas podem ter diversas classificações de acordo com seus valores-verdade em uma ou mais interpretações:

- **Verdadeira**: uma fórmula $\alpha$ é **verdadeira** na interpretação $I$ se tem valor-verdade $V$ na interpretação $I$.
- **Falsa**: uma fórmula $\alpha$ é **falsa** na interpretação $I$ se tem valor-verdade $F$ na interpretação $I$.
- **Satisfazível** (consistente): uma fórmula $\alpha$ é satisfazível se existe **pelo menos uma** interpretação $I$ tal que $I[\alpha] = V$.
- **Inválida** (falsificável): uma fórmula $\alpha$ é inválida se existe **pelo menos uma** interpretação $I$ tal que $I[\alpha] = F$.
- **Tautologia**: uma fórmula $\alpha$ é *tautologia* se for **verdadeira** em **todas** as interpretações possíveis.
- **Contradição** (insatisfazível ou inconsistente): uma fórmula $\alpha$ é contradição se for **falsa** em **todas** as interpretações possíveis.
- **Contingente**: uma fórmula que não é nem tautologia nem contradição é chamada de contingente (ou contingência).

---

created: 08/05/2021
