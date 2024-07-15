---
created-at: 2024-05-17
---

O conceito de [[Hashing]] pode ser estendido para o uso em memória secundária, com aplicações no endereçamento de [[Registros em arquivos]]. Apesar de serem aplicáveis a [[Arquivo|arquivos]], as estratégias de [[Tratamento de colisões em hash tables]] para memória principal não levam em consideração as particularidades do acesso em memória secundária, tornando-se ineficientes para essa aplicação.

Tendo isso em vista, uma primeira modificação ao endereçamento por hashing é, ao invés de endereçar registros individuas, **endereçar blocos de disco** (os chamados "baldes"). Dessa forma, um bloco pode ser localizado através da função hash e então carregado para a memória principal, na qual as operações podem ser realizadas para então o bloco ser reescrito em memória secundária. Assim, as **colisões** de chaves resultam em diversos registros sendo armazenados no mesmo balde.

Apesar do agrupamento do endereçamento por blocos utilizar melhor as características do armazenamento secundário, o tratamento de colisões ainda não é totalmente resolvido, pois cada **balde** pode armazenar apenas um certo número **limite de registros**. Sendo assim, se faz necessário o emprego de alguma técnica para lidar com o **transbordamento de chaves** nos baldes. As estratégias de [[Encadeamento em hash tables]] e [[Endereçamento aberto em hash tables]] podem ser estendidas para os baldes, porém a deterioração de desempenho é inevitável conforme o arquivo cresce em tamanho e número de registros.