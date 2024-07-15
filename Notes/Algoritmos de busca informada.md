---
created-at: 2024-05-15
---

Ao contrário da [[Algoritmos de busca desinformada]], a busca informada é uma estratégia de busca que considera **informações específicas sobre o problema**, que vão além da definição básica do problema. Nesse tipo de busca, as informações sobre o problema são usadas no momento de selecionar o **próximo nó** a ser expandido. Dessa forma, essa estratégia **não é exaustiva**, ou seja, há mecanismos para evitar que todos os nós devem ser testados para se encontrar o estado objetivo.

As informações específicas ao problema são formuladas como **heurísticas**, que são regras simples utilizadas para avaliar rapidamente um estado. As heurísticas são expressas como funções, de forma que é possível aplicá-las a cada estado.

As heurísticas permitem a aproximação de uma solução, por essa razão são utilizadas principalmente em situações nas quais um problema não possui uma solução exata, ou se essa solução existe mas é muito custosa computacionalmente.

Vale destacar que as buscas com base em heurísticas são **sujeitas a falhas**, no sentido de que a busca pode não encontrar a solução ou encontrar uma solução sub-ótima.

As duas principais classes de algoritmos nessa categoria são: os [[Best-first search]] e os [[Algoritmos de busca local]].