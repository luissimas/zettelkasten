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

## Retas ortogonais
Duas retas $r_1$ e $r_2$ são ortogonais se seus vetores diretores $\vec{v}_1$ $\vec{v}_2$ são ortogonais, ou seja:

>$$
 r_1 \perp r_2 \Leftrightarrow \vec{v}_1 \cdot \vec{v}_2 = 0
>$$

## Reta ortogonal a duas retas
Sendo $r_1$ e $r_2$ retas não paralelas, com vetores diretores $\vec{v}_1$ $\vec{v}_2$, uma terceira reta $r$ com vetor diretor $\vec{v}$ será ortogonal as duas outras quando:

>$$
  \vec{v}=\vec{v}_1 \times \vec{v}_2
>$$


## Intersecção de duas retas

---

created: 05/04/2021
modified: 05/04/2021
