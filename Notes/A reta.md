# A reta

## Equação vetorial
Dado um ponto $A(x_1,y_1,z_1)$ e um vetor não nulo $\vec{v}=(a,b,c)$, só existe uma reta $r$ que passa por $A$ e tem a direção de $\vec{v}$. Um ponto $P(x,y,z)$ pertence a $r$ se, e somente se, o vetor $\overrightarrow{AP}$ é paralelo a $\vec{v}$, ou seja:
$$
\begin{aligned}
  \overrightarrow{AP} &= t \vec{v}\\
  P &= A + t \vec{v}\\
  r:(x,y,z) &= (x_1,y_1,z_1) + t(a,b,c)
\end{aligned}
$$

Qualquer uma das equações acima é denominada *equação vetorial* de $r$. Sabendo que existem infinitos vetores paralelos à reta, podemos dizer que a reta $r$ possui infinitas equações vetoriais.
O vetor $\vec{v}$ é chamado *vetor diretor* da reta $r$, e $t$ é denominado *parâmetro*.

## Equações paramétricas
Da equação vetorial da reta $r$ com vetor diretor $\vec{v}=(a,b,c)$, tomando um ponto inicial $A(x_1,y_1,z_1)$ tal que $A \in r$, pode-se obter o seguinte sistema, que descreve cada coordenada do ponto em $r$ individualmente:

$$
r:
 \begin{cases}
    x=x_1+at\\
    y=y_1+bt\\
    z=z_1+ct
 \end{cases}
$$

## Reta definida por dois pontos
Com dois pontos é possível definir uma reta. Se uma reta $r$ passa pelos pontos $A(x_1,y_1,z_1)$ e $B(x_2,y_2,z_2)$, então ela tem como vetor diretor o vetor $\vec{v} = \overrightarrow{AB}$, e podemos usar tanto o ponto $A$ quanto o ponto $B$ como pontos iniciais, então:

$$
  r:
  \begin{cases}
    x=x_1+(x_2-x_1)t\\
    y=y_1+(y_2-y_1)t\\
    z=z_1+(z_2-z_1)t
  \end{cases}
$$

## Equações simétricas da reta
Colocando o *parâmetro* $t$ em evidência cada uma das [[A reta#Equações paramétricas|equações paramétricas]], temos a seguinte relação:

$$
  t = \frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c}
$$

Essas equações são chamadas de *equações simétricas* da reta que passa pelo ponto $A(x_1,y_1,z_1)$ e tem a direção do vetor $\vec{v}=(a,b,c)$. Com elas é possível substituir o valor de apenas uma das coordenadas do ponto $B(x,y,z) \in r$ desejado para se obter as outras duas coordenadas, pois se o ponto pertence à reta essa igualdade é sempre verdadeira.

## Equações reduzidas da reta
A partir das [[A reta#Equações simétricas da reta|equações simétricas]] podemos expressar duas variáveis em função de uma terceira, resultando em um sistema desse formato:

$$
  r:
  \begin{cases}
    y=mx+n\\
    z=px+q
  \end{cases}
$$

Nesse caso, a equação está *reduzida em $x$*.

## Retas paralelas aos planos coordenados
Uma reta é paralela a um dos planos $xOy$, $xOz$ ou $yOz$ se os seus vetores diretores forem paralelos a tal plano. Para que isso aconteça, *uma das componentes do vetor é nula*.

## Retas paralelas aos eixos coordenados
Uma reta é paralela a um dos eixos $Ox$, $Oy$ ou $Oz$ se os seus vetores diretores forem paralelos a $\vec{i}=(1,0,0)$, $\vec{j}=(0,1,0)$ ou $\vec{k}=(0,0,1)$. Para que isso aconteça, *duas das componentes do vetor são nulas*.

## Ângulo de duas retas
Sejam $r_1$ e $r_2$ duas retas com vetores diretores $\vec{v}_1$ e $\vec{v}_2$, respectivamente. O ângulo das duas retas $r_1$ e $r_2$ é o menor ângulo entre um vetor diretor de $r_1$ e um vetor diretor de $r_2$, ou seja, é igual a:

>$$
  \cos{\theta} = \frac{|\vec{v}_1 \cdot \vec{v}_2|}{|\vec{v}_1||\vec{v}_2|},
  \qquad \text{com}\quad 0 \leq \theta \leq \frac{\pi}{2}
>$$

Veja que sempre consideramos o ângulo $\theta$ como um **ângulo agudo**.
Note que isso deriva diretamente do [[Produto escalar de vetores#Cálculo do ângulo de dois vetores|cálculo do ângulo de dois vetores]].

## Retas ortogonais
Duas retas $r_1$ e $r_2$ são ortogonais se seus vetores diretores $\vec{v}_1$ $\vec{v}_2$ [[Produto escalar de vetores#Definição geométrica|são ortogonais]], ou seja:

>$$
 r_1 \perp r_2 \Leftrightarrow \vec{v}_1 \cdot \vec{v}_2 = 0
>$$

## Reta ortogonal a duas retas
Sendo $r_1$ e $r_2$ retas não paralelas, com vetores diretores $\vec{v}_1$ $\vec{v}_2$, uma terceira reta $r$ com vetor diretor $\vec{v}$ será ortogonal as duas outras quando:

>$$
  \vec{v}=\vec{v}_1 \times \vec{v}_2
>$$

Ou seja, basta fazer o [[Produto vetorial|produto vetorial]] entre os vetores diretores das retas.

## Intersecção de duas retas
Para encontrar a intersecção entre duas retas, basta igualar suas equações, assim encontra-se o ponto comum entre as duas retas, também chamado de *ponto de intersecção*.
Sejam $r_1$ e $r_2$ duas retas com as seguintes equações paramétricas:

$$
r_1:
\begin{cases}
  x=x_1+a_1t\\
  y=y_1+b_1t\\
  z=z_1+c_1t
\end{cases}
,\space t \in \mathbb{R}
\qquad\qquad

r_2:
\begin{cases}
  x=x_2+a_2s\\
  y=y_2+b_2s\\
  z=z_2+c_2s
\end{cases}
,\space s \in \mathbb{R}
$$

Igualando cada equação paramétrica para descobrir o ponto em comum e colocando os parâmetros $t$ e $s$ em evidência temos o seguinte sistema:

$$
  \begin{cases}
    a_1t - a_2s = x_2 - x_1\\
    b_1t - b_2s = y_2 - y_1\\
    c_1t - c_2s = z_2 - z_1
  \end{cases}
$$

Colocando na forma [[Sistemas de equações lineares#Forma matricial|matricial ampliada]]:

$$
\begin{bmatrix}
  a_1 & -a_2 & x_2-x_1\\
  b_1 & -b_2 & y_2-y_1\\
  c_1 & -c_2 & z_2-z_1
\end{bmatrix}
$$

A partir disso podemos fazer a seguinte análise:
1. Se o sistema for possível e determinado, então as retas são concorrentes (tem intersecção em um ponto).
2. Se o sistema foi possível e indeterminado, então as retas são coincidentes.
3. Se o sistema for impossível então as retas são reversas ou paralelas.

É importante destacar que:
- Se duas retas tem intersecção, elas são coplanares
- Se duas retas são paralelas, elas são coplanares

---

created: 05/04/2021
modified: 05/04/2021
