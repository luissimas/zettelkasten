---
created-at: 2021-03-26
---
A variável aleatória $X:\Omega\rightarrow\mathbb{R}$ é chamada de **discreta** quando seu conjunto imagem $Im(X)$ é **finito ou infinito enumerável**, ou seja, os valores possíveis de $X$ podem ser escritos em forma de lista:
$$
Im(X)=
\begin{cases}
  \{x_1,x_2,\dots,x_n\},\qquad\text{ no caso finito;}\\
  \{x_1,x_2,x_3,\dots\},\qquad\text{ no caso infinito;}\\
\end{cases}
$$

# Distribuição das probabilidades de uma variável aleatória discreta
Quando trabalhamos com variáveis aleatórias, é possível representar como as probabilidades se distribuem ao longo dos possíveis valores que a variável assume. Fazemos isso através de uma **função de distribuição de probabilidade** que associa para cada valor $x\in Im(X)$ uma probabilidade $p_X(x)\in [0,1]$.
A função de distribuição de probabilidade $p_x:\mathbb{R}\rightarrow[0,1]$ é dada por: 
$$
p_X(x)=
\begin{cases}
  P(X=x),\qquad\text{ se } x\in Im(X)\\
  0,\qquad\text{ caso contrário}\\
\end{cases}
$$ com$$
\sum_{x\in Im(X)}{p(x)}=1
$$

Como convenção, sendo $X$ uma variável aleatória discreta com função de distribuição de probabilidade $p_X$, escrevemos $X \sim p_X$ e dizemos que **$X$ possui distribuição $p_X$**.
Existem alguns **modelos discretos** que definem funções de distribuição de probabilidade para experimentos comuns.

## Bernoulli
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória discreta com conjunto imagem $Im(X)$. Dizemos que $X$ tem distribuição *Bernoulli* com parâmetro $\theta$, $\theta \in ]0,1[$, quando $Im(X) = \{0,1\}$ e sua função de distribuição de probabilidade é dada por:
$$
p_X(x)=
\begin{cases}
  \theta^x(1-\theta)^{1-x},\qquad\text{ se } x \in Im(X)\\
  0,\qquad\text{ caso contrário.}
\end{cases}
$$

A notação para descrever essa função é $X \sim Bernoulli(\theta)$.
Geralmente associamos como **sucesso** a ocorrência de $1$ e **fracasso** a ocorrência de $0$. É chamado **ensaio de Bernoulli** o experimento aleatório que tem resposta do tipo sucesso e fracasso.

## Binomial
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória discreta com conjunto imagem $Im(X)$. Dizemos que $X$ tem distribuição *Binomial* com parâmetros $n$ e $\theta$, $n \in \mathbb{N}$ e $\theta \in ]0,1[$, quando $Im(X) = \{0,1,2,\dots,n\}$ e sua função de distribuição de probabilidade é dada por:
$$
p_X(x)=
\begin{cases}
  \binom{n}{x}\theta^x(1-\theta)^{n-x},\qquad\text{ se } x \in Im(X)\\
  0,\qquad\text{ caso contrário.}
\end{cases}
$$

A notação para descrever essa função é $X \sim Binomial(n,\theta)$.
Esse tipo de experimento pode ser interpretado como a **realização de $n$ *ensaios de Bernoulli* indepentendes, anotando-se o número de sucessos obtidos.** Note que a utilização de $\binom{n}{x}$ nos permite considerar as $n$ [[Contagem#Combinação|combinações]] possíveis desprezando a ordem.

## Geométrica
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, P)$. Seja $X: \Omega \rightarrow \mathbb{R}$ uma variável aleatória discreta com conjunto imagem $Im(X)$. Dizemos que $X$ tem distribuição *Geométrica* com parâmeto $\theta$, $\theta \in ]0,1[$, quando $Im(X) = \{0,1,2,\dots\}$ e sua função de distribuição de probabilidade é dada por:
$$
p_X(x)=
\begin{cases}
  (1-\theta)^x\theta,\qquad\text{ se } x \in Im(X)\\
  0,\qquad\text{ caso contrário.}
\end{cases}
$$

A notação para descrever essa função é $X \sim Geométrica(\theta)$.
Esse tipo de experimento pode ser interpretado como a **realização de indefinidos *ensaios de Bernoulli* indepentendes, anotando-se o número de fracassos obtidos até obter-se o primeiro sucesso.**