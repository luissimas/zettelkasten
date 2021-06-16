# Unificação e Substituição


> ***Substituição***
> Uma substituição na lógica de predicados é um conjunto
>$$
  \theta = \{t_1/v_1, t_2/v_2, \dots, t_n/v_n\}
>$$
> onde $v_i(1 \leq i \leq n)$ é variável a ser substituída e $t_i(1 \leq i \leq n)$ é o termo que a substitui.

De maneira geral, o processo de substituição consiste em *instanciar* as variáveis de uma fórmula com base em um conjunto de funções que nos especificam cada variável e seu termo correspondente.

Existem dois tipos especiais de substituições:
- **Substituição vazia** ($\epsilon$): é uma substituição que não contém nenhum elemento.
- **Substituição *ground***: é uma substituição na qual $t_1,\dots,t_n$ são termos *ground*, ou seja, termos que não contém variáveis.

É possível ainda **compor substituições**, ou seja, aplicar duas ou mais substituições em cadeia.

> ***Substituição unificadora***
> Uma substituição $\theta$ é *unificadora* de um conjunto de expressões $\{E_1,E_2,\dots,E_k\}$ se e somente se:
>$$
  E_1\theta = E_2\theta = \dots = E_k\theta
>$$
> ou seja, se quando aplicada no conjunto de expressões, a substituição produz uma única expressão comum para todas as expressões do conjunto.

> ***Conjunto de diferenças***

> ***Unificação***

De maneira geral, a unificação consiste em, dado um conjunto de expressões, unificá-lo em um conjunto unitário (com apenas uma expressão). Esse processo se dá através de sucessivas composições de substituições.

---

created: 16/06/2021
