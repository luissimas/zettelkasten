# Escalonamento de processos
O *escalonador* é o [[Processos | processo]] que gerencia a execução dos demais processos em um sistema operacional. Em ambientes de multiprogramação é comum ter diversos processos competindo pela CPU ao mesmo tempo, a tarefa do escalonador é justamente decidir quais processos serão executados em determinado momento, otimizando o uso da CPU e garantindo que todos os processos serão executados.
De maneira geral, existem duas categorias de escalonadores:

1. Preemptivo: o escalonador pode interromper periodicamente (intervalo de tempo chamado *quantum*) a execução dos processos para escalonar outro processo para ser executado.
2. Não preemptivo: o escalonador não interrompe a execução dos processos diretamente, ou seja, os processos continuam executando até seu término ou até um bloqueio de execução.

## Algoritmos de escalonamento
Existem diversos algoritmos de escalonamento, eles diferem principalmente de acordo com o ambiente em que serão aplicados. A forma como um escalonador trata as prioridades de execução dos processos é determinada pelo objetivo de uso do sistema em questão.

### Sistemas batch
Em sistemas batch o principal objetivo é maximizar o throughput do sistema, ou seja, maximizar o número de tarefas executadas em um determinado período de tempo. Nesse tipo de sistema geralmente utiliza-se algoritmos não preemptivos

### Sistemas interativos
Em sistemas interativos o objetivo é ter um equilíbrio na execução dos processos, não é tolerável que um processo utilize a CPU por muito tempo, pois isso pode afetar a experiência do usuário.

### Sistemas de tempo real

---

created: 01/09/2021
