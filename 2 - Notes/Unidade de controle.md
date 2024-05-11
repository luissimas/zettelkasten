# Unidade de controle
Na implementação de um processador precisamos de uma unidade que controle os demais componentes, determinando quais serão ativados em quais momentos e quais funções serão utilizadas. Esse controle é feito pela *Unidade de controle* através dos **sinais de controle**.
Essa análise, como sempre, é baseada na arquitetura [[MIPS]]. É justamente através da unidade de controle que as instruções são decodificadas para ativar cada um dos módulos em uma combinação que permita gerar os resultados desejados.
Existem duas formas de implementar a unidade de controle, elas diferem na forma como utilizam do sinal de clock e na forma como geram os sinais de controle.

## Processador simplificado
Para simplificar o estudo desse tópico, vamos adotar um processador de apenas 5 componentes:
- Registrador [[Computador Elementar|PC]]
- Memória de instruções
- Memória de dados
- [[ULA]]
- [[MIPS#Formato de instruções|Conjunto de registradores]]

Cada um desses componentes são interligados para trabalharem em conjunto, porém é necessário que haja um componente responsável por controlar a conexão entre os demais, esse controle é feito pela unidade de controle através dos sinais de controle, que são enviados para multiplexadores estratégicos para controlar a conexão entre os componentes. Vale lembrar ainda que é necessário gerar sinais de controle específicos para determinados componentes, como por exemplo a [[ULA]], que recebe um sinal de controle que especifica a operação a ser realizada, esse sinal também é gerado pela unidade de controle.

## Datapath monociclo
Na implementação monociclo todas as instruções duram um único sinal de clock, isso torna o circuito como um todo simples e fácil de ser entendido. Isso vem a um custo de desempenho, pois se todas as instruções são executadas em um ciclo de clock, esse tempo de ciclo precisa ser longo o bastante para permitir a execução correta da instrução mais longa, ou seja, haverá tempo desperdiçado nas instruções mais curtas, que não utilizam todo o tempo de clock.
Nessa implementação os sinais de controle são gerados baseando-se nos bits do **opcode** da instrução, com base no comportamento desejado do circuito para cada *opcode* é possível criar um circuito **combinacional** que "traduz" os bits contidos nele para os diversos sinais de controle necessários.

![[unidadedecontroledatapath.png]]

Note na imagem como os sinais de controle gerados são dispostos ao longo do circuito, permitindo a execução de instruções [[MIPS]] dos [[MIPS#Formato de instruções#R-Type|três tipos]].

## Datapath multiciclo
Na implementação multiciclo as instruções são quebradas em diversos passos de execução, e cada um desses passos é executado em um ciclo de clock (mais curto). Dessa forma cada instrução utiliza um número diferente de ciclos, porém apenas os necessários para a sua execução correta. Isso elimina o problema do desempenho do circuito estar limitado ao desempenho da instrução mais longa.
Para que essa implementação seja possível devem ser implementados registradores intermediários, para armazenar os dados no datapath durante a mudança de clock.
Nesse tipo de implementação a ULA gera os sinais de controle usando uma [[Finite state machines|máquina de estados]], ou seja, utiliza-se um [[Sequential circuits|circuito sequencial]] para gerar os sinais de controle. Isso se dá pelo fato de cada tipo de instrução demanda uma série de passos de execução, alguns compartilhados (como busca da instrução e sua decodificação) e outros específicos para cada tipo. Com uma máquina de estados é possível representar o "caminho" de execução de cada instrução (especificada no opcode) e principalmente: cada um dos estados gera um conjunto de sinais de controle diferente!

![[datapathmulticiclo.png]]

Vale destacar que nessa implementação todos os registradores intermediários são invisíveis para o programador, eles servem única e exclusivamente para avidar perda de sincronização nas transições.

---

created: 29/03/2021
modified: 05/04/2021

[[unidadedecontrole.pdf]]
[[multiciclo.pdf]]
