# Endereçamento
Em uma instrução temos, geralmente, um operador e os operandos. O endereçamento é a forma como especifica-se onde (endereço de memória) os operandos estão.
O endereçamento é feito geralmente **byte-a-byte**, sendo que cada byte tem um endereço. Apesar disso, é comum que se sejam endereçados blocos com mais do que um byte. Esses blocos podem ser os seguintes:
- Byte (8bits)
- Half words (16 bits)
- Words (32 bits)
- Double Words (64 bits)

Para que os blocos de bytes sejam processados da maneira correta temos dois modos de ordenação:
- *Big-endian*: O byte menos significativo (LSB) é armazenado no maior endereço do bloco.
- *Little-endian*: O byte menos significativo (LSB) é armazenado no menor endereço do bloco.
![[littleandbigendian.png]]

## Modos
Existem diversos modos como os bits do campo de endereço são interpretados.

### Imediato
O valor do operando é especificado diretamente no campo de endereço da instrução, pode ser usado para definir e usar constantes ou para atribuir valores iniciais em variáveis. Não requer acesso a memória para obter o operando, apenas para obter a própria instrução, por isso é menos custoso. O problema é que o tamanho do operando fica limitado pelo tamanho do campo de endereço da instrução.

### Direto/Absoluto
O endereço direto do operando é especificado no campo de endereço da instrução, permitindo que o dado seja encontrado na memória. Requer apenas um acesso á memória e nenhum cálculo adicional para encontrar o dado. O problema é que nesse modo o espaço de endereçamento é limitado.
![[enderecamentodireto.png]]

### Registrador
No campo de endereço do operando é especificado um código de registrador, dessa forma ao invés de buscar os dados na memória é possível trabalhar com os registradores da CPU. Esse modo permite um acesso muito rápido aos dados, pela natureza dos registradores da CPU. A principal desvantagem é que o número de registradores da CPU é muito menor do que o número de endereços de memória, dessa forma a quantidade de dados é mais restrita.
![[enderecamentoregistrador.png]]

### Indireto de registrador
Faz uso dos endereços intermediários, os **ponteiros**. Nesse modo de endereçamento o campo de endereço contém o endereço de um registrador, que por sua vez armazena o endereço do operando na memória. Isso permite um maior espaço de endereçamento, porém requer dois acessos diferentes, um ao registrador e outro à memória.
![[enderecamentoindiretoregistrador.png]]

### Indireto de memória
É semelhante ao [[ISA#Indireto de registrador|indireto de registrador]], porém o endereço de memória que o registrador armazena contém outro endereço de memória, são os chamados **ponteiros para ponteiros**. Nesse modo são necessários três acessos diferentes, um ao registrador e dois à memória.
![[enderecamentoindiretomemoria.png]]

### Deslocamento
Esse modo de endereçamento combina os modos direto e indireto por registrador. Esse modo obriga que a instrução tenha dois campos de endereço, o primeiro é um endereço de registrador e o segundo é um valor constante que será somado ao endereço armazenado no registrador para então produzir um endereço final de memória. Esse modo pode ser usado, por exemplo, quando acessamos elementos de um array.

### Indexado
Semelhante ao [[ISA#Deslocamento|endereçamento por deslocamento]], esse modo requer dois campos de endereço, porém ambos são endereços de registradores, um com o endereço base da memória e o outro com o valor a ser incrementado a esse endereço. Dessa forma não há a limitação da constante na hora de fazer o deslocamento. Esse modo também é muito usado no acesso a elementos de arrays e outros dados indexados.

---

created: 08/03/2021
modified: 08/03/2021