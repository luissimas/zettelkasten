# Estimação de parâmetros
A estimação de parâmetros consiste em estimar um parâmetro desconhecido de uma população. Um parâmetro $\theta$ de uma população é um **valor real** que resume uma certa característica $X$ (representada por uma variável aleatória) em toda a população. Como não temos acesso a população toda, é impossível determinar com certeza qual o real valor de $\theta$.
É justamente por isso que estamos interessados em **estimar** valores para esses parâmetros, podemos fazer isso utilizando uma amostra $(X_1, X_2, \dots, X_n)$.
O primeiro passo para a estimação de parâmetros é definir onde "mora" o parâmetro $\theta$ que desejamos estimar, ou seja, quais os possíveis valores que $\theta$ pode assumir.

> ***Espaço paramétrico***
> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório, e $X : \Omega \rightarrow \mathbb{R}$ uma variável aleatória que representa uma característica observável associada a uma população $\mathcal{P}$ de indivíduos ou objetos. Suponha que $X$ tenha função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. O conjunto $\Theta$, $\Theta \subset {R}$, em que $\theta$ toma valores é chamado de **espaço paramétrico**.

> ***Estimador pontual e estimativa pontual***
> Dado um espaço de probabilidade $(\Omega, \mathcal{F}, P)$ associado a um experimento aleatório. Seja $(X_1, X_2, \dots, X_n)$ uma amostra aleatória da variável aleatória $X : \Omega \rightarrow \mathbb{R}$ com função de distribuição (ou densidade) de probabilidade $p(x|\theta)$ (ou $f(x|\theta)$), em que $\theta$ é um parâmetro desconhecido. Qualquer estatística


Dentro dessa área temos dois tipos de estimação, a [[Estimação pontual|estimação pontual]] e a [[Estimação intervalar|estimação intervalar]].

---

created: 07/06/2021
