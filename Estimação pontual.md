# Estimação pontual
> ***Estimador pontual e estimativa pontual***
> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. Qualquer [[Estatísticas e suas distribuições|estatística]] $\hat{\theta} := T(X_1, \dots, X_n)$ que assume valores em $\Theta$ é um **estimador** para $\theta$. Quando $(x_1, \dots, x_n)$ é uma **observação** da amostra $(X_1, X_2, \dots, X_n)$, dizemos que $\hat{\theta} := T(X_1,\dots,X_n)$ é uma **estimativa** para $\theta$.

Note que, enquanto um **estimador é uma função** da amostra ([[Estatísticas e suas distribuições|estatística]]), uma **estimativa é um valor** (produzido ao aplicar uma amostra a um estimador).

## Comparação de estimadores
Veja que apenas encontrar um estimador e com ele produzir estimativas não basta, tendo em vista que podem existir diversas [[Estatísticas e suas distribuições|estatísticas]] que produzem valores no espaço paramétrico $\Theta$. Portanto, é necessário também saber avaliar e **comparar** estimadores. De maneira geral, um estimador é melhor do que o outro se ele produz estimativas mais próximas do parâmetro $\theta$ que se deseja estimar. Mas como o parâmetro $\theta$ é desconhecido, essa noção de proximidade deve se dar a partir da [[Estatísticas e suas distribuições#Distribuições amostrais|distribuição amostral]] de $\hat{\theta}$.

A seguir definimos duas propriedades importantíssimas dos estimadores:

> ***Viés de um estimador***
> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. O **viés** de um estimador $\hat{\theta}$ para o parâmetro $\theta$ é uma função $B_{\hat{\theta}}(\theta) : \Theta \rightarrow \mathbb{R}$ tal que
>$$
  B_{\hat{\theta}}(\theta) := E(\hat{\theta}) - \theta
>$$
> Quando
> - $B_{\hat{\theta}}(\theta) = 0$, dizemos que $\hat{\theta}$ é um **estimador não-viesado** para $\theta$;
> - $B_{\hat{\theta}}(\theta) > 0, \forall \theta \in \Theta$, dizemos que $\hat{\theta}$ é um **estimador viesado positivamente** para $\theta$;
> - $B_{\hat{\theta}}(\theta) < 0, \forall \theta \in \Theta$, dizemos que $\hat{\theta}$ é um **estimador viesado negativamente** para $\theta$;

> ***Erro quadrático médio (EQM)***
> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. O **erro quadrático médio** de um estimador $\hat{\theta}$ para o parâmetro $\theta$ é uma função $EQM_{\hat{\theta}} : \Theta \rightarrow \mathbb{R}_+$ tal que
>$$
  EQM_{\hat{\theta}}(\theta) := E\left[\left(\hat{\theta} - \theta\right)^2\right]
>$$
> ou ainda
>$$
  EQM_{\hat{\theta}}(\theta) := Var(\hat{\theta}) + B_{\hat{\theta}}^2(\theta)
>$$

Com essas definições, podemos então comparar dois estimadores diferentes e verificar qual é melhor através de seus *EQMs*:

> ***Melhor estimador***
> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. O estimador $\hat{\theta}_1$ para $\theta$ é dito ser **melhor** que o estimador $\hat{\theta}_2$ quando
>$$
  EQM_{\hat{\theta}_1}(\theta) \leq EQM_{\hat{\theta}_2}(\theta)
>$$
> para todo $\theta \in \Theta$.

## Estimadores de máxima verossimilhança
Saber comparar estimadores só é útil quando já temos dois estimadores definidos e queremos saber qual deles é melhor. Mas muitas vezes é necessário obter os estimadores, e mais, obter *bons estimadores*. O *método da máxima verossimilhança* nos permite derivar bons estimadores pontuais com boas propriedades, tendo como base apenas a amostra e sua [[Estatísticas e suas distribuições#Distribuições amostrais|distribuição]].

Esse método é bastante intuitivo, pois ele consiste em *tentar encontrar o valor do parâmetro que é mais plausível de ter produzido os dados que de fato observamos (amostra)*.

> ***Função, estimador e estimativa de máxima verossimilhança***
> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido.
> - Observada a amostra $(x_1, x_2, \dots, x_n)$ de $(X_1, X_2, \dots, X_n)$, a **função de verossimilhança** é a função $L(\cdot|x_1,\dots,x_n) : \Theta \rightarrow \mathbb{R}_+$ tal que
>$$
  L(\theta|x_1,\dots,x_n) = p(x_1,\dots,x_n|\theta) = \prod_{i=1}^{n}{p(x_i|\theta)}
>$$
> no caso em que $X$ é uma variável aleatória discreta e
>$$
  L(\theta|x_1,\dots,x_n) = f(x_1,\dots,x_n|\theta) = \prod_{i=1}^{n}{f(x_i|\theta)}
>$$
> no caso em que $X$ é uma variável aleatória contínua.
> - Suponha que o argumento que maximiza a função de verossimilhança $L(\theta|x_1,\dots,x_n)$ existe e é igual a $\hat{\theta} = T(x_1,\dots,x_n) \in \Theta$, para cada amostra $(x_1, x_2, \dots, x_n)$ que pode ser observada a partir de $(X_1, X_2, \dots, X_n)$. A estatística $\hat{\theta} = T(X_1,\dots,X_n)$ é chamada de **estimador de máxima verossimilhança** para $\theta$.
> - Observada a amostra $(x_1, x_2, \dots, x_n)$ de $(X_1, X_2, \dots, X_n)$ e sendo $\hat{\theta}$ um estimador de máxima verossimilhança para $\theta$, então $\hat{\theta} = T(x_1,\dots,x_n)$ é uma **estimativa de máxima verossimilhança** para $\theta$.

---

created: 08/06/2021
