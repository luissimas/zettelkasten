---
date: 2024-05-16
---

A ordenação externa consiste em classificar e ordenar por algum critério os registros armazenados em um arquivo.

Nem sempre a ordenação externa é necessária, e em geral o melhor a se fazer é evitá-la, visto que é muito mais eficiente carregar todos os registros na memória principal, utilizar um algoritmo de ordenação, e então escrever os dados no arquivo. Entretanto, nem **sempre é possível carregar todos os dados na memória principal**, e é justamente nesses casos que a ordenação externa se faz necessária.

Visando a eficiência, um algoritmo de ordenação externa deve sempre buscar minimizar o número de acessos a disco, isso pode ser feito com duas ações principais:

-   Ler cada registro o menor número de vezes possível.
-   Processar o arquivo [[Processamento sequencial de arquivos|sequencialmente]], do início ao fim.

A [[Ordenação por intercalação balanceada]] é o principal método de ordenação externa