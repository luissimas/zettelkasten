# Séries Numéricas

> ***Série infinita***
> Uma *série infinita* é a soma de uma [[Sequências Numéricas | sequência]] infinita de números na forma
>$$
  \sum_{n=1}^{\infty}{a_n} = a_1 + a_2 + \dots + a_n + \dots
>$$

Como há um número infinito de termos, não é possível simplesmente realizar as operações de adição para cada termo. Ao invés disso, podemos observar o resultado da soma dos $n$ primeiros termos da sequência, também chamada de *soma parcial*. Com base na *soma parcial*, podemos analisar o comportamento do resultado da soma à medida que $n$ cresce, dessa forma é possível determinar o resultado da série infinita manipulando a ideia de [[Introdução intuitiva de limites | limites]].

> Dada uma sequência $(a_n)$, uma expressão da forma
>$$
  \sum_{n=1}^{\infty}{a_n} = a_1 + a_2 + \dots + a_n + \dots
>$$
> é uma **série infinita**. O número $a_n$ é o **n-ésimo** termo da série. A sequência $(s_n)$ definida por
>$$
\begin{aligned}
  s_1 &= a_1\\
  s_2 &= a_1 + a_2\\
  &\vdots\\
  s_n &= a_1 + a_2 + \dots + a_n\\
  &\vdots\\
\end{aligned}
>$$
> é a **sequência de somas parciais** da série. Se a sequência de somas parciais convergir para um limite $L$, dizemos que a série **converge** e que a soma é $L$:
>$$
a_1 + a_2 + \dots + a_n + \dots = \sum_{n=1}^{\infty}{a_n} = L
>$$
> Se a sequência de somas parciais da série não converge, dizemos que a série **diverge**.

A ideia então é, a partir de uma dada sequência $(a_n)$, construir uma **segunda sequência** $(s_n)$ composta pelas somas parciais dos termos de $(a_n)$. A partir daí é necessário determinar se a sequência $(s_n)$ converge ou diverge, se ela for convergente então é possível afirmar que há uma **série convergente**.

## Convergência de séries

Uma forma imediata de verificar se uma série diverge ou converge é verificar se seus termos se aproximam de $0$.

> Dada uma série $S = \displaystyle\sum_{n=1}^{\infty}{a_n}$. Se $S$ converge, então $\displaystyle\lim_{n \to \infty} a_n = 0$.

Note que a recíproca dessa condição não é válida, ou seja, existem sequências que tendem a $0$ cuja soma não é convergente.

---

created: 20/08/2021
