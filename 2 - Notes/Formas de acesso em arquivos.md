---
created-at: 2024-05-17
---

Existem essencialmente duas maneiras de se acessar [[Arquivo|arquivos]] armazenados em memória secundária:

- A busca [[Processamento sequencial de arquivos|sequencial]] lê o arquivo registro a registro.
- O **acesso direto** indica a posição do arquivo a ser lida, resultando em uma operação de *seek*, movendo a cabeça do disco até o registro desejado, que então é lido diretamente.

Se tratando de acesso a disco, o desempenho é medido em termos do **número de acesso a disco**. Nesse contexto, o custo dos tipos de acesso no pior caso é dado por:

-   **Busca sequencial**: custo linear, proporcional ao número de registros ou de páginas de disco que contém os registros do arquivo.
-   **Acesso direto**: custo constante, pois um único acesso é capaz de recuperar o registro, independentemente do tamanho do arquivo.

A busca sequencial pode ser muito **ineficiente**, principalmente quando deseja-se ler apenas um registro de um arquivo grande. Entretanto, ela tem uma **implementação simples** e pode ser aplicada a diversos tipos de arquivos. Em contrapartida, o acesso direto se mostra muito eficiente principalmente nos casos onde é necessário ler apenas um registro ou um conjunto de registros armazenados na mesma página de disco.

A implementação de acesso direto não é tão simples quando a de busca direta. Apesar disso, duas técnicas são comumente utilizadas quando é necessário implementar acesso direto:

-   O **RRN (relative record number)** é usado quando os registros são de **tamanho fixo**. A ideia é que com registros de tamanho fixo é possível **calcular a posição de início** do registro **com base na posição relativa** do registro dentro do arquivo.
-   Um [[Índice]] é utilizado tanto para registros de tamanho fixo quanto para os de tamanho variável. Nesse tipo de implementação é necessário manter um arquivo secundário com as posições de início de cada registro do arquivo principal.