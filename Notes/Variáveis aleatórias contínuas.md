# Variáveis aleatórias contínuas
A variável aleatória $X:\Omega\rightarrow\mathbb{R}$ é chamada de **contínua** quando seu conjunto imagem $Im(X)$ é **infinito não-enumerável**, ou seja, os possíveis valores de $X$ não podem ser descritos em forma de lista. Uma característica interessante desse tipo de variável aleatória é que não conseguimos atribuir probabilidade positiva para valores específicos, somente para intervalos de valores.

## Função densidade de probabilidade
Quando lidamos com variáveis aleatórias contínuas, não podemos utilizar diretamente [[Variáveis aleatórias discretas#Distribuição das probabilidades de uma variável aleatória discreta|funções de distribuição de probabilidade]], pois não é possível atribuir probabilidade positiva aos pontos. Ao invés disso, usamos *funções de densidade de probabilidade* para caracterizar as variáveis aleatórias contínuas.
A função de densidade representa a variação das probabilidades durante o intervalo, mas a imagem na função de densidade de probabilidade **NÃO** é a probabilidade do evento naquele determinado ponto.
Sabendo disso, podemos dizer que a **área sob a curva da função de densidade de probabilidade** em um intervalo $[a,b]$ é igual a $P(a \leq X \leq b)$. Para encontrar a área sob uma curva devemos usar [[Integrais definidas|integrais]], daí surge a seguinte definição:

 Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega, \mathcal{F}, \mathcal{P})$, seja $X:\Omega\rightarrow\mathbb{R}$ uma variável aleatória contínua com conjunto imagem $Im(X)$. A função $f_X:\mathbb{R}\rightarrow\mathbb{R}$ é uma * **função densidade de probabilidade** (f.d.p.)* quando:
>  1. $f_X$ é *não-negativa*, ou seja: $$
  f_X(x) \geq 0,\qquad \forall x \in \mathbb{R}
>$$
>  2. A área total sob a curva deve ser igual a 1, ou seja: $$
  \int_{-\infty}^{+\infty}{f_X(x)}\,dx = 1
>$$

Assim, podemos dizer que as áreas sob a curva da função densidade associadas a intervalos reais representam a distribuição das probabilidades ao longo de tais intervalos. Disso podemos tirar conclusões importantes:

Dada uma variável aleatória contínua $X:\Omega\rightarrow\mathbb{R}$:
>$$
  P(X=x_0) = \int_{x_0}^{x_0}{f_X(x)}\,dx = 0
>$$

E ainda, pela natureza das integrais, tomando dois números reais $a$ e $b$ com $a < b$ temos que:

>$$
  P(a \leq X \leq b) = P(a \lt X \leq b) = P(a \leq X \lt b) = P(a \lt X \lt b) = \int_{a}^{b}{f_X(x)}\,dx
>$$

Ou seja, a abertura do intervalo não importa na hora de calcular a probabilidade.

### Distribuição uniforme
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega,\mathcal{F},P)$, sendo $X:\Omega \rightarrow \mathbb{R}$ uma variável aleatória contínua com conjunto imagem $Im(X)$. Dizemos que $X$ tem distribuição uniforme no intervalo $[a,b] \subset \mathbb{R}$ quando $Im(X)=[a,b]$ e sua função densidade de probabilidade é dada por:
>$$
f_X(x)=
\begin{cases}
  \displaystyle\frac{1}{b-a},\qquad\text{ se } x \in [a,b]\\\\
  0,\qquad \text{caso contrário.}
\end{cases}
>$$

A notação utilizada para esse tipo de distribuição é $X\sim Uniforme([a,b])$. Esse tipo de distribuição é utilizada em situações nas quais a probabilidade da variável aleatória pertencer a intervalos de tamanhos iguais é sempre a mesma.

### Distribuição exponencial
Dado um experimento aleatório $\mathcal{E}$ com espaço de probabilidade $(\Omega,\mathcal{F},P)$, sendo $X:\Omega \rightarrow \mathbb{R}$ uma variável aleatória contínua com conjunto imagem $Im(X)$. Dizemos que $X$ tem distribuição exponencial com parâmetro $\alpha$, $\alpha > 0$ quando $Im(X)=]0,-\infty[$ e sua função densidade de probabilidade é dada por:
>$$
f_X(x)=
\begin{cases}
  \alpha e^{-\alpha x}\qquad\text{ se } x > 0\\\\
  0,\qquad \text{caso contrário.}
\end{cases}
>$$

A notação utilizada para esse tipo de distribuição é $X\sim Exponencial(\alpha)$. Esse tipo de distribuição é usado quando existe uma variação exponencial das probabilidades da variável aleatória. Vale destacar que o parâmetro $\alpha$ indica a taxa de ocorrência do evento por unidade de medida, que pode ser tempo, distância, volume etc.

### Distribuição normal
Esse é o tipo de distribuição mais importante, 

---

created: 26/03/2021
modified: 26/03/2021
