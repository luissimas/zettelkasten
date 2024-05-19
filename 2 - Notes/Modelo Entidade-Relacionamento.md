---
created-at: 2024-05-18
---

O modelo ER define o esquema conceitual do banco de dados fazendo uso de três componentes principais: *entidades*, *atributos* e *relacionamentos*.

# Entidades

Uma **entidade** é uma coisa ou objeto (físico ou conceitual) com uma **existência independente**. Um **tipo de entidade** define, através de um **esquema**, uma estrutura para um conjunto de entidades, enquanto o **conjunto de entidades** se refere à coleção de todas as entidades de um determinado tipo armazenadas no banco.

Tipos de entidade que não possuem atributos-chave próprios são chamados **tipos de entidade fraca**. As entidades pertencentes a esses tipos são **identificadas pelos seus relacionamentos** com outras entidades. Os tipos de entidades que se relacionam e identificam um tipo de entidade fraca são chamados de **tipos de entidade de identificação** ou **proprietário**. Um tipo de entidade fraca sempre tem uma **restrição de participação total** (dependência de existência) com relação ao relacionamento que a identifica. Note que nem toda dependência de existência resulta em um tipo de entidade fraca. Um tipo de entidade fraca normalmente tem um atributo chamado de **chave parcial**, que a identifica dentre as demais entidades fracas relacionadas à mesma entidade proprietária.

# Atributos

Cada entidade possui **atributos**, que são propriedades específicas que a descrevem. Pela natureza da complexidade de descrição de entidades, existem diferentes tipos de atributos, possibilitando um alto nível de expressividade nos modelos ER.

**Atributos simples** (ou atômicos), são atributos que descrevem uma característica indivisível de uma entidade. Em contrapartida, os **atributos compostos** podem ser subdivididos em partes menores (atributos simples) e independentes. Os atributos que possuem apenas um valor por entidade são chamados de **atributos de valor único**. Em alguns casos é possível que um atributo represente um conjunto de valores para uma mesma entidade, nesse caso ele é chamado de **atributo multivalorado**. Há casos em que é possível obter atributos de uma entidade com base em outros atributos ou relacionamentos, como, por exemplo, dois atributos `data_nascimento` e `idade` de uma entidade. Nesse caso, o atributo `idade` pode ser obtido através do atributo `data_nascimento`, portanto é chamado de **atributo derivável**, enquanto `data_nascimento` é chamado de **atributo armazenado**. Dessa forma, é possível derivar atributos deriváveis de atributos armazenados de uma mesma entidade ou de outras entidades relacionadas.

Vale destacar que cada atributo simples de um tipo de entidade deve estar associado a um **conjunto de valores**, que define possíveis valores daquele atributo. Esses conjuntos de valores podem ser especificados através de tipos de dados primitivos ou até mesmo através de restrições de valores com base nesses tipos (valores mínimos e máximos, caracteres permitidos etc).

Entidade normalmente precisam ser identificadas de alguma forma, para isso existem os **atributos-chave**, que são atributos cujos valores são distintos para cada entidade individual no conjunto de entidades. Como o valor do **atributo-chave é único para cada entidade**, é possível identificar cada entidade de maneira exclusiva através do valor desse atributo. Note que uma entidade pode possuir mais de um atributo-chave, ou até mesmo um conjunto de atributos que componham um atributo-chave através da composição de atributos.

![[dercarroexemplo.png]]

# Relacionamentos

As entidades de um banco de dados geralmente possuem algum tipo de relacionamento entre si. Um **tipo de relacionamento** define um conjunto de associações entre as entidades de determinados tipos. De forma semelhante à das entidades, um **conjunto de relacionamentos** é um conjunto de **instâncias de relacionamento**, nos quais entidades em particular são associadas a outras entidades.

O **grau** de um tipo de relacionamento é o número dos tipos de entidades participantes daquele tipo de relacionamento. Um tipo de relacionamento de grau dois é chamado de **binário**, enquanto um de grau três é chamado de **ternário**.

Cada tipo de entidade que participa de um tipo de relacionamento desempenha nele um papel em particular. O **nome do papel** especifica o papel que um tipo de entidade desempenha em um tipo de relacionamento. Em relacionamentos nos quais todos os tipos de entidades participantes são distintos geralmente não é necessário especificar o nome do papel. Entretanto, quando um **tipo de entidade participa mais de uma vez** de um relacionamento (relacionamento **recursivo** ou **autorrelacionado**), é essencial definir o nome do papel para distinguir o papel que cada entidade participante desempenha.

Os tipos de relacionamentos podem ter **restrições estruturais** que limitam o número e a forma das **combinações de entidades** que podem participar no conjunto de relacionamentos. A **razão de cardinalidade** para relacionamentos binários especifica o número **máximo de instâncias de relacionamento** em que uma entidade pode participar. As razões de cardinalidade possíveis para tipos de relacionamento binários são: `1:1`, `1:N`, `N:1` `M:N`. Outro tipo de restrição são as **restrições de participação**, especificam se a existência de uma entidade depende de ela estar relacionada a outra entidade por meio do tipo de relacionamento. Essa restrição especifica um **número mínimo** de instâncias de relacionamento em que cada entidade pode participar. Se cada entidade em um conjunto de entidades deve estar relacionada a uma outra entidade, tem-se a chamada **participação total**, ou **dependência de existência**, que define que a existência de uma entidade depende dela estar relacionada à outra. Quando nem todas as entidades de um conjunto precisam necessariamente estar relacionadas à uma outra entidade, tem-se a chamada **participação parcial**.

Assim como as entidades, os relacionamentos também podem ter **atributos**. Esses atributos descrevem aspectos específicos da instância de relacionamento. Dessa forma, em certas situações é possível mover esses atributos para algum dos tipos de entidades participantes (mas esse nem sempre é o caso).