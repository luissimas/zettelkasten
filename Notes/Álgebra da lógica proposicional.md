# Álgebra da lógica proposicional
A álgebra da lógica proposicional especifica como os elementos podem ser manipulados em fórmulas. Essas manipulações permitem que sejam geradas fórmulas [[Consequência e equivalência lógica#Equivalência lógica|equivalentes]] a outras através de simplificações das expressões lógicas.
Antes de mais nada é importante definir o conceito de **dual**, pois ele forma a base de muitas manipulações possíveis dentro da lógica proposicional.

> O **dual** de uma fórmula definida em termos de símbolos atômicos $(p, q, \dots)$, símbolos de verdade $(V, F)$ e dos conectivos lógicos de conjunção $(\land)$ e disjunção $(\lor)$ é obtido substituindo-se **todas as ocorrências** de:
>- $V$ por $F$ e vice-versa
>- $\land$ por $\lor$ e vice-versa
> *Exemplo:* o dual da proposição $(p \land q) \lor F$ é a proposição $(p \lor q) \land V$

## Leis de equivalência
A seguir são apresentadas as mais importantes leis de equivalência, acompanhadas de sua forma dual.

|                                                                       Lei                                                                        |                         Nome                          |
|:------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------:|
|                                                            $p \land \neg p \equiv F$                                                             |                  Lei da contradição                   |
|                                                             $p \lor \neg p \equiv V$                                                             |               Lei do terceiro excluído                |
|                                     $$\begin{aligned}p \land V \equiv p \\ p \lor F \equiv p\end{aligned}$$                                      |                  Leis da identidade                   |
|                                     $$\begin{aligned}p \land F \equiv F \\ p \lor V \equiv V\end{aligned}$$                                      |                   Leis da dominação                   |
|                                     $$\begin{aligned}p \land p \equiv p \\ p \lor p \equiv p\end{aligned}$$                                      |                   Leis idempotentes                   |
|                                                              $\neg\neg p \equiv p$                                                               |                     Dupla negação                     |
|                             $$\begin{aligned}p \land q \equiv q \land p \\ p \lor q \equiv q \lor p \end{aligned}$$                              |                   Leis comutativas                    |
|           $$\begin{aligned}(p \land q) \land r \equiv  p \land (q \land r)\\ (p \lor q) \lor r \equiv p \lor (q \lor r)\end{aligned}$$           |                   Leis associativas                   |
| $$\begin{aligned}p \land (q \lor r) \equiv  (p \land q) \lor (p \land r)\\ p  \lor (q \land r) \equiv (p \lor q) \land (p \lor r)\end{aligned}$$ |                  Leis distributivas                   |
|             $$\begin{aligned}\neg (p \land q) \equiv \neg p \lor \neg q\\ \neg (p \lor q) \equiv \neg p \land \neg q\end{aligned}$$              |                   Leis de DeMorgan                    |
|                                                       $p \implies q \equiv \neg p \lor q$                                                        | Definição de $\implies$ em termos de $\lor$ e $\neg$  |
|                                              $p \iff q \equiv (p \implies q) \land (q \implies p)$                                               | Definição de $\iff$ em termos de $\implies$ e $\land$ |
|                                             $p \iff q \equiv (\neg p \lor q) \land (\neg q \lor p)$                                              |   Definição de $\iff$ em termos de $\lor$ e $\neg$    |
|                         $$\begin{aligned} (p \lor (p \land q)) \equiv p \\ (p \land (p \lor q)) \equiv p\end{aligned}$$                          |                   Leis da absorção                    |
|            $$\begin{aligned} (p \land q) \lor (\neg p \land q) \equiv q \\ (p \lor q) \land (\neg p \lor q) \equiv q \end{aligned}$$             |          Generalização das Leis da absorção           |

## Formas normais
Usando as leis de equivalência é possível manipular as proposições e colocá-las em formatos mais desejáveis. Através das formas normais é possível padronizar as proposições compostas, tornando sua identificação comparação mais simples e objetivas.

> Para toda fórmula $\beta$ da [[Lógica Proposicional]] existe uma fórmula $\alpha$ tanto na *FNC* quanto na *FND* que é equivalente a $\beta$, ou seja: $\alpha \equiv \beta$.

As formas normais são compostas fundamentalmente por *literais* organizados dentro de *cláusulas* (que variam dependendo da forma normal).

- **Literais (L)**: elemento básico das formas normais, um literal é uma formula atômica ($p$) ou a negação de uma fórmula atômica ($\neg p$).

### Forma normal conjuntiva (FNC)
Uma *Forma Normal Conjuntiva (FNC)*, ou *Forma Clausal*, é composta por literais e **cláusulas**.

- **Cláusulas (C)**: uma cláusula é uma [[Sintaxe da lógica proposicional#Conectivos operadores lógicos|disjunção]] de literais $L_1 \lor L_2 \lor \dots \lor L_n$, onde $n \geq 0$ é o tamanho da cláusula.

Uma fórmula proposicional está na *FNC* se e somente se ela for uma **conjunção** de *cláusulas*, ou seja: $C_1 \land C_2 \land \dots \land C_n \quad n \geq 1$.

### Forma normal disjuntiva (FND)
Uma *Forma Normal Disjuntiva (FND)* é composta por literais e **cláusulas duais**.

- **Cláusulas duais (C)**: uma cláusula dual é uma [[Sintaxe da lógica proposicional#Conectivos operadores lógicos|conjunção]] de literais $L_1 \land L_2 \land \dots \land L_n$, onde $n \geq 0$ é o tamanho da cláusula.

Uma fórmula proposicional está na *FND* se e somente se ela for uma **disjunção** de *cláusulas duais*, ou seja: $C_1 \lor C_2 \lor \dots \lor C_n \quad n \geq 1$.

---

created: 16/05/2021
