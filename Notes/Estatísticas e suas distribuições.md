---
created-at: 2021-06-07
---
Uma estatística é um **valor** ou conjunto de valores observáveis que resume a característica $X$ na amostra. As estatísticas serão utilizadas para realizar a inferência sobre os parâmetros desconhecidos da população.

***Estatística***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $(X_1, X_2, \dots, X_n)$ uma amostra da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ que representa uma característica observável associada a uma população $\mathcal{P}$ de indivíduos ou objetos. Uma **estatística** é **qualquer** função $T(X_1,\dots,X_n)$ da amostra que **não depende de parâmetros desconhecidos** da distribuição de $X$.

Note que uma uma estatística **não depende de parâmetros populacionais desconhecidos**. Isso significa que podemos, através das estatísticas, utilizar valores conhecidos das amostras para obter estimações dos parâmetros desconhecidos da população.

Alguns exemplos de estatísticas:

- Média amostral: $\bar{X} := \frac{1}{n}\sum_{i=1}^{n}{X_1}$
- Variância amostral: $S^2 := \frac{1}{n-1}\sum_{i=1}^{n}{(X_i-\bar{X})^2}$
- Menor valor da amostra: $X_{(1)} := \min{(X_1,\dots,X_n)}$
- Maior valor da amostra: $X_{(n)} := \max{(X_1,\dots,X_n)}$
- Amplitude amostral: $W := X_{(n)} - X_{(1)}$

Note que todos esses exemplos são **funções** da amostra. Sendo assim, dadas amostras diferentes, as estatísticas podem assumir valores diferentes.

# Distribuições conjuntas
As distribuições conjuntas descrevem a distribuição de um vetor composto por $n$ variáveis aleatórias.

***Distribuição conjunta***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $(X_1, X_2, \dots, X_n)$ uma amostra da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta \in \mathbb{R}$ é um parâmetro desconhecido. A **distribuição conjunta de probabilidade** do vetor $(X_1, X_2, \dots, X_n)$ é uma função $p : \mathbb{R}^n \rightarrow [0,1]$ (ou $f : \mathbb{R}^n \rightarrow [0,+\infty]$) tal que quando $X$ é uma [[Variáveis aleatórias discretas|variável aleatória discreta]]
$$
  p(x_1,\dots,x_n|\theta) =
  \begin{cases}
  P(X_1 = x_1, \dots, X_n = x_n), \qquad\text{se} (x_1,\dots,x_n) \in Im(X_1,\dots,X_n)\\
  0, \qquad\text{caso contrário}
  \end{cases}
$$
e quando $X$ é uma [[Variáveis aleatórias contínuas|variável aleatória contínua]] $f(x_1,\dots,x_n|\theta)$ é tal que
$$
  P(a_1 \leq X_1 \leq b_1, \dots, a_n \leq X_n \leq b_n) =
  \int_{a_1}^{b_1}{\dots \int_{a_n}^{b_n}{f(x_1,\dots,x_n|\theta)}\,dx_n}\dots\,dx_1
$$
em que $[a_1,b_1], \dots, [a_n, b_n]$ são intervalos reais.

Pela definição é possível perceber que encontrar a distribuição conjunta de um vetor $(X_1, X_2,\dots, X_n)$ não é trivial, portanto algumas suposições são feitas sobre a natureza desses vetores para facilitar o processo de encontrar a distribuição conjunta.
A primeira suposição feita é que $(X_1,X_2,\dots,X_n)$ é uma sequência de variáveis aleatórias *independentes* com a mesma distribuição $p(x|\theta)$ (ou $f(x|\theta)$), ou seja:
$$
  p(x_1,\dots,x_n|\theta)=\prod_{i=1}^{n}{p(x_i|\theta)}
$$
ou
$$
  f(x_1,\dots,x_n|\theta)=\prod_{i=1}^{n}{f(x_i|\theta)}
$$
em que $\theta \in \mathbb{R}$ é um parâmetro desconhecido e $p(x_1,\dots,x_n|\theta)$ ou $f(x_1,\dots,x_n|\theta)$ é a função de distribuição conjunta de probabilidade do vetor $(X_1,\dots,X_n)$

