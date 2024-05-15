---
date: 2024-05-15
---

A resolução de problemas por busca consiste em modelar um problema usando uma representação do mundo baseada em **estados** e aplicar um [[Algoritmo de busca]] sobre esses estados para encontrar uma solução para o problema.

Para a resolução de problemas por busca é necessário definir o problema a ser resolvido. Essa definição é composta por dois grupos de elementos essenciais:

-   **estados** que representam o mundo
-   **ações** que provocam a alteração de um estado para outro

Nesse tipo de resolução assume-se que o ambiente no qual o problema se insere é:

-   **observável**: o estado atual é conhecido.
-   **discreto**: existe apenas um número finito de ações possíveis em cada estado.
-   **conhecido**: o estado resultante de cada ação é conhecido.
-   **determinístico**: cada ação leva a apenas um estado.

Para definir um problema são necessários 5 componentes:

-   **Estado inicial:** estado a partir do qual a busca se inicia.
-   **Ações (ou operadores):** possíveis ações aplicadas a cada estado.
-   **Modelo de transição:** descrição do resultado de cada ação com base no estado atual e na ação tomada.
-   **Teste final:** condições que determinam se um estado é o objetivo.
-   **Custo do caminho:** função que atribui um custo ao caminho, mede a qualidade da solução.

Com um problema formulado, a solução consiste em realizar uma busca no espaço de estados até encontrar uma sequência de ações que atinjam o estado objetivo. O processo de busca acaba por construir uma [[Árvore]] de busca, cuja raiz é o estado inicial, os nós são os demais estados, as ligações entre nós são as ações e a solução é o caminho da raiz até o nó final (estado objetivo). Uma **solução** é uma sequência de ações que vai do estado inicial ao estado objetivo. 
