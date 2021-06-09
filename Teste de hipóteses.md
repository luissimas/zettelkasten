# Teste de hipóteses
Os testes de hipóteses são muito usados na prática, pois nos permitem colocar à prova uma hipótese e verificar se ela é válida ou não. De maneira geral essas hipóteses são afirmações acerca do valor de algum *parâmetro populacional*.
Trabalhamos sempre com duas hipóteses, a *hipótese nula* $H_0$ e a *hipótese alternativa* $H_1$. Caso a hipótese $H_0$ seja rejeitada, aceitamos como verdadeira a hipótese $H_1$.

> ***Teste de hipóteses***
> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ que representa uma característica observável da população $\mathcal{P}$. Chamamos de **teste de hipóteses** a função de decisão $d: Im(X_1,\dots,X_n) \rightarrow \{a_0,a_1\}$, em que $a_0$ corresponde à ação de considerar a hipótese $H_0$ como verdadeira e $a_1$ corresponde à ação de considerar a hipótese $H_1$ como verdadeira.

Note que a função de decisão $d$ divide o conjunto $Im(X_1,\dots,X_n)$ associado à amostra aleatória $(X_1, X_2, \dots, X_n)$ em dois conjuntos:

$$
  R_0 = \{(x_1,\dots,x_n) \in Im(X_1,\dots,X_n) : d(x_1,\dots,x_n) = a_0\}
$$

e

$$
  R_1 = \{(x_1,\dots,x_n) \in Im(X_1,\dots,X_n) : d(x_1,\dots,x_n) = a_1\}
$$

Ou seja, essa função divide as amostras possíveis em amostras que geram a aceitação da hipótese $H_0$ e amostras que geram a aceitação da hipótese $H_1$. Chamamos $R_0$ de *região de aceitação*, e $R_1$ de *região de rejeição*, ou *região crítica*.

Note que, pela natureza do teste de hipótese, a veracidade da hipótese nunca pode ser verificada (pois isso implica em verificar todas as amostras possíveis de uma determinada população). Portanto, é necessário utilizar técnicas que minimizem as chances de se cometer erros no processo de decisão.

> ***Erro do tipo $I$ e do tipo $II$***
>

## Procedimento geral de um teste de hipóteses
1. Fixe a hipótese nula $H_0$ e a hipóteses alternativa $H_1$.
2. Use a teoria estatística para determinar a [[Estatísticas e suas distribuições|estatística]] apropriada para o teste.
3. Escolha um nível de significância $\alpha \in ]0,1[$ (probabilidade de erro do tipo $I$) e utilize este valor para construir a região crítica do teste com base na estatística de teste determinada.
4. Use as observações da amostra coletada para calcular o valor da estatística de teste.
5. Se o valor da estatística de teste calculado com a amostra observada pertencer à região crítica, rejeite a hipótese nula $H_0$; caso contrário, não rejeite a hipótese nula $H_0$.
6. Reporte sua decisão no contexto do problema

---

created: 07/06/2021