***Amostra aleatória***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $(X_1, X_2, \dots, X_n)$ uma amostra da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta \in \mathbb{R}$ é um parâmetro desconhecido. Dizemos que $(X_1, X_2, \dots, X_n)$ é uma **amostra aleatória** da variável aleatória $X$ quando $(X_1, X_2, \dots, X_n)$ é uma sequência de variáveis aleatórias independentes e com a mesma distribuição $p(x|\theta)$ (ou $f(x|\theta)$) da variável aleatória $X$.

# Distribuições amostrais
Dada uma estatística $T(X_1, \dots, X_n)$, chamamos a distribuição dessa estatística de *distribuição amostral*, ou seja, a *distribuição amostral* é a distribuição dos valores que a estatística assume para todas as possíveis amostras. Essa distribuição depende da distribuição da população, do tamanho da amostra e do método de seleção da amostra, isso faz com que seja muito difícil obter a distribuição exata das estatísticas, por essa razão trabalhamos com **distribuições aproximadas**.

As seguintes relações são muito úteis, pois nos permitem relacionar a [[Esperança de variáveis aleatórias|esperança]] e  [[Variância]] das variáveis com a esperança e variância amostrais.

Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$  associado a um experimento aleatório, se $(X_1, X_2, \dots, X_n)$ é uma sequência de variáveis aleatórias **independentes** definidas sobre $(\Omega, \mathcal{F}, P)$, então as seguintes afirmações são verdadeiras:
$$
\begin{aligned}
  &\text{(i)}\quad E\left(a\sum_{i=1}^{n}{X_i}+b\right) = a \sum_{i=1}^{n}{E(X_i)}+b \qquad \text{e}\qquad E\left(\prod_{i=1}^{n}{X_i}\right) = \prod_{i=1}^{n}{E(X_i)}\\\\
  &\text{(ii)}\quad Var\left(a \sum_{i=1}^{n}{X_1}+b\right) = a^2 \sum_{i=1}^{n}{Var(X_i)}
\end{aligned}
$$

Com essas relações, podemos determinar a esperança e variância de diversas estatísticas a partir da esperança e variância de $X$.

## Média amostral
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Se $(X_1, X_2, \dots, X_n)$ é uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ tal que $E(X) = \mu$ e $Var(X) = \sigma^2$, então
$$
  E(\bar{X}) = \mu \qquad \text{e} \qquad Var(\bar{X}) = \frac{\sigma^2}{n}
$$
em que $\bar{X}$ é a **média amostral**.

Apesar disso, **não** sabemos de fato qual é a distribuição amostral **exata** de $\bar{X}$, e nunca saberemos. Entretanto, podemos encontrar a distribuição **aproximada** através do *Teorema do Limite Central (T.L.C.)*, que nos permite aproximar a distribuição da média amostral a uma [[Variáveis aleatórias contínuas#Distribuição normal|distribuição normal]].

***Teorema do limite central***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Se $(X_1, X_2, \dots, X_n)$ é uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ tal que $E(X) = \mu$ e $Var(X) = \sigma^2$, então
$$
  \bar{X} \simeq Normal\left(\mu,\frac{\sigma^2}{n}\right)
$$
quando $n \rightarrow +\infty$

Podemos ainda *normalizar* o intervalo, obtendo:

Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Se $(X_1, X_2, \dots, X_n)$ é uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ tal que $E(X) = \mu$ e $Var(X) = \sigma^2$, então
$$
  \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \simeq Normal(0,1)
$$
quando $n \rightarrow +\infty$

Note que essa aproximação depende do tamanho da amostra $n$. Em geral, para $n \geq 30$ essa aproximação é válida se a distribuição da população não for muito diferente da normal.

Vale destacar que quando $(X_1, X_2, \dots, X_n)$ é uma amostra aleatória de uma variável aleatória com distribuição normal, então o *T.L.C.* é válido para qualquer $n$, ou seja, se $X$ tem distribuição normal, então $\bar{X}$ tem distribuição *exata* normal.

## Proporção amostral
Podemos utilizar o *T.L.C.* para aproximar também a distribuição da proporção amostral $\hat{p}$ pela [[Variáveis aleatórias contínuas#Distribuição normal|distribuição normal]]. Nesse caso temos:

$$
  E(\hat{p}) = p \qquad \text{e} \qquad Var(\hat{p}) = \frac{p(1-p)}{n}
$$

Portanto, para $n$ suficientemente grande, a distribuição *aproximada* de $\hat{p}$ é:

$$
  \hat{p} \simeq Normal\left(p, \frac{p(1-p)}{n}\right)
$$