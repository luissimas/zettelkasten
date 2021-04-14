# Distâncias

## Distância entre pontos
Dados os pontos $P_1(x_1,y_1,z_1)$ e $P_2(x_2,y_2,z_2)$, a distância $d$ entre eles é $|\overrightarrow{P_1P_2}|$, ou seja:
>$$
  d(P_1,P_2) = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}
>$$

## Distância de um ponto a uma reta
Dado um ponto $P$ no espaço e uma reta $r_1$, para encontrar a distância do ponto à reta podemos usar a altura do [[Produto vetorial#Módulo|paralelogramo]]:

![[distanciapontoreta.png]]

Tomando o vetor diretor da reta $\vec{v}$ temos que:

>$$
  d(P,r) = \frac{|\vec{v} \times \overrightarrow{AP}|}{|\vec{v}|}
>$$

## Distância de ponto a plano
Dado um ponto $P_0(x_0,y_0,z_0)$ e um plano $\pi:ax+by+cz+d=0$, para calcular a distância $d(P_0,\pi)$ tomamos um ponto qualquer $A(x_1,y_1,z_1) \in \pi$ e um vetor $\vec{n} = (a,b,c)$ normal a $\pi$.

![[distanciapontoplano.png]]

Podemos perceber que a distância é o módulo da [[Produto escalar de vetores#Projeção de um vetor sobre outro|projeção]] de $\overrightarrow{AP_0}$ na direção de $\vec{n}$, sendo assim, a partir da definição de projeção ortogonal define-se a seguinte expressão:

>$$
  d(P_0,\pi) = \frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}
>$$

## Distância entre duas retas
Dadas as retas $r_1$ e $r_2$, o cálculo da distância depende da relação que elas estabelecem entre si:

1. Se $r_1$ e $r_2$ são **concorrentes**, então $d(r_1,r_2) = 0$, pois elas possuem um ponto em comum.
2. Se $r_1$ e $r_2$ são **paralelas**, então $d(r_1,r_2) = d(P,r_2)$, com $P \in r_1$, ou $d(r_1,r_2) = d(P,r_1)$, com $P \in r_2$. Isso se dá pelo fato de que, se as retas são paralelas então a distância das retas é igual à distância de qualquer ponto em qualquer uma das retas à outra reta.

![[distanciaretasparalelas.png]]

3. Se $r_1$ e $r_2$ são **reversas**, então:
Sejam $r_1$ e $r_2$ as retas definidas pelos pontos $A_1$ e $A_2$ e pelos vetores diretores $\vec{v_1}$ e $\vec{v_2}$, respectivamente. Os vetores $\vec{v_1}$, $\vec{v_2}$ e $\overrightarrow{A_1A_2}$ determinam o paralelepípedo da figura cuja altura é a distância $d(r_1,r_2)$

![[distanciaretasreversas.png]]

Usando a [[Produto misto#Interpretação geométrica|definição de volume]] chega-se na seguinte definição:

$$
  d=d(r_1,r_2)= \frac{|(\vec{v_1},\vec{v_2},\overrightarrow{A_1A_2})|}{|\vec{v_1}\times \vec{v_2}|}
$$


---

created: 14/04/2021
modified: 14/04/2021
