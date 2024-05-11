# Métodos de escalonamento
## Sistemas escalonados
Sistemas chamados de escalonados possuem a seguinte forma matricial:
$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & 0 & a_{13} & \cdots & a_{2n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & a_{mn}
\end{bmatrix}
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
> 1. Troca de linhas entre si: $L_i \longleftrightarrow L_j$
> 2. Multiplicação de uma linha por um escalar $\lambda\neq 0$: $L_i \rightarrow \lambda L_i$
> 3. Adição a uma linha de um múltiplo de outra (mantendo essa outra linha): $L_i \rightarrow L_i + \lambda L_k$

Usando essas operações é possível transformar **qualquer sistema** em um sistema escalonado, porém isso não garante que o sistema tenha alguma solução (caso não tenha é possível determinar isso também).
O Método para a redução de uma matriz $M$ a uma forma escalonada é o seguinte:
> 1. Seja $c_1$ a primeira coluna não nula de $M$. Se necessário, troque as linhas para que o elemento da linha 1 e coluna $c_1$ seja não nulo. Esse elemento é chamado de **pivô**. Anule os elementos abaixo do pivô utilizando a operação $L_i \rightarrow L_i - \frac{M_{ic_i}}{M_{1c_i}}\cdot L_i$ para cada $i>1$. Chame a nova matriz de $M^1$.
> 2. Tome como pivô o próximo elemento não nulo da próxima linha (se necessário troque as linhas para que o elemento da linha 2 e coluna $c_2$ seja não nulo) e repita o processo de anular os elementos abaixo do novo pivô.
> 3. Continue o processo considerando $c_k$ a primeira coluna de $M^{k-1}$ em que existem elementos não nulos. Se necessário troque a linha k por alguma abaixo e tome o primeiro elemento não nulo dessa linha como o novo pivô. Continue a anular os elementos da coluna $c_k$ abaixo da linha $k$ com as operações $L_i \rightarrow L_i - \frac{M_{ic_k}}{M_{kc_k}}\cdot L_k$ para $i>k$. Repita o processo até que acabem as linhas não nulas ou as colunas.


## Método de Gauss-Jordan
O *Método de Gauss-Jordan* também tem por objetivo obter a forma escalonada de um sistema, porém ele leva a **uma única matriz mais simplicifada**, chamada de matriz na forma escalonada reduzida por linhas.
Uma matriz é considerada na forma escalonada reduzida por linhas se:
1. É uma matriz na forma escalonada
2. O primeiro elemento não nulo de cada linha não nula (pivô) é 1
3. Na coluna do pivô ele é o único elemento não nulo

Para obter a matriz escalonada reduzida por linhas a partir da matriz escalonada $E$, basta seguir os seguintes passos:
> 1. Transformar todos os pivôs em 1, multiplicando as linhas não nulas $L_i$ pelos multiplicadores $\frac{1}{E_{ic_i}}, i \in\{1,2,\dots,r\}$
> 2. Comece pelo último pivô e anule todos os elementos **acima** dele, prosseguindo até o segundo pivô.

---

created: 23/02/2021
modified: 23/02/2021