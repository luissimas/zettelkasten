---
created-at: 2021-11-18
---
Dado um conjunto aberto $D$ tal que $D \subset \mathbb{R}^2$ e uma função $f: D \to \mathbb{R}$. O ponto $(x_0, y_0)$ é um ponto de *máximo absoluto* (ou máximo global) de $f$ se $f(x_0, y_0) \geq f(x,y), \quad \forall (x,y) \in D$. Da mesma forma, um ponto $(x_0,y_0)$ é um ponto de *máximo local* de $f$ se existir uma bola aberta $B$ de centro em $(x_0, y_0)$ e raio $r > 0$ tal que $f(x_0, y_0) \geq f(x,y), \quad \forall (x,y) \in B \cap D$.

A definição dos pontos de mínimo é análoga à definição de pontos de máximo. Pontos de máximo e de mínimo de uma função $f$ são denominados *extremantes* de $f$.

Dada uma função $f : D \to \mathbb{R}$ tal que $D \subset \mathbb{R}^2$ e um **ponto interior** de $f$ $(x_0, y_0)$. Se  $(x_0, y_0)$ é um ponto extremante de $f$, então $\nabla f(x_0, y_0) = (0,0)$. Isso equivale a dizer que o plano tangente ao gráfico de $f$ em $(x_0, y_0, f(x_0, y_0))$ é paralelo ao plano $xy$.

Note que a recíproca não é verdadeira, portanto nem todo ponto cujo vetor gradiente é nulo é um ponto de máximo ou mínimo de $f$. Note também que esse resultado não se aplica a *pontos de fronteira* de $D$, ou seja, um ponto de fronteira pode ser um ponto extremante sem que o vetor gradiente de $f$ aplicado ao ponto seja nulo.

# Pontos críticos
Os *pontos críticos* de uma função são os candidatos a serem pontos de máximo ou mínimo. Um ponto $(x_0, y_0)$ é *ponto crítico* de $f$ se e somente se $\nabla f(x_0, y_0) = (0,0)$.

Para determinar se um ponto crítico é de fato um ponto de máximo ou mínimo, é necessário verificar as derivadas parciais de segunda ordem da função naquele ponto.

Dada uma função de classe $C^2$, isto é, que possui derivadas de segunda ordem e essas são contínuas, $f : D \to \mathbb{R}$ tal que $D \subset \mathbb{R}^2$, e um ponto $(x_0, y_0)$ interior do domínio de $f$ tal que $\nabla f(x_0, y_0) = (0, 0)$, ou seja, $(x_0, y_0)$ é um ponto crítico de $f$. Nessas condições, se $(x_0, y_0)$ for ponto máximo local de $f$ então:

$$
  \frac{\partial^2 f}{\partial x^2}(x_0, y_0) \leq 0 \qquad \frac{\partial^2 f}{\partial y^2}(x_0, y_0) \leq 0
$$

Nas mesmas condições, se $(x_0, y_0)$ for um ponto de mínimo de $f$, então:

$$
  \frac{\partial^2 f}{\partial x^2}(x_0, y_0) \geq 0 \qquad \frac{\partial^2 f}{\partial y^2}(x_0, y_0) \geq 0
$$

Note que se, nas condições acima, as derivadas parciais de segunda ordem em um ponto tiverem sinais diferentes, então o ponto em questão não é nem um candidato a máximo nem a mínimo local, mas sim um *ponto de sela*.

# Condição suficiente para ponto extremante local
Dada uma função $f$ de classe $C^2$, ou seja, $f$ é de classe $C^1$, suas derivadas parciais de segunda ordem existem, são contínuas e suas derivadas parciais mistas coincidem. A função $H$ dada por

$$
H(x,y) =
\begin{vmatrix}
\displaystyle\frac{\partial^2f}{\partial x^2}(x,y) & \displaystyle\frac{\partial^2f}{\partial x \partial y}(x,y)\\
\displaystyle\frac{\partial^2f}{\partial x \partial y}(x,y) & \displaystyle\frac{\partial^2f}{\partial y^2}(x,y)
\end{vmatrix}
$$

é chamada de *hessiano* de $f$. Expandindo o determinante, podemos definir $H$ como:

$$
H(x,y) = \displaystyle\frac{\partial^2f}{\partial x^2}(x,y) \cdot \displaystyle\frac{\partial^2f}{\partial y^2}(x,y) - \left[ \displaystyle\frac{\partial^2f}{\partial x \partial y}(x,y) \right]^2
$$

O teorema a seguir nos fornece uma condição suficiente para um ponto crítico de $f$ ser máximo ou mínimo local de $f$.

Dada uma função $f$ de classe $C^2$, $(x_0, y_0)$ um *ponto interior* de $D_f$ e $H(x,y)$ o *hessiano* de $f$. Dado que $(x_0, y_0)$ é um ponto crítico de $f$, tem-se as seguintes conclusões:

1. Se $\displaystyle \frac{\partial^2f}{\partial x^2}(x_0,y_0) > 0$ e $H(x_0, y_0) > 0$, então $(x_0, y_0)$ é um ponto de **mínimo local** de $f$.
2. Se $\displaystyle \frac{\partial^2f}{\partial x^2}(x_0,y_0) < 0$ e $H(x_0, y_0) > 0$, então $(x_0, y_0)$ é um ponto de **máximo local** de $f$.
3. Se $H(x_0, y_0) < 0$, então $(x_0, y_0)$ não é extremante local, e sim um **ponto de sela**.
4. Se $H(x_0, y_0) = 0$, nada se conclui.