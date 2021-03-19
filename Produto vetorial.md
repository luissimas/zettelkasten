# Produto vetorial
Dados um vetor: $\vec{u} = x_1 \vec{i} + y_1 \vec{j} + z_1 \vec{k}$, e um outro vetor: $\vec{v} = x_2 \vec{i} + y_2 \vec{j} + z_2 \vec{k}$, o *produto vetorial* $\vec{u} \times \vec{v}$ é dado por:
$$
\vec{u} \times \vec{v}
=
\begin{vmatrix}
  \vec{i} & \vec{j} & \vec{k} \\
  x_1 & y_1 & z_1 \\
  x_2 & y_2 & z_2
\end{vmatrix}
=

\begin{vmatrix}
  y_1 & z_1 \\
  y_2 & z_2
\end{vmatrix}
\vec{i}
-
\begin{vmatrix}
  x_1 & z_1 \\
  x_2 & z_2
\end{vmatrix}
\vec{j}
+
\begin{vmatrix}
  x_1 & y_1 \\
  x_2 & y_2
\end{vmatrix}
\vec{k}
$$

É importante destacar que **o produto vetorial é um vetor**, não um escalar (número real). Levando em conta as propriedades dos [[Determinantes|determinantes]], é possível tirar algumas conclusões sobre produtos vetoriais:
1. No caso do produto vetorial a ordem dos fatores importa, isso se dá pela troca de ordem dos elementos no cálculo de determinantes inverter o sinal dos determinantes intermediários de ordem 2, implicando em: $\vec{v}\times \vec{u}=-(\vec{u}\times \vec{v})$, ou seja, $\vec{v}\times \vec{u}\neq \vec{u}\times \vec{v}$. 
2. O produto vetorial $\vec{u}\times \vec{v}$ é igual a $0$ se e somente se $\vec{u}//\vec{v}$, pois assim todos os determinantes intermediários de ordem 2 teriam suas linhas proporcionais. Analogamente $\vec{u}\times \vec{0}=0$, pois todos os determinanates intermediários teríam uma linha de zeros.

---

created: 19/03/2021
modified: 19/03/2021
