---
date: 2024-05-18
---

Um *SGBD (Sistema de Gerenciamento de Banco de Dados)* é um programa (ou conjunto de programas) responsável por criar e manter um banco de dados. Através do *SGBD* é possível realizar consultas, fazer alterações e lidar com a manutenção geral de uma base de dados.

![[bancodedados.png]]

Os componentes que formam o SGBD e os diversos sistemas externos com os quais ele interage compõe o ambiente do SGBD.

![[modulossgbd.png]]

Na figura é possível observar uma separação entre as diferentes interfaces de usuário e suas camadas intermediárias (otimizadores de consulta, pré compiladores etc) e a camada comum do banco de dados. O **processador de banco de dados** é responsável por **executar** de fato os comandos recebidos. O **gerenciador de dados** armazenados controla o acesso às informações armazenadas e geralmente é responsável pela **interação com os mecanismos de entrada e saída** do sistema operacional.

Além dos componentes principais, existem ainda diversos outros **componentes utilitários** que auxiliam no gerenciamento do banco de dados. Esses utilitários fornecem ferramentas para diversas tarefas comuns, como: backup, exportação de dados para outro SGBD, reorganização do armazenamento, otimização dos caminhos de acesso, monitoração de desempenho etc.