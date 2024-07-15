---
created-at: 2024-05-18
---

As operações da [[Álgebra e cálculo relacional]] podem ser dividias em dois grupos:

-   Operações de **conjunto**, baseadas nas operações da teoria matemática de [[Conjuntos]]. Note que, como as relações são definidas como conjuntos de tuplas, as operações da teoria dos conjuntos se aplicam a elas. Essas operações incluem `UNIÃO`, `INTERSECÇÃO`, `DIFERENÇA DE CONJUNTO` e `PRODUTO CARTESIANO`.
-   Operações **específicas** para bancos de dados relacionais. Essas operações ainda tem seus fundamentos na matemática e na lógica, entretanto foram desenvolvidas especificamente para a aplicação em consultas em [[Modelo de dados relacional|bancos de dados relacionais]]. Essas operações incluem `SELEÇÃO`, `PROJEÇÃO` e `JUNÇÃO`.

# `SELEÇÃO`

A operação de seleção é usada para selecionar um **subconjunto das tuplas** da relação que satisfaçam uma **condição de seleção**. Sendo assim, essa operação tem por objetivo filtrar as tuplas de uma relação com base em um predicado aplicado individualmente a cada tupla. Vale notar que esta é uma operação unária, isto é, aplicada a uma única relação.

Em geral, a estrutura de uma operação contém uma condição ou predicado de seleção $condition$, e é aplicada a uma relação $R$, resultando em um subconjunto das tuplas de $R$.

$$\sigma_{<condition>}(R)$$

Em [[SQL]] o operador de seleção corresponde à cláusula `WHERE` de uma consulta.

# `PROJEÇÃO`

A operação de projeção é usada para selecionar um **subconjunto dos atributos** de todas as tuplas de uma relação. Sendo assim, essa operação seleciona apenas os atributos desejados das tuplas de uma relação, fazendo uma *projeção* da relação pelos atributos desejados. Note que esta é também uma operação unária, ou seja, aplicada a uma única relação.

Em geral, a estrutura dessa operação contém uma lista de atributos desejados e é aplicada a uma relação $R$.

$$\pi_{attr_1, attr_2, \dots, attr_n}(R)$$

Note que, caso nenhum dos atributos desejados seja uma chave de $R$, é possível que existam tuplas duplicadas na relação resultante. Como, por definição, não é permitido que hajam tuplas duplicadas em uma relação, a operação de projeção remove as duplicatas, de forma a tornar o resultado da operação um conjunto de tuplas distintas e, portanto, uma relação válida.

Em [[SQL]] o operador de projeção corresponde a cláusula `SELECT` de uma consulta.

# `RENOMEAR`

A operação renomear permite que nomes de relações ou atributos sejam mudados, esse tipo de operação é útil especificamente na manipulação de relações com outras operações, gerando como resultado uma relação com nomes de atributos mais significativos.

Em geral, a estrutura dessa operação contém o nome da nova relação (caso deseje-se renomeá-la) e o nome dos novos atributos na mesma sequência dos correspondentes atributos na relação original.

$$\rho_{S(A1, A2, \dots, An)}(R)$$

Em [[SQL]] é possível realizar a operação de renomear através da cláusula `AS`, permitindo a renomeação tanto de relações quanto de atributos.

# `UNIÃO`, `INTERSECÇÃO` e `DIFERENÇA`

As operações de união, intersecção e diferença da teoria de conjuntos são aplicadas da mesma forma para relações. Essas operações são úteis quando é necessário combinar elementos de duas relações com um mesmo **tipo de tuplas**. Note que essas operações são binárias, ou seja, são aplicadas a duas relações. Duas relações são consideradas **compatíveis no tipo** se tiverem o mesmo número de atributos e se o domínio dos atributos for o mesmo.

Dadas duas relações compatíveis no tipo $R$ e $E$, é possível definir as três operações:

