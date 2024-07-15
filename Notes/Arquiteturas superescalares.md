---
created-at: 2024-05-12
---

Arquiteturas superescalares são aquelas que permitem que instruções sejam executadas simultaneamente e de modo independente. A essência da abordagem superescalar é a capacidade de executar múltiplas instruções de forma independente em diferentes pipelines.

O termo *paralelismo em nível de instruções* se refere à possibilidade de executar múltiplas instruções em paralelo. Tal paralelismo depende das instruções serem independentes umas das outras.

A diferença entre arquiteturas superescalares e superpipeline é que uma arquitetura superescalar executa instruções simultaneamente através de suas múltiplas unidades funcionais, enquanto o superescalar executa algumas instruções em um ciclo de clock muito mais curto.

Existem cinco limitações que impedem o paralelismo a nível de instruções:

- **Dependência verdadeira de dados**: a execução de uma instrução depende de dados produzidos pela primeira

- **Dependência procedural**: a execução de uma instrução que vem logo após um desvio não podem ser executadas até que o desvio seja tomado.

- **Conflito de recursos**: a execução de duas instruções que utilizam um mesmo recurso de hardware ao mesmo tempo

- **Dependência de saída (WAW)**: quando duas instruções escrevem em um mesmo espaço de memória

- **Dependência de escrever após ler (WAR ou antidependência)**: a execução de uma instrução depende de dados que vão ser sobrescritos por uma instrução subsequente

Enquanto o paralelismo em nível de instruções descreve a possibilidade das instruções serem executadas simultaneamente, o paralelismo de máquina descreve a capacidade de uma arquitetura aproveitar essa possibilidade e de fato executar as instruções em paralelo. Isso depende principalmente do número de instruções que podem ser buscadas e decodificadas ao mesmo tempo.

O processo de renomeação de registrados permite eliminar \"dependências falsas\", ou dependências de nome entre registradores, aumentando o paralelismo em nível de instruções. O uso de uma janela de instruções permite o desacoplamento entre a fase de decode e execução do pipeline, permitindo que o processador decodifique instruções fora de ordem a fim de melhorar o paralelismo em nível de instruções e às coloque em um buffer para serem executadas.

Os elementos chave na organização de processadores superescalares são:

- Estratégias de fetching de múltiplas instruções
- Lógica para determinar dependências verdadeiras de dados
- Mecanismos para fazer issue e executar múltiplas instruções em paralelo
- Mecanismos para fazer o commit das instruções em ordem