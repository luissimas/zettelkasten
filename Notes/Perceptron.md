---
created-at: 2024-05-15
---

O perceptron foi o primeiro modelo de [[Redes neurais|rede neural]] de fato implementada como um algoritmo. O modelo hoje compreende a forma mais simples de uma rede neural, podendo ser utilizada para classificar **padrões linearmente separáveis**, ou seja, que podem ser separados por apenas um hiperplano, em um conjunto com **classes binárias**.

![[artificialneuronmodel.png]]

A rede consiste de um único neurônio com um vetor de **pesos** $(w_1, w_2, \dots w_n)$ que pondera cada um dos atributos de entrada $(x_1, x_2, \dots, x_n)$. Veja ainda que é adicionado um [[Viés]] às entradas, que pode ser representado por uma entrada $x_0 = 1$ ponderada por um fator $b$.

No caso do perceptron, a função linear é a **combinação linear** das entradas ponderadas pelos pesos. O resultado dessa função é chamado **potencial de ativação** do neurônio, dado por:

$$z= \sum_{i=1}^{n}{w_ix_i} + b$$

O potencial de ativação é então usado como entrada para uma **função de ativação**, que tem o papel de normalizar o potencial de ativação. No caso do perceptron a função de ativação mais comum é a função $\text{sign}$:

$$
 \text{sign}(x) = \begin{cases}
+1 \text{ se  } x > 0\\
-1 \text{ se  } x \leq 0\\
\end{cases}
$$

Dessa forma, os resultados possíveis do neurônio são $-1$ ou $1$, sendo possível identificar apenas classes binárias.
