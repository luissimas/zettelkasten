---
created-at: 2024-05-12
---

A programação em memória compartilhada utiliza [[Threads]] que **compartilham** o espaço de memória de um mesmo processo. Esse modelo de programação é típico em sistemas *multi-core*, nos quais a memória é fisicamente compartilhada entre diversos cores.

No modelo de memória compartilhada o **estado** a ser manipulado pode ser (e geralmente é) **compartilhado** entre as diversas tarefas. Apesar de fornecer maior liberdade na manipulação dos dados, esse aspecto introduz a preocupação de um gerenciamento dos dados de maneira que uma tarefa não altere dados manipulados por outra.

A manipulação de *threads* geralmente se dá através de bibliotecas como a [pthreads](https://en.wikipedia.org/wiki/Pthreads) ou abstrações que a utilizam, como [[OpenMP]].
