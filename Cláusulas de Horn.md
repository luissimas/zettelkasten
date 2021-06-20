# Cláusulas de Horn

> ***Literal***
> Um literal é um átomo (literal positivo) ou a negação de um átomo (literal negativo). Os literais $L$ e $\neg L$ são chamados de **complementares**.

> ***Cláusula***
> Uma cláusula é uma fórmula da forma
>$$
  \forall X_1 \forall X_2 \forall X_3 \dots \forall X_p(L_1 \lor L_2 \lor L_3 \lor \dots L_q)
>$$
> Na qual cada $L_i (1 \leq i \leq q)$ é um literal e $X_1, X_2, X_3, \dots, X_p$ são todas variáveis que ocorrem nos literais $L_1, L_2, L_3, \dots, L_q$.
> Ou seja, uma cláusula é uma *disjunção* de *literais*, com todas as variáveis sendo quantificadas **universalmente**.

> ***Skolemização***

> ***Forma Normal Prenex (FNP)***

> ***Forma Normal Conjuntiva (RNC)***

1. Eliminar as variáveis livres quantificando-as existencialmente.
2. Eliminar os quantificadores desnecessários (que não contenham nenhuma ocorrência da variável quantificada em seu escopo).
3. Renomear as variáveis quantificadas até que todos os quantificadores operem sobre variáveis diferentes.
4. Remover os operadores $\iff$ e $\implies$.
5. Mover as negações $\neg$ para o interior da fórmula.
6. Eliminar os quantificadores existenciais através da *skolemização*.
7. Obter a *forma normal Prenex* movendo os quantificadores universais para a frente da fórmula.
8. Colocar a matriz da *FNP* na forma conjuntiva.

---

created: 20/06/2021
