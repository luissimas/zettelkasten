# Cálculo proposicional
O cálculo proposicional utiliza das propriedades da [[Consequência e equivalência lógica#Consequência lógica|consequência lógica]] para inferir e deduzir novos conhecimentos a partir de um conjunto de fatos conhecidos *a priori*.

Assume-se que as premissas são verdadeiras para então inferir uma conclusão lógica.

> "Quando todas as premissas são verdadeiras, então o consequente também é verdadeiro."

*Premissas* à esquerda do conectivo *logo*.
*Conclusão* à direita do conectivo *logo*.

## Argumentos
Separa premissas de conclusões

> Um argumento é uma sequência $\alpha_1, \alpha_2, \alpha_3, \dots \alpha_n$ de proposições, com $n \geq 1$, na qual as $n - 1$ primeiras proposições são chamadas de premissas e a última proposição $\alpha_n$ é chamada de conclusão. Um argumento é denotado por:
>$$
  \alpha_1, \alpha_2, \alpha_3, \dots, \alpha_{n-1} \vdash \alpha_n
>$$

Um argumento é **válido** somente se a sua conclusão é uma **consequência lógica** de suas premissas, ou seja:

> Um argumento $\alpha_1, \alpha_2, \alpha_3, \dots, \alpha_{n-1} \vdash \alpha_n$ é dito **válido** se e somente se $\alpha_1, \alpha_2, \alpha_3, \dots, \alpha_{n-1} \vDash \alpha_n$, ou seja, se e somente $\alpha_n$ é uma [[Consequência e equivalência lógica#Consequência lógica|consequência lógica]] das premissas.
Dessa forma, pode-se concluir que um argumento $\alpha_1, \alpha_2, \alpha_3, \dots, \alpha_{n-1} \vdash \alpha_n$ é válido se e somente se
>$$
  \left(\alpha_1 \land \alpha_2 \land \alpha_3 \land \dots \land \alpha_{n-1} \right) \implies \alpha_n
>$$
> for uma [[Semântica da lógica proposicional#Classificação de fórmulas|tautologia]].

Existem duas formas de mostrar a validade de um argumento:

### Método semântico
Esse método consiste na construção da tabela-verdade e análise das [[Semântica da lógica proposicional#Interpretação I|interpretações]]. Esse método é mecânico e conceitualmente simples, porém pode ser inviável por conta da quantidade de proposições na fórmula.

### Método sintático
Esse método consiste em construir uma prova para o dado argumento com base nas [[Cálculo proposicional#Regras de inferência|regras de inferência]] e [[Álgebra da lógica proposicional#Leis de equivalência|leis de equivalência]], ou usando inferência por resolução.

## Regras de inferência
As regras de inferência são argumentos lógicos notáveis já conhecidos que podem ser utilizados para verificar a validade de argumentso mais complexos.

Existem ao todo $14$ regras de inferência:
- *Modus ponens* é a regra de inferência mais importante
- *Modus tollens*
- *Silogismo hipotético (regra da cadeia)*
- *Silogismo disjuntivo*
- *Simplificação*
- *Conjunção (ou combinação)*
- *Regra de casos*
- *Adição*
- *Dilema construtivo (montado a partir do modus ponens)*
- *Dilema destrutivo (montado a partir do modus tollens)*
- *Contraposição*
- *Regra da inconsistência*
- *Introdução da equivalência*
- *Eliminação da equivalência*

|                                             Regra                                              |                  Nome                  |
|:----------------------------------------------------------------------------------------------:|:--------------------------------------:|
|                                  $p, p \implies q  \vDash q$                                   |             *Modus ponens*             |
|                              $p \implies q, \neg q \vDash \neg p$                              |            *Modus tollens*             |
|                        $p \implies q, q \implies r \vDash p \implies r$                        | Silogismo hipotético (regra da cadeia) |
|    $$\begin{aligned} p \lor q, \neg p \vDash q \\ p \lor q, \neg q \vDash p\end{aligned}$$     |          Silogismo disjuntivo          |
|           $$\begin{aligned} p \land q \vDash p \\ p \land q \vDash q\end{aligned}$$            |             Simplificação              |
|                                         $p, q \vDash$                                          |       Conjunção (ou combinação)        |
|                           $p \implies q, \neg p \implies q \vDash q$                           |             Regra de casos             |
|            $$\begin{aligned} p \vDash p \lor q \\ q \vDash p \lor q \end{aligned}$$            |                 Adição                 |
|                     $p \implies q, r \implies s, p \lor r \vDash q \lor s$                     |           Dilema construtivo           |
|           $p \implies q, r \implies s, \neg q \lor \neg s \vDash \neg p \lor \neg r$           |           Dilema destrutivo            |
|                          $p \implies q \vDash \neg q \implies \neg p$                          |             Contraposição              |
|                                      $p, \neg p \vDash q$                                      |        Regra da inconsistência         |
|                          $p \implies q, q \implies p \vDash p \iff q$                          |       Introdução da equivalência       |
| $$\begin{aligned} p \iff q \vdash p \implies q \\ p \iff q \vdash q \implies p \end{aligned}$$ |       Eliminação da equivalência       |


---

created: 22/05/2021

[[Regras_inferencia_equivalencia.pdf]]
