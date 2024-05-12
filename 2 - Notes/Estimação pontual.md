---
created-at: 2021-06-08
---
***Estimador pontual e estimativa pontual***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. Qualquer [[Estatísticas e suas distribuições|estatística]] $\hat{\theta} := T(X_1, \dots, X_n)$ que assume valores em $\Theta$ é um **estimador** para $\theta$. Quando $(x_1, \dots, x_n)$ é uma **observação** da amostra $(X_1, X_2, \dots, X_n)$, dizemos que $\hat{\theta} := T(X_1,\dots,X_n)$ é uma **estimativa** para $\theta$.

Note que, enquanto um **estimador é uma função** da amostra ([[Estatísticas e suas distribuições|estatística]]), uma **estimativa é um valor** (produzido ao aplicar uma amostra a um estimador).

# Comparação de estimadores
Veja que apenas encontrar um estimador e com ele produzir estimativas não basta, tendo em vista que podem existir diversas [[Estatísticas e suas distribuições|estatísticas]] que produzem valores no espaço paramétrico $\Theta$. Portanto, é necessário também saber avaliar e **comparar** estimadores. De maneira geral, um estimador é melhor do que o outro se ele produz estimativas mais próximas do parâmetro $\theta$ que se deseja estimar. Mas como o parâmetro $\theta$ é desconhecido, essa noção de proximidade deve se dar a partir da [[Estatísticas e suas distribuições#Distribuições amostrais|distribuição amostral]] de $\hat{\theta}$.

A seguir definimos duas propriedades importantíssimas dos estimadores:

***Viés de um estimador***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. O **viés** de um estimador $\hat{\theta}$ para o parâmetro $\theta$ é uma função $B_{\hat{\theta}}(\theta) : \Theta \rightarrow \mathbb{R}$ tal que
$$
  B_{\hat{\theta}}(\theta) := E(\hat{\theta}) - \theta
$$
Quando
- $B_{\hat{\theta}}(\theta) = 0$, dizemos que $\hat{\theta}$ é um **estimador não-viesado** para $\theta$;
- $B_{\hat{\theta}}(\theta) > 0, \forall \theta \in \Theta$, dizemos que $\hat{\theta}$ é um **estimador viesado positivamente** para $\theta$;
- $B_{\hat{\theta}}(\theta) < 0, \forall \theta \in \Theta$, dizemos que $\hat{\theta}$ é um **estimador viesado negativamente** para $\theta$;

***Erro quadrático médio (EQM)***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. O **erro quadrático médio** de um estimador $\hat{\theta}$ para o parâmetro $\theta$ é uma função $EQM_{\hat{\theta}} : \Theta \rightarrow \mathbb{R}_+$ tal que
$$
  EQM_{\hat{\theta}}(\theta) := E\left[\left(\hat{\theta} - \theta\right)^2\right]
$$
ou ainda
$$
  EQM_{\hat{\theta}}(\theta) := Var(\hat{\theta}) + B_{\hat{\theta}}^2(\theta)
$$

Com essas definições, podemos então comparar dois estimadores diferentes e verificar qual é melhor através de seus *EQMs*:

***Melhor estimador***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. O estimador $\hat{\theta}_1$ para $\theta$ é dito ser **melhor** que o estimador $\hat{\theta}_2$ quando
$$
  EQM_{\hat{\theta}_1}(\theta) \leq EQM_{\hat{\theta}_2}(\theta)
$$
para todo $\theta \in \Theta$.

# Estimadores de máxima verossimilhança
Saber comparar estimadores só é útil quando já temos dois estimadores definidos e queremos saber qual deles é melhor. Mas muitas vezes é necessário obter os estimadores, e mais, obter *bons estimadores*. O *método da máxima verossimilhança* nos permite derivar bons estimadores pontuais com boas propriedades, tendo como base apenas a amostra e sua [[Estatísticas e suas distribuições#Distribuições amostrais|distribuição]].

Esse método é bastante intuitivo, pois ele consiste em *tentar encontrar o valor do parâmetro que é mais plausível de ter produzido os dados que de fato observamos (amostra)*.

***Função, estimador e estimativa de máxima verossimilhança***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido.
- Observada a amostra $(x_1, x_2, \dots, x_n)$ de $(X_1, X_2, \dots, X_n)$, a **função de verossimilhança** é a função $L(\theta|x_1,\dots,x_n) : \Theta \rightarrow \mathbb{R}_+$ tal que
$$
  L(\theta|x_1,\dots,x_n) = p(x_1,\dots,x_n|\theta) = \prod_{i=1}^{n}{p(x_i|\theta)}
$$
no caso em que $X$ é uma variável aleatória discreta e
$$
  L(\theta|x_1,\dots,x_n) = f(x_1,\dots,x_n|\theta) = \prod_{i=1}^{n}{f(x_i|\theta)}
$$
no caso em que $X$ é uma variável aleatória contínua.
- Suponha que o argumento que maximiza a função de verossimilhança $L(\theta|x_1,\dots,x_n)$ existe e é igual a $\hat{\theta} = T(x_1,\dots,x_n) \in \Theta$, para cada amostra $(x_1, x_2, \dots, x_n)$ que pode ser observada a partir de $(X_1, X_2, \dots, X_n)$. A estatística $\hat{\theta} = T(X_1,\dots,X_n)$ é chamada de **estimador de máxima verossimilhança** para $\theta$.
- Observada a amostra $(x_1, x_2, \dots, x_n)$ de $(X_1, X_2, \dots, X_n)$ e sendo $\hat{\theta}$ um estimador de máxima verossimilhança para $\theta$, então $\hat{\theta} = T(x_1,\dots,x_n)$ é uma **estimativa de máxima verossimilhança** para $\theta$.

Veja que se a ideia é encontrar o argumento que maximiza a função de verossimilhança, podemos [[Velocidade instantânea e derivadas#Derivadas|derivar]] essa função e então encontrar seu ponto de máximo. Note que derivar funções pode se tornar algo complicado, entretanto sabemos que é simples [[Derivação de funções exponenciais e logarítmicas|derivar funções logarítmicas]]. Portanto, podemos manipular a função de máxima verossimilhança para facilitar a sua derivação:

***Função log-verossimilhança***
Dado que $\ln{x}$ é uma função contínua estritamente crescente para todo $x > 0$ e $L(\theta|x_1,\dots,x_n)$ é uma função positiva para todo $\theta \in \Theta$. Para qualquer que seja a amostra observada $(x_1, x_2, \dots, x_n)$ de $(X_1, X_2, \dots, X_n)$, podemos considerar o logaritmo natural da função de verossimilhança de $\theta$:
$$
  l(\theta|x_1,\dots,x_n) := \ln{L(\theta|x_1,\dots,x_n)}
$$
o qual é chamado de *função de log-verossimilhança* de $\theta$. Assim, o valor de $\theta$ que maximiza a função de verossimilhança $L(\theta|x_1,\dots,x_n)$ é também o que maximiza a função de log-verossimilhança $l(\theta|x_1,\dots,x_n)$

Dessa forma, para encontramos o estimador de máxima verossimilhança $\hat{\theta}$, basta encontrar o argumento que maximiza a função log-verossimilhança $l(\theta|x_1,\dots,x_n)$.

## Propriedades dos estimadores de máxima verossimilhança
Os estimadores de máxima verossimilhança são muito utilizados pois eles possuem boas propriedades estatísticas, a principal delas é enunciada no teorema a seguir:

***Princípio da invariância***
Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta \in \Theta$ é um parâmetro desconhecido. Se $\hat{\theta}$ é um estimador de máxima verossimilhança para $\theta$, então $g(\hat{\theta})$ é um estimador de máxima verossimilhança para $g(\theta)$, sempre que $g$ for uma função bijetora.