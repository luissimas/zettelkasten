---
date: 2024-05-15
---

A tarefa de agrupamento (*clustering*) consiste em, dado um conjunto de dados, **agrupar** pontos de dados mais **similares** entre si em *clusters* (grupos). Os pontos fundamentais em tarefas de agrupamento consistem principalmente na definição de uma **medida de similaridade**, na definição de um **número ideal de grupos** e também na **validação e interpretação** de um resultado de agrupamento. O [[K-means]] é um exemplo clássico de algoritmo de agrupamento.

![[clustering.png]]

As **medidas de similaridade** consistem em medidas objetivas para determinar o quão próximo (ou distante) um objeto está do outro no contexto do agrupamento. Diversas medidas podem ser adotadas, sendo que a escolha de adoção de uma medida é dada com base nas características do conjunto de dados.

Uma medida amplamente utilizada para conjuntos de dados com atributos contínuos é a **distância**, calculada através da distância euclidiana entre dois pontos de dados em um espaço cujas dimensões são dadas pelos atributos do conjunto de dados. Vale notar que a similaridade entre dois pontos é inversamente proporcional a distância entre eles.

O **número ideal de grupos** não é algo determinístico, ou seja, para um mesmo conjunto de dados é possível que existam diversos números de grupos possíveis. Dessa forma, geralmente são empregados processos empíricos para determinar qual o número ideal de grupos para um conjunto de dados e problema específicos.

Em geral existem duas categorias de agrupamento:

-   O **agrupamento hierárquico** divide os dados em grupos **aninhados**, representados por uma estrutura de árvore chamada dendrograma.
-   O **agrupamento particional** divide os dados em grupos sem sobreposição (partições), criando agrupamentos de forma que um ponto de dado pertence a somente um grupo.

O agrupamento particional é o tipo mais popular de algoritmo de agrupamento, sendo particularmente eficiente para conjuntos de dados grandes. Entretanto, vale notar que esse tipo de particionamento exige que o número de grupos seja definido previamente. A ideia dos algoritmos de agrupamento particional é encontrar e ajustar **centros** de grupos que possam caracterizar características relevantes no conjunto de dados.