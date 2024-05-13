---
date: 2024-05-13
---

É comum coletar conjuntos de dados em aplicações práticas, dados esses que podem ser vistos como **pontos** desconexos. O objetivo da interpolação é, dado um conjunto de pontos, determinar uma **expressão capaz de gerar todos esses pontos**. A ideia é que, obtida uma expressão que gera todos os pontos de dados coletados, é possível fazer **inferência** sobre os dados com base no **comportamento do conjunto de dados**, que agora é **definido por uma função**.

Dado um conjunto de **pontos distintos** $P = \{x_0, x_1,\dots, x_n\}$ chamados *nós da interpolação* e uma função $f(x)$ cuja **definição é desconhecida**, mas todos os **valores** $f(x_0), f(x_1), \dots, f(x_n)$ **são conhecidos** para todo $x_1$, o problema de interpolação de $f(x)$ consiste em obter uma função $g(x)$ tal que:

$$
\begin{cases}
  g(x_0) &= f(x_0)\\
  g(x_1) &= f(x_1)\\
  & \vdots\\
  g(x_n) &= f(x_n)
\end{cases}
$$

Ou seja, os valores da função $g$ correspondem aos valores da função $f$ **em todos os pontos** do conjunto $P$. Note que não há garantias de que as funções coincidem em todos os valores de seus intervalos, mas sim que elas coincidem nos pontos do conjunto $P$.

Muitas vezes, é conveniente tomar uma **função polinomial** como função interpoladora, ou seja, como a função que deseja-se ajustar para gerar os pontos do conjunto. Essa estratégia de interpolação é chamada de **interpolação polinomial**, e consiste em encontrar um polinômio de grau menor ou igual a $n$ que interpola a função $f$.
