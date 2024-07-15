---
created-at: 2024-05-16
---

O principal método de [[Ordenação externa]] é a ordenação por intercalação balanceada, que utiliza tanto da memória principal quanto a secundária para ordenar os dados de um arquivo.

Esse algoritmo consiste em ler o arquivo [[Processamento sequencial de arquivos|sequencialmente]], carregando o máximo de registros possíveis na memória, ordenando-os na memória principal e então escrevendo-os em arquivos intermediários, formando **blocos** de registros ordenados nos arquivos. Após isso, os arquivos intermediários são lidos cossequencialmente e é feito o **merge dos blocos** dos arquivos sucessivamente em mais arquivos intermediários, até que se obtenha um **único bloco ordenado** no arquivo final. Com esse método de leitura, é possível ler apenas um registro de cada bloco intermediário por vez, tornando o número de registros do arquivo inicial irrelevante para o processamento.

Dado um arquivo contento $n$ registros, e uma memória principal com capacidade para até $m$ registros. A passada inicial sobre o arquivo produz $\frac{n}{m}$ blocos ordenados. Seja $P$ uma função tal que $P(n)$ é o número de passadas para a fase de intercalação dos blocos ordenados, e seja $f$ o número de arquivos intermediários utilizados em cada passada, para uma intercalação com $f$ caminhos o número de passadas é dado por

$$ P(n) = \log_f \frac{n}{m}$$

Considerando a primeira passada pelo arquivo para formar os primeiros blocos ordenados, o número total de passadas pelo arquivo é dado por $P(n) + 1$.