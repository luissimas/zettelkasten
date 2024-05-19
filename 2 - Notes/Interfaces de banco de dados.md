---
created-at: 2024-05-18
---

Um [[SGBD]] devem oferecer interfaces para a interação dos usuários com o banco de dados, sejam eles consumidores finais, programadores ou DBAs.

Um SGBD pode oferecer diversas linguagens para a interação com diferentes níveis do banco de dados. É possível que haja linguagens como: *DLL (Data Definition Language)*, *SDL (Storage Definition Language)* , *VDL (View Definition Language)* e *DML (Data Manipulation Language)*. Entretanto, a maioria dos SGBDs atuais não fazem distinção entre essas linguagens, muito pelo contrário: uma linguagem abrangente (como a linguagem [[SQL]]) é usada na definição do esquema conceitual, definição das visões e manipulação de dados.

Existem dois tipos de DML. As DMLs de **alto nível** ou **não procedural** são declarativas e utilizadas para especificar operações complexas de forma concisa. As DMLs de **baixo nível** ou **procedural** são geralmente embutidas em linguagens de programação de uso geral. Esse tipo de DML recupera apenas registros individuais e os processa separadamente. Sempre que comandos DML de alto ou baixo nível são incorporados em uma linguagem de programação de uso geral, ela é chamada de **linguagem hospedeira** e a DML é chamada de **sublinguagem de dados**. Quando uma DML de alto nível é usada de maneira interativa ela é chamada de **linguagem de consulta**.

É comum também que existam interfaces mais amigáveis para os usuários, geralmente através de programas externos ou até mesmo de interfaces do próprio SGBD. Essas interfaces geralmente são gráficas e apresentam menus e uma forma de visualização dos dados menos estruturada e adaptada para as necessidades do usuário.