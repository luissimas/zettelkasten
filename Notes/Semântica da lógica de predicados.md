# Semântica da lógica de predicados
A semântica especifica como as sequências válidas se relacionam entre si e qual o valor-verdade dessas relações.

## Interpretação ($I$)
Na lógica de predicados uma interpretação $I$ de uma fórmula $\alpha$ é composta dos seguintes elementos:
- Um conjunto não vazio $D$, chamado de **domínio** da interpretação, no qual as variáveis assumem valores.
- Uma **atribuição** a cada:
  - Símbolo constante de $\alpha$, de um elemento de $D$
  - Símbolo funcional n-ário de $\alpha$, de uma função de $D^n \rightarrow D$
  - Símbolo de predicado n-ário de $\alpha$, de uma função de $D^n \rightarrow \{V,F\}$

## Determinando o valor-verdade de uma fórmula
> Dada uma interpretação $I$ de uma linguagem de primeira ordem $\lambda$ com um domínio $D$. Seja $A$ uma *atribuição* com relação a $I$, o valor verdade da fórmula é dado por:
> 1. Se a fórmula é um átomo $p(t_1,\dots,t_n)$, então o valor verdade é obtido calculando o valor de $p$ com relação a $I$ e $A$.
> 2. Se a fórmula for uma fórmula *composta*, ou seja, com átomos conectados por conectivos lógicos, então seu valor-verdade é dado pelo valor-verdade dos átomos com relação a $I$ e $A$ manipulados pelos [[Semântica da lógica proposicional#Interpretação ($I$)|conectivos lógicos]]
> 3. Se a fórmula é da forma $\exists \alpha$, seu valor-verdade é $V$ se **existe** pelo menos um $d \in D$ tal que $\alpha$ tem valor-verdade $V$ com relação a $I$ e $A(X/d)$; caso contrário seu valor-verdade é $F$
> 4. Se a fórmula é da forma $\forall \alpha$, seu valor-verdade é $V$ se **para todo** $d \in D$, $\alpha$ tem valor-verdade $V$ com relação a $I$ e $A(X/d)$; caso contrário seu valor-verdade é $F$

É importante ressaltar que em uma fórmula as *variáveis livres* sempre assumem os valores especificados na *atribuição* $A$, se comportando como *constantes*. Só atribuímos os valores do domínio $D$ a uma variável se ela estiver sendo *quantificada* na fórmula em questão.

## Classificação de fórmulas
Um ponto central da classificação de fórmulas na lógica de predicados é o conceito de modelo

> ***Modelo***
> Dada uma interpretação $I$ em uma linguagem de primeira ordem $\lambda$. Seja $\alpha$ uma fórmula (ou conjunto de fórmulas), $I$ é um **modelo** de $\alpha$ se o valor-verdade de $\alpha$ com relação a $I$ for $V$.

As fórmulas da lógica de predicados podem ter diversas classificações de acordo com seu valor-verdade com relação a interpretações $I$.

- **Satisfazível (consistente)**: uma fórmula fechada $\alpha$ é satisfazível se existe **pelo menos uma** interpretação $I$ tal que $I[\alpha] = V$, ou seja, $I$ é um modelo para $\alpha$.
- **Tautologia (válida)**: uma fórmula fechada $\alpha$ é uma tautologia se for $V$ em **todas** as interpretações possíveis, ou seja, todas as interpretações possíveis são modelo para $\alpha$.
- **Inválida (falsificável)**: uma fórmula fechada $\alpha$ é inválida se existe **pelo menos uma** interpretação $I$ tal que $I[\alpha] = F$.
- **Contradição (insatisfazível)**: uma fórmula fechada $\alpha$ é contradição (ou insatisfazível) se for $F$ em **todas** as interpretações possíveis, ou seja, não há modelo para $\alpha$.
- **Contingente (contingência)**: uma fórmula fechada $\alpha$ é contingente se não for nem uma tautologia nem uma contradição.

É importante destacar que, pela possibilidade

---

created: 10/06/2021
