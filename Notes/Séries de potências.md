# Séries de potências
Uma série de potências é uma [[Séries numéricas|série]] do tipo
$$
 \sum_{n=0}^{\infty}{c_n(x-x_0)^n}
$$
Nesse caso, dizemos que essa série foi *desenvolvida em torno de* $x_0$. Chamamos de **intervalo de convergência** o conjunto dos valores de $x$ para os quais a série converge. Existem apenas três possibilidades para o intervalo de convergência:

1. Existe um valor $R > 0$ chamado de **raio de convergência** tal que a série converge se $|x-x_0|<R$, e diverge se $|x-x_0|>R$. Note que aqui nada se é afirmado sobre as extremidades do intervalo, a convergência ou divergência nesses pontos específicos precisa ser verificada para cada série.
2. Só converge no ponto $x_0$, ou seja: $I = \{x_0\}$. Nesse caso o **raio de convergência** é $R=0$.
3. Converge para qualquer valor de $x_0 \in \mathbb{R}$, ou seja: $I = \mathbb{R}$. Nesse caso o **raio de convergência** é $R=\infty$.

Note que séries de potências necessariamente são convergentes em **invervalos simétricos** em torno de $x_0$.

## Determinando o raio de converência
As séries de potência possuem um formato atrativo para a aplicação do [[Critério da razão|critério da razão]]. Do uso desse critério derivou-se um teorema que permite determinar facilmente o **raio de convergência** de uma série de potências.
Dada uma série de potências $\displaystyle\sum_{n=0}^{\infty}{c_n(x-x_0)^n}$, com $\displaystyle c_n \neq 0$. Se $\displaystyle \lim_{n\to\infty} \frac{|c_{n+1}|}{|c_n|} = L$. Então o **raio de convergência** $R$ é dado por $\displaystyle R=\frac{1}{L}$. Note que aqui adota-se como convenção que $\displaystyle \frac{1}{\infty} = 0$ e $\displaystyle \frac{1}{0} = \infty$.

## Integração e derivação termo a termo

Dada uma série de potências $\displaystyle \sum_{n=0}^{\infty}{c_n(x-x_0)^n}$ com um raio de converência $R > 0$. Seja $I$ o intervalo de convergência da série. Com base nisso, podemos relacionar a série com uma **função real** $f$ tal que:

$$
\begin{aligned}
    &f: I \to \mathbb{R}\\
    &f(x) = \sum_{n=0}^{\infty}{c_n(x-x_0)^n}
\end{aligned}
$$

Com base nessa relação é possível tirar as seguintes conclusões:

1. $f$ é **derivável** em $]x_0 - R, x_0 + R[$. E sua derivada é dada por:
$$
f'(x) = \sum_{n=0}^{\infty}{n \cdot c_n(x-x_0)^{n-1}}
$$

2. $f$ é **integrável** e sua primitiva é dada por:
$$
\int{f(x)}dx = \sum_{n=0}^{\infty}{\frac{c_n(x-x_0)^{n+1}}{n+1}} + C
$$

3. Se $\displaystyle \displaystyle \sum_{n=0}^{\infty}{c_n(x-x_0)^n}$ for convergente em $x_0 \pm R$, ou seja, se a série for **convergente** em alguma das **extremidades** do intervalo, então $f$ é **contínua** em $x_0 \pm R$.

---

created: 06/09/2021
