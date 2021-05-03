# Conflitos
Apesar da implementação [[Pipeline|pipeline]] proporcionar um aumento significativo de desempenho ela também introduz possíveis conflitos (*hazards*) na execução das instruções. Os *hazards* podem reduzir significativamente o ganho de desempenho alcançado pela implementação pipeline, porém existem soluções eficientes que visam minimizar a perda de desempenho.
Existem 3 tipos de *hazards*:

- Hazards estruturais: conflitos de unidades funcionais.
- Hazards de controle: ocorrem em desvios condicionais e incondicionais.
- Hazards de dados: ocorrem quando a execução de uma instrução depende do resultado de outra.

A solução mais imediata para resolver *hazard* é a utilização de paradas na execução das instruções (*stalls*), elas resolvem grande parte dos conflitos, porém causam perda de desempenho. Quando ocorre uma *stall* a execução de **todas** as instruções é parada e nenhuma nova instrução é buscada.

## Hazards estruturais
Os *hazards* estruturais são conflitos causados pelo **uso simultâneo** de um mesmo recurso de hardware (unidade funcional). Esse tipo de conflito é mais frequente em arquiteturas onde não há distinção entre as memórias de instrução e dados, pois nesse caso toda instrução que faz acesso á memória (Load/Store) irá entrar em conflito com o estágio de busca de outras instruções.
No caso das implementações com uma única memória para dados e instruções é necessário o uso de diversas *stalls* para evitar os *hazards*, o que resulta em uma perda significativa de desempenho. Nesse caso a solução mais eficiente é utilizar memórias separadas para dados e instruções, evitando assim grande parte desses *hazards* sem perda alguma de desempenho.
A arquitetura [[MIPS]], por exemplo, foi desenvolvida tendo em vista a implementação pipeline, por essa razão há a separação entre memória de dados e instruções.
Outro conflito pode ocorrer com o uso da [[ULA]] quando estão sendo executadas instruções de salto. Para evitar esse conflito sem o uso de *stalls* implementa-se uma unidade de soma dedicada ao incremento do *PC*.

![[implementacaohazardestrutural.png]]

### Uso simultâneo de registradores
O caso de conflito causado pelo uso simultâneo de registradores pode ser resolvido de uma forma simples e sem perda de desempenho: basta que o registrador realize a leitura na borda de subida de clock e a escrita na borda de descida. Com esse tipo de implementação evitam-se os conflitos de leitura e escrita simultânea em um mesmo registrador.

![[hazardregistradores.png]]

## Hazards de controle

## Hazards de dados
Os *hazards* de dados ocorrem quando uma instrução **depende** da conclusão de uma instrução prévia que ainda esteja sendo executada.

![[hazarddadosexemplo.png]]

Pode-se usar paradas, porém uma solução mais eficiente é utilizar o encaminhamento (*forwarding*) dos dados. Observa-se que em uma [[]]instrução de tipo R

---

created: 03/05/2021
modified: 03/05/2021
