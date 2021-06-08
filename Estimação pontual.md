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

---

created: 08/06/2021
