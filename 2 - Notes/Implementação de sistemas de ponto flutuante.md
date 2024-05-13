---
created-at: 2021-05-17
---
Representar números reais em circuitos computacionais é significativamente mais complexo do que a representação de números inteiros, além disso é necessário hardware dedicado para manipular os dados nessa representação.

Os números em [[Sistemas de Ponto Flutuante|ponto flutuante]] *(floating-point numbers)* são representados em **notação científica**, dessa forma é possível obter uma grande precisão de casas decimais sem comprometer o espaço de armazenamento.

É importante destacar que os números de ponto flutuante são números em notação científica normalizados, ou seja, possuem exatamente um dígito diferente de zero na parte inteira (antes do zero). Dessa forma é possível manter sempre a máxima precisão das casas decimais.
Um número em ponto flutuante é composto de 3 partes **(S, E, F)**:

- **S - Bit de sinal:** $0$ para números positivos e $1$ para números negativos.
- **E - Expoente:** o expoente da representação em notação científica.
- **F - Fração:** a parte fracionária (decimal) do número.

![[floatingpoint.png]]

# Adição e subtração
Para realizar as operações de adição e subtração com números de ponto flutuante é necessário um circuito dedicado que possa lidar com as operações de expoente e arredondamentos necessárias.

![[adicaofloatingpoint.png]]

![[implementacaoadicaofloatingpoint.png]]

