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

É importante destacar que **o produto vetorial é um vetor**, não um escalar (número real).

---

created: 19/03/2021
modified: 19/03/2021
