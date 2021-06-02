# Cônicas
Sejam duas retas $e$ e $g$ concorrente em um ponto $O$ e não perpendiculares. Se mantermos a reta $e$ fixa e girarmos $g$ $360^{\circ}$ em torno de $e$ mantendo constante o ângulo entre as retas, obteremos uma *superfície cônica* circular infinita formada por duas folhas separadas pelo vértice $O$.

![[conica.png]]

Nesse caso reta $g$ é a *geratriz* da superfície cônica, e a reta $e$ é o *eixo* da superfície.

> *Secção cônica*, ou simplesmente *cônica*, é o conjunto de pontos que formam a intersecção de um plano $\pi$ com a superfície cônica.

Os diferentes tipos de cônicas são classificados de acordo com a forma como o plano $\pi$ intersecta a superfície cônica.

> Quando uma superfície cônica é seccionada por um plano $\pi$ que **não passa** pelo vértice $O$, a cônica será:
> - uma *[[Parábola|parábola]]*, se $\pi$ for paralelo a uma geratriz da superfície.
> - uma *[[Elipse|elipse]]*, se $\pi$ não for paralelo a uma geratriz e intercepta apenas uma das folhas da superfície (ou uma circunferência, se $\pi$ for perpendicular ao eixo).
> - uma *[[Hipérbole|hipérbole]]*, se $\pi$ não for paralelo a uma geratriz e interceptar as duas folhas da superfície. A *hipérbole* deve ser interpretada como uma curva só, constituída de dois ramos, um em cada folha da superfície.

![[tiposconicas.png]]

Note que se os planos secantes passarem pelo vértice $O$, serão obtidas as chamadas cônicas "degeneradas".

> Quando uma superfície cônica é seccionada por um plano $\pi$ que **passa** pelo vértice $O$, a cônica será:
> - uma *reta*, se $\pi$ for paralelo a uma geratriz da superfície.
> - um *ponto*, se $\pi$ não for paralelo a uma geratriz e intercepta apenas uma das folhas da superfície.
> - duas *retas*, se $\pi$ não for paralelo a uma geratriz e interceptar as duas folhas da superfície.

![[tiposconicasdegeneradas.png]]

## Equação geral
De maneira geral, uma **cônica** pode ser expressa por uma *equação geral* no seguinte formato:

>$$
  Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0
>$$

Dessa forma, é possível definir uma cônica com cinco pontos no plano, ou seja, por qualquer conjunto de cinco pontos do plano sempre passa uma única curva cônica.

Dados cinco pontos no plano $P_1(x_1, y_1)$, $P_2(x_2, y_2)$, $P_3(x_3, y_3)$, $P_4(x_4, y_4)$ e $P_5(x_5, y_5)$, basta substituir as coordenadas de cada ponto na equação geral, obtendo-se assim um [[Sistemas de equações lineares|sistema de equação linear]] com cinco equações e seis incógnitas:

$$
  \begin{cases}
    Ax_1^2 + Bx_1y_1 + Cy_1^2 + Dx_1 + Ey_1 + F = 0\\\\
    Ax_2^2 + Bx_2y_2 + Cy_2^2 + Dx_2 + Ey_2 + F = 0\\\\
    Ax_3^2 + Bx_3y_3 + Cy_3^2 + Dx_3 + Ey_3 + F = 0\\\\
    Ax_4^2 + Bx_4y_4 + Cy_4^2 + Dx_4 + Ey_4 + F = 0\\\\
    Ax_5^2 + Bx_5y_5 + Cy_5^2 + Dx_5 + Ey_5 + F = 0\\
  \end{cases}
$$

Em seguida, pode-se [[Resolução de sistemas lineares por escalonamento|resolver]] o sistema utilizando [[Métodos de escalonamento#Método de Gauss-Jordan|Gauss-Jordan]]. A solução desse sistema terá um dos parâmetros livres, então basta fixar um valor para esse parâmetro para obter-se uma equação geral da cônica determinada pelos 5 pontos.

## Equação reduzida
Dada a equação geral de uma cônica, podemos aplicar [[Rotação de eixos|rotação]] e [[Translação de eixos|translação]] de eixos no sistema cartesiano com o objetivo de simplificar essa equação.

---

created: 18/05/2021
