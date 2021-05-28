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

### Forma normal conjuntiva (FNC)

- Forma clausal
- Conjunção de clausas
- Uma clausa é a disjunção de literais
- Literal = fórmulas atômicas

> Para toda fórmula $\beta$ da [[Lógica Proposicional]] existe uma fórmula $\alpha$ na *FNC* que é equivalente a $\beta$, ou seja: $\alpha \equiv \beta$.

### Forma normal disjuntiva (FND)

---

created: 16/05/2021
