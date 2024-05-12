---
created-at: 2024-05-12
---

No modelo de memória distribuída assume-se que as diferentes tarefas a serem paralelizadas podem ser **executadas em diferentes computadores** ou seja, as **unidades de processamento não têm acesso à mesma memória**. Dessa forma, a principal ferramenta desse modelo de programação é a comunicação entre tarefas através de **passagem de mensagem**.

No modelo de memória distribuída a criação, comunicação e sincronização das tarefas geralmente é feita através de protocolos de rede como o TCP. Esses aspectos podem ser tratados de maneira explícita, mas existem ferramentas como [[MPI]] que visam abstraí-los.

A **comunicação** é o aspecto que representa o maior *overhead* em aplicações paralelas em ambientes distribuídos. Tendo isso em vista, é sempre importante ter como objetivo a **sobreposição entre comunicação e computação**, através do uso de primitivas de comunicação assíncronas e outras técnicas quando possível. Dessa forma, é possível garantir que os nós de processamento irão otimizar seu tempo realizando computações, e não aguardando em operações de comunicação.

Quando comparado ao modelo de memória compartilhada, o modelo por passagem de mensagem faz menos presunções sobre o sistema computacional no qual o programa será executado, o que o torna mais **genérico**. Apesar disso, a passagem de mensagem pode se tornar um *overhead* na comunicação entre tarefas.

