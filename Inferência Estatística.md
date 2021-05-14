# Inferência Estatística
A [[Análise descritiva e exploratória de dados|análise descritiva e exploratória de dados]] nos permite interpretar e resumir os dados de uma amostra, porém não dispõe das ferramentas para **inferir** conclusões sobre toda a [[Análise descritiva e exploratória de dados#População e amostra|população]], para esse fim existe outro método de análise de dados: a *inferência estatística*.
O objetivo da inferência estatística é justamente obter conclusões sobre caraterísticas de interesse de uma **população** com base na informação contida apenas em uma **amostra** dessa população. A inferência estatística pode ser dividida em duas áreas:

- *Estimação de parâmetros*: buscar, segundo algum critério, valores que representem adequadamente os parâmetros desconhecidos de uma distribuição de probabilidade com base em uma amostra de observações.
- *Teste de hipóteses*: utilizar a amostra de observações da distribuição de probabilidade para verificar a validade de afirmações sobre valores dos parâmetros desconhecidos.

Primeiramente convém definir de uma forma mais clara os termos aqui utilizados.

> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $X : \Omega \rightarrow \mathbb{R}$ uma variável aleatória que representa uma característica observável associada a uma **população** $\mathcal{P}$ de indivíduos ou objetos. Uma **amostra** da população $\mathcal{P}$ é o vetor $(X_1,\dots,X_n)$, em que $X_i : \Omega \rightarrow \mathbb{R}$ é uma variável aleatória que representa a característica observável $X$ medida no indivíduo ou objeto $i,i=1,2,\dots, n$.

> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $X : \Omega \rightarrow \mathbb{R}$ uma variável aleatória que representa uma característica observável associada a uma população $\mathcal{P}$ de indivíduos ou objetos. Se $X$ tem função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta \in \mathbb{R}$ é um parâmetro desconhecido, e $(X_1,\dots,X_n)$ é uma amostra da população $\mathcal{P}$ obtida a partir da característica $X$, então chamamos de **inferência estatística** o problema que consiste em especificar um ou mais valores para $\theta$ baseado em um conjunto de valores observados $(x_1,\dots,x_n)$ do vetor $(X_1,\dots,X_n)$.

## Estatísticas e suas distribuições
Uma estatística é um **valor** ou conjunto de valores observáveis que resume a característica $X$ na amostra. As estatísticas serão utilizadas para realizar a inferência sobre os parâmetros desconhecidos da população.

> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $(X_1, X_2, \dots, X_n)$ uma amostra da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ que representa uma característica observável associada a uma população $\mathcal{P}$ de indivíduos ou objetos. Uma **estatística** é **qualquer** função $T(X_1,\dots,X_n)$ da amostra que **não depende de parâmetros desconhecidos** da distribuição de $X$.

Alguns exemplos de estatísticas:

> - Média amostral: $\bar{X} := \frac{1}{n}\sum_{i=1}^{n}{X_1}$
> - Variância amostral: $S^2 := \frac{1}{n-1}\sum_{i=1}^{n}{(X_i-\bar{X})^2}$
> - Menor valor da amostra: $X_{(1)} := \min{(X_1,\dots,X_n)}$
> - Maior valor da amostra: $X_{(n)} := \max{(X_1,\dots,X_n)}$
> - Amplitude amostral: $W := X_{(n)} - X_{(1)}$

### Distribuições conjuntas

> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a uma experimento aleatório, seja $(X_1, X_2, \dots, X_n)$ uma amostra da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta \in \mathbb{R}$ é um parâmetro desconhecido. A **distribuição conjunta de probabilidade** do vetor $(X_1, X_2, \dots, X_n)$ é uma função $p : \mathbb{R}^n \rightarrow [0,1]$ (ou $f : \mathbb{R}^n \rightarrow [0,+\infty]$) tal que quando $X$ é uma [[Variáveis aleatórias discretas|variável aleatória discreta]]
>$$
  p(x_1,\dots,x_n|\theta) =
  \begin{cases}
  P(X_1 = x_1, \dots, X_n = x_n), se (x_1,\dots,x_n) \in Im(X_1,\dots,X_n)\\
  0, \text{caso contrário}
  \end{cases}
>$$


---

created: 14/05/2021
