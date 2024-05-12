---
created-at: 2023-01-14
---

*Message Passing Interface* (MPI) é uma **especificação** para a passagem de mensagem em arquiteturas de computação paralela distribuída. A especificação define a sintaxe e semântica de funções de bibliotecas para gerenciar aspectos de **criação, comunicação e sincronização de tarefas** em um ambiente de computação distribuída. Existem diversas implementações da MPI para as linguagens C, C++ e Fortran.

A ideia da API MPI é abstrair os mecanismos de rede e detalhes de comunicação, oferecendo operações de alto nível para a comunicação e sincronização entre diferentes processos. As operações de comunicação podem ser tanto ponto-a-ponto quanto coletivas.

A compilação e execução de programas usando MPI é feita através dos utilitários `mpicc` e `mpirun`, respectivamente. O `mpicc` é um *wrapper* ao redor do compilador `gcc`, e o `mpirun` é o programa responsável por iniciar e coordenar a execução de cada processo que compõe a aplicação.

Um conceito fundamental de MPI é o de **grupos**. Cada grupo representa um conjunto de processos com alguma característica em comum. Dentro de um grupo cada processo tem um **identificador** chamado de `rank`. É possível agrupar processos da aplicação em sub-grupos da maneira que se desejar. Por padrão todos os processos da aplicação participam de um grupo global identificado por `MPI_COMM_WORLD`, sendo possível enviar e receber dados entre quaisquer processos da aplicação especificando esse grupo e o `rank` dos processos envolvidos nas operações.

Além de oferecer primitivas básicas de comunicação síncrona e assíncrona entre processos, a especificação MPI também oferece primitivas de comunicação coletiva (que também podem ser síncronas ou assíncronas). As primitivas de comunicação coletiva simplificam operações comuns que envolvem a comunicação entre todos os processos de um grupo. Dentre as principais primitivas de comunicação assíncrona estão:

- A primitiva `MPI_Bcast` faz o broadcast de uma mensagem para todos os processos do grupo. Nessa primitiva é necessário especificar o *root* da operação, ou seja, qual processo irá enviar os dados para os demais.
- A primitiva `MPI_Reduce` permite a realização e uma operação de redução, ou seja, a combinação de vários valores de acordo com um operador. Há um conjunto de operadores predefinidos pela biblioteca `MPI`, mas é possível especificar outros. Ao final da operação, o resultado é colocado em um buffer no processo *root* especificado na chamada
- A primitiva `MPI_Scatter` permite o particionamento e envio de um conjunto de dados do nó *root* aos outros nós do grupo. Essa primitiva é equivalente ao nó *root* fazer $n$ chamadas à `MPI_Send` particionando os dados e uma chamada `MPI_Recv` em cada outro nó.
- A primitiva `MPI_Gather` é a operação reversa da `MPI_Scatter`, e agrega os dados enviados de múltiplos nós de um grupo no nó *root*.
- A primitiva `MPI_Alltoall` consiste no envio de dados de todos os nós para todos os nós. A operação é equivalente a execução da `MPI_Scatter` em cada nó do grupo.
- A primitiva `MPI_Allgather` é similar à `MPI_Gather`, com a diferença de que todos os processos recebem o resultado agregado, não apenas o processo *root*.
- A primitiva `MPI_Barrier` coloca uma barreira em um trecho de código que é completa apenas quando todos os processos do grupo a atingirem.
