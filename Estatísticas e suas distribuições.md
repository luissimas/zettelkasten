# Estatísticas e suas distribuições
Uma estatística é um **valor** ou conjunto de valores observáveis que resume a característica $X$ na amostra. As estatísticas serão utilizadas para realizar a inferência sobre os parâmetros desconhecidos da população.

> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $(X_1, X_2, \dots, X_n)$ uma amostra da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ que representa uma característica observável associada a uma população $\mathcal{P}$ de indivíduos ou objetos. Uma **estatística** é **qualquer** função $T(X_1,\dots,X_n)$ da amostra que **não depende de parâmetros desconhecidos** da distribuição de $X$.

Note que uma uma estatística **não depende de parâmetros populacionais desconhecidos**. Isso significa que podemos, através das estatísticas, utilizar valores conhecidos das amostras para obter estimações dos parâmetros desconhecidos da população.

Alguns exemplos de estatísticas:

> - Média amostral: $\bar{X} := \frac{1}{n}\sum_{i=1}^{n}{X_1}$
> - Variância amostral: $S^2 := \frac{1}{n-1}\sum_{i=1}^{n}{(X_i-\bar{X})^2}$
> - Menor valor da amostra: $X_{(1)} := \min{(X_1,\dots,X_n)}$
> - Maior valor da amostra: $X_{(n)} := \max{(X_1,\dots,X_n)}$
> - Amplitude amostral: $W := X_{(n)} - X_{(1)}$

Note que todos esses exemplos são **funções** da amostra. Sendo assim, dadas amostras diferentes, as estatísticas podem assumir valores diferentes.

### Distribuições conjuntas
As distribuições conjuntas descrevem a distribuição de um vetor composto por $n$ variáveis aleatórias.

> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a uma experimento aleatório, seja $(X_1, X_2, \dots, X_n)$ uma amostra da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta \in \mathbb{R}$ é um parâmetro desconhecido. A **distribuição conjunta de probabilidade** do vetor $(X_1, X_2, \dots, X_n)$ é uma função $p : \mathbb{R}^n \rightarrow [0,1]$ (ou $f : \mathbb{R}^n \rightarrow [0,+\infty]$) tal que quando $X$ é uma [[Variáveis aleatórias discretas|variável aleatória discreta]]
>$$
  p(x_1,\dots,x_n|\theta) =
  \begin{cases}
  P(X_1 = x_1, \dots, X_n = x_n), \qquad\text{se} (x_1,\dots,x_n) \in Im(X_1,\dots,X_n)\\
  0, \qquad\text{caso contrário}
  \end{cases}
>$$
>e quando $X$ é uma [[Variáveis aleatórias contínuas|variável aleatória contínua]] $f(x_1,\dots,x_n|\theta)$ é tal que
>$$
  P(a_1 \leq X_1 \leq b_1, \dots, a_n \leq X_n \leq b_n) =
  \int_{a_1}^{b_1}{\dots \int_{a_n}^{b_n}{f(x_1,\dots,x_n|\theta)}\,dx_n}\dots\,dx_1
>$$
> em que $[a_1,b_1], \dots, [a_n, b_n]$ são intervalos reais.

Pela definição é possível perceber que encontrar a distribuição conjunta de um vetor $(X_1, X_2,\dots, X_n)$ não é trivial, portanto algumas suposições são feitas sobre a natureza desses vetores para facilitar o processo de encontrar a distribuição conjunta.
A primeira suposição feita é que $(X_1,X_2,\dots,X_n)$ é uma sequência de variáveis aleatórias *independentes* com a mesma distribuição $p(x|\theta)$ (ou $f(x|\theta)$), ou seja:
$$
  p(x_1,\dots,x_n|\theta)=\prod_{i=1}^{n}{p(x_i|\theta)}
$$
ou
$$
  f(x_1,\dots,x_n|\theta)=\prod_{i=1}^{n}{f(x_i|\theta)}
$$
em que $\theta \in \mathbb{R}$ é um parâmetro desconhecido e $p(x_1,\dots,x_n|\theta)$ ou $f(x_1,\dots,x_n|\theta)$ é a função de distribuição conjunta de probabilidade do vetor $(X_1,\dots,X_n)$

---

created: 07/06/2021
