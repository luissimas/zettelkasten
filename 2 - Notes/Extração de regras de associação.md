---
date: 2024-05-15
---

O processo de extração de regras de associação tem como objetivo extrair **associações entre atributos** do conjunto de dados com base na frequência em que diferentes valores ocorrem juntos. Através da extração das regras é possível obter padrões de comportamento úteis do conjunto de dados original. Um problema comum que envolve regras de associação é o de relacionar produtos que são comprados juntos em algum tipo de comércio a fim de oferecer combinações de produtos que tem maior probabilidade de serem comprados juntos.

Dada uma base de dados composta por um conjunto de itens $A=\{a_1, a_2, \dots, a_n\}$ e um conjunto de transações $T=\{t_1, t_2, \dots, t_n\}$ em que cada transação $t_i$ consiste em um conjunto de itens tal que $t_i \subseteq A$, uma **regra de associação** é uma implicação na forma

$L \implies R$

em que $L$ e $R$ são conjuntos de itens que estão contidos em $A$ tal que $L \cap R = \emptyset$.

Uma regra de associação tem **suporte** $s$ se em $s\%$ das transações em $T$ ocorre $L \cup R$, ou seja, o suporte representa a porcentagem de transações que apresentam ambos os componentes da regra. Já a **confiança** $c$ de uma regra é dada pela porcentagem das transações em $T$ em que se $L$ ocorre então $R$ também ocorre, ou seja: $c=suporte(L \cup R) \div suporte(L)$.

Os algoritmos de extração de regras de associação geralmente seguem um processo padrão de tarefas:

1.  Encontrar todos os conjuntos de itens que possuem suporte maior que um **suporte mínimo** fixado.
2.  Utilizar todos os conjuntos de itens para gerar as regras de associação que possuem confiança maior do que uma **confiança mínima** fixada.

As métricas de confiança e suporte, apesar de essenciais, não são suficientes para determinar com certeza a utilidade da regra extraída. Tendo isso em vista, duas outras métricas são utilizadas para avaliar as regras obtidas pelos algoritmos:

O **lift** representa a noção estatística de independência entre duas variáveis aleatórias. Aplicado a uma regra de associação, o lift indica o quão **correlacionados** estão os componentes da regra.

$Lift(A \implies B) = \frac{confianca(A \implies B)}{suporte(B)} = \frac{suporte(A \cup B)}{suporte(A) \cdot suporte(B)}$

A **convicção** representa o quão convincente é a regra, também podendo ser interpretada como a **frequência de erro** da regra. $$Conv(A \implies B) = \frac{1-suporte(B)}{1-confianca(A \implies B)}$$

# Apriori

O algoritmo Apriori utiliza de um processo iterativo para encontrar todos os conjuntos de **itens frequentes** contidos em uma base de dados e, a partir desses conjuntos, **gerar regras** de associação com base em parâmetros de suporte e confiança mínimos.

De maneira geral, cada iteração $k$ do algoritmo executa três fazes:

1.  A **geração de candidatos** de tamanho $k$, onde são utilizados os conjuntos frequentes de tamanho $k-1$ para gerar conjuntos candidatos (não necessariamente frequentes) de tamanho $k$ através da combinação dos itens dos conjuntos.
2.  A **poda de candidatos**, onde são descartados os candidatos gerados que possuem um subconjunto de itens de tamanho $k-1$ não frequente.
3.  O **cálculo do suporte**, fase na qual o banco de dados com as transações é percorrido para calcular o valor do suporte para cada um dos candidatos, eliminando os candidatos com suporte inferior ao suporte mínimo fixado.

Quando não for mais possível gerar novos candidatos o processo se encerra, resultando em um conjunto de vários conjuntos de itens frequentes, partir do qual é possível extrair as regras de associação. Para cada conjunto $I$ de tamanho $k$ resultante, geram-se todos os subconjuntos $a$ de $I$ para gerar regras na forma $a \implies (I-a)$.