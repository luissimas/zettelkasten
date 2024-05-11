---
created-at: 2021-06-20
tags:
---
> ***Literal***
> Um literal é um átomo (literal positivo) ou a negação de um átomo (literal negativo). Os literais $L$ e $\neg L$ são chamados de **complementares**.

> ***Cláusula***
> Uma cláusula é uma fórmula da forma
$$
  \forall X_1 \forall X_2 \forall X_3 \dots \forall X_p(L_1 \lor L_2 \lor L_3 \lor \dots L_q)
$$
> Na qual cada $L_i (1 \leq i \leq q)$ é um literal e $X_1, X_2, X_3, \dots, X_p$ são todas variáveis que ocorrem nos literais $L_1, L_2, L_3, \dots, L_q$.
> Ou seja, uma cláusula é uma *disjunção* de *literais*, com todas as variáveis sendo quantificadas **universalmente**.

> ***Skolemização***
> O processo de *skolemização* consiste em eliminar os quantificadores existenciais de uma fórmula substituindo-os por uma *função de Skolem*. Uma *função de Skolem* pode assumir duas formas, dependendo do contexto do quantificador que se deseja eliminar:
> - Uma função cujos argumentos são as variáveis quantificadas universalmente que influenciam o quantificador existencial sendo removido.
> - Uma constante, se o quantificador existencial sendo removido não estiver no escopo de nenhum quantificador universal.

> ***Forma Normal Prenex (FNP)***
> Uma fórmula $\alpha$ da [[Lógica de predicados|lógica de predicados]] está na *Forma Normal Prenex (FNP)* se e somente se $\alpha$ estiver na forma
$$
  (Q_1X_1)(Q_2X_2)\dots(Q_nX_n)(M)
$$
> Em que cada $Q_i$, $i = 1,\dots n$ é um quantificador $\forall$ ou $\exists$, e $M$ é uma fórmula que não contém quantificadores (**matriz**).

> ***Forma Normal Conjuntiva (FNC)***
> Uma fórmula $\alpha$ está na *Forma Normal Conjuntiva (FNC)* se e somente se estiver na *FNP* e sua **matriz** for uma **conjunção de disjunções** de **literais**.

De maneira geral, o processo para se transformar uma fórmula da lógica de predicados em uma fórmula equivalente na forma normal conjuntiva se dá pelo seguinte algoritmo:

1. Eliminar as variáveis livres quantificando-as existencialmente.
2. Eliminar os quantificadores desnecessários (que não contenham nenhuma ocorrência da variável quantificada em seu escopo).
3. Renomear as variáveis quantificadas até que todos os quantificadores operem sobre variáveis diferentes.
4. Remover os operadores $\iff$ e $\implies$.
5. Mover as negações $\neg$ para o interior da fórmula.
6. Eliminar os quantificadores existenciais através da *skolemização*.
7. Obter a *forma normal Prenex* movendo os quantificadores universais para a frente da fórmula.
8. Colocar a matriz da *FNP* na forma conjuntiva.