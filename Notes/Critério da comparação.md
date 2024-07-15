---
created-at: 2021-09-05
---
Dadas duas [[Sequências numéricas | sequências numéricas]] $(a_n)$ e $(b_n)$ com $0 \leq a_n \leq b_n$, pode-se afirmar duas coisas:
1. Se $\displaystyle\sum_{n=1}^{\infty}{a_n}$ for divergente, então $\displaystyle\sum_{n=1}^{\infty}{b_n}$ também diverge.
2. Se $\displaystyle\sum_{n=1}^{\infty}{b_n}$ for convergente, então $\displaystyle\sum_{n=1}^{\infty}{a_n}$ também converge.

A ideia central do *critério da comparação* de relacionar duas sequências e inferir conclusões sobre a convergência de uma com base no conhecimento da convergência da outra serve de base para os outros critérios aqui enunciados.
Uma inconveniência da aplicação do critério da comparação é que a sua manipulação algébrica e aplicação muitas vezes não consideram a ordem de grandeza do crescimento das sequências, e sim apenas uma relação estrita de desigualdade. Por esse motivo desenvolveu-se uma variação do critério da comparação, que usa da mesma base porém é mais pragmático e manipulável.

# Critério da comparação no limite
Dadas duas sequências numéricas $(a_n)$ e $(b_n)$ com $0 \leq a_n$ e $0 \leq b_n$, $\forall n$. Supondo $L$ tal que
$$
\displaystyle\lim_{n \to \infty}\frac{a_n}{b_n} = L
$$
pode-se afirmar o seguinte com base no valor de $L$:
1. $0<L<+\infty$: $\displaystyle\sum_{n=1}^{\infty}{a_n}$ converge $\iff$ $\displaystyle\sum_{n=1}^{\infty}{b_n}$ converge.
2. $L = 0$: se $\displaystyle\sum_{n=1}^{\infty}{b_n}$ converge então $\displaystyle\sum_{n=1}^{\infty}{a_n}$ converge.
3. $L = \infty$: se $\displaystyle\sum_{n=1}^{\infty}{b_n}$ diverge então $\displaystyle\sum_{n=1}^{\infty}{a_n}$ diverge.

Note que para o *critério da comparação no limite* não é necessário saber qual a relação de desigualdade das duas sequências, pois analisa-se apenas o limite de seu quociente. Vale destacar também que esse critério permite conclusões mais claras e precisas, pois quando existe um limite definido para o quociente das duas sequências, a informação sobre convergência deve necessariamente ser a mesma entre as séries.