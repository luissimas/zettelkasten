---
created-at: 2024-05-12
---

O multithreading a nível de hardware visa implementar mecanismos que reduzam o custo da troca de contexto de execução entre diversas threads. Esses mecanismos consistem em estruturas de armazenamento de contexto especializadas para esse caso de uso.

Existem algumas abordagens de multithreading a nível de hardware:

- **Multithreading de granularidade fina**: a troca de contexto entre threads é feita a cada ciclo. Ou seja, o processador executa uma instrução de cada thread através de uma política *round-robin*. Nesse caso geralmente é necessário mecanismos adicionais para detectar que uma thread está bloqueada e evitar buscar instruções dessa thread.
- **Multithreading de granularidade grossa**: a troca de contexto entre threads é feita em momentos oportunos, como um *cache miss* ou um timeout. Dessa forma, também é necessário esvaziar o pipeline quando a troca de contexto for feita. Assim temos trocas de contexto mais caras porém feitas com menos frequência.
- **Multithreading simultâneo (SMT)**: a estratégia SMT visa explorar a capacidade dos processadores superescalares e executar instruções de múltiplas threads ao mesmo tempo. Dessa forma, são necessários mecanismos mais sofisticados de busca de instruções das várias threads e também de armazenamento de estado.