# Máximos e mínimos de funções de várias variáveis
Dado um conjunto aberto $D$ tal que $D \subset \mathbb{R}^2$ e uma função $f: D \to \mathbb{R}$. O ponto $(x_0, y_0)$ é um ponto de *máximo absoluto* (ou máximo global) de $f$ se $f(x_0, y_0) \geq f(x,y), \quad \forall (x,y) \in D$. Da mesma forma, um ponto $(x_0,y_0)$ é um ponto de *máximo local* de $f$ se existir uma bola aberta $B$ de centro em $(x_0, y_0)$ e raio $r > 0$ tal que $f(x_0, y_0) \geq f(x,y), \quad \forall (x,y) \in B \cap D$.

A definição dos pontos de mínimo é análoga à definição de pontos de máximo. Pontos de máximo e de mínimo de uma função $f$ são denominados *extremantes* de $f$.

Dada uma função $f : D \to \mathbb{R}$ tal que $D \subset \mathbb{R}$ e um **ponto interior** de $f$ $(x_0, y_0)$. Se  $(x_0, y_0)$ é um ponto extremante de $f$, então $\nabla f(x_0, y_0) = (0,0)$. Isso equivale a dizer que o plano tangente ao gráfico de $f$ em $(x_0, y_0, f(x_0, y_0))$ é paralelo ao plano $xy$. Note que a recíproca não é verdadeira, portanto nem todo ponto cujo vetor gradiente é nulo é um ponto de máximo ou mínimo de $f$. Note também que esse resultado não se aplica a *pontos de fronteira* de $D$, ou seja, um ponto de fronteira pode ser um ponto extremante sem que o vetor gradiente de $f$ aplicado ao ponto seja nulo.

Os *pontos críticos* de uma função são os candidatos a serem pontos de máximo ou mínimo. Um ponto $(x_0, y_0)$ é *ponto crítico* de $f$ se e somente se $\nabla f(x_0, y_0) = (0,0)$.

---

created: 18/11/2021
