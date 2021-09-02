# Escalonamento de processos
O *escalonador* é o [[Processos | processo]] que gerencia a execução dos demais processos em um sistema operacional. Em ambientes de multiprogramação é comum ter diversos processos competindo pela CPU ao mesmo tempo, a tarefa do escalonador é justamente decidir quais processos serão executados em determinado momento, otimizando o uso da CPU e garantindo que todos os processos serão executados.
De maneira geral, existem duas categorias de escalonadores:

1. Preemptivo: o escalonador pode interromper periodicamente (intervalo de tempo chamado *quantum*) a execução dos processos para escalonar outro processo para ser executado.
2. Não preemptivo: o escalonador não interrompe a execução dos processos diretamente, ou seja, os processos continuam executando até seu término ou até um bloqueio de execução.

É importante destacar que a mudança do processo em execução (troca de contexto) é uma operação cara, pois é necessário salvar todo o estado do processo em execução na memória principal e carregar o estado do processo a ser executado. Tendo isso em vista, a decisão por uma troca de contexto deve ser bem pensada, pois ela vem com um custo de desempenho alto.

## Algoritmos de escalonamento
Existem diversos algoritmos de escalonamento, eles diferem principalmente de acordo com o ambiente em que serão aplicados. A forma como um escalonador trata as prioridades de execução dos processos é determinada pelo objetivo de uso do sistema em questão.

### Sistemas batch
Em sistemas batch o principal objetivo é maximizar o throughput do sistema, ou seja, maximizar o número de tarefas executadas em um determinado período de tempo. Nesse tipo de sistema é possível utilizar algoritmos não preemptivos, pois o objetivo é apenas executar o maior número de tarefas possível.

#### First-Come first-Served
Com esse algoritmo não preemptivo a CPU é atribuída aos processos na ordem em que eles a requisitam, ou seja, é uma simples fila única de processos prontos. A principal vantagem desse algoritmo é que ele é muito simples e facilmente implementável.

#### Shortest job first
Nesse algoritmo não preemptivo a ideia é que os processos com tempo de execução mais curtos sejam executados primeiro. Para que seja possível a implementação desse algoritmo é necessário saber *a priori* o tempo estimado de execução de cada tarefa

### Sistemas interativos
Em sistemas interativos o objetivo é ter um equilíbrio na execução dos processos e um tempo de resposta baixo, não é tolerável que um processo utilize a CPU por muito tempo, pois isso pode afetar a experiência do usuário. Em sistemas interativos é necessário utilizar algoritmos preemptivos, para garantir que todos os processos tenham uma parcela de execução da CPU.

### Sistemas de tempo real
Sistemas de tempo real geralmente não requerem algoritmos preemptivos, isto ocorre porque nesses sistemas os processos são criados para realizar tarefas curtas e rapidamente se bloquearem, geralmente tornando um algoritmo preemptivo desnecessário.

---

created: 01/09/2021
