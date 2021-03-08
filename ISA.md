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

### Modos
Existem diversos modos como os bits do campo de endereço são interpretados.

#### Imediato
O valor do operando é especificado diretamente no campo de endereço da instrução, pode ser usado para definir e usar constantes ou para atribuir valores iniciais em variáveis. Não requer acesso a memória para obter o operando, apenas para obter a própria instrução, por isso é menos custoso. O problema é que o tamanho do operando fica limitado pelo tamanho do campo de endereço da instrução.

#### Direto/Absoluto
O endereço direto do operando é especificado no campo de endereço da instrução, permitindo que o dado seja encontrado na memória. Requer apenas um acesso á memória e nenhum cálculo adicional para encontrar o dado. O problema é que nesse modo o espaço de endereçamento é limitado.

#### Registrador
No campo de endereço do operando é especificado um código de registrador, dessa forma ao invés de buscar os dados na memória é possível trabalhar com os registradores da CPU. Esse modo permite um acesso muito rápido aos dados, pela natureza dos registradores da CPU. A principal desvantagem é que o número de registradores da CPU é muito menor do que o número de endereços de memória, dessa forma a quantidade de dados é mais restrita.

#### Indireto de registrador
Faz uso dos endereços intermediários, os **ponteiros**. Nesse modo de endereçamento o campo de endereço contém o endereço de um registrador, que por sua vez armazena o endereço do operando na memória. Isso permite um maior espaço de endereçamento, porém requer dois acessos diferentes, um ao registrador e outro à memória.

#### Indireto de memória
É semelhante ao [[ISA#Indireto de registrador|indireto de registrador]], porém o endereço de memória que o registrador armazena contém outro endereço de memória, são os chamados **ponteiros para ponteiros**. Nesse modo são necessários três acessos diferentes, um ao registrador e dois à memória.

#### Deslocamento
Esse modo de endereçamento combina os modos direto e indireto por registrador. Esse modo obriga que a instrução tenha dois campos de endereço, o primeiro é um endereço de registrador e o segundo é um valor constante que será somado ao endereço armazenado no registrador para então produzir um endereço final de memória. Esse modo pode ser usado, por exemplo, quando acessamos elementos de um array.

#### Indexado


---

created: 01/03/2021
modified: 01/03/2021