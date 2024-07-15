---
created-at: 2023-01-11
---

Projetar programas paralelos geralmente envolve a **decomposição** das atividades a serem executadas e a **atribuição** dessas atividades a unidades de processamento.

A decomposição das atividades pode ser feita em dois níveis:

A **decomposição de domínio** (paralelização de dados) consiste em **particionar os dados** a serem processados e executar um mesmo conjunto de instruções sobre as diversas partições.

![[Attachments/domain_decomp.png]]

A **decomposição funcional** (paralelismo funcional) consiste em **separar as atividades** do programa em blocos funcionais que podem ser paralelizados. Nessa abordagem as diferentes tarefas executam diferentes operações sobre dados distintos ou até mesmo sobre os mesmos dados.

![[Attachments/functional_decomp.png]]

# Estratégias de paralelização

Problemas paralelizáveis podem ser agrupados em diversas classes, e para cada classe de problemas geralmente há um conjunto de estratégias de paralelização já conhecidas e comumente aplicadas.

## Computações naturalmente paralelas

Essa classe engloba problemas que são naturalmente paralelizáveis. Geralmente esse tipo de problema possui características fundamentais que facilitam a aplicação de paralelismo: **independência** de dados e tarefas.

A estratégia para paralelizar esses tipos de problemas geralmente envolve uma **decomposição de domínio** sobre os dados inicial e posteriormente a atribuição de cada partição dos dados a tarefas paralelas. Esse modelo é conhecido como **SPMD** (*single-program multiple-data*), e consiste em executar um mesmo conjunto de instruções sobre múltiplos conjuntos de dados.

![[Attachments/naturally_paralel.png]]

Nesse tipo de problema geralmente é necessário algum mecanismo de comunicação e sincronização apenas para coletar e agregar os resultados obtidos por cada tarefa, resultando em um *overhead* de comunicação tipicamente baixo.

## Divisão e conquista

A estratégia de divisão e conquista consiste em **particionar dinamicamente** um problema em **subproblemas menores** com a **mesma estrutura** até se obterem subproblemas simples o bastante para serem resolvidos diretamente. Essa técnica permite a exploração do paralelismo através da resolução de cada subproblema em uma tarefa paralelizável.

![[Attachments/divide_and_conquer.jpg]]

Também são necessários mecanismos de sincronização e comunicação para combinar e agregar os resultados de maneira recursiva.

![[Attachments/divide_and_conquer_return.jpg]]