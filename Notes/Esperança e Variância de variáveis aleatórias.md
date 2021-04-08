# Esperança e Variância de variáveis aleatórias
A esperança nada mais é do que o **valor médio esperado** de uma variável aleatória. Ao executar um experimento aleatório muitas vezes é possível constatar que os valores de uma determinada variável aleatória tendem a um valor específico. Esse *valor médio esperado* é calculado fazendo uma *média* dos valores que a variável aleatória pode assumir, sendo que cada valor é *ponderado* pela sua probabilidade de ocorrência.
Esse valor esperado é um conceito fundamental em probabilidade, pois fornece informação a respeito do comportamento médio do experimento aleatório em questão.


## Esperança de variáveis aleatórias discretas
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória discreta com conjunto imagem $Im(X)$ e [[Variáveis aleatórias discretas#Distribuição das probabilidades de uma variável aleatória discreta|função de distribuição de probabilidade]] $pX$. O valor médio esperado ou *esperança* de $X$ é dada por:

>$$
 E(X) := \sum_{x \in Im(X)}{xp_X(x)}
>$$
>com
>$$
 \sum_{x \in Im(X)}{|x|p_X(x)} < \infty
>$$

Para as variáveis aleatórias mais comuns temos expressões que podem nos dizer rapidamente qual o valor médio esperado da variável aleatória:

>Se $X \sim Bernoulli(\theta)$, então:
>$$
  E(X) = \theta
>$$

>Se $X \sim Binomial(n, \theta)$, então:
>$$
  E(X) = n\theta
>$$

>Se $X \sim Geométrica(\theta)$, então:
>$$
  E(X) = \frac{1-\theta}{\theta}
>$$

## Esperança de variáveis aleatórias contínuas
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória contínua com conjunto imagem $Im(X)$ e [[Variáveis aleatórias contínuas#Função densidade de probabilidade|função densidade de probabilidade]] $f_X$. O valor médio esperado ou *esperança* de $X$ é dada por:

>$$
 E(X) := \int_{x \in Im(X)}{xf_X(x)}\,dx
>$$
>com
>$$
 \int_{x \in Im(X)}{|x|f_X(x)}\,dx < \infty
>$$

Para as variáveis aleatórias mais comuns temos expressões que podem nos dizer rapidamente qual o valor médio esperado da variável aleatória:

>Se $X \sim Uniforme([a,b])$, então:
>$$
  E(X) = \frac{a+b}{2}
>$$

>Se $X \sim Exponencial(\alpha)$, então:
>$$
  E(X) = \frac{1}{\alpha}
>$$

>Se $X \sim Normal(\mu,\sigma^2)$, então:
>$$
  E(X) = \mu
>$$


## Variância
Dado um experimento aleatório com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória com conjunto imagem $Im(X)$. Se $E(X)$ existe, então a **variância** e o **desvio padrão** de $X$ são definidos por:
>$$
\begin{aligned}
  Var(X) &:= E\left(\left[X-E(X)\right]^2\right)\\\\
  SD(X) &:= \displaystyle\sqrt{Var(X)}
\end{aligned}
>$$

A variância e o desvio padrão são medidas da **variabilidade** da distribuição **em torno da sua média**.
Veja que a variância pode ser interpretada como **o valor médio da distância dos valores da variável aleatória em relação ao seu valor médio esperado**. Apesar das boas propriedades matemáticas da variância, ao elevar a esperança da variável aleatória ao quadrado também elevamos suas unidades de medida ao quadrado (na prática as variáveis aleatórias representam grandezas do mundo real!), por essa razão temos o **desvio padrão**, que **retorna a variância à unidade de medida da variável aleatória**. Podemos dizer então que o desvio padrão é a forma interpretável fisicamente da variância de uma variável aleatória.

Para as variávies aleatórias mais comuns temos expressões que podem nos dizer rapidamente qual a variância esperada da variável aleatória:

>Se $X \sim Bernoulli(\theta)$, então:
>$$
  Var(X) = \theta(1-\theta)
>$$

>Se $X \sim Binomial(n, \theta)$, então:
>$$
  Var(X) = n\theta(1-\theta)
>$$

>Se $X \sim Geométrica(\theta)$, então:
>$$
  Var(X) = \frac{1-\theta}{\theta^2}
>$$

>Se $X \sim Uniforme([a,b])$, então:
>$$
  Var(X) = \frac{1}{b-a}
>$$

>Se $X \sim Exponencial(\alpha)$, então:
>$$
  Var(X) = \frac{1}{\alpha}
>$$

>Se $X \sim Normal(\mu, \sigma^2)$, então:
>$$
  Var(X) = \mu
>$$

---

created: 01/04/2021
modified: 01/04/2021
