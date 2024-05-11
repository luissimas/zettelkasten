# Derivadas direcionais
As derivadas direcionais nos permitem calcular a taxa de variação de uma função de várias variáveis na direção de um vetor arbitrário.

Dada uma função $f$, um ponto $(x_0, y_0)$ do domínio de $f$ e um vetor **unitário** $\vec{u} = (a,b)$, a taxa média de variação de $f$ na direção $\vec{u} = (a,b)$ entre os pontos $(x_0, y_0)$ e $(x_0 + at, y_0 + bt)$ é dada por:

$$
  \frac{f(x_0 + at, y_0 + bt) - f(x_0, y_0)}{t}
$$

Através de limites, é possível então definir a *derivada direcional* de $f$ no ponto $(x_0, y_0)$ e na direção do vetor unitário $\vec{u} = (a,b)$:

$$
  \frac{\partial f}{\partial \vec{u}}(x_0, y_0) = \lim_{t \to 0}{\frac{f(x_0 + at, y_0 + bt) - f(x_0, y_0)}{t}}
$$

Note que as [derivadas parciais](./Derivadas parciais.md) de $f$ em $(x_0, y_0)$ são também derivadas direcionais particulares. $\frac{\partial f}{\partial x}{(x_0, y_0)}$ e $\frac{\partial f}{\partial y}{(x_0, y_0)}$ são, respectivamente, as derivadas direcionais de $f$ no ponto $(x_0, y_0)$ e nas direções dos vetores $\vec{i} = (1,0)$ e $\vec{j} = (0,1)$.

Se $f$ for uma função *diferenciável* em $(x_0, y_0)$, então a seguinte igualdade é verdadeira:

$$
  \frac{\partial f}{\partial \vec{u}}(x_0, y_0) = \nabla f(x_0, y_0) \cdot \vec(u)
$$

Esse resultado facilita o cálculo das derivadas direcionais, mas ele é válido apenas se $f$ for **diferenciável** no ponto em que se deseja calcular a derivada.

---

created: 15/11/2021
