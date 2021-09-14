# Deadlocks
*Deadlocks* são um dos principais problemas de [[Comunicação entre processos | IPC]]. Geralmente um processo precisa de acesso exclusivo não somente a um recurso, mas a vários. Com a implementação de mecanismos de exclusão mútua é possível haver casos em que um processo `A` esteja aguardando por um recurso `R` que está alocado para o processo `B`, que por sua vez esteja aguardando por um recurso `E` que está alocado ao processo `A`. Nessa situacão ambos os processos ficariam esperando eternamente sem poder avançar, damos a esse tipo de situação o nome de **impasse (deadlock)**.

## Recursos
Antes de tudo, é importante definir o que são de fato os recursos. Nesse contexto, recursos são qualquer coisa que precisa ser solicitada, usada e liberada após um tempo. Impressoras, áreas de memória compartilhada, dispositivos de hardware e outros são todos exemplos de recursos.
Existem dois tipos de recursos: **preemptíveis** e **não preemptíveis**. Recursos **preemptí

---

created: 14/09/2021
