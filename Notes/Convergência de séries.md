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
> 2. $L = 0$: se $\displaystyle\sum_{n=1}^{\infty}{b_n}$ converge então $\displaystyle\sum_{n=1}^{\infty}{a_n}$ converge.
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

Note que com o *critério da integral* não é necessário encontrar uma série comparadora, toda a análise pode ser feita apenas com a [[Sequências Numéricas | sequência]] em questão. Entretanto vale destacar que para ser aplicado o critério requer a verificação de algumas coisas:

1. A série deve ser representada por uma **função contínua**.
2. Essa função contínua deve ser **decrescente**.
3. Essa função deve ter uma [[Integrais indefinidas | primitiva]] calculável.

### Critério da raiz
O critério da raiz nos permite determinar a convergência de uma série com base apenas em uma análise no limite da *n-ésima* raiz de seu *n-ésimo* termo.

> ***Critério da raiz***
> Dada uma sequência numérica $(a_n)$ tal que $a_n > 0$, considera-se $L$ tal que:
>$$
  \lim_{n\to \infty}\sqrt[n]{a_n} = L
>$$
> pode-se afirmar o seguinte com base no valor de $L$:
> 1. $L > 1$: $\displaystyle\sum_{n = 1}^{\infty}{a_n}$ diverge.
> 2. $L < 1$: $\displaystyle\sum_{n = 1}^{\infty}{a_n}$ converge.
> 3. $L = 1$: nada se conclui.

### Critério da razão
O critério da razão é muito similar ao *critério da raiz*, porém utiliza-se da razão entre o *n-ésimo* termo e seu antecessor.

> ***Critério da razão***
> Dada uma sequência numérica $(a_n)$ tal que $a_n > 0$, considera-se $L$ tal que:
>$$
  \lim_{n\to \infty} \frac{a_{n + 1}}{a_n} = L
>$$
> pode-se afirmar o seguinte com base no valor de $L$:
> 1. $L > 1$: $\displaystyle\sum_{n = 1}^{\infty}{a_n}$ diverge.
> 2. $L < 1$: $\displaystyle\sum_{n = 1}^{\infty}{a_n}$ converge.
> 3. $L = 1$: nada se conclui.

### Critério de Leibniz
O *critério de Leibniz* nos permite determinar a convergência de séries cujo sinal dos elementos alterna termo a termo.

> ***Critério de Leibniz***
> Dada uma sequência numérica $(a_n)$ tal que $a_n > 0$, $\displaystyle\lim_{n\to \infty}a_n = 0$ e $a_{n+1} < a_n$, ou seja, $(a_n)$ é uma sequência decrescente, podemos afirmar que a série $\displaystyle \sum_{n = 0}^{\infty}{(-1)^n a_n}$ converge.

---

created: 28/08/2021
