# Esperança e Variância de variáveis aleatórias

A esperança nada mais é do que o **valor médio esperado** de uma variável aleatória. Ao executar um experimento aleatório muitas vezes é possível constatar que os valores de uma determinada variável aleatória tendem a um valor específico. Esse *valor médio esperado* é calculado fazendo uma *média* dos valores que a variável aleatória pode assumir, sendo que cada valor é *ponderado* pela sua probabilidade de ocorrência.

Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória discreta com conjunto imagem $Im(X)$ e [[Variáveis aleatórias discretas#Distribuição das probabilidades de uma variável aleatória discreta|função de distribuição de probabilidade]] $pX$. O valor esperado ou *esperança* de $X$ é dada por:

>$$
 E(X) := \sum_{x \in Im(X)}{xp_X(x)}
>$$ 
>com
>$$
 \sum_{|x| \in Im(X)}{xp_X(x)} < \infty
>$$

Esse valor esperado é um conceito fundamental em probabilidade, pois fornece informação a respeito do comportamento médio do experimento aleatório em questão.

Um fato interessante é que o valor médio esperado de uma variável aleatória $X \sim Binomial(n,\theta)$ é sempre $E(X)=n\theta$.

---

created: 01/04/2021
modified: 01/04/2021
