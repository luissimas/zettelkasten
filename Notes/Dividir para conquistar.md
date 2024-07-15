---
created-at: 2023-01-28
---

Dividir para conquistar é uma estratégia para projetar algoritmos assintoticamente eficientes. A estratégia se baseia na ideia de que, ao invés de resolver um problema diretamente, podemos dividi-lo recursivamente em subproblemas menores e de mesma estrutura até que os subproblemas sejam tão pequenos que possam ser resolvidos diretamente e então combinar os resultados para obter a solução do problema original.

Sendo assim, o funcionamento da estratégia de dividir para conquistar se dá através dos seguintes passos:

1. **Dividir** o problema original em subproblemas de mesma estrutura mas menor tamanho que o original.
2. **Conquistar** os subproblemas resolvendo-os recursivamente. Caso o subproblema seja simples o bastante, ele será resolvido diretamente, caso contrário ele será dividido em mais subproblemas.
3. **Combinar** as soluções dos subproblemas na solução do problema original.

Exemplos de algoritmos que utilizam a técnica de dividir para conquistar incluem:

- [Quicksort](https://en.wikipedia.org/wiki/Quicksort)
- [Mergesort](https://en.wikipedia.org/wiki/Merge_sort)
- [Strassen](https://en.wikipedia.org/wiki/Strassen_algorithm)
- [Karatsuba](https://en.wikipedia.org/wiki/Karatsuba_algorithm)
- [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform)

É possível analisar a complexidade de algoritmos que utilizam da estratégia de dividir para conquistar através da análise de árvores de recursão ou através da aplicação do [[Teorema mestre]].
