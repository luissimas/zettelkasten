---
date: 2024-05-13
---


O padrão *IEEE 754* padroniza a forma como números em  [[Implementação de sistemas de ponto flutuante|ponto flutuante]] podem ser representados em sistemas computacionais. Simplificando a portabilidade e adotando métodos eficientes de representação, o *IEEE 754* é o padrão adotado pela indústria há mais de 30 anos.

Esse padrão adota duas formas de representação:

- **Precisão simples - 32 bits**: *1-bit* sinal + *8-bit* expoente + *23-bit* fração
- **Precisão dupla - 64 bits**: *1-bit sinal* + *11-bit* expoente + *52-bit* fração

A parte inteira da fração sempre será um único dígito $1$, pois sempre adota-se uma representação normalizada. Sabendo disso, o padrão *IEE 754* assume implicitamente que o dígito $1$ sempre está presente, dessa forma não é necessário armazená-lo.

![[floatingpointieee.png]]

A representação do expoente é feita utilizando a chamada *representação polarizada (Biased)*, visando simplificar comparações entre expoentes de diferentes números. Nessa representação os dois valores dos extremos são reservados para usos especiais (caso de infinitos, ou zero).

- **Precisão simples (8 bits):** $\text{val}(E) = E - 127$
- **Precisão dupla (11 bits):** $\text{val}(E) = E - 1023$

É importante lembrar que o expoente está sujeito tanto a *overflow* quando a *underflow*.

A principal vantagem de utilizar a representação polarizada para o expoente é que isso torna possível a comparação de números de ponto flutuante com o mesmo hardware de comparação de inteiros. As demais operações aritméticas de ponto flutuante necessitam de unidades de hardware específicas e são mais lentas do que suas equivalentes para números inteiros.

Os valores extremos do expoente são reservados para a representação dos seguintes casos:

## Zero
Para representar o zero em ponto flutuante utiliza-se o expoente $E = 0$ e a parte fracionária $F = 0$.

## Infinito
Para representar o infinito em ponto flutuante utiliza-se o expoente máximo ($255$ e $2047$ para precisão simples e dupla, respectivamente) e a parte fracionária $F = 0$.

## NaN (not a number)
O *NaN* é gerado em situações excepcionais, como $\frac{0}{0}$ ou raízes de números negativos. Para representar esse caso em ponto flutuante utiliza-se o expoente máximo ($255$ e $2047$ para precisão simples e dupla, respectivamente) e a parte fracionária $F \neq 0$.