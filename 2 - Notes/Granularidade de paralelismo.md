---
created-at: 2023-01-11
---

A granularidade se refere ao volume de operações executadas por cada tarefa paralelizada.

- No paralelismo de granularidade **fina** ou com alto grau de acoplamento as **tarefas** paralelas são **pequenas** em termos de operações e, em geral, executam rapidamente. Em contrapartida, a **comunicação** entre tarefas é **mais frequente** e geralmente o volume de dados trafegado é reduzido.
- No paralelismo de granularidade **grossa** ou com baixo grau de acoplamento as tarefas paralelas são relativamente **grandes**, executando um maior número de operações. Nesse caso a **comunicação** entre as tarefas é **menos frequente**, porém o volume de dados trafegado é maior.

A granularidade de paralelismo de um programa deve ser escolhida levando em conta não só a natureza do problema, mas também (se possível) a arquitetura do sistema computacional no qual ele será executado.
