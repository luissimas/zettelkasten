---
created-at: 2021-10-31
---
A definição da diferenciabilidade das funções de várias variáveis parte do mesmo princípio de *razão incremental* usado da definição para funções de uma variável, porém são necessários alguns ajustes.

> Dada uma função $f: A \to \mathbb{R}$, sendo $A$ um conjunto aberto tal que $A \subseteq \mathbb{R}^2$, e um ponto $(x_0, y_0) \in A$. Dizemos que $f$ é **diferenciável** em $(x_0, y_0)$ se e somente se existirem $a, b \in \mathbb{R}$ tais que

$$
\lim_{(h,k) \to (0,0)}{\frac{f(x_0 + h, y_0 + k) - f(x_0, y_0) -ah -bk}{||(h,k)||}} = 0
$$

A partir da diferenciabilidade de uma função, é possível garantir outras das suas propriedades.

> **Diferenciabilidade implica continuidade**
> Se uma função $f(x,y)$ é diferenciável em $(x_0, y_0)$, então ela é contínua em $(x_0, y_0)$.

> **Diferenciabilidade implica a existência de derivadas parciais**
> Se uma função $f(x,y)$ é diferenciável em $(x_0, y_0)$, então $f$ admite derivadas parciais nesse ponto, e as derivadas parciais com relação a $x$ e $y$ são, respectivamente, os valores $a$ e $b$ no limite que define a diferenciabilidade.

Tendo essas implicações em vista, podemos derivar o seguinte:

> Dada uma função $f: A \to \mathbb{R}$, sendo $A$ um conjunto aberto tal que $A \subseteq \mathbb{R}^2$, e um ponto $(x_0, y_0) \in A$. Dizemos que $f$ é **diferenciável** em $(x_0, y_0)$ se e somente se as seguintes condições forem satisfeitas:
> 1. $f$ é contínua em $(x_0, y_0)$
> 2. $f$ admite derivadas parciais em $(x_0, y_0)$
> 3. $\displaystyle \lim_{(h,k) \to (0,0)}{\frac{E(h,k)}{||(h,k)||}} = 0$
> Sendo $E(h,k)$ definida por:

$$
E(h,k) = f(x_0 + h, y_0 + k) - f(x_0, y_0) - \frac{\partial f}{\partial x}{(x_0, y_0)}h -\frac{\partial f}{\partial y}{(x_0, y_0)}k
$$

Existe ainda uma condição suficiente para a diferenciabilidade que envolve as derivadas parciais de uma função.

> Dada uma função $f: A \to \mathbb{R}$, sendo $A$ um conjunto aberto tal que $A \subseteq \mathbb{R}^2$. Se as **derivadas parciais** $\frac{\partial f}{\partial x}$ e $\frac{\partial f}{\partial y}$ existirem em $A$ e forem **contínuas** no ponto $(x_0, y_0)$, então $f$ é **diferenciável** neste ponto.

Note que a recíproca do teorema não é verdadeira, isto é, existem funções que são diferenciáveis num ponto sem que as derivadas parciais sejam contínuas nesse ponto.