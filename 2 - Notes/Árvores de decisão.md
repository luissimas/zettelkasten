---
date: 2024-05-15
---

[[Árvore]] de decisão é uma classe de algoritmos de [[Aprendizado supervisionado]] aplicado em problemas de **classificação**, ou seja, problemas nos quais a partir de um conjunto de atributos deseja-se obter um novo atributo discreto (uma classe).

A ideia é representar o processo de identificação da classe como uma árvore na qual cada os nós internos são atributos e os nós folhas são as possíveis classes.

![[decisiontree.png]]

Para gerar uma árvore de decisão é necessário **particionar** o **conjunto de treinamento** com base em um **atributo** até que os conjuntos resultantes do particionamento contenham dados de uma única classe. Para avaliar qual atributo escolher para particionar o conjunto de treinamento em cada nó da árvore, é possível utilizar algumas medidas:

- **Entropia:** Medida de incerteza de uma variável randômica
- **Ganho de informação:** redução em entropia

Dessa forma, é dada prioridade ao atributo que oferece o maior ganho de informação para cada conjunto de dados. O algoritmo selecionar o atributo consiste em:

1.  Calcular a entropia do conjunto de dados
2.  Calcular o ganho de informação de cada atributo
3.  Selecionar o atributo com o maior ganho de informação

Dado um conjunto de dados $S$ com $c$ classes, o cálculo da **entropia** do conjunto é dado por:

$$
H(S) = - \sum_{i=1}^c{p_i \log_2{p_i}}
$$

no qual:

$$
p_i = \frac{n_i}{n}
$$

onde $n_i$ corresponde ao número de exemplos da classe $i$ e $n$ corresponde ao número total de exemplos no conjunto de dados.

O ganho de informação de um atributo é a redução da entropia com a escolha desse atributo. Para calcular o ganho de informação é necessário calcular a entropia de todos os subconjuntos gerados pela escolha de um atributo. Dessa forma, o ganho de informação resultante da escolha de um atributo $A$ em um conjunto de dados $S$ é dado por:

$$
Ganho(A) = H(S) - HRestante(A)
$$

Onde $HRestante$ corresponde a entropia restante. Dado que a escolha de um atributo $A$ que pode assumir $d$ valores distintos divide o conjunto $S$ em $d$ subconjuntos $E_1, E_2, \dots, E_d$, a entropia restante é dada por:

$$
HRestante(A) = \sum_{k=1}^d{\frac{|E_k|}{|S|}H(E_k)}
$$