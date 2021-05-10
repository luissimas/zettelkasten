# Multiplicação e divisão
Apesar de ser possível implementar tanto a multiplicação quanto a divisão utilizando [[Arithmetic logic circuits | soma e subtração]], é necessária uma implementação em hardware dedicada para garantir o melhor desempenho possível.

## Multiplicação
Existem diferentes implementações para a multiplicação, a primeira delas segue o seguinte algoritmo:

![[multiplicationdiagram.png]]

A ideia é realizar adições e deslocamentos sucessivos com os operandos, usando como sinal de controle o dígito *LSB* do multiplicador.
Uma possível implementação desse algoritmo é a seguinte:

![[multiplicationimplementation.png]]

Note que tanto o shifter do multiplicando quanto o registrador que armazena o resultado (produto) e também a [[ULA]] devem ter o dobro dos *bits* dos operandos originais.

É importante destacar que como o produto de dois números de $32$ *bits* é um número de $64$ *bits*

---

created: 10/05/2021
