# Memória virtual
A *memória virtual* é uma técnica na qual o disco é usado para "aumentar" o tamanho da memória principal *(RAM)*. Essa técnica permite um compartilhamento mais seguro e eficiente da memória entre múltiplos programas sendo executados "ao mesmo" tempo. Vale destacar que a memória virtual não é implementada apenas em nível de *hardware*, mas também de *SO*, pois é necessário ter conhecimento sobre o sistema de arquivos do disco. Um exemplo de memória virtual é a partição *Swap* em sistemas *Linux*.

## Paginação
Cada espaço de endereços é subdividido em *páginas de memória*. O tamanho do espaço de endereços de um processo é múltiplo do tamanho de uma página.

O mecanismo de memória virtual deve garantir a proteção de memória, ou seja, garantir que um processo não leia ou escreva dados no espaço de endereços de outro processo. Isso é feito por meio de um mecanismo de *tradução de endereços*.

## Tradução de endereços
Para a implementação de um mecanismo de tradução de endereços, é necessário introduzir um nível adiciona de endereçamento, chamado de **endereço virtual**. Cada processo tem um espaço de endereços virtuais **únicos**, que são independentes do endereço físico real. Antes da execução do processo, seus endereços virtuais são traduzidos em endereços físicos.
Essa tradução é feita por um módulo da *CPU* chamado *Memory Management Unit (MMU)*, que controla tanto a memória virtual quando a [[Memória cache|memória cache]].

![[memoriavirtualtraducao.png]]

Para efetivamente traduzir os endereços, utiliza-se uma *tabela de páginas*, que associa os endereços virtuais aos endereços físicos.

![[memoriavirtualtabeladepaginas.png]]

---

created: 03/06/2021
