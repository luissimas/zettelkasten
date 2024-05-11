# Semântica da lógica proposicional
A semântica especifica como as sequências válidas da linguagem se relacionam entre si e qual o valor-verdade dessa relação. No campo da semântica são tratados não só as interpretações e classificação das fórmulas lógicas, mas também [[Consequência e equivalência lógica|as relações de consequência e equivalência]] que elas estabelecem entre si.

## Interpretação ($I$)
Chamamos de *interpretação* o valor-verdade associado à uma fórmula. Podemos também dizer que a *interpretação* é uma **função** cujo contradomínio é o conjunto composto pelos elementos $V$ e $F$.
Cada um dos operadores lógicos possui uma interpretação específica

- Negação ($\neg$): Inverte o valor-verdade da fórmula.
- Conjunção ($\land$): É $V$ apenas se **todos** os valores-verdade de suas subfórmulas forem $V$.
- Disjunção ($\lor$): É $V$ se o valor-verdade de **pelo menos uma** de suas subfórmulas for $V$.
- Condicional ($\implies$): É $V$ se o valor-verdade do antecedente é $F$ ou se o valor-verdade do consequente é $V$.
- Bicondicional ($\iff$): É $V$ se o valor-verdade de suas subfórmulas forem **iguais**.

| $p$ | $q$ | $\neg p$ | $\neg q$ | $p \land q$ | $p \lor q$ | $p \implies q$ | $p \iff q$ |
|:---:|:---:|:--------:|:--------:|:-----------:|:----------:|:--------------:|:----------:|
| $V$ | $V$ |   $F$    |   $F$    |     $V$     |    $V$     |      $V$       |    $V$     |
| $V$ | $F$ |   $F$    |   $V$    |     $F$     |    $V$     |      $F$       |    $F$     |
| $F$ | $V$ |   $V$    |   $F$    |     $F$     |    $V$     |      $V$       |    $F$     |
| $F$ | $F$ |   $V$    |   $V$    |     $F$     |    $F$     |      $V$       |    $V$     |

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

---

created: 15/05/2021
