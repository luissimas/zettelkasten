# Derivadas de funções de várias variáveis
Dada uma função $f(x,y)$, calcular sua derivada significa calcular a taxa de variação de $f(x,y)$ quando $x$ e $y$ variam.

## Regra da cadeia
A regra da cadeia nos permite calcular derivadas de funções compostas. Para calcular a derivada de funções de várias variáveis usando esse método, é preciso compor a função a ser derivada com uma *curva* para então calcular sua derivada utilizando o [[Vetor gradiente | vetor gradiente]].

Dada uma função $f: A \subset \mathbb{R}^2 \to \mathbb{R}$, sendo $A$ um conjunto aberto, e uma curva $\gamma : I \to \mathbb{R}^2$, tais que $\gamma (t) \in A \quad \forall t \in I$. Se $\gamma$ for *diferenciável* em $t_0$ e $f$ for *diferenciável* em $\gamma (t_0)$, então a **composta** $F(t) = f(\gamma (t))$ será *diferenciável* em $t_0$ e vale a regra da cadeia

$$
  F'(t_0) = \nabla f(\gamma (t_0)) \cdot \gamma '(t_0)
$$

---

created: 27/10/2021
