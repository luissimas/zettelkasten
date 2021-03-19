# Determinantes
Determinantes nos fornecem informações úteis a respeito de suas matrizes e têm diversas aplicações.

## Determinantes de ordem 2
O cálculo de determinantes de ordem dois é simples e serve de base para o cálculo de determinantes de ordem superior.
 Dada uma matriz $M_{2\times2}$, seu determinante é dado por:
$$
det
\begin{bmatrix}
  x_1 & y_1 \\
  x_2 & y_2
\end{bmatrix}
=
\begin{vmatrix}
  x_1 & y_1 \\
  x_2 & y_2
\end{vmatrix}
= x_1y_2 - x_2y_1
$$

Algumas propriedades úteis dos determinantes são:
- A permutação de duas linhas inverte o sinal do determinante.
- Se duas linhas forem diferentes e constituídas de elementos proporcionais, o determinante é zero.
- Se uma linha for contituída de zeros, o determinante é zero.

## Determinantes de ordem superior
Para calcular o determinante de ordem superior a 2 é necessário usar o *Teorema de Laplace*:
1. Selecionar uma linha ou coluna, dando preferência àquela que tenha a maior quantidade de zeros.
2. Somar alternando os sinais os produtos dos elementos da linha ou coluna selecionada multiplicados pelos determinantes de cada submatriz obtida eliminando todos os elementos da linha e coluna do elemento selecionado.

$$
\begin{vmatrix}
  a & b & c \\
  x_1 & y_1 & z_1 \\
  x_2 & y_2 & z_2
\end{vmatrix}
=

\begin{vmatrix}
  y_1 & z_1 \\
  y_2 & z_2
\end{vmatrix}
a
-
\begin{vmatrix}
  x_1 & z_1 \\
  x_2 & z_2
\end{vmatrix}
b
+
\begin{vmatrix}
  x_1 & y_1 \\
  x_2 & y_2
\end{vmatrix}
c
$$

---

created: 19/03/2021
modified: 19/03/2021
