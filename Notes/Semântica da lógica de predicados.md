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
Dada uma interpretação $I$ de uma linguagem de primeira ordem $\lambda$ com um domínio $D$. Seja $A$ uma *atribuição* com relação a $I$, o valor verdade da fórmula é dado por:
1. Se a fórmula é um átomo $p(t_1,\dots,t_n)$, então o valor verdade é obtido calculando o valor de $p$ com relação a $I$ e $A$.
2. Se a fórmula for uma fórmula *composta*, ou seja, com átomos conectados por conectivos lógicos, então seu valor-verdade é dado pelo valor-verdade dos átomos com relação a $I$ e $A$ manipulados pelos [[Semântica da lógica proposicional#Interpretação ($I$)|conectivos lógicos]]
3. Se a fórmula é da forma $\exists \alpha$, seu valor-verdade é $V$ se **existe** pelo menos um $d \in D$ tal que $\alpha$ tem valor-verdade $V$ com relação a $I$ e $A(X/d)$; caso contrário seu valor-verdade é $F$
4. Se a fórmula é da forma $\forall \alpha$, seu valor-verdade é $V$ se **para todo** $d \in D$, $\alpha$ tem valor-verdade $V$ com relação a $I$ e $A(X/d)$; caso contrário seu valor-verdade é $F$

É importante ressaltar que em uma fórmula as *variáveis livres* sempre assumem os valores especificados na *atribuição* $A$, se comportando como *constantes*. Só atribuímos os valores do domínio $D$ a uma variável se ela estiver sendo *quantificada* na fórmula em questão.

---

created: 10/06/2021
