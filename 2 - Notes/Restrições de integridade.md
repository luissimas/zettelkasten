---
date: 2024-05-18
---

Para manter a **integridade do estado** do banco de dados, geralmente são necessárias diversas **restrições** sobre os valores em um estado. Essas restrições podem ser divididas em três categorias:

1.  Restrições **implícitas** e inerentes ao modelo de dados relacional.
2.  Restrições **explícitas** que podem ser expressas diretamente nos esquemas através de uma *DDL* (geralmente *SQL*).
3.  Restrições de **aplicação** (ou regras de negócios) que não podem ser expressas diretamente nos esquemas do modelo de dados, devendo ser impostas pelos programas de aplicação.

As restrições implícitas seguem diretamente das definições que compõe o modelo relacional, enquanto as restrições de aplicação expressam ideias particulares ao domínio de uma aplicação específica. Sendo assim, a seguir serão descritas as possíveis **restrições explícitas** que podem ser declaradas nos esquemas do modelo de dados.

# Restrições de domínio

As restrições de domínio especificam que, dentro de cada tupla, o valor de cada atributo $A$ deve ser um **valor indivisível do domínio** $dom(A)$. Esse tipo de restrição garante que os valores dos atributos sejam do mesmo domínio entre as tuplas.

# Restrições de chave

Geralmente é necessário especificar **subconjuntos de atributos** cuja combinação dos valores precisa ser distinta para todas as tuplas em qualquer estado de uma relação $r(R)$. Esse subconjunto é chamado de **superchave** (denotado por $SCh$) do esquema de relação $R$. Uma superchave especifica uma **restrição de exclusividade** na qual duas tuplas distintas não podem ter o mesmo valor de superchave, ou seja: para todas as tuplas $t_i$ e $t_j$ de um estado de relação $r(R)$, tem-se que:

$$t_i[SCh] \neq t_j[SCh]$$

Uma **chave** (denotada por $Ch$) é um tipo de superchave específico que satisfaz duas propriedades:

1.  Duas tuplas distintas em qualquer estado da relação não podem ter valores idênticos para todos os atributos na chave.
2.  A chave é uma *superchave mínima*, ou seja, uma superchave da qual não é possível remover nenhum atributo e manter uma restrição de exclusividade.

Os **valores de atributos de chaves** geralmente são utilizados para **identificar exclusivamente** as tuplas na relação. Note também que a propriedade de exclusividade de atributos chave deve ser mantida sempre, ou seja, mesmo com a inserção e alteração de tuplas na relação, os atributos chaves ainda devem ser exclusivos.

Um esquema de relação pode ter mais de uma chave, e nesse caso cada uma das chaves é chamada de **chave candidata**. Entretanto, geralmente especifica-se uma **chave primária** (denotada por $ChP$ ou $PK$) dentre as chaves candidatas. Em um esquema de relação há apenas uma chave primária, e esta é utilizada para identificar as tuplas na relação.

# Restrições sobre valores `NULL`

É possível especificar se um determinado atributo admite ou não valores `NULL`. Caso seja necessário que um **atributo sempre tenha um valor válido** em todas as tuplas, esse tipo de restrição garante que o valor do atributo nunca será `NULL`.

# Restrições de integridade de entidade

A **restrição de integridade de entidade** garante que nenhum valor de chave primária pode ser `NULL`. Como as chaves primárias são usadas para identificar tuplas em um a relação, se o valor de alguma chave for `NULL` não será possível identificá-la nem referenciá-la.

# Restrições de integridade referencial

A **restrição de integridade referencial** é usada para garantir a consistência entre tuplas em relações distintas que se referenciam. A própria definição de **chave estrangeira** (denotada por $ChE$ ou $FK$) define também as propriedades da restrição de integridade referencial.

Um conjunto de atributos $ChE$ no esquema de relação $R_1$ é uma **chave estrangeira** de $R_1$ que referencia a relação $R_2$ se ela satisfizer as seguintes condições:

1.  Os atributos em $ChE$ têm o mesmo domínio que os atributos de chave primária $ChP$ de $R_2$.
2.  Um valor de $ChE$ em uma tupla $t_1$ do estado atual $r_1(R_1)$ ocorre como um valor de $ChP$ para alguma tupla $t_2$ no estado $r_2(R_2)$ ou é `NULL`. No primeiro caso tem-se $t_1[ChE] = t_2[ChP]$, e diz-se que a tupla $t_1$ **referencia** a tupla $t_2$.

Se essas condições forem mantidas, diz-se que é mantida uma **restrição de integridade referencial** de $R_1$ para $R_2$.