---
created-at: 2021-08-28
---
Uma forma imediata de verificar se uma [[Séries numéricas | série]] diverge ou converge é verificar se seu termo geral $a_n$ converge a $0$.

> ***Critério do termo geral***
> Dada uma série $S = \displaystyle\sum_{n=1}^{\infty}{a_n}$. Se $S$ converge, então $\displaystyle\lim_{n \to \infty} a_n = 0$.

Note que a recíproca dessa condição não é válida, ou seja, existem sequências convergem a $0$ cuja soma não é convergente.

# Critérios de convergência
Além da verificação pelo termo geral, existem muitas outras formas de verificar a convergência de séries, algumas delas são enunciadas aqui.

[[Critério da comparação]]
[[Critério da integral]]
[[Critério da raiz]]
[[Critério da razão]]
[[Critério de Leibniz]]

# Convergência absoluta e condicional
> ***Convergência absoluta***
> Uma série $\displaystyle\sum_{n = 1}^{\infty}{a_n}$ é *absolutamente convergente* se a série correspondente de valores absolutos $\displaystyle\sum_{n = 1}^{\infty}{|a_n|}$ converge.

> ***Convergência condicional***
> Uma série que converge, mas não converge absolutamente, isto é, a série correspondente de valores absolutos diverge, é chamada de *condicionalmente convergente*.

Os conceitos de convergência absoluta e convergência condicional nos permitem, além de classificar séries, estender os critérios de convergência de séries de termos positivos para qualquer série com qualquer distribuição de sinal entre seus termos.

> ***Teste da convergência absoluta***
> Se $\displaystyle\sum_{n = 1}^{\infty}{|a_n|}$ converge, então $\displaystyle\sum_{n = 1}^{\infty}{a_n}$ converge.

É importante ressaltar que a recíproca desse teste **não** é válida, ou seja, é possível que uma série convergente não seja absolutamente convergente (a série harmônica alternada é um exemplo desse fenômeno).