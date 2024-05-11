---
created-at: 2021-03-01
tags:
---
A linguagem *Assembly (Montagem)* é uma linguagem de baixo nível, muito próxima do hardware. A ideia da linguagem é fornecer um nome simbólico (e mais legível para seres humanos) para cada instrução do hardware, facilitando o desenvolvimento de programas.
Para que um programa com instruções em Assembly possa ser de fato executado pelo computador, ele passa por um *Assembler (Montador)*, que "traduz" as instruções simbólicas e as variáveis para os devidos códigos de instruções e endereços de memória, gerando um programa executável.
Vale lembrar que, por ser uma linguagem muito próxima do hardware, um programa em Assembly depende diretamente da arquitetura dos conjuntos de instruções do hardware (como estão definidos, seus códigos etc). Por essa razão os programas escritos nessa linguagem não são portáveis para outras arquiteturas. Tudo isso é resolvido através dos compiladores, mas isso é um assunto futuro.
```mermaid
graph TD
  h["Programa de alto nível (C, C++)"] --> c((Compilador)) --> a["Programa em Assembly"] --> ass((Assembler)) --> lm[Programa em linguagem de máquina] --> lk((Linker)) --> pe[Programa executável]
```
Nesse processo, o *Linker* é responsável por importar e gerenciar bibliotecas externas e arquivos separados utilizados no programa, gerando o arquivo executável final.