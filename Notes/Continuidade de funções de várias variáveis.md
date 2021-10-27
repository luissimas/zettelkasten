# Continuidade de funções de várias variáveis
Assim como para funções de uma variável, a continuidade é definida em termos de limites.

> Uma função $f(x,y)$ é **contínua no ponto** $(x_0, y_0)$ se as seguintes condições forem satisfeitas:
> 1. $f$ for definida em $(x_0, y_0)$
> 2. $\displaystyle\lim_{(x,y) \to (x_0, y_0)}{f(x,y)}$ existe
> 3. $\displaystyle\lim_{(x,y) \to (x_0, y_0)}{f(x,y)} = f(x_0, y_0)$

É possível também definir a continuidade de uma função através da composição de outras duas funções cuja continuidade já é conhecida.

> Dada uma função $f: D \to \mathbb{R}$ contínua no ponto $(x_0, y_0)$, e uma função $g : I \to \mathbb{R}$ contínua em $z_0 = f(x_0, y_0)$, então a composta $g(f(x,y))$ é contínua em $(x_0, y_0)$.

Note que para ser possível fazer a composta entre duas funções, a imagem de $f$ deve estar contida no domínio de $g$, ou seja: $Im(f) \subseteq Dom(g)$.

---

created: 27/10/2021
