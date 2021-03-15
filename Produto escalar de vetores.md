# Produto escalar de vetores
Dados dois vetores $\vec{u}=x_1 \vec{i}+y_1 \vec{j}+z_1 \vec{k}$ e $\vec{v}=x_2 \vec{i}+y_2 \vec{j}+z_2 \vec{k}$, o produto escalar $\vec{u}\cdot \vec{v}$ é dado por:
> $$ \vec{u}\cdot \vec{v}=x_1x_2+y_1y_2+z_1z_2 $$

Algumas propriedades interessantes dos produtos escalares são as seguintes:
$$
\begin{align}
  \vec{u}\cdot \vec{u}&=|\vec{u}|^2\\
  |\vec{u} +\vec{v}|^2&=|\vec{u}|^2+2 \vec{u}\cdot \vec{v} + |\vec{v}|^2\\
  |\vec{u} -\vec{v}|^2&=|\vec{u}|^2-2 \vec{u}\cdot \vec{v} + |\vec{v}|^2\\
  (\vec{u} +\vec{v})\cdot(\vec{u}-\vec{v})&=|\vec{u}|^2-|\vec{v}|^2
\end{align}  
$$

## Definição geométrica
Usando a lei dos cossenos e as definições anteriores, é possível chegar na seguinte definição:
$$
  \vec{u}\cdot \vec{u}=|\vec{u}||\vec{v}|\cos(\theta),\quad 0^{\circ}\leq\theta\leq180^{\circ}
$$
Sendo $\theta$ o ângulo entre os vetores $\vec{u}$ e $\vec{v}$.
De maneira análoga à definição algébrica, temos as seguintes propriedades:
$$
\begin{align}
  |\vec{u} +\vec{v}|^2&=|\vec{u}|^2 + |\vec{v}|^2 +2 |\vec{u}||\vec{v}|\cos{\theta} \\
  |\vec{u} -\vec{v}|^2&=|\vec{u}|^2 + |\vec{v}|^2 -2 |\vec{u}||\vec{v}|\cos{\theta} \\
\end{align}  
$$

A partir disso é possível inferir uma condição para que dois vetores sejam [[Tratamento geométrico de vetores|orgotonais]]:
> Dois vetores $\vec{u}$ e $\vec{v}$ são ortogonais se, e somente se, $\vec{u}\cdot \vec{v}=0$

## Cálculo do ângulo de dois vetores
Dados os vetores $\vec{u}$ e $\vec{v}$, o ângulo $\theta$ formado por esses dois vetores é dado por:
>$$\cos{\theta}=\frac{\vec{u}\cdot \vec{v}}{|\vec{u}|\cdot|\vec{v}|}$$


---

created: 15/03/2021
modified: 15/03/2021
