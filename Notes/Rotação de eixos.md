---
created-at: 2021-06-02
---
Dado um sistema $Oxy$, com vetores diretores $\vec{e_1}$ e $\vec{e_2}$, podemos tomar um ângulo de rotação $\theta$ que transforma o sistema $Oxy$ no sistema $Ouv$, de vetores diretores $\vec{f_1}$ e $\vec{f_2}$.

![[rotacaodeeixos.png]]

Assim, podemos definir os novos vetores como:

$$
\begin{aligned}
  \vec{f_1} &= \cos{\theta} \vec{e_1} + \sin{\theta} \vec{e_2}\\
  \vec{f_2} &= - \sin{\theta} \vec{e_1} + \cos{\theta} \vec{e_2}
\end{aligned}
$$

Dessa forma, qualquer ponto $P$ de coordenadas $(x,y)$ no sistema $Oxy$ terá as seguintes coordenadas no sistema $Ouv$:

$$
\begin{cases}
  x = x'\cos{\theta} - y'\sin{\theta}\\
  y = x'\sin{\theta} + y'\cos{\theta}\\
\end{cases}
$$

Da mesma forma:

$$
\begin{cases}
  x' = x\cos{\theta} + y\sin{\theta}\\
  y' = -x\sin{\theta} + y\cos{\theta}\\
\end{cases}
$$

Na notação matricial, temos:

$$
\begin{bmatrix}
  x\\
  y
\end{bmatrix} =
\begin{bmatrix}
  \cos{\theta} & -\sin{\theta}\\
  \sin{\theta} & \cos{\theta}\\
\end{bmatrix} =
\begin{bmatrix}
  x'\\
  y'
\end{bmatrix}
$$

e

$$
\begin{bmatrix}
  x'\\
  y'
\end{bmatrix} =
\begin{bmatrix}
  \cos{\theta} & \sin{\theta}\\
  -\sin{\theta} & \cos{\theta}\\
\end{bmatrix} =
\begin{bmatrix}
  x\\
  y
\end{bmatrix}
$$