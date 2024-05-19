---
created-at: 2024-05-18
---

O modelo de dados relacional foi introduzido por Edgar F. Codd em 1970. Esse modelo se mostrou uma **grande revolução** na área de banco de dados tanto por sua **simplicidade** quanto por sua **base teórica** fundamentada em [[Relações]] e na teoria de [[Conjuntos]], resultando na [[Álgebra e cálculo relacional]].

No modelo de dados relacional o banco de dados é representado como uma **coleção de relações**, na qual cada relação é conceitualmente semelhante a uma **tabela** de valores. Cada relação é formada por **tuplas**, que são equivalentes a linhas de uma tabela, e também por **atributos**, equivalentes aos cabeçalhos de uma tabela. Para cada coluna (elemento das tuplas) é necessário especificar quais tipos e estrutura de valores são válidos. Os valores possíveis para cada coluna são representados por um **domínio** de valores.

![[relacaoaluno.png]]

Nessa representação, cada **linha** da tabela **corresponde** a uma **tupla** na relação, e **cada relação representa uma entidade** aluno em particular. Os cabeçalhos da tabela representam os atributos da relação, indicando como interpretar os valores de cada coluna.

As definições dos principais conceitos pertinentes ao modelo de dados relacional são dadas de maneira formal a seguir:

-   Um **domínio** $D$ é um conjunto de valores atômicos, ou seja, valores indivisíveis. Um domínio é composto por uma **definição lógica**, um **tipo de dado** e um formato para esses dados. Também é comum atribuir a um domínio um **nome**, que auxilia na interpretação dos seus valores.

-   Um **esquema de relação** $R$ de grau $n$, denotado por $R(A_1, A_2, \dots, A_n)$ é composto por um **nome de relação** $R$ e uma lista de atributos $A_1, A_2, \dots, A_n$. Cada atributo $A_i$ é o nome de um papel desempenhado por algum domínio $D$ no esquema de relação $R$. Nesse caso o domínio $D$ é chamado de **domínio** de $A_i$, sendo denotado por $dom(A_i)$. Um esquema de relação é usado para **descrever a estrutura** de uma relação.

-   Uma **relação** (ou **estado de relação**) $r$ de um esquema de relação $R(A_1, A_2, \dots, A_n)$, denotado por $r(R)$, é um conjunto de $n$ tuplas $r=\{t_1, t_2, \dots, t_n\}$ tal que cada tupla $t$ é uma **lista ordenada** de $n$ valores $t=<v_1, v_2, \dots, v_n>$, no qual cada valor $v_i$ é um **elemento** de $dom(A_i)$ ou um valor especial `NULL`. Note que o estado de relação representa as tuplas em um dado momento no banco de dados, ou seja, o estado é alterado frequentemente através de operações de inserção, atualização e remoção.

Dadas essas definições, é importante fazer algumas observações:

-   Como uma **relação é um conjunto**, as tuplas de uma relação são **únicas** e sua **ordem** dentro da relação **não importa**.
-   Como uma **tupla é uma lista ordenada**, a **ordem dos valores** dentro de uma tupla **importa**. Entretanto, é possível definir uma relação de forma a usar um mapeamento ao invés de tuplas, resultando em valores nomeados, eliminando a necessidade de ordenação.
-   O modelo relacional é um **modelo plano**. Ou seja, cada valor em uma tupla é um valor **atômico**, não é divisível em outros componentes. Dessa forma, atributos **compostos ou multivalorados** devem ser representados em **relações separadas**, pois não são valores atômicos.
-   Valores `NULL` representam valores de atributos desconhecidos ou não aplicáveis a uma tupla.

Um **esquema de banco de dados relacional** $S$ é um conjunto de esquemas de relação $S=\{R_1, R_2, \dots, R_m\}$ e um conjunto de [[Restrições de integridade]] $RI$. Da mesma forma, um **estado de banco de dados relacional** $DB$ de $S$ é um conjunto de estados de relação $DB=\{r_1, r_2, \dots, r_m\}$ tal que cada $r_i$ é um estado de $R_i$ e tal que cada estado satisfaz as restrições de integridade especificadas em $RI$, ou seja, todos os estados são válidos.

