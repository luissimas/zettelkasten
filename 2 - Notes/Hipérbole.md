---
created-at: 2021-05-18
tags:
---
> Hipérbole é o conjunto de todos os pontos de um plano cuja **diferença das distâncias**, em valor absoluto, a dois pontos fixos desse plano é constante.

Dados dois pontos distintos $F_1$ e $F_2$ tal que a distância $d(F_1, F_2) = 2c$, e um número real positivo $a$ de modo que $2a < 2c$. Um ponto $P$ pertence à hipérbole se, e somente se:

>$$
  |d(P,F_1) - d(P,F_2)| = 2a
>$$

![[hiperbole.png]]

# Elementos
Dados dois pontos quaisquer $F_1$ e $F_2$, tal que $d(F_1,F_2) = 2c$. Chamando de $C$ o ponto médio do segmento $F_1F_2$, pode-se traçar uma circunferência de centro $C$ e raio $c$.

![[elementoshiperbole.png]]

Com base na figura, uma hipérbole é composta pelos seguintes elementos:
- **Focos**: são os pontos $F_1$ e $F_2$.
- **Distância focal**: é a distância $2c$ entre os focos.
- **Centro**: é o ponto médio $C$ do segmento $F_1F_2$.
- **Vértices**: são os pontos $A_1$ e $A_2$.
- **Eixo real ou transverso**: é o segmento $A_1A_2$ de comprimento $2a$.
- **Eixo imaginário ou não transverso**: é o segmento $B_1B_2$ de comprimento $2b$, com $B_1B_2 \perp A_1A_2$ em $C$.
- **Assíntotas**: são as retas $r$ e $s$ das quais a hipérbole se aproxima cada vez mais à medida que os pontos se afastam dos vértices.

Pela figura, vê-se que é possível relacionar $a$, $b$ e $c$ através da seguinte equação:
>$$
  c^2 = a^2 + b^2
>$$

Outro elemento importante é a *excentricidade* da hipérbole, definida por:

>$$
  e = \frac{c}{a} \qquad e > 1
>$$

A *excentricidade* se relaciona diretamente com a *abertura* da hipérbole (denotada pelo ângulo $\theta$ na figura), quanto maior a *excentricidade*, maior a *abertura* da hipérbole. Quando $a = b$, as assíntotas se tornam perpendiculares ($\theta = 90°$). Nesse caso a hipérbole é chamada de *hipérbole equilátera*.

# Equações reduzidas
Dada uma hipérbole de centro $C(0,0)$, existem dois casos distintos:

- O *eixo real* está sobre o eixo dos $x$:

![[equacaoreduzidahiperbolecaso1.png]]

Dado um ponto $P(x,y)$ de uma hipérbole de focos $F_1(-c,0)$  e $F_1(c,0)$. Desenvolvendo a definição $|d(P,F_1) - d(P,F_2)| = 2a$ obtém-se a *equação reduzida* para esse caso:

>$$
  \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1
>$$

- O *eixo real* está sobre o eixo dos $y$:

![[equacaoreduzidahiperbolecaso2.png]]

Dado um ponto $P(x,y)$ de uma hipérbole de focos $F_1(0,-c)$  e $F_1(0,c)$. Desenvolvendo a definição $|d(P,F_1) - d(P,F_2)| = 2a$ obtém-se a *equação reduzida* para esse caso:

>$$
  \frac{y^2}{a^2} - \frac{x^2}{b^2} = 1
>$$

## Observações
As assíntotas $r$ e $s$ são retas que passam pelo centro da hipérbole, portanto suas equações são do tipo $y = mx$, sendo $m$ a *declividade*. A *declividade* é determinada através de uma relação entre $a$ e $b$, que depende da forma da equação:

- O *eixo real* está sobre o eixo dos $x$:

>$$
  m = \pm \frac{b}{a}
>$$

- O *eixo real* está sobre o eixo dos $y$:

>$$
  m = \pm \frac{a}{b}
>$$

# Translação de eixos
Usando a [[Translação de eixos|translação de eixos]] é possível manipular o centro da hipérbole para obter as equações reduzidas mesmo que o centro $C$ da hipérbole não seja o ponto $(0,0)$ do plano cartesiano.

![[hiperboletranslacaodeeixos.png]]

Dada uma hipérbole de centro $C(h,k) \neq (0,0)$, temos dois casos possíveis para as equações reduzidas:

- O *eixo real* é paralelo ao eixo dos $x$:

>$$
  \frac{\left(x-h\right)^2}{a^2} - \frac{\left(y-k\right)^2}{b^2} = 1
>$$

- O *eixo real* é paralelo ao eixo dos $y$:

>$$
  \frac{\left(y-k\right)^2}{a^2} - \frac{\left(x-h\right)^2}{b^2} = 1
>$$

# Equação geral
Eliminando os denominadores e desenvolvendo os quadrados de uma *equação reduzida*, obtemos uma *equação geral* da hipérbole, que tem a forma:

>$$
  ax^2 + by^2 + cx + dy + f = 0
>$$
> com $a$ e $b$ de sinais contrários.

# Equações paramétricas
Dado um ponto $P(x,y)$ qualquer da hipérbole, temos dois casos para suas equações paramétricas:

- O *eixo real* é paralelo ao eixo dos $x$:

>$$
\begin{cases}
  x = a\sec{\theta}\\
  y = b\tan{\theta}
\end{cases}
>$$

- O *eixo real* é paralelo ao eixo dos $y$:

>$$
\begin{cases}
  x = b\tan{\theta}\\
  y = a\sec{\theta}
\end{cases}
>$$

Quando o centro da hipérbole for $C(h,k)$, aplicando a translação de eixos, as equações paramétricas para cada caso são;

- O *eixo real* é paralelo ao eixo dos $x$:

>$$
\begin{cases}
  x = h + a\sec{\theta}\\
  y = k + b\tan{\theta}
\end{cases}
>$$

- O *eixo real* é paralelo ao eixo dos $y$:

>$$
\begin{cases}
  x = h + b\tan{\theta}\\
  y = k + a\sec{\theta}
\end{cases}
>$$