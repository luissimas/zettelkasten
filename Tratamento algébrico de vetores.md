# Tratamento algébrico de vetores
É possível expressar vetores algebricamente em função de outros vetores e números reais. Essa relação segue a seguinte definição:
> Dados dois vetores quaisquer $\vec{v_1}$ e $\vec{v_2}$ não paralelos, para cada vetor $\vec{v}$ representado no mesmo plano de $\vec{v_1}$ e $\vec{v_2}$ existe **uma só** dupla de número reais $a_1$ e $a_2$ tal que$$\vec{v}=a_1\vec{v_1}+a_2\vec{v_2}$$

Quando um vetor $\vec{v}$ é expresso dessa forma, dizemos que $\vec{v}$ é *combinação linear* de $\vec{v_1}$ e $\vec{v_2}$.
O conjunto ordenado dos dois vetores $B=\{\vec{v_1},\vec{v_2}\}$ é chamado de *base no plano*. Os números $a_1$ e $a_2$ são chamados de *componentes* ou *coordenadas* de $\vec{v}$ na base $B$.
Para explicitar a base e as coordenadas, podemos representar $\vec{v}$ como
 $$\vec{v}={(a_1,a_2)}_B \qquad\text{ou}\qquad \vec{v}_B=(a_1,a_2)$$
 Quando se trata de bases, as mais comuns na prática são as ortonormais (compostas por vetores ortogonais e unitários). A base ortogonal mais utilizada é a que determina o famoso *sistema cartesiano ortogonal*. 
 
 ![[basecanonica.png]]
 
Essa base $C=\{\vec{i},\vec{j}\}$ é chamada de *canônica*. Trabalhar na base canônica simplifica as coisas, pois cada ponto $P(x,y)$ corresponde ao vetor $\vec{v}=\overrightarrow{OP}=x\vec{i}+y\vec{j}$
Aqui as coisas começam a ficar mais familiares pelo fato de estarmos trabalhando em um plano definido e conhecido.
> Dado um vetor $\vec{v}$, existe uma só dupla de números $x$ e $y$ tal que$$\vec{v}=x\vec{i}+y\vec{j}$$
![[definicaovetorcartesiano.png]]
Sendo assim, podemos representar o vetor como $$\vec{v}=(x,y)$$

Os *componentes* de $\vec{v}$ na base *canônica* são chamados de *abcissa* ($x$) e *ordenada* ($y$). O par desses componentes é chamado de *expressão analítica* de $\vec{v}$. Como a base canônica dispensa referência, podemos dizer que:
> Um vetor no plano é um par ordenado $(x,y)$ de números reais.

## Igualdade de vetores
> Dois vetores $\vec{u}=(x_1,y_1)$ e $\vec{v}=(x_2,y_2)$ são iguais, se e somente se $x_1=x_2$ e $y_1=y_2$.

## Operações com vetores
Sejam os vetores $\vec{u}=(x_1,y_1)$ e $\vec{v}=(x_2,y_2)$, com $a\in\mathbb{R}$ temos as seguintes operações:
>$$
\begin{align}
  \vec{u}+\vec{v}&=(x_1+x_2,y_1+y_2)\\
   \alpha \vec{u}&=(\alpha x_1,\alpha y_1)\\
   -\vec{u}&=(-x_1,-y_1)\\
   \vec{u}-\vec{v}&=(x_1-x_2,y_1-y_2)
\end{align}
>$$

## Vetor definido por dois pontos



---

created: 09/03/2021
modified: 10/03/2021
