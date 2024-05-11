---
created-at: 2021-05-17
tags:
---
Representar números reais em circuitos computacionais é significativamente mais complexo do que a representação de números inteiros, além disso é necessário hardware dedicado para manipular os dados nessa representação.
Os *números de ponto flutuante (floating-point numbers)* são representados em **notação científica**, dessa forma é possível obter uma grande precisão de casas decimais sem comprometer o espaço de armazenamento.
É importante destacar que os números de ponto flutuante são números em notação científica normalizados, ou seja, possuem exatamente um dígito diferente de zero na parte inteira (antes do zero). Dessa forma é possível manter sempre a máxima precisão das casas decimais.
Um número em *FP* é composto de 3 partes **(S, E, F)**:

- **S - Bit de sinal:** $0$ para números positivos e $1$ para números negativos.
- **E - Expoente:** o expoente da representação em notação científica.
- **F - Fração:** a parte fracionária (decimal) do número.

![[floatingpoint.png]]

# Padrão *IEEE 754*
O padrão *IEEE 754* padroniza a forma como números em ponto flutuante podem ser representados em sistemas computacionais. Simplificando a portabilidade e adotando métodos eficientes de representação, o *IEEE 754* é o padrão adotado pela indústria há mais de 30 anos.
Esse padrão adota duas formas de representação:

- **Precisão simples - 32 bits**: *1-bit* sinal + *8-bit* expoente + *23-bit* fração
- **Precisão dupla - 64 bits**: *1-bit sinal* + *11-bit* expoente + *52-bit* fração

A parte inteira da fração sempre será um único dígito $1$, pois sempre adota-se uma representação normalizada. Sabendo disso, o padrão *IEE 754* assume implicitamente que o dígito $1$ sempre está presente, dessa forma não é necessário armazená-lo.

![[floatingpointieee.png]]

A representação do expoente é feita utilizando a chamada *representação polarizada (Biased)*, visando simplificar comparações entre expoentes de diferentes números. Nessa representação os dois valores dos extremos são reservados para usos especiais (caso de infinitos, ou zero).

- **Precisão simples (8 bits):** $\text{val}(E) = E - 127$
- **Precisão dupla (11 bits):** $\text{val}(E) = E - 1023$

É importante lembrar que o expoente está sujeito tanto a *overflow* quando a *underflow*.

Os valores extremos do expoente são reservados para a representação dos seguintes casos:

## Zero
Para representar o zero em *FP* utiliza-se o expoente $E = 0$ e a parte fracionária $F = 0$.

## Infinito
Para representar o infinito em *FP* utiliza-se o expoente máximo ($255$ e $2047$ para precisão simples e dupla, respectivamente) e a parte fracionária $F = 0$.

## NaN (not a number)
O *NaN* é gerado em situações excepcionais, como $\frac{0}{0}$ ou raízes de números negativos. Para representar esse caso em *FP* utiliza-se o expoente máximo ($255$ e $2047$ para precisão simples e dupla, respectivamente) e a parte fracionária $F \neq 0$.

# Adição e subtração
Para realizar as operações de adição e subtração com números $FP$ é necessário um circuito dedicado que possa lidar com as operações de expoente e arredondamentos necessárias.

![[adicaofloatingpoint.png]]

![[implementacaoadicaofloatingpoint.png]]

# Implementação em MIPS
Na arquitetura [[MIPS]] utiliza-se um **coprocessador** dedicado chamado *Coprocessor 1* ou *Floating Point Unit (FPU)* para realizar as operações relacionadas a números *FP*. São reservados $32$ registradores *FP*: $\text{\$f0}, \text{\$f1}, \dots, \text{\$f31}$. Vale lembrar que como todos os registradores MIPS são de $32$ *bits*, é necessário o uso de dois registradores em conjunto para armazenas os números de precisão dupla.