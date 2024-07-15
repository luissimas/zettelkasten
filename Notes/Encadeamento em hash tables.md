---
created-at: 2024-05-17
---

O encadeamento em [[Hash tables]] é uma técnica de [[Tratamento de colisões em hash tables]] que consiste em manter todos os elementos da tabela mapeados para uma mesma posição em uma **lista encadeada**. Assumindo que a [[Probabilidade]] de uma chave ser endereçada para qualquer uma das posições é sempre igual, o comprimento esperado de cada lista (chamado **fator de carga**) encadeada é dado por $\frac{n}{m}$, onde $n$ é o número de registros na tabela e $m$ o tamanho da tabela. Dessa forma, as operações na tabela tem um custo médio de $O(1+\frac{n}{m})$, levando em conta que a posição da tabela é acessada em tempo constante e que é necessário percorrer os elementos da lista.

![[hashencadeamento.png]]