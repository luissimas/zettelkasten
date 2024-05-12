---
created-at: 2021-06-12
---
Consequência e equivalência lógica são relações estabelecidas entre duas fórmulas (ou conjunto de fórmulas).

> ***Consequência lógica***
> Dado um conjunto $S = \{ \alpha_1, \alpha_2, \dots, \alpha_n \}$ de fórmulas fechadas de uma linguagem de primeira ordem $\lambda$, e uma fórmula fechada $\beta$ de $\lambda$. $\beta$ é **consequência lógica** do conjunto $S$ se, para **toda** interpretação $I$ de $\lambda$ na qual $I$ é um modelo para $S$, $I$ é também um modelo para $\beta$. Ou seja, se
$$
  \alpha_1 \land \alpha_2 \land \dots \land \alpha_n \implies \beta
$$
> é uma tautologia, então $S \vDash \beta$.

> ***Equivalência lógica***
> Duas fórmulas $\alpha$ e $\beta$ são **logicamente equivalentes** se as interpretações que satisfazem $\alpha$ são exatamente as mesmas que satisfazem $\beta$.

Vale destacar que as [[Consequência e equivalência lógica|consequências e equivalências]] básicas da [[Lógica proposicional|lógica proposicional]] são igualmente válidas para a lógica de predicados. Além dessas, temos uma equivalência específica para os *quantificadores* da lógica de predicados.

$$
\begin{aligned}
  &\neg(\forall X \alpha[X]) \equiv (\exists X \neg \alpha[X])\\\\
  &\neg(\exists X \alpha[X]) \equiv (\forall X \neg \alpha[X])
\end{aligned}
$$