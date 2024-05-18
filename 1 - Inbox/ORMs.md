---
date: 2024-03-29
---

Tenho começado a questionar ORMs. Trabalhei em um projeto no qual muitas dificuldades foram relacionadas à falta de familiaridade com o ecossistema, e principalmente com o SQLAlchemy. Em geral acho que os ORMs foram criados num contexto em que a arquitetura MVC prevalecia, então fazia sentido manter essa responsabilidade de persistência nos próprios modelos. 

Entretanto, vejo que hoje temos padrões de arquitetura um pouco mais desacoplados para persistência - como o padrão *Repository* - e parece que por vezes na criação dos repositories o uso do ORM não agrega muito valor conceitualmente, mas sim no sentido de facilitar a interface com o banco. Sendo assim, sinto que tendo a usar o ORM muito mais como um query builder do que como um ORM em si. Sendo esse caso, será que não faz mais sentido utilizar um query builder diretamente e evitar a abstração e custo de performance trazida pelos ORMs?

A comunidade de [[Go]] parece não ser tão familiar com ORMs quanto outras comunidades como as de [[Node.js]] ou [[Python]]. Acredito que o principal motivo seja o background do pessoal que programa em Go ser mais voltado a serviços pequenos e de alta performance. Dei uma pesquisada sobre o [GORM](https://github.com/go-gorm/gorm) e achei algumas coisas bastante interessantes. Existe um ecossistema de ferramentas alternativas para a interação com o banco de dados. Alguns sugerem a combinação de duas ferramentas: [sqlboiler](https://github.com/volatiletech/sqlboiler) e [sql-migrate](https://github.com/rubenv/sql-migrate). A ideia é definir o schema do banco apenas através de migrações (muitas vezes usando ORMs temos duas definições do schema: as migrações e os modelos em si) e então gerar um query builder com base nesse schema. Essa parece ser uma abordagem bastante interessante e um meio termo entre a abstração dos ORMs e utilizar SQL diretamente.

Existem dois tipos de ORM: code-first e schema-first. Code-first utilizam o código para gerar o schema do banco, já os schema-first usam o schema para gerar o código. Pode-se dizer que o GORM e SQLAlchemy são ORMs code-first, enquanto o SQLBoiler e Prisma são schema-first.

O [Ecto](https://hexdocs.pm/ecto/Ecto.html) foi uma das melhores ferramentas que já utilizei para interagir com bancos de dados. Ele não é exatamente um ORM, mas abstrai a interação com o banco de dados usando o padrão de repository.
