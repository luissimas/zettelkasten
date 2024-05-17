---
date: 2024-05-16
---

Os dispositivos de armazenamento secundário são geralmente [[Block device|block devices]], isto é, a unidade mínima de armazenamento não são bytes, e sim **grupos de bytes**.

Além da formatação *física do disco* em setores, trilhas e cilindros, existe também uma *formatação lógica*, feita através de um [[Sistema de arquivos]].

No disco, um [[Arquivo]] nada mais é do que uma **sequência de bytes** armazenados de forma contínua. Entretanto, para o sistema de arquivos um arquivo é na realidade um conjunto de **páginas de disco**. As páginas de disco são um **conjunto de setores** no disco, e são a unidade de transferência entre disco e memória principal pelo sistema operacional, ou seja, quando uma leitura ou escrita é solicitada ao sistema operacional, uma página inteira é lida ou escrita, independente do tamanho do arquivo de leitura ou da quantidade de dados a ser escrita. Além disso, o sistema operacional também fornece a abstração de **posição corrente**. A posição corrente no arquivo é uma abstração que permite especificar a partir de qual byte um arquivo deve ser lido ou escrito.

![[paginasdisco.png]]

O fato dos arquivos serem gravados ao longo de blocos de disco gera um efeito colateral: a **fragmentação interna**. A fragmentação ocorre quando um arquivo não usa seu último bloco completamente, desperdiçando o espaço do resto do bloco. Como os blocos são as unidades endereçáveis do disco, **um bloco deve conter apenas um arquivo**, portanto o espaço restante de um bloco que não está sendo completamente utilizado não pode ser reaproveitada para nenhum arquivo.