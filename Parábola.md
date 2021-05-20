# Parábola
 Seja $d$ uma reta qualquer e $F$ um ponto não pertencente a $d$. Chamamos de *parábola* o conjunto de todos os pontos de um plano **equidistantes** do ponto $F$ e da reta $d$. Dessa forma, um ponto $P$ qualquer pertence à parábola se e somente se:
>$$
  d(P,F) = d(P,d)
>$$

![[paraboladefinicao.png]]

Alguns pontos e eixos notáveis das parábolas são:

- **Foco:** é o ponto $F$.
- **Diretriz:** é a reta $d$.
- **Eixo:** é a reta $e$ que passa por $F$ e é perpendicular a $d$.
- **Vértice:** é o ponto $V$ de intersecção da parábola com o seu eixo.

## Equações reduzidas
Dada uma parábola de vértice $V(0,0)$, existem dois casos possíveis, note que em ambos os casos o número real $p \neq 0$ é chamado de **parâmetro** da parábola:

- Se o eixo da parábola é o eixo dos $y$:
Seja $P(x,y)$ um ponto qualquer da parábola de *foco* $F(0,\frac{p}{2})$ e *diretriz* de equação $y = - \frac{p}{2}$
A equação reduzida da parábola nesse caso é:
>$$
  x^2 = 2py
>$$

![[parabolaequacaoreduzidacaso1.png]]

Analisando a equação, pode-se perceber que $py \geq 0$, dessa forma seus sinais são sempre iguais. Temos então dois casos de sinais que influenciam na concavidade da parábola:

![[concavidadecasos1.png]]

- Se o eixo da parábola é o eixo dos $x$:
Seja $P(x,y)$ um ponto qualquer da parábola de *foco* $F(\frac{p}{2},0)$ e *diretriz* de equação $x = - \frac{p}{2}$
A equação reduzida da parábola nesse caso é:
>$$
  y^2 = 2px
>$$

![[parabolaequacaoreduzidacaso2.png]]

Analisando a equação, pode-se perceber que $px \geq 0$, dessa forma seus sinais são sempre iguais. Temos então dois casos de sinais que influenciam na concavidade da parábola:

![[concavidadecasos2.png]]

## Translação de eixos
Dado o plano cartesiano $xOy$, sendo $O$ a *origem* do sistema cartesiano, podemos tomar um novo ponto arbitrário $O'(h,k)$ e introduzir um novo sistema $x'O'y'$, tal que os eixos desse novo sistema tenham a mesma direção, sentido e unidade de medida dos eixos $Ox$ e $Oy$. Dessa forma, qualquer ponto $P$ do plano tem duas representações: $P(x,y)$ no sistema $xOy$ e $P'(x',y')$ no sistema $x'O'y'$.

![[translacaodeeixos.png]]

Dessa forma, definem-se as *fórmulas de translação* do ponto de um plano para outro:

>$$
  x = x' + h \qquad\text{e}\qquad y = y' + k
>$$
>ou
>$$
  x' = x - h \qquad\text{e}\qquad y' = y - k
>$$

Usando a translação de eixos é possível manipular o vértice da parábola para obter as equações reduzidas mesmo que o vértice $V$ da parábola não seja o ponto $(0,0)$ do plano cartesiano.
Dada uma parábola de vértice $V \neq (0,0)$, tomamos um novo sistema $x'O'y'$ tal que $O' = V$. Assim, ao escrever a equação reduzida da parábola em relação ao novo sistema, podemos substituir $x'$ e $y'$ pelas suas *fórmulas de translação*, obtendo as expressões:

- Se o eixo da parábola é o eixo dos $y$:
A equação da parábola nesse caso é:
>$$
  (x - h)^2 = 2p(y - k)
>$$

- Se o eixo da parábola é o eixo dos $x$:
A equação da parábola nesse caso é:
>$$
  (y - k)^2 = 2p(x - h)
>$$

Note que as observações sobre o sinal do *parâmetro* com relação à concavidade são válidas também para essas equações.

## Equações paramétricas

---

created: 18/05/2021