-   `UNIÃO`: O resultado da operação $R \cup S$ é uma relação que inclui as tuplas presentes em $R$ ou em $S$, eliminando duplicatas.

-   `INTERSECÇÃO`: O resultado da operação $R \cap S$ é uma relação que inclui as tuplas presentes tanto em $R$ quanto em $S$.

-   `DIFERENÇA`: O resultado da operação $R - S$ é uma relação que inclui as tuplas presentes em $R$ mas não em $S$.

    Em SQL, é possível utilizar essas operações através das cláusulas `UNION`, `INTERSECT` e `EXCEPT`.

# `PRODUTO CARTESIANO`

A operação de produto cartesiano da teoria de conjuntos é estendida facilmente para lidar com relações. Note que essa operação, quando aplicada isoladamente, geralmente gera relações sem significado algum entre seus atributos. Entretanto, essa operação dá a base para outras operações da álgebra relacional, principalmente as operações de junção.

Dadas duas relações $R$ e $E$, o resultado da operação $R \times E$ é uma nova relação contendo todas as tuplas obtidas concatenando todas as possíveis combinações de tuplas entre as relações $R$ e $E$.

Em [[SQL]], a operação de produto cartesiano pode ser realizada através da cláusula `CROSS JOIN`, ou especificando duas tabelas em uma cláusula `FROM`.

# `JUNÇÃO`

A operação de junção nos permite fazer consultas com base nos **relacionamentos** entre as relações. De forma geral, essa operação pode ser especificada como uma operação `PRODUTO CARTESIANO` seguida de uma operação `SELEÇÃO`.

Dadas duas relações $R(A_1, A_2, \dots A_n)$ e $S(B_1, B_2, \dots, B_m)$ a operação de junção é descrita por:

$R \Join_{<condition>}S$

o resultado dessa operação é uma nova relação $Q(A_1, A_2, \dots, A_n, B_1, B_2, \dots, B_m)$, cujas tuplas são a combinação de todas as tuplas de $R$ e $S$ que satisfazem a **condição de junção**.

A operação básica de junção também é chamada de **junção interna** (*inner joins*), pois apenas as tuplas que satisfazem a condição de junção são combinadas e selecionadas, ocasionando uma possível perda de informação, pois não há garantia de que todas as tuplas de uma ou ambas as relações serão selecionadas.

Um conjunto adicional de operações de junção chamadas **junções externas** (*outer joins*) foi especificado para consultas nas quais deseja-se manter todas as tuplas de uma ou ambas as relações envolvidas na operação de junção. Em geral, são definidas três operações de junção externa:

-   `JUNÇÃO EXTERNA À ESQUERDA`: Mantém cada tupla na primeira relação.
-   `JUNÇÃO EXTERNA À DIREITA`: Mantém cada tupla na segunda relação.
-   `JUNÇÃO EXTERNA COMPLETA`: Mantém cada tupla em ambas as relações.

Em [[SQL]], a operação de junção interna pode ser realizada especificando condições de junção na cláusula `WHERE`. Já as operações de junção externa fazem parte do padrão SQL2, adicionadas posteriormente à linguagem.

# `DIVISÃO`

A operação de divisão fornece uma maneira conveniente de lidar com consultas que envolvem quantificação universal. A ideia é selecionar apenas as tuplas de uma relação que aparecem em combinação com **todas** as tuplas de outra relação.

Sejam $R(Z)$ e $S(X)$ duas relações tais que os atributos de $S$ são um subconjunto dos atributos de $R$, ou seja, $X \subseteq Z$. Consideramos que $Y$ seja o subconjunto de atributos de $R$ que não são atributos de $S$, ou seja, $Y = Z - X$. O resultado da divisão $R \div S$ é uma relação $T(Y)$ que inclui uma tupla $t$ somente se os atributos de $t$ aparecerem em **combinação com todas** as tuplas em $S$.

Em [[SQL]], a operação de divisão geralmente não é implementada diretamente.

