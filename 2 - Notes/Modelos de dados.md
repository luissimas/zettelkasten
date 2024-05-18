---
date: 2024-05-18
---

Um dos objetivos fundamentais do banco de dados é oferecer um nível de **abstração sobre os dados** armazenados, permitindo que os usuários possam acessar os dados relevantes sem se preocupar com detalhes de organização e implementação. Um **modelo de dados** oferece os meios necessários para se atingir essa abstração através de uma coleção de conceitos usados para descrever a estrutura de um banco de dados. A **estrutura** de um banco de dados consiste nos tipos, relacionamentos e restrições que se aplicam aos dados armazenados. É comum que os modelos também incluam **operações básicas** para especificar ações sobre os dados.

Existem muitos modelos propostos, cada um utilizando de uma classe de conceitos e atuando em diferentes níveis de abstração.

# Modelos conceituais

Esses modelos oferecem o mais **alto nível de abstração**. Utilizando conceitos como *entidades*, *atributos* e *relacionamentos*, esse tipo de modelo oferece uma representação geral dos dados a serem armazenados e suas relações. Um dos modelos mais utilizados nessa categoria é o **modelo entidade-relacionamento**.

# Modelos de dados representativos

Os modelos de dados representativos ainda tem um alto nível de abstração, mas são mais descritivos e possuem mais detalhes de implementação. Geralmente utilizados nos SGBDs, esses modelos representam os dados usando **estruturas de registros**, com uma definição mais detalhada dos campos a serem armazenados. O **modelo de dados relacional** é um exemplo amplamente utilizado dessa classe de modelos.

# Modelos de dados de objeto

Com um nível de abstração mais próximo dos modelos conceituais, esses modelos são amplamente utilizados em **bancos de dados de objeto**.

# Modelos de dados físicos

Esses modelos descrevem os **detalhes do armazenamento** dos dados como arquivos no computador. A descrição desses modelos incluem informações como formatos de registro, ordenação, caminhos de acesso (indexação ou hashing) e outros detalhes de implementação do armazenamento dos dados.

# Modelos de dados auto-descritivo

Nos modelos de dados auto-descritivos o armazenamento dos dados combina a descrição com os próprios valores (não há uma separação entre esses dois, como tradicionalmente é feito). Esses modelos incluem principalmente os **armazenamentos de chave-valor** e sistemas [[NoSQL]].