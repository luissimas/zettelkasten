# MIPS
MPIS (Microprocessor without Interlocked Pipeline Stages) é uma [[ISA]] do tipo [[CISC e RISC#RISC|RISC]] que surgiu nos anos 80 visando simplicidade e eficiência, e até hoje é usada para processadores de uso mais específico.
Como a MIPS é baseada em registradores, as operações só podem ser realizadas com dados armazenados nos registradores da CPU ou com constantes definidas diretamente nos operandos. Isso implica que é necessário carregar os dados da memória e armazená-los nos registradores antes que seja possível realizar operações entre eles.

## Organização da memória
A memória da arquitetura MIPS é alinhada e endereçada byte-a-byte, ordenadas seguindo o modo *[[Endereçamento|big-endian]]*.
É possível dividir a memória em diferentes regiões:

![[mipsmemoryareas.png]]

## Instruções
O tamanho das instruções é **fixo** em *32 bits*, isso facilita a busca pelas instruções na memória. Desses *32 bits*, *6 bits* são reservados para o *opcode* (código de operador), totalizando 64 instruções possíveis. Todas as instruções aritméticas possuem 3 operandos, um destino e dois operandos de origem (todos eles registradores).
Em [[Assembly|assembly]] os registradores são identificados com o símbolo `$` seguido de um identificador. Os registradores *PC (Program counter)* e *IR (Instruction register)* não fazem parte do banco de registradores disponíveis para serem acessados. Note que são disponibilizados no total 32 registradores, ou seja, com 5 bits é possível acessar todos os eles.

![[mipsregisters.png]]

As instruções são divididas em 3 tipos principais, de acordo com a forma de seus operandos.

### R-Type
Esse tipo é caracterizado pelo uso de **registradores** na instrução

### I-Type
Esse tipo é caracterizado pelo uso de **valores imediatos**, que podem ser representados como valores constante ou o endereço do dado a ser acessado mantido dentro da própria instrução.

### J-Type
Esse tipo é caracterizado por compreender as instruções de desvio incondicional ([[ISA#Jumps Desvios|jumps]])

---

created: 15/03/2021
modified: 15/03/2021
