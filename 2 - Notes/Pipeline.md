---
created-at: 2021-04-12
tags:
---
É uma técnica de implementação [[Unidade de controle#Datapath multiciclo|multiciclo]] que permite um melhor aproveitamento de cada unidade funcional do processador. Ao invés de executar as instruções completas sequencialmente, o pipeline permite executar múltiplas tarefas simultaneamente usando **recursos diferentes.**
O pipelining não melhora a *latência* de uma única instrução, mas sim de um conjunto de instruções executadas.
As arquiteturas [[CISC e RISC#RISC|RISC]] são propícias para a organização em *pipelining*, isso se deve à sua simplicidade de formato de instrução e à predominância de operandos do tipo registrador.

# Estágios de instrução
Para a implementação de pipeline divide-se a execução total de uma instrução nos seguintes passos:

- IF (Instruction fetch): Busca da instrução na memória e incrementa do PC + 4
- ID (Instruction decode): Envio do *opcode* à [[Unidade de controle|unidade de controle]] e leitura do valor dos registradores determinados na instrução (quando houver).
- EX (Execution): A execução da instrução varia de acordo com o tipo de instrução (nesse momento a unidade de controle já determinou de qual tipo é a instrução):
  - Se instrução load ou store: [[ULA]] calcula o endereço de memória a ser acessado.
  - Se instrução R-type: [[ULA]] executa a operação com os registradores lidos no estágio ID.
  - Se instrução branch: [[ULA]] efetua o teste de condição de salto entre os registradores lidos no estágio ID.
  - Se instrução jump: O PC é substituído pelo endereço do desvio.
- MEM (Memory access): Etapa de acesso à memória, diferentes instruções têm diferentes propósitos de acesso à memória:
  - Se instrução load: Um dado é lido da memória e armazenado em um registrador temporário.
  - Se instrução store: O dado é escrito na memória.
  - Se instrução R-type: Armazena o resultado da [[ULA]]  em um registrador temporário.
- WB (Write back): Armazena no arquivo de registradores os resultados obtidos em estágios anteriores, esses resultados podem ser:
  - Dado lido da memória por uma instrução load.
  - Resultado da [[ULA]] em instruções R-type.

# Registradores de pipeline
O pipeline requer *registradores intermediários* para que os dados de cada instrução possam avançar junto com a execução da mesma sem serem sobrescritos pelos dados da instrução que vem sendo executada logo atrás. Esses registradores tem o propósito de atuar na transição das etapas, e são ao todo 4:

1. IF/ID
2. ID/EX
3. EX/MEM
4. MEM/WB

Esses registradores armazenam também os sinais de controle fornecidos pela unidade de controle, para que seja possível ativar corretamente as unidades corretas em cada etapa sem interferência das outras instruções.

![[sinaisdecontrolepipeline.png]]