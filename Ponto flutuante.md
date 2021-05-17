# Ponto flutuante
Representar números reais em circuitos computacionais é significativamente mais complexo do que a representação de números inteiros, além disso é necessário hardware dedicado para manipular os dados nessa representação.
Os *números de ponto flutuante (floating-point numbers)* são representados em **notação científica**, dessa forma é possível obter uma grande precisão de casas decimais sem comprometer o espaço de armazenamento.
É importante destacar que os números de ponto flutuante são números em notação científica normalizados, ou seja, possuem exatamente um dígito diferente de zero na parte inteira (antes do zero). Dessa forma é possível manter sempre a máxima precisão das casas decimais.
Um número em *FP* é composto de 3 partes **(S, E, F)**:

- **S - Bit de sinal:** $0$ para números positivos e $1$ para números negativos.
- **E - Expoente:** o expoente da representação em notação científica.
- **F - Fração:** a parte fracionária (decimal) do número.

![[floatingpoint.png]]

## Padrão *IEEE 754*
O padrão *IEEE 754* padroniza a forma como números em ponto flutuante podem ser representados em sistemas computacionais. Simplificando a portabilidade e adotando métodos eficientes de representação, o *IEEE 754* é o padrão adotado pela indústria há mais de 30 anos.
Esse padrão adota duas formas de representação:

- **Precisão simples - 32 bits**: *1-bit* sinal + *8-bit* expoente + *23-bit* fração
- **Precisão dupla - 64 bits**: *1-bit sinal* + *11-bit* expoente + *52-bit* fração

A parte inteira da fração sempre será um único dígito $1$, pois sempre adota-se uma representação normalizada. Sabendo disso, o padrão *IEE 754* assume implicitamente que o dígito $1$ sempre está presente, dessa forma não é necessário armazená-lo.

![[floatingpointieee.png]]

A representação do expoente é feita utilizando a chamada *representação polarizada (Biased)*, visando simplificar comparações entre expoentes de diferentes números. Nessa representação os dois valores dos extremos são reservados para usos especiais (caso de infinitos, ou zero).

- **Precisão simples (8 bits):** $\text{val}(E) = E - 127$
- **Precisão dupla (11 bits):** $\text{val}(E) = E - 1023$

Overflow e underflow

## Adição e subtração

## Multiplicação

## Divisão

## Implementação em MIPS

---

created: 17/05/2021
