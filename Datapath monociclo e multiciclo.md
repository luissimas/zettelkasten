# Datapath monociclo e multiciclo
Existem duas implementações de [[Unidade de controle|datapath]] diferentes, a monociclo e a multiciclo.

## Monociclo
Na implementação monociclo todas as instruções duram um único sinal de clock, isso torna o circuito como um todo simples e fácil de ser entendido. Isso vem a um custo de desempenho, pois se todas as instruções são executadas em um ciclo de clock, esse tempo de ciclo precisa ser longo o bastante para permitir a execução correta da instrução mais longa, ou seja, haverá tempo desperdiçado nas instruções mais curtas, que não utilizam todo o tempo de clock.

## Multiciclo
Na implementação multiciclo as instruções são quebradas em diversos passos de execução, e cada um desses passos é executado em um ciclo de clock (mais curto). Dessa forma cada instrução utiliza um número diferente de ciclos, porém apenas os necessários para a sua execução correta. Isso elimina o problema do desempenho do circuito estar limitado ao desempenho da instrução mais longa.
Para que essa implementação seja possível devem ser implementados registradores intermediários, para armazenar os dados no datapath durante a mudança de clock

---

created: 29/03/2021
modified: 29/03/2021

[[multiciclo.pdf]]
