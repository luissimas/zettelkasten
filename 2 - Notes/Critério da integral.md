---
created-at: 2021-09-05
tags:
---
O critério da integral nos permite verificar a convergência de séries manipulando os conceitos de [[Integrais definidas | integrais definidas]].

> ***Integral imprópria convergente***
> Dada uma função contínua $f:[1, + \infty[ \to \mathbb{R}$, dizemos que a *integral imprópria* $\displaystyle \int_{1}^{+\infty}{f(x)}\,dx$ é **convergente** se e somente se
>$$
  \lim_{b\to \infty} \int_{1}^{b}{f(x)}\,dx = L \text{,}\qquad  L \in \mathbb{R}
>$$

> ***Critério da integral***
> Dada uma função **contínua e decrescente** $f : [1, + \infty[ \to \mathbb{R}$ com $f(x) > 0, \forall x \in [1, + \infty[$. Seja $a_n$ uma sequência numérica que pode ser descrita em termos da função contínua tal que $a_n = f(x)$. É possível afirmar que $\displaystyle \sum_{n=1}^{\infty}{a_n}$ converge $\iff$ $\displaystyle\int_{1}^{+ \infty}{f(x)}\,dx$ converge.

Note que com o *critério da integral* não é necessário encontrar uma série comparadora, toda a análise pode ser feita apenas com a [[Sequências numéricas | sequência]] em questão. Entretanto vale destacar que para ser aplicado o critério requer a verificação de algumas coisas:

1. A série deve ser representada por uma **função contínua**.
2. Essa função contínua deve ser **decrescente**.
3. Essa função deve ter uma [[Integrais indefinidas | primitiva]] calculável.