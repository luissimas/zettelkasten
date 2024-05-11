---
created-at: 2021-09-01
tags:
---
O *escalonador* é o [[Processos | processo]] que gerencia a execução dos demais processos em um sistema operacional. Em ambientes de multiprogramação é comum ter diversos processos competindo pela CPU ao mesmo tempo, a tarefa do escalonador é justamente decidir quais processos serão executados em determinado momento, otimizando o uso da CPU e garantindo que todos os processos serão executados.
De maneira geral, existem duas categorias de escalonadores:

1. Preemptivo: o escalonador pode interromper periodicamente (intervalo de tempo chamado *quantum*) a execução dos processos para escalonar outro processo para ser executado.
2. Não preemptivo: o escalonador não interrompe a execução dos processos diretamente, ou seja, os processos continuam executando até seu término ou até um bloqueio de execução.

É importante destacar que a mudança do processo em execução (troca de contexto) é uma operação cara, pois é necessário salvar todo o estado do processo em execução na memória principal e carregar o estado do processo a ser executado. Tendo isso em vista, a decisão por uma troca de contexto deve ser bem pensada, pois ela vem com um custo de desempenho alto.

# Algoritmos de escalonamento
Existem diversos algoritmos de escalonamento, eles diferem principalmente de acordo com o ambiente em que serão aplicados. A forma como um escalonador trata as prioridades de execução dos processos é determinada pelo objetivo de uso do sistema em questão.

## Sistemas batch
Em sistemas batch o principal objetivo é maximizar o throughput do sistema, ou seja, maximizar o número de tarefas executadas em um determinado período de tempo. Nesse tipo de sistema é possível utilizar algoritmos não preemptivos, pois o objetivo é apenas executar o maior número de tarefas possível.

### Primeiro a chegar, primeiro a ser servido
Com esse algoritmo não preemptivo a CPU é atribuída aos processos na ordem em que eles a requisitam, ou seja, é uma simples fila única de processos prontos. A principal vantagem desse algoritmo é que ele é muito simples e facilmente implementável.

### Tarefa mais curta primeiro
Nesse algoritmo não preemptivo a ideia é que os processos com tempo de execução mais curtos sejam executados primeiro. Para que seja possível a implementação desse algoritmo é necessário saber *a priori* o tempo estimado de execução de cada tarefa, e isso geralmente é possível, visto que em sistemas de lote as tarefas executadas geralmente já são conhecidas e é possível estimar seu tempo de execução.
Nesse algoritmo de escalonamento o tempo médio de execução de cada tarefa é reduzido, pois tarefas mais curtas não precisam esperar o tempo de execução de tarefas mais longas. Apesar disso, há um grande problema com esse algoritmo: a possibilidade de *starvation*. Se forem chegando mais tarefas curtas para serem executadas do que o sistema é capaz de executar, as tarefas longas ficaram no final da fila para sempre e jamais serão executadas.

### Tempo restante mais curto em seguida
Esse algoritmo é quase uma versão preemptiva do *shortest job first*. Os processos com menor tempo de execução restante são executados primeiro. Como o algoritmo é preemptivo, os processos mais longos podem ser interrompidos par dar lugar a processos cujo tempo de execução é menor.

## Sistemas interativos
Em sistemas interativos o objetivo é ter um equilíbrio na execução dos processos e um tempo de resposta baixo, não é tolerável que um processo utilize a CPU por muito tempo, pois isso pode afetar a experiência do usuário. Em sistemas interativos é necessário utilizar algoritmos preemptivos, para garantir que todos os processos tenham uma parcela de execução da CPU.

### Chaveamento circular
O chaveamento circular (*round-robin*) é um dos algoritmos mais antigos, simples, justos e amplamente utilizado. A cada processo é designado um intervalo de tempo chamado de *quantum*, durante o qual ele pode ser executado. Se o processo ainda está executando ao final de seu *quantum*, a CPU sofre uma preempção e outro processo é colocado para executar. Se um processo termina de executar ou é bloqueado durante seu *quantum*, o chaveamento do CPU também é feito. Nesse algoritmo o escalonador mantém uma lista de processos prontos para serem executados, de forma que quanto o chaveamento é feito basta executar o primeiro processo da lista.

![[escalonamentocircular.png]]

Vale destacar que a escolha da duração do *quantum* é importante. Se o o *quantum* for muito pequeno haverão muitas trocas de contexto, diminuindo a eficiência da CPU. Em contrapartida, se o *quantum* for muito grande, o tempo de resposta pode ser comprometido.

### Escalonamento por prioridade
Nesse algoritmo é atribuído a cada processo um nível de prioridade. Os processos prontos com maior prioridade são executados primeiro.
As prioridades dos processos podem ser atribuídas dinâmica ou estaticamente. Para evitar que processos de alta prioridade executem infinitamente, o escalonador pode reduzir a prioridade do processo a cada execução, dessa forma é possível garantir que todos os processos serão executados em algum momento.

![[escalonamentoprioridade.png]]

### Múltiplas filas
No algoritmo de múltiplas filas os processos são organizados em classes de prioridades, cada uma das classes possui *quanta* diferentes. Dessa forma é possível deixar processos *CPU bound* executarem por mais tempo, diminuindo o número de chaveamentos necessários, enquanto os demais processos continuam com um *quantum* mais curto, mantendo um bom tempo de resposta.
A cada vez que um processo é executado e suspenso ele recebe mais tempo de execução e sua prioridade de execução é reduzida. Dessa forma os processos interativos e com *quantum* curtos podem ser executados com mais frequência, e os processos que necessitam de mais tempo de CPU são executados com menos frequência, porém quanto são executados eles possuem uma parcela maior de tempo da CPU.

### Processo mais curto em seguida
Esse algoritmo seque o mesmo princípio do *tarefa mais curta primeiro* dos sistemas em lote. Porém para processos interativos geralmente não se conhece o tempo de execução *a priori*, portanto é necessário fazer uma estimativa de tempo. É com base nessa estimativa que os processos são escalonados.

### Escalonamento garantido
Nesse algoritmo a ideia é apenas dividir de maneira proporcional o tempo de CPU para cada usuário utilizando o sistema. Dessa forma é possível determinar com precisão quanto tempo cada processo irá receber de CPU, porém, em termos de utilização de CPU, esta não é uma forma muito eficiente de escalonar processos.

### Escalonamento por loteria
No escalonamento por loteria cada processo recebe uma quantidade de "bilhetes", e o escalonador sorteia um dos bilhetes para ser executado em seguida. Dessa forma, quanto mais bilhetes um processo tem, maior a sua chance de ser executado.

### Fração justa
O escalonamento por fração justa leva em conta o número de processos de cada usuário e aloca a prioridade dos processos de acordo com o dono. Usuários com mais processos ativos terão maior prioridade no uso da CPU.

## Sistemas de tempo real
Sistemas de tempo real geralmente não requerem algoritmos preemptivos, isto ocorre porque nesses sistemas os processos são criados para realizar tarefas curtas e rapidamente se bloquearem, geralmente tornando um algoritmo preemptivo desnecessário.
Os algoritmos de escalonamento desse tipo de sistema geralmente são baseados em eventos externos que precisam ser atendidos pela execução de algum processo.