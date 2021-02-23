# Métodos de escalonamento
## Sistemas escalonados
Sistemas chamados de escalonados possuem a seguinte forma:
$$
\begin{aligned}
\begin{cases}
    a_{11}x_1 &+ &a_{12}x_2 &+ &\cdots &+ &a_{1n}x_n &= b_1 \\
    0 &+ &a_{22}x_2 &+ &\cdots &+ &a_{2n}x_n &= b_2 \\
    \vdots &+ &\vdots &+ &\ddots &+ &\vdots &= \vdots \\
    0 &+ &0 &+ &\cdots &+ &a_{mn}x_n &= b_m \\
\end{cases}
\end{aligned}
$$

Os sistemas na forma escalonada (triangular) são de simples resolução, pois basta fazer a resolução  iniciando da última linha. Por exemplo:
$$
  \begin{cases}
  \quad x+y+z=8\\
  \qquad y+4z=13\\
  \qquad\qquad2z=6
  \end{cases}
$$
$$
\begin{align}
  &z = \frac{6}{2} = 3\\
  &y = 13 - 4\cdot\left(3\right) = 1\\
  &x = 8 - 3 - 1 = 4
\end{align}
$$

## Manipulação de sistemas
É possível manipular sistemas sem alterar o conjunto das soluções de algumas formas:
1. Trocar duas equações entre si
2. Multiplicar uma equação por um número não nulo
3. Substituir uma equação pela soma dela com uma outra equação, ou múltiplo de outra equação (mantendo a outra equação no sistema!)

Todas essas alterações acima não alteram o conjunto das soluções do sistema, desde que sejam aplicadas aos dois lados da equação que se deseja alterar. 
Sabendo que os sistemas escalonados são de resolução mais simples, e também que é possível alterar a forma de um sistema sem alterar o conjunto das soluções, é intuitivo tentar manipular um sistema linear para colocá-lo em sua forma escalonada, assim resolvendo-o. É essa a ideia dos dois métodos a seguir.

## Método de Eliminação de Gauss
O *Método de Eliminação de Gauss* usa as operações básicas para manipulação de sistemas, que estão aqui descritas em notação matricial:
1. Troca de linhas entre si: $L_i \longleftrightarrow L_j$
2. Multiplicação de uma linha por um escalar $\lambda\neq 0$: $L_i \rightarrow \lambda L_i$
3. Adição a uma linha de um múltiplo de outra (mantendo essa outra linha): $L_i \rightarrow L_i + \lambda L_k$
## Método de Gauss-Jordan

---

created: 23/02/2021
modified: 23/02/2021