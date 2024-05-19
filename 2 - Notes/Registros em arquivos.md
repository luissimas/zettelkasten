---
created-at: 2024-05-17
---

Os registros são agrupamentos de [[Campos em arquivos]], que definem uma informação mais complexa com vários atributos, ou uma **entidade**. Da mesma forma que é necessário organizar os campos dentro de registros, é necessário organizar os registros dentro de [[Arquivo|arquivos]]. Existem várias maneiras de organizar os registros em um arquivo, sendo algumas delas análogas à organização de campos, mas com algumas peculiaridades.

A primeira alternativa é manter registros de **tamanho fixo**, isso pode ser atingido mantendo campos de tamanho fixo ou variável. Se os campos de um registro possuem tamanho fixo, então esse registro obrigatoriamente tem tamanho fixo. Entretanto, se um registro tem tamanho fixo, isso não implica nem em um número fixo de campos e nem em um tamanho fixo para esses campos.

É possível também manter registros de **tamanho variável** com um **número fixo de campos**. Isso cria a necessidade de utilização de algum método de separação dos campos, como delimitadores. Nesse tipo de implementação o tamanho do registro em bytes varia, mas como seu número de campos é sempre o mesmo, é possível distinguir os registros através dos campos.

Outra alternativa é utilizar um **indicador de tamanho** para os registros. Dessa forma, no início de cada registro há um indicador que fornece o tamanho do registro. Note que nessa implementação é necessário que os campos sejam separados internamente por delimitadores.

Existe ainda uma forma de manter registros de tamanho variável sem a necessidade de indicadores. Esse método consiste em manter um **índice de endereçamento** em um arquivo secundário, que armazena o endereço do primeiro byte de cada registro no arquivo principal. Dessa forma, é possível acessar cada registro utilizando os endereços e calcular seu tamanho a partir do próximo endereço. Note que essa implementação introduz a preocupação de manter consistência entre os dois arquivos, quaisquer modificações no arquivo principal devem ser refletidas no arquivo de índice.

É possível ainda **separar os registros com delimitadores**, de maneira análoga à separação de campos. Note que para combinar os delimitadores de campos e de registros esses delimitadores devem ser caracteres diferentes.