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

## Intervalos de confiança para a média de populações normais
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, e $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ tal que $X \sim Normal(\mu, \sigma^2)$, $\mu \in \mathbb{R}$ e $\sigma^2 > 0$. Quando $\mu$ é **desconhecido** e $\sigma^2 = \sigma_0^2$ é **conhecido**, o estimador de máxima verossimilhança para $\mu$ é $\bar{X}$ e

$$
  \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \sim Normal(0,1)
$$

Dessa forma, fixado um nível de confiança $\gamma \in ]0,1[$, existem $z \in \mathbb{R}_+$ tal que

$$
  P\left(-z \leq \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \leq z\right)
$$

Assim, um intervalo com nível de confiança $\gamma$ para $\mu$ é

$$
  \left[ \bar{X} - z \frac{\sigma_0}{\sqrt{n}};\quad \bar{X} + z \frac{\sigma_0}{\sqrt{n}}\right]
$$

Porém, quando a variância $\sigma^2$ da variável aleatória $X$ também é um parâmetro **desconhecido**, não podemos utilizar esse mesmo intervalo de confiança para $\mu$, pois esse intervalo depende da variância populacional.

No caso da variância populacional ser desconhecida, podemos utilizar a *variância amostral* $S^2$ para estimar $\sigma^2$. Porém com isso devemos considerar outra distribuição, e aí que entra a distribuição *t-Student*. Dizemos então que a variável não possui mais distribuição normal padrão, mas sim distribuição *t-Student* com $n-1$ graus de liberdade.

$$
  T := \frac{\bar{X}-\mu}{S/\sqrt{n}} \sim t_{(n-1)}
$$

Dessa forma, fixado um nível de confiança $\gamma \in ]0,1[$, existe $t \in \mathbb{R}$ tal que

$$
  P\left( -t \leq \frac{\bar{X} - \mu}{S/\sqrt{n}} \leq t \right)
$$

Portanto, um intervalo com nível de confiança $\gamma$ para $\mu$ é

$$
  \left[ \bar{X} - t \frac{S}{\sqrt{n}};\quad \bar{X} + t \frac{S}{\sqrt{n}}\right]
$$

## Intervalos de confiança para a variância de populações normais
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, e $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ tal que $X \sim Normal(\mu, \sigma^2)$, $\mu \in \mathbb{R}$ e $\sigma^2 > 0$ são parâmetros desconhecidos. Para construir um intervalo de confiança para $\sigma^2$, utilizamos a *variância amostral* $S^2$ como estimador e introduzimos uma outra distribuição, a *qui-quadrado*.
Consideramos o seguinte fato:

$$
  \frac{(n-1)S^2}{\sigma^2} \sim \mathcal{X}_{(n-1)}
$$

em que

$$
  S^2 := \frac{1}{n-1} \sum_{i=1}^{n}{\left(X_1 - \bar{X}\right)^2}
$$

é a variância amostral e $\mathcal{X}_{(n-1)}$ é uma distribuição *qui-quadrado* com $n-1$ graus de liberdade.
Note que a distribuição *qui-quadrado*, ao contrário da *Normal* e *t-Student*, não é simétrica. Portanto, dado um nível de confiança $\gamma \in ]0,1[$, devemos tomar $q_1 \geq 0$ e $q_2 \geq 0$ tais que

$$
  P(Q \geq q_2) = P(Q \leq q_1) = \frac{1-\gamma}{2}
$$

em que

$$
  Q = \frac{(n-1)S^2}{\sigma^2} \sim \mathcal{X}_{(n-1)}
$$

ou seja,

$$
  P\left(q_1 \leq \frac{(n-1)S^2}{\sigma^2} \leq q_2\right)
$$

Assim,

$$
  P\left( \frac{(n-1)S^2}{q_2} \leq \sigma^2 \leq \frac{(n-1)S^2}{q_1} \right) = \gamma
$$

Portanto, um intervalo com nível de confiança $\gamma$ para $\sigma^2$ é

$$
  \left[ \frac{(n-1)S^2}{q_2} ;\quad \frac{(n-1)S^2}{q_1} \right]
$$


---

created: 08/06/2021
