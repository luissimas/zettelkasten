# Deadlocks
*Deadlocks* são um dos principais problemas de [[Comunicação entre processos | IPC]]. Geralmente um processo precisa de acesso exclusivo não somente a um recurso, mas a vários. Com a implementação de mecanismos de exclusão mútua é possível haver casos em que um processo `A` esteja aguardando por um recurso `R` que está alocado para o processo `B`, que por sua vez esteja aguardando por um recurso `E` que está alocado ao processo `A`. Nessa situacão ambos os processos ficariam esperando eternamente sem poder avançar, damos a esse tipo de situação o nome de **impasse (deadlock)**.

> Um conjunto de processos estará em situação de impasse se cada processo no conjunto estiver esperando por um evento que apenas outro processo no conjunto pode causar.

De maneira geral, quatro condições devem ser satisfeitas para haver um impasse:

1. Exclusão mútua: Cada recurso pode ser utilizado por apenas um processo por vez
2. Posse e espera: Processos que já possuem algum recurso podem solicitar outros recursos sem liberar os anteriores.
3. Não preempção: Recursos concedidos antes não podem ser retirados de um processo, eles precisam ser explicitamente liberados.
4. Espera circular: Deve haver uma lista circular de dois ou mais processos, cada um deles esperando por um recurso de posse do membro seguinte da cadeia.

## Recursos
Antes de tudo, é importante definir o que são de fato os recursos. Nesse contexto, recursos são qualquer coisa que precisa ser solicitada, usada e liberada após um tempo. Impressoras, áreas de memória compartilhada, dispositivos de hardware e outros são todos exemplos de recursos.
Existem dois tipos de recursos: **preemptíveis** e **não preemptíveis**. Recursos preemptíveis são aqueles que podem ser retirados do processo sem causar prejuízo algum. A memória é um exemplo de recurso preemptível (graças ao sistema de gerenciamento de memória e paginação). Recursos não preemptíveis são aqueles que não podem ser retirados do processo sem potencialmente causar prejuízos. Gravadores de CD e impressoras são exemplos de recursos não preemptíveis.
Geralmente *deadlocks* envolvem recursos **não preemptíveis**, pois não é possível realocar os recursos sem causar prejuízos aos processos, gerando um impasse.

## Solucões
Em geral, existem quatro maneiras de lidar com *deadlocks*:

### Ignorar o problema
Ignorar o problema é de fato a solução mais simples, e dependendo do caso pode até ser a solução mais razoável. *Deadlocks* são extremamente difíceis de se detectar e tratar, e dependendo da frequência com a qual eles ocorrem em um sistema, é razoável apenas ignorar o problema.

### Detecção e recuperação
O método de detecção e recuperação busca primariamente desenvolver métodos para detectar *deadlocks* e então tomar alguma medida para remediar a situação.
Os algoritmos de detecção são baseados em grafos e matrizes, levando em conta quais recursos estão alocados para quais processos e também quais solicitações de recursos estão pendentes no sistema. Esses algoritmos são computacionalmente caros, pois envolvem verificar todos os processos sendo executados na máquina. Por essa razão, geralmente os algoritmos de detecção são executados em um intervalo periódico longo (talvez alguns minutos) ou então quando o uso da CPU cai abaixo de algum limite estipulado.
Após a detecção de um *deadlock*, é necessário ter mecanismos para recuperar o sistema e sair desse estado de impasse. Infelizmente, nenhuma das soluções para recuperação de *deadlocks* é muito atrativa. Todas tem seus prós e, especialmente, seus contras.

1. Preempção: Retirar o recurso temporariamente de um processo e então entregá-lo a outro processo que o solicitou. Essa solução geralmente é muito difícil ou até mesmo impossível, pela natureza não preemptiva dos recursos concedidos.
2. Retrocesso (rollback): Os processos podem gerar checkpoints periodicamente, salvando seu estado em um arquivo utilizado posteriormente para a restauração do processo a um determinado ponto de execução.
3. Eliminação de processos: Matar os processos presos no ciclo de deadlock até que os outros processos possam seguir sua execução. Essa é a forma mais simples (e bruta) de resolver o problema, mas claramente não é uma boa alternativa.

### Evitar dinamicamente
Esse método visa evitar completamente os *deadlocks* através de uma alocação cuidadosa dos recursos aos processos. Se determinadas informações estiverem disponíveis, é possível prever possíveis *deadlocks* e então decidir se é seguro conceder ou não um recurso solicitado por um processo naquele instante.
Para esse tipo de solução, é necessário saber a priori quais recursos cada processo pode utilizar e em qual quantidade ele pode fazê-lo. Com base nessa informação e na quantidade de recursos disponíveis, o sistema operacional pode saber como responder a uma solicitação por um recurso de maneira a evitar que seja possível a ocorrência de um *deadlock*.
O principal problema dessa implementação é que é impossível saber com precisão qual a necessidade máxima de recursos de um processo. Além disso, o número de processos e até mesmo de recursos é dinâmico no sistema, e podem variar no meio da execução de processos. Dessa forma, apesar de ser teoricamente excelente, esse tipo de solução não é aplicada na prática.

### Prevenção estrutural
A melhor maneira de evitar *deadlocks* é eliminar diretamente as condições que os tornam possíveis, tornando sua ocorrência estruturalmente impossível.

---

created: 14/09/2021
