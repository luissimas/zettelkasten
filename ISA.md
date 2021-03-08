# ISA (Instruction Set Architecture)
A arquitetura do conjunto de instruções define, além de todo o conjunto de instruções disponíveis, a forma como essas instruções podem ser usadas, bem como a disposição de outros elementos da arquitetura, como endereçamentos dos registradores e quais são os registradores disponíveis.
## Instruções
As instruções são representadas por uma sequência de bits, que é dividida em campos representando os elementos da instrução. Geralmente uma instrução é composta pelo código da operação a ser realizada e as referências (endereços dos registradores) dos operandos.
Existem alguns tipos básicos de instruções:
- Processamento de dados: instruções aritméticas e lógicas
- Armazenamento de dados: instruções de memória
- Movimentação de dados: instruções de entrada e saída
- Controle: instruções de teste e de desvio do fluxo de dados

## Tipos
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

## Endereçamento
Em uma instrução temos, geralmente, um operador e os operandos. O endereçamento é a forma como especifica-se onde (endereço de memória) os operandos estão.
O endereçamento é feito geralmente **byte-a-byte**, sendo que cada byte tem um endereço. Apesar disso, é comum que se sejam endereçados blocos com mais do que um byte. Esses blocos podem ser os seguintes:
- Byte (8bits)
- Half words (16 bits)
- Words (32 bits)
- Double Words (64 bits)


---

created: 01/03/2021
modified: 01/03/2021