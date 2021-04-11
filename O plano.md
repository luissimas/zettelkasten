# O plano
Seja $A(x_1,y_1,z_1)$ um ponto pertencente ao plano $\pi$ e $\vec{n}=(a,b,c)$, $\vec{n} \neq \vec{0}$, um vetor **ortogonal (normal) ao plano** $pi$.

![[eqgeralplano.png]]

Como $\vec{n} \perp \pi$, $\vec{n}$ é ortogonal a todo vetor representado em $\pi$, então um ponto $P(x,y,z)$ percente a $\pi$ se, e somente se, o vetor $\overrightarrow{AP}$ é ortogonal a $\vec{n}$. A partir disso obtem-se a *equação geral* do plano:

>$$
  ax+by+cz+d=0
>$$

sendo que:

>$$
  d = -ax_1 -by_1 - cz_1
>$$

Um caso específico é quando um plano $\pi$ intercepta os eixos coordenados nos pontos $(p,0,0)$, $(0,q,0)$ e $(0,0,r)$, com $p\cdot q \cdot r \neq 0$. Se isso ocorre, então $\pi$ admite também a *equaçào segmentária* do plano:

>$$
  \frac{x}{p} + \frac{y}{q} + \frac{z}{r} = 1
>$$

Essa equação é equivalente à *equação geral* para esses planos, porém pode ser mais conveniente encontrá-la em determinados contextos.

Uma outra forma de obter a equação geral de um plano é através do[[Produto misto|produto misto]]. Seja $A(x_0,y_0,z_0)$ um ponto pertencente a um plano $\pi$ e $\vec{u}=(a_1,b_1,c_1)$ e $\vec{u}=(a_1,b_1,c_1)$ dois vetores paralelos a $\pi$, e não paralelos entre si. Sendo $P(x,y,z)$ um ponto qualquer do plano $\pi$, $\overrightarrow{AP}$, $\vec{u}$ e $\vec{v}$ são coplanares, portanto o produto misto deles é nulo, ou seja:

>$$
  (\overrightarrow{AP},\vec{u},\vec{v}) = 0
>$$

Assim, podemos obter uma equação geral do plano mantendo as incógnitas do ponto $P$ e desenvolvendo o produto misto.

## Equação vetorial e equações paramétricas do plano
Seja $A(x_0,y_0,z_0)$ um ponto pertencente a um plano $\pi$ e $\vec{u}=(a_1,b_1,c_1)$ e $\vec{u}=(a_1,b_1,c_1)$ dois vetores paralelos a $\pi$, e não paralelos entre si.

![[eqvetorialplano.png]]

Para todo ponto $P$ do plano, os vetores $\overrightarrow{AP}$, $\vec{u}$ e $\vec{v}$ são **coplanares**, chamamos os vetores $\vec{u}$ e $\vec{v}$ de *vetores diretores* de $\pi$. A partir disso obtem-se a *equação vetorial* do plano:

>$$
  (x,y,z)=(x_0,y_0,z_0) + h(a_1,b_1,c_1) + t(a_2,b_2,c_2),\quad h,t \in \mathbb{R}
>$$

Pela condição de igualdade, podemos definir as *equações paramétricas* de $\pi$ com *parâmetros* $h$ e $t$:

$$
\begin{cases}
    x = x_0 + a_1h + a_2t\\
    y = y_0 + b_1h + b_2t\\
    z = z_0 + c_1h + c_2t
\end{cases}
\qquad h,t \in \mathbb{R}
$$

## Equação vetorial de um paralelogramo
Dados os pontos não colineares $A$, $B$ e $C$, os vetores $\overrightarrow{AB}$ e $\overrightarrow{AC}$ determinam o paralelogramo cuja equação vetorial é

>$$
  P=A+h(\overrightarrow{AB})+t(\overrightarrow{AC})\quad h,t \in [0,1]
>$$

![[eqvetorialparalelogramo.png]]

## Casos particulares da equação geral do plano
Caso um ou mais coeficientes da equação *geral do plano* $ax+by+cz+d=0$ seja nulo, o plano ocupará uma posição particular em relação aos eixos ou planos coordenados.

1. Se $d=0$, então o plano passa pela origem.
2. Se o coeficiente de apenas uma coordenada for nulo, então o plano é paralelo ao eixo dessa coordenada, ou seja, **o plano é paralelo ao eixo da variável ausente na equação.**
3. Se dois coeficientes duas coordenadas forem nulos, então o plano é paralelo ao plano formado pelos eixos dessas coordenadas. Por exemplo: $\pi:z=k\therefore\pi//xOy$

## Ângulo de dois planos
Sejam os planos $\pi_1$ e $\pi_2$ com vetores normais $\vec{n}_1$ e $\vec{n_2}$, respectivamente:


## Planos perpendiculares


## Paralelismo e perpendicularismo entre reta e plano


## Reta contida em um plano


## Intersecção de dois planos


## Intersecção de reta com plano


---

created: 10/04/2021
modified: 10/04/2021
