# Convergência de séries
Uma forma imediata de verificar se uma [[Séries Numéricas | série]] diverge ou converge é verificar se seu termo geral $a_n$ converge a $0$.

> Dada uma série $S = \displaystyle\sum_{n=1}^{\infty}{a_n}$. Se $S$ converge, então $\displaystyle\lim_{n \to \infty} a_n = 0$.
Note que a recíproca dessa condição não é válida, ou seja, existem sequências convergem a $0$ cuja soma não é convergente.

## Critérios de convergência
Além da verificação pelo termo geral, existem muitas outras formas de verificar a convergência de séries, algumas delas são enunciadas aqui.

### Critério da comparação
> ***Critério da comparação***
> Dadas duas [[Sequências numéricas | sequências numéricas]] $(a_n)$ e $(b_n)$ com $0 \leq a_n \leq b_n$, pode-se afirmar duas coisas:
> 1. Se $\displaystyle\sum_{n=1}^{\infty}{a_n}$ for divergente, então $\displaystyle\sum_{n=1}^{\infty}{b_n}$ também diverge.
> 2. Se $\displaystyle\sum_{n=1}^{\infty}{b_n}$ for convergente, então $\displaystyle\sum_{n=1}^{\infty}{a_n}$ também converge.

A ideia central do *critério da comparação* de relacionar duas sequências e inferir conclusões sobre a convergência de uma com base no conhecimento da convergência da outra serve de base para os outros critérios aqui enunciados.
Uma inconveniência da aplicação do critério da comparação é que a sua manipulação algébrica e aplicação muitas vezes não consideram a ordem de grandeza do crescimento das sequências, e sim apenas uma relação estrita de desigualdade. Por esse motivo desenvolveu-se uma variação do critério da comparação, que usa da mesma base porém é mais pragmático e manipulável.

### Critério da comparação no limite
> ***Critério da comparação no limite***
> Dadas duas sequências numéricas $(a_n)$ e $(b_n)$ com $0 \leq a_n$ e $0 \leq b_n$, $\forall n$. Supondo $L$ tal que
>$$
\displaystyle\lim_{n \to \infty}\frac{a_n}{b_n} = L
>$$
> pode-se afirmar o seguinte com base no valor de $L$:
> 1. $0<L<+\infty$: $\displaystyle\sum_{n=1}^{\infty}{a_n}$ converge $\iff$ $\displaystyle\sum_{n=1}^{\infty}{b_n}$ converge.
> 2. $L = 0$: se $\displaystyle\sum_{n=1}^{\infty}{a_n}$ diverge então $\displaystyle\sum_{n=1}^{\infty}{b_n}$ diverge.
> 3. $L = \infty$: se $\displaystyle\sum_{n=1}^{\infty}{b_n}$ diverge então $\displaystyle\sum_{n=1}^{\infty}{a_n}$ diverge.

Note que para o *critério da comparação no limite* não é necessário saber qual a relação de desigualdade das duas sequências, pois analisa-se apenas o limite de seu quociente. Vale destacar também que esse critério permite conclusões mais claras e precisas, pois quando existe um limite definido para o quociente das duas sequências, a informação sobre convergência deve necessariamente ser a mesma entre as séries.

### Critério da integral
O critério da integral nos permite verificar a convergência de séries manipulando os conceitos de [[Integrais definidas | integrais definidas]].

> ***Integral imprópria convergente***
> Dada uma função contínua $f:[1, + \infty[ \to \mathbb{R}$, dizemos que a *integral imprópria* $\displaystyle \int_{1}^{+\infty}{f(x)}\,dx$ é **convergente** se e somente se
>$$
  \lim_{b\to \infty} \int_{1}^{b}{f(x)}\,dx = L \text{,}\qquad  L \in \mathbb{R}
>$$

> ***Critério da integral***
> Dada uma função **contínua e decrescente** $f : [1, + \infty[ \to \mathbb{R}$ com $f(x) > 0, \forall x \in [1, + \infty[$. Seja $a_n$ uma sequência numérica que pode ser descrita em termos da função contínua tal que $a_n = f(x)$. É possível afirmar que $\displaystyle \sum_{n=1}^{\infty}{a_n}$ converge $\iff$ $\displaystyle\int_{1}^{+ \infty}{f(x)}\,dx$ converge.

---

created: 28/08/2021
