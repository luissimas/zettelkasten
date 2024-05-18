---
date: 2024-05-18
---

É de extrema importância distinguir entre a *descrição* do banco de dados e o *próprio banco de dados*. A descrição de um banco de dados é chamada de **esquema do banco de dados**, que é especificada antes da criação do banco em si, e é armazenada pelo SGBD como metadados. A representação de um esquema é geralmente feita através de um **diagrama de esquema**, que apresenta a estrutura de cada tipo de registro, geralmente contendo os itens de dados, e alguns tipos de restrições. Cada objeto no esquema é chamado de **construtor do esquema**.

![[diagramadeesquema.png]]

Os dados armazenados em um banco de dados são chamados de **estado** ou **instante (snapshot)** do banco de dados. Em um estado do banco de dados, cada construtor tem o próprio *conjunto de instâncias atuais*, que é o conjunto de registros daquela entidade.

Vale notar que o **estado** do banco é **alterado com frequência**, a cada inserção, remoção ou atualização de um registro, um novo estado é gerado. Em contrapartida, o **esquema** é **alterado com pouca frequência**, pois geralmente sua alteração é necessária apenas com alguma mudança de requisitos da aplicação.