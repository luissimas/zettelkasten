# Inferência Estatística
A [[Análise descritiva e exploratória de dados|análise descritiva e exploratória de dados]] nos permite interpretar e resumir os dados de uma amostra, porém não dispõe das ferramentas para **inferir** conclusões sobre toda a [[Análise descritiva e exploratória de dados#População e amostra|população]], para esse fim existe outro método de análise de dados: a *inferência estatística*.
O objetivo da inferência estatística é justamente obter conclusões sobre caraterísticas de interesse de uma **população** com base na informação contida apenas em uma **amostra** dessa população.
Primeiramente convém definir de uma forma mais clara os termos aqui utilizados.

> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $X : \Omega \rightarrow \mathbb{R}$ uma variável aleatória que representa uma característica observável associada a uma **população** $\mathcal{P}$ de indivíduos ou objetos. Uma **amostra** da população $\mathcal{P}$ é o vetor $(X_1,\dots,X_n)$, em que $X_i : \Omega \rightarrow \mathbb{R}$ é uma variável aleatória que representa a característica observável $X$ medida no indivíduo ou objeto $i,i=1,2,\dots, n$.

> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, seja $X : \Omega \rightarrow \mathbb{R}$ uma variável aleatória que representa uma característica observável associada a uma população $\mathcal{P}$ de indivíduos ou objetos. Se $X$ tem função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta \in \mathbb{R}$ é um parâmetro desconhecido, e $(X_1,\dots,X_n)$ é uma amostra da população $\mathcal{P}$ obtida a partir da característica $X$, então chamamos de **inferência estatística** o problema que consiste em especificar um ou mais valores para $\theta$ baseado em um conjunto de valores observados $(x_1,\dots,x_n)$ do vetor $(X_1,\dots,X_n)$.



---

created: 14/05/2021
