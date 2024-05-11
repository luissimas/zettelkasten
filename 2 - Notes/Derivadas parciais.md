# Derivadas parciais
É possível calcular as *derivadas parciais* de uma função de várias variáveis fixando todas as variáveis da equação nos valores do ponto, exceto aquela com relação a qual queremos calcular a derivada. A partir do momento que fixamos uma variável, ela passa a se comportar como uma constante, ou seja, ao fixar todas as variáveis exceto uma, temos uma função de uma variável.
Dessa forma, calcular uma derivada parcial consiste em fixar as demais variáveis da função e então calcular a derivada de uma função de apenas uma variável.

> A derivada parcial de $f(x,y)$ em relação a $x$ no ponto $(x_0, y_0)$ é dada por:

$$
  \frac{\partial f}{\partial y}{(x_0, y_0)} = \frac{d}{dx}f(x, y_0) = \lim_{x \to x_0}{\frac{f(x, y_0) - f(x_0, y_0)}{x - x_0}}
$$

De maneira análoga, a derivada parcial de $f(x,y)$ em relação a $y$ no ponto $(x_0, y_0)$ é dada por:

$$
  \frac{\partial f}{\partial y}{(x_0, y_0)} = \frac{d}{dy}f(x_0, y) = \lim_{y \to y_0}{\frac{f(x_0, y) - f(x_0, y_0)}{y - y_0}}
$$

Note que a existência das derivadas parciais **não garante** que a função é **diferenciável**, mas é uma condição para tal.

---

created: 31/10/2021
