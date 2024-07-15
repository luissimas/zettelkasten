---
created-at: 2021-04-01
---
A esperança nada mais é do que o **valor médio esperado** de uma variável aleatória. Ao executar um experimento aleatório muitas vezes é possível constatar que os valores de uma determinada variável aleatória tendem a um valor específico. Esse *valor médio esperado* é calculado fazendo uma *média* dos valores que a variável aleatória pode assumir, sendo que cada valor é *ponderado* pela sua probabilidade de ocorrência.
Esse valor esperado é um conceito fundamental em probabilidade, pois fornece informação a respeito do comportamento médio do experimento aleatório em questão.


# Esperança de variáveis aleatórias discretas
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória discreta com conjunto imagem $Im(X)$ e [[Variáveis aleatórias discretas#Distribuição das probabilidades de uma variável aleatória discreta|função de distribuição de probabilidade]] $pX$. O valor médio esperado ou *esperança* de $X$ é dada por:

$$
 E(X) := \sum_{x \in Im(X)}{xp_X(x)}
$$
com
$$
 \sum_{x \in Im(X)}{|x|p_X(x)} < \infty
$$

Para as variáveis aleatórias mais comuns temos expressões que podem nos dizer rapidamente qual o valor médio esperado da variável aleatória:

Se $X \sim Bernoulli(\theta)$, então:
$$
  E(X) = \theta
$$

Se $X \sim Binomial(n, \theta)$, então:
$$
  E(X) = n\theta
$$

Se $X \sim Geométrica(\theta)$, então:
$$
  E(X) = \frac{1-\theta}{\theta}
$$

# Esperança de variáveis aleatórias contínuas
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória contínua com conjunto imagem $Im(X)$ e [[Variáveis aleatórias contínuas#Função densidade de probabilidade|função densidade de probabilidade]] $f_X$. O valor médio esperado ou *esperança* de $X$ é dada por:

$$
 E(X) := \int_{x \in Im(X)}{xf_X(x)}\,dx
$$
com
$$
 \int_{x \in Im(X)}{|x|f_X(x)}\,dx < \infty
$$

Para as variáveis aleatórias mais comuns temos expressões que podem nos dizer rapidamente qual o valor médio esperado da variável aleatória:

Se $X \sim Uniforme([a,b])$, então:
$$
  E(X) = \frac{a+b}{2}
$$

Se $X \sim Exponencial(\alpha)$, então:
$$
  E(X) = \frac{1}{\alpha}
$$

Se $X \sim Normal(\mu,\sigma^2)$, então:
$$
  E(X) = \mu
$$
