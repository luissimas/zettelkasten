# ISA (Instruction Set Architecture)
A arquitetura do conjunto de instruções define, além de todo o conjunto de instruções disponíveis, a forma como essas instruções podem ser usadas, bem como a disposição de outros elementos da arquitetura, como endereçamentos dos registradores e quais são os registradores disponíveis.
## Instruções
As instruções são representadas por uma sequência de bits, que é dividida em campos representando os elementos da instrução. Geralmente uma instrução é composta pelo código da operação a ser realizada e as referências (endereços dos registradores) dos operandos.
Existem alguns tipos básicos de instruções:
- Processamento de dados: instruções aritméticas e lógicas
- Armazenamento de dados: instruções de memória
- Movimentação de dados: instruções de entrada e saída
- Controle: instruções de teste e de desvio do fluxo de dados

## Tipos de ISA
Os diferentes tipos de ISAs são separados de acordo com o armazenamento dos operandos das instruções:
- Pilha (Stack): Implicitamente, os operandos estão no topo de uma pilha
- Acumulador: Implicitamente, um operando é o acumulador, e o outro é referenciado explicitamente
- Registradores: Todos os operandos são referenciados explicitamente (memória e/ou registrador)

## Números de endereços
O número de endereços ao descrever operações pode variar principalmente dependendo do [[ISA#Tipos|tipo de ISA]].

| Número de endereços | Representação simbólica | Interpretação   |
| ------------------- | ----------------------- | --------------- |
| 3                   | OP A, B, C              | A <- B OP C     |
| 2                   | OP A, B                 | A <- A OP B     |
| 1                   | OP A                    | AC <- AC OP A   |
| 0                   | OP                      | T <- (T-1) OP T |

AC = acumulador
T = topo da pilha
A, B, C = registrador ou posição de memória

## Tipos de instruções
Dada as diferentes formas de [[Endereçamento|endereçamento]], surgem também diferentes tipos de instruções.

| Tipo                   | Operadores                                            |
| ---------------------- | ----------------------------------------------------- |
| Aritmética e Lógica    | Integer add, subtract, multiply, divide, and, or, ... |
| Transferência de Dados | Load and store                                        |
| Control Flow           | Branch, jump, procedure call and return, traps        |
| Sistema                | Chamadas primitivas do S.O                            |
| Ponto Flutuante        | Add, multiply, divide, compare                        |
| String                 | String compare, string search                         |
| Graphics               | Pixel and vertex operations, compression/decompression operations                                                      |

A maioria dessas instruções são autoexplicativas, e podemos ter um entendimento intuitivo de como elas - pelo menos em um nível elevado de abstração - funcionam.

### Control Flow
As instruções de controle de fluxo são particularmente interessantes pois manipulam o [[Computador Elementar|PC (Program Counter)]], dessa forma é possível alterar o fluxo das instruções, criar laços de repetição e outras estruturas de controle interessantes.
Por padrão da maioria das ISAs após a execução de uma instrução o *PC* é incrementado para buscar a próxima instrução, isso pode ser chamado de:
- *Branch* quando for condicional
- *Jump* quando não for condicional

Existem 4 tipos de instruções de controle de fluxo:
#### Conditional Branches (Desvios condicionais)
Um dos operandos é o endereço da próxima instrução a ser executada. Caso a condição seja satisfeita o *PC* é atualizado com o endereço especificado no operando, caso contrário ele é incrementado normalmente.

#### Jumps (Desvios)
Esse tipo de instrução simplesmente recebe um operando como endereço da próxima instrução e atualiza o *PC* para que essa instrução seja a próxima a ser executada, após isso o *PC* é incrementado a partir da nova instrução.

#### Procedure calls (Chamadas de procedimentos)
Com esse tipo de instrução é possível invocar (chamar) um subprograma (procedimento) para ser executado. No momento da chamada o *PC* é atualizado com o ínicio (primeira instrução) do procedimento, após executar todo o procedimento ocorre o retorno da execução para o endereço em que ocorreu a chamada.

#### Procedure returns (Retorno de procedimentos)
Esse tipo de instrução permite que um endereço de retorno seja armazenado no momento da chamada de um procedimento, para que então após a execução do procedimento a execução do programa retorne para o endereço armazenado.

---

created: 01/03/2021
modified: 01/03/2021