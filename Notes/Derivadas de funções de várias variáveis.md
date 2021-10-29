# Derivadas de funções de várias variáveis
Dada uma função $f(x,y)$, calcular sua derivada significa calcular a taxa de variação de $f(x,y)$ quando $x$ e $y$ variam.

## Derivadas parciais
Fixamos todas as variáveis da equação nos valores do ponto, exceto aquela com relação a qual queremos calcular a derivada. A partir do momento que fixamos uma variável, ela passa a se comportar como uma constante, ou seja, ao fixar todas as variáveis exceto uma, temos uma função de uma variável.
Dessa forma, calcular uma derivada parcial consiste em fixar as demais variáveis da função e então calcular a derivada de uma função de apenas uma variável.

> A derivada parcial de $f(x,y)$ em relação a $x$ no ponto $(x_0, y_0)$ é dada por:

$$
  \left.\frac{\partial f}{\partial y}\right|_{(x_0, y_0)} = \frac{d}{dx}f(x, y_0) = \lim_{x \to x_0}{\frac{f(x, y_0) - f(x_0, y_0)}{x - x_0}}
$$

De maneira análoga, a derivada parcial de $f(x,y)$ em relação a $y$ no ponto $(x_0, y_0)$ é dada por:

$$
  \left.\frac{\partial f}{\partial y}\right|_{(x_0, y_0)} = \frac{d}{dy}f(x_0, y) = \lim_{y \to y_0}{\frac{f(x_0, y) - f(x_0, y_0)}{y - y_0}}
$$

Note que a existência das derivadas parciais não garante que a função é diferenciável, mas é uma condição para tal.

## Diferenciabilidade
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
E(h,k) = f(x_0 + h, y_0 + k) - f(x_0, y_0) - h\left.\frac{\partial f}{\partial x}\right|_{(x_0, y_0)} -k\left.\frac{\partial f}{\partial y}\right|_{(x_0, y_0)}
$$


---

created: 27/10/2021
