---
created-at: 2024-05-16
---

 O **acesso a disco** é algo muito mais **custoso** do que o acesso a dados na memória principal, portanto é muito importante que algoritmos que lidam com processamento e ordenação de arquivos façam o mínimo de **acessos a disco possíveis**.

A primeira técnica usada para reduzir o número de acessos é o **acesso sequencial** aos registros. Quando o processamento de um arquivo é sequencial, isto é, os registros são acessados em ordem e em sequência, o tempo de acesso é otimizado, pois reduz-se o tempo gasto com o *seeking* (movimento da cabeça de leitura do disco), já que a cabeça é posicionada apenas uma vez, e então os dados podem ser lidos com a rotação do disco, sem necessidade de um novo *seeking*.

Quando dois ou mais arquivos são processados ao mesmo tempo, cada um de forma sequencial, temos o chamado **processamento cossequencial**.