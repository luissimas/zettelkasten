---
created-at: 2024-05-13
---

O método da fatoração LU é um [[Métodos diretos para resolução de sistemas lineares|método direto para resolução de sistemas lineares]]. Esse ḿetodo consiste em, dado um sistema linear na forma $Ax = b$, **decompor a matriz dos coeficientes** $A$ em um **produto de duas matrizes** $L$ e $U$, em que $L$ (*Lower*) é uma **matriz triangular inferior** com diagonal unitária e $U$ (*Upper*) é uma **matriz triangular superior**.

O custo computacional desse método é idêntico ao do método da eliminação de Gauss, porém com o método da fatoração é possível **reutilizar as operações de escalonamento** feitas na matriz dos coeficientes para **resolver outros sistemas** com a **mesma matriz de coeficientes** e **matrizes** $b$ **diferentes**.

Tomando $A = LU$, o sistema $Ax = b$ pode ser reescrito na forma $LUx = b$, que pode ser reescrito no seguinte sistema:

$$
\begin{cases}
  Ly = b\\
  Ux = y
\end{cases}
$$

Note que cada equação do sistema é também um **sistema**, dessa forma pode-se resolver o primeiro sistema para encontrar a solução $y$, e depois o segundo sistema, obtendo a solução $x$ do sistema original.

A matriz $U$ é a **matriz resultante** do processo de **eliminação de Gauss**, enquanto a matriz $L$ é composta pelos **fatores de multiplicação** usados para zerar cada elemento no processo.

Note que o fato da matriz $L$ ser composta pelas operações inversas utilizadas no escalonamento garante que a operação é reversível, portanto os elementos da matriz $B$ não se alteram de posição mesmo que as linhas de $A$ sejam alteradas em $U$ pelo processo de escalonamento.