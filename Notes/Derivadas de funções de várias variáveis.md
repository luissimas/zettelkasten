# Derivadas de funções de várias variáveis
Dada uma função $f(x,y)$, calcular sua derivada significa calcular a taxa de variação de $f(x,y)$ quando $x$ e $y$ variam.

## Regra da cadeia
A regra da cadeia nos permite calcular derivadas de funções compostas. Para calcular a derivada de funções de várias variáveis usando esse método, é preciso compor a função a ser derivada com uma *curva* para então calcular sua derivada utilizando o [[Vetor gradiente | vetor gradiente]].

Dada uma função $f: A \subset \mathbb{R}^2 \to \mathbb{R}$, sendo $A$ um conjunto aberto, e uma curva $\gamma : I \to \mathbb{R}^2$, tais que $\gamma (t) \in A \quad \forall t \in I$. Se $\gamma$ for *diferenciável* em $t_0$ e $f$ for *diferenciável* em $\gamma (t_0)$, então a **composta** $F(t) = f(\gamma (t))$ será *diferenciável* em $t_0$ e vale a regra da cadeia

$$
  F'(t_0) = \nabla f(\gamma (t_0)) \cdot \gamma '(t_0)
$$

## Derivada direcional
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

---

created: 27/10/2021
