# Álgebra da lógica proposicional
A álgebra da lógica proposicional especifica como os elementos podem ser manipulados em fórmulas. Essas manipulações permitem que sejam geradas fórmulas [[Consequência e equivalência lógica#Equivalência lógica|equivalentes]] a outras através de simplificações das expressões lógicas.
Antes de mais nada é importante definir o conceito de **dual**, pois ele forma a base de muitas manipulações possíveis dentro da lógica proposicional.

> O **dual** de uma fórmula definida em termos de símbolos atômicos $(p, q, \dots)$, símbolos de verdade $(V, F)$ e dos conectivos lógicos de conjunção $(\land)$ e disjunção $(\lor)$ é obtido substituindo-se **todas as ocorrências** de:
>- $V$ por $F$ e vice-versa
>- $\land$ por $\lor$ e vice-versa
> *Exemplo:* o dual da proposição $(p \land q) \lor F$ é a proposição $(p \lor q) \land V$

## Leis de equivalência
|                                                                       Lei                                                                        | Nome                     |
|:------------------------------------------------------------------------------------------------------------------------------------------------:| ------------------------ |
|                                                            $p \land \neg p \equiv F$                                                             | Lei da contradição       |
|                                                             $p \lor \neg p \equiv V$                                                             | Lei do terceiro excluído |
|                                     $$\begin{aligned}p \land V \equiv p \\ p \lor F \equiv p\end{aligned}$$                                      | Leis da identidade       |
|                                     $$\begin{aligned}p \land F \equiv F \\ p \lor V \equiv V\end{aligned}$$                                      | Leis da dominação        |
|                                     $$\begin{aligned}p \land p \equiv p \\ p \lor p \equiv p\end{aligned}$$                                      | Leis idempotentes        |
|                                                              $\neg\neg p \equiv p$                                                               | Dupla negação            |
|                             $$\begin{aligned}p \land q \equiv q \land p \\ p \lor q \equiv q \lor p \end{aligned}$$                              | Leis comutativas         |
|           $$\begin{aligned}(p \land q) \land r \equiv  p \land (q \land r)\\ (p \lor q) \lor r \equiv p \lor (q \lor r)\end{aligned}$$           | Leis associativas        |
| $$\begin{aligned}p \land (q \lor r) \equiv  (p \land q) \lor (p \land r)\\ p  \lor (q \land r) \equiv (p \lor q) \land (p \lor r)\end{aligned}$$ | Leis distributivas       |
|                                $$\begin{aligned}\neg (p \land q) \equiv \neg p \lor \neg q\\ \neg (p \lor q) \equiv \end{aligned}$$                                | Leis de DeMorgan         |
|                                                                                                                                                  | Regra da bicondicional   |

---

created: 16/05/2021
