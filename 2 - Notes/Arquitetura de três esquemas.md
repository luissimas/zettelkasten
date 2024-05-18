---
date: 2024-05-18
---

A *arquitetura de três esquemas (arquitetura ANSI/SPARC)* tem por objetivo separar as aplicações do usuário do banco de dados físico, criando três níveis:

1.  O **nível interno** diz respeito à estrutura do armazenamento físico do banco de dados, utilizando um **esquema interno** para descrever os detalhes de armazenamento e os caminhos de acesso para os dados.
2.  O **nível conceitual** tem um **esquema conceitual** que descreve a estrutura do banco de dados, ocultando os detalhes de armazenamento e fornecendo uma descrição das entidades, tipos de dados, relacionamentos, operações e restrições. Esse nível geralmente utiliza um **modelo de dados representativo** para descrever o esquema conceitual.
3.  O **nível externo** ou **de visão** inclui as visões do usuário, isto é, **esquemas externos** que descrevem a parte do banco de dados que um determinado grupo de usuários pode acessar.

![[arquiteturatresesquemas.png]]

Note que os três esquemas são apenas **descrições dos dados**, não os dados armazenados em si. Dessa forma, cada solicitação de um usuário em uma visão externa deve ser transformada para uma solicitação no esquema conceitual, que por sua vez deve ser transformada para uma solicitação ao esquema interno para então ser de fato processada e os dados acessados. Esses processos de transformação de requisições e resultados entre os níveis são chamados de **mapeamentos**.

# Independência de dados

A independência de dados é a capacidade de alterar um esquema em um nível de sistema sem criar a necessidade de alteração do esquema do próximo nível superior. Em geral existem dois tipos de independência de dados:

1.  **Independência lógica de dados** é a capacidade de alteração do **esquema conceitual** sem a alteração dos esquemas externos ou programas de aplicação. Alterações no esquema conceitual geralmente compreendem a alteração de restrições ou a adição de campos em registros.
2.  **Independência física de dados** é a capacidade de alterar o **esquema interno** sem a necessidade de alteração do esquema conceitual. Geralmente alterações no esquema interno compreendem otimizações de estruturas de acesso para melhoras o desempenho de consultas. Tais mudanças não devem afetar o esquema conceitual dos dados.

Note que a **independência lógica** de dados é significativamente **mais difícil** de ser alcançada do que a independência física, pois os esquemas externos dependem fortemente do esquema conceitual, dependência essa que não ocorre entre o esquema conceitual e o esquema físico.