---
date: 2024-05-18
---

O modelo EER estende a capacidade de representação do [[Modelo Entidade-Relacionamento]] tradicional, introduzindo novos conceitos de *modelos de dados semânticos*. Os conceitos introduzidos nesse modelo são, principalmente, os de **subclasse** e **superclasse**, **especialização** e **generalização**, **categoria** e **herança**.

# Subclasses e superclasses

Subclasses (subtipos de entidade) são subagrupamentos de um tipo de entidade. Muitas vezes, um tipo de entidade pode conter diversos subtipos em seu conjunto que precisam ser distinguidos e representados explicitamente, isso pode ser feito através das **subclasses**. Analogamente, o tipo de entidade do qual uma subclasse é especificada é chamada de **superclasse** para cada uma das subclasses derivadas.

Note que uma entidade-membro da subclasse representa a **mesma entidade** de algum membro da superclasse, ou seja, toda entidade de uma subclasse também é entidade da superclasse, mas adota um *papel* específico para a subclasse.

![[eersubclasses.png]]

Vale destacar que uma subclasse deve **herdar** todos os atributos e tipos de relacionamentos da superclasse. Apesar disso, uma subclasse pode definir atributos e relacionamentos específicos além dos herdados da superclasse.

# Especialização e generalização

A **especialização** é o processo de **derivar subclasses** de uma superclasse. A ideia é tomar alguma **característica da superclasse como base para a distinção** e definição das subclasses. Já a **generalização** é o **processo inverso** da especialização, consistindo em, dados vários tipos de entidade, generaliza-las em uma **única superclasse** da qual os tipos de entidade são **subclasses**.

É possível definir **condições** nas especializações para determinar exatamente quais entidades se tornam membros de cada subclasse. Essas condições são especificadas sobre o valor de algum **atributo da superclasse**. Subclasses definidas através desse tipo de condição são chamadas de **subclasses definidas por predicado**.

![[eerespecializacaoatributo.png]]

Quando não há nenhuma condição para determinar os membros de uma subclasse, diz-se que esta é **definida pelo usuário**. Dessa forma, cabe aos usuários do banco de dados determinar manualmente a subclasse no momento da inserção.

É possível ainda a definição da chamada **restrição de disjunção**, que especifica que as subclasses da especialização devem ser **disjuntas**, ou seja, uma entidade pode ser membro de no máximo uma subclasse da especialização. Note que uma especialização definida por um atributo de valor único implica a restrição de disjunção.

Outra restrição possível é a **restrição de completude** total ou parcial. Uma restrição de **especialização total** define que toda entidade da superclasse deve ser um membro de pelo menos uma subclasse da especialização. Já uma **especialização parcial** permite que uma entidade não pertença a qualquer uma das subclasses.

# Uniões

Em determinados casos pode ser necessário representar uma **coleção de entidades** a partir de diferentes tipos de entidades. Nesse caso, a subclasse representa uma coleção de entidades que é o **subconjunto da união** de entidades de tipos distintos. Esse tipo de subclasse é chamada de **tipo de união** ou **categoria**.

![[eercategoria.png]]

No exemplo acima, uma entidade membro de `PROPRIETARIO` deve existir em **apenas uma** das superclasses, ou seja, um proprietário é uma pessoa **ou** um banco **ou** uma empresa.