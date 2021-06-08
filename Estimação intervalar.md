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

---

created: 08/06/2021
