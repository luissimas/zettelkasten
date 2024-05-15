---
date: 2024-05-15
---

Dado um experimento aleatório com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma [[Variáveis aleatórias|variável aleatória]] com conjunto imagem $Im(X)$. Se $E(X)$ existe, então a **variância** e o **desvio padrão** de $X$ são definidos por:
$$
\begin{aligned}
  Var(X) &:= E\left(\left[X-E(X)\right]^2\right)\\\\
  SD(X) &:= \displaystyle\sqrt{Var(X)}
\end{aligned}
$$

A variância e o desvio padrão são medidas da **variabilidade** da distribuição **em torno da sua média**.
Veja que a variância pode ser interpretada como **o valor médio da distância dos valores da variável aleatória em relação ao seu valor médio esperado**. Apesar das boas propriedades matemáticas da variância, ao elevar a esperança da variável aleatória ao quadrado também elevamos suas unidades de medida ao quadrado (na prática as variáveis aleatórias representam grandezas do mundo real!), por essa razão temos o **desvio padrão**, que **retorna a variância à unidade de medida da variável aleatória**. Podemos dizer então que o desvio padrão é a forma interpretável fisicamente da variância de uma variável aleatória.

Para as variávies aleatórias mais comuns temos expressões que podem nos dizer rapidamente qual a variância esperada da variável aleatória:

Se $X \sim Bernoulli(\theta)$, então:
$$
  Var(X) = \theta(1-\theta)
$$

Se $X \sim Binomial(n, \theta)$, então:
$$
  Var(X) = n\theta(1-\theta)
$$

Se $X \sim Geométrica(\theta)$, então:
$$
  Var(X) = \frac{1-\theta}{\theta^2}
$$

Se $X \sim Uniforme([a,b])$, então:
$$
  Var(X) = \frac{1}{b-a}
$$

Se $X \sim Exponencial(\alpha)$, então:
$$
  Var(X) = \frac{1}{\alpha^2}
$$

Se $X \sim Normal(\mu, \sigma^2)$, então:
$$
  Var(X) = \mu
$$