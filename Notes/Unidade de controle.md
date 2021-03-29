# Unidade de controle
Na implementação de um processador precisamos de uma unidade que controle os demais componentes, determinando quais serão ativados em quais momentos e quais funções serão utilizadas. Esse controle é feito pela *Unidade de controle* através dos **sinais de controle**.
Essa análise, como sempre, é baseada na arquitetura [[MIPS]]. É justamente através da unidade de controle que as instruções são decodificadas para ativar cada um dos módulos em uma combinação que permita gerar os resultados desejados.

## Processador simplificado
Para simplificar o estudo desse tópico, vamos adotar um processador de apenas 5 componentes:
- Registrador [[Computador Elementar|PC]]
- Memória de instruções
- Memória de dados
- [[ULA]]
- [[MIPS#Formato de instruções|Conjunto de registradores]]

Cada um desses componentes são interligados para trabalharem em conjunto, porém é necessário que haja um componente responsável por controlar a conexão entre os demais, esse controle é feito pela unidade de controle através dos sinais de controle, que são enviados para multiplexadores estratégicos para controlar a conexão entre os componentes. Vale lembrar ainda que é necessário gerar sinais de controle específicos para determinados componentes, como por exemplo a [[ULA]], que recebe um sinal de controle que especifica a operação a ser realizada, esse sinal também é gerado pela unidade de controle.

## Sinais de controle
Os sinais de controle são gerados baseando-se nos bits do **opcode** da instrução, com base no comportamento desejado do circuito para cada *opcode* é possível criar um circuito combinacional que "traduz" os bits contidos nele para os diversos sinais de controle necessários. 

![[unidadedecontroledatapath.png]]

Note na imagem como os sinais de controle gerados são dispostos ao longo do circuito, permitindo a execução de instruções [[MIPS]] dos [[MIPS#Formato de instruções#R-Type|três tipos]].

---

created: 29/03/2021
modified: 29/03/2021

[[unidadedecontrole.pdf]]
