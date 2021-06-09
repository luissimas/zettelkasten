# Estimação intervalar
Quando fazemos [[Estimação pontual|estimativas pontuais]], não há como julgar qual a magnitude do possível erro da estimativa, apenas sabemos que o valor verdadeiro do parâmetro está próximo da estimativa. Assim, a estimação intervalar nos fornece meios de determinar não só uma estimativa, mas um *intervalo de confiança*, ou seja, um intervalo de valores plausíveis para o parâmetro (o que **não** significa que o parâmetro está com certeza nesse intervalo).
Os intervalos de confiança são obtidos a partir da [[Estatísticas e suas distribuições#Distribuições amostrais|distribuição amostral]] dos [[Estimação pontual|estimadores pontuais]]. Não há como determinar com certeza se o intervalo de confiança contém o parâmetro populacional (pois ele é desconhecido), porém esse intervalo é construído com base em um alto nível de confiança fixado de que ele contém o parâmetro.

> ***Intervalo de confiança***
> Dada uma amostra aleatória $(X_1, X_2, \dots, X_n)$ da variável aleatória $X$ que representa uma característica observável da população $\mathcal{P}$, tal que a função de distribuição (ou densidade) de probabilidade de $X$ é $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta \in \Theta$ é um parâmetro populacional desconhecido. Se $\hat{\theta} = T(X_1,\dots,X_n)$ é um estimador de $\theta$ cuja [[Estatísticas e suas distribuições#Distribuições amostrais|distribuição amostral]] é conhecida, sempre é possível encontrar dois valores $t_1 := t_1(X_1,\dots,X_n)$ e $t_2 := t_2(X_1,\dots,X_n)$ tais que
>$$
  P(t_1 \leq \theta \leq t_2) = \gamma
>$$
> em que $\gamma$ é o *coeficiente de confiança* do intervalo.

Note que, para obter um intervalo de confiança, é necessário obter um estimador e sua distribuição. É natural então que bons estimadores produzam bons intervalos, e de fato produzem. Portanto, buscaremos sempre utilizar os [[Estimação pontual#Estimadores de máxima verossimilhança|estimadores de máxima verossimilhança]] para construir bons intervalos de confiança.

## Intervalos de confiança para a proporção populacional
Seja $p \in ]0,1[$ a proporção (desconhecida) de indivíduos ou objetos de uma certa população $\mathcal{P}$ que são portadores de uma determinada característica $X$. Dada uma amostra $(X_1, X_2, \dots, X_n)$ da variável aleatória $X$, obtida a partir dessa população, o estimador de máxima verossimilhança de $p$ é a proporção amostral

$$
  \hat{p} := \frac{1}{n} \sum_{i=1}^{n}{X_i}
$$

Para $n$ suficientemente grande, segue pelo *Teorema Central do Limite* que

$$
  \hat{p} \simeq Normal(p, \frac{p(1-p)}{n})
$$

Normalizando a distribuição, temos

$$
  \frac{\hat{p} - p}{\sqrt{\frac{p(1-p)}{n}}} \simeq Normal(0,1)
$$

Dessa forma, para um coeficiente de confiança $\gamma \in ]0,1[$, temos

$$
  P\left(\hat{p} - z\sqrt{\frac{p(1-p)}{n}} \leq p \leq \hat{p} + z\sqrt{\frac{p(1-p)}{n}}\right)
$$

A partir disso, podemos construir dois intervalos de confiança. O primeiro é um intervalo conservador, geralmente utilizado para $n$ não suficientemente grande:
>$$
  \left[\hat{p} - \frac{z}{2\sqrt{n}}; \quad \hat{p} + \frac{z}{2\sqrt{n}}\right]
>$$

O segundo é um intervalo mais preciso, porém depende de um $n$ suficientemente grande:
>$$
  \left[\hat{p} - z\sqrt{\frac{\hat{p}(1-\hat{p})}{n}};\quad \hat{p} + z\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}\right]
>$$

## Intervalos de confiança para a média populacional

---

created: 08/06/2021
