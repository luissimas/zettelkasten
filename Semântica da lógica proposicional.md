# Semântica da lógica proposicional
A semântica especifica como as sequências válidas da linguagem se relacionam entre si e qual o valor-verdade dessa relação.

## Interpretação ($I$)
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

## Tabela-verdade
O número de linhas de uma tabela-verdade para uma determinada expressão é igual a $2^n$, em que $n$ é o número total de átomos na expressão. É importante também sempre organizar as colunas da tabela-verdade na ordem de precedência dos operadores da expressão.

## Classificação de fórmulas
Fórmulas podem ter diversas classificações de acordo com seus valores-verdade em uma ou mais interpretações:

- **Verdadeira**: uma fórmula $\alpha$ é **verdadeira** na interpretação $I$ se tem valor-verdade $V$ na interpretação $I$.
- **Falsa**: uma fórmula $\alpha$ é **falsa** na interpretação $I$ se tem valor-verdade $F$ na interpretação $I$.
- **Satisfazível** (consistente): uma fórmula $\alpha$ é satisfazível se existe **pelo menos uma** interpretação $I$ tal que $I[\alpha] = V$.
- **Inválida** (falsificável): uma fórmula $\alpha$ é inválida se existe **pelo menos uma** interpretação $I$ tal que $I[\alpha] = F$.
- **Tautologia**: uma fórmula $\alpha$ é *tautologia* se for **verdadeira** em **todas** as interpretações possíveis.
- **Contradição** (insatisfazível ou inconsistente): uma fórmula $\alpha$ é contradição se for **falsa** em **todas** as interpretações possíveis.
- **Contingente**: uma fórmula que não é nem tautologia nem contradição é chamada de contingente (ou contingência).

## Consequência lógica
Uma fórmula $\beta$ é **consequência lógica** de outra fórmula $\alpha$ (ou $\alpha$ implica logicamente $\beta$) se **toda** interpretação que **satisfaz** $\alpha$ também satisfaz $\beta$.
A consequência lógica é representada por $\vDash$.
$\nvDash$


## Equivalência lógica
Duas fórmulas $\alpha$ e $\beta$ são **logicamente equivalentes** se as interpretações que satisfazem $\alpha$ são exatamente as mesmas que satisfazem $\beta$. Em outras palavras, a equivalência lógica entre $\alpha$ e $\beta$ ocorre se e somente se $\alpha \vDash \beta$ e $\beta \vDash \alpha$.
A equivalência lógica é representada por $\equiv$.

---

created: 15/05/2021
