# Multiplicação e divisão
Apesar de ser possível implementar tanto a multiplicação quanto a divisão utilizando [[Arithmetic logic circuits | soma e subtração]], é necessária uma implementação em hardware dedicada para garantir o melhor desempenho possível.

## Multiplicação
Existem diferentes implementações para a multiplicação, a primeira delas segue o seguinte algoritmo:

![[multiplicationdiagram.png]]

A ideia é realizar adições e deslocamentos sucessivos com os operandos, usando como sinal de controle o dígito *LSB* do multiplicador.
Uma possível implementação desse algoritmo é a seguinte:

![[multiplicationimplementation.png]]

Note que tanto o shifter do multiplicando quanto o registrador que armazena o resultado (produto) e também a [[ULA]] devem ter o dobro dos *bits* dos operandos originais.
Apesar do primeiro algoritmo apresentar uma solução válida para o problema, é possível perceber um uso desnecessário de alguns recursos de hardware. Metade dos bits do multiplicando de $64$ *bits* são sempre iguais a zero (em razão do deslocamento para a esquerda), não influenciando em nada no resultado final.
Tendo isso em vista desenvolveu-se uma segunda implementação.

![[multiplicationdiagram2.png]]

Ao invés de efetuar o deslocamento para a esquerda no multiplicando, essa implementação efetua um deslocamento para a direita no produto.

![[multiplicationimplementation2.png]]

Note que é necessário escrever a saída da ula na parte mais "alta" do registrador do produto, dessa forma nenhum dado será perdido com o deslocamento para a direita. Uma das principais vantagens dessa otimização é permitir utilizar uma [[ULA]] de $32$ *bits*, que possui um desempenho superior à uma de $64$ *bits*.
Mesmo com as melhoras do segundo algoritmo, ainda há desperdício de armazenamento no registrador do produto, veja que no início os $32$ *bits* da direita não são utilizados, e vão sendo preenchidos ao longo da execução.
Para contornar isso desenvolveu-se uma terceira implementação.

![[multiplicationdiagram3.png]]

Ao invés de utilizar um registrador dedicado para o multiplicador, nessa implementação ele é armazenado na **metade direita (mais baixa)** do registrador do produto. Como o registrador é deslocado para a direita, obtém-se o mesmo efeito da segunda implementação, porém fazendo um uso mais eficiente do espaço.

![[multiplicationimplementation3.png]]

É importante destacar que como o produto de dois números de $32$ *bits* é um número de $64$ *bits*, na arquitetura [[MIPS]] o resultado dessa operação é armazenado em **dois registradores** de $32$ *bits*, os registradores `$HI` e `$LO`.

## Divisão


---

created: 10/05/2021
