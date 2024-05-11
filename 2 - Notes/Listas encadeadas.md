---
created-at: 2021-05-13
tags:
---
Listas encadeadas utilizam do conceito de **alocação encadeada** de elementos ao invés de alocação sequencial.

- **Alocação sequencial**: os elementos do conjunto são armazenados em posições adjacentes de memória, dessa forma é necessário apenas ter conhecimento do endereço do primeiro elemento do conjunto, pois os próximos elementos estão endereçados de maneira relativa a ele.
- **Alocação encadeada**: os elementos não são armazenados necessariamente em posições adjacentes de memória, dessa forma é necessário que cada elemento armazene um ponteiro para o próximo elemento do conjunto.

![[listaencadeada.png]]

# Listas duplamente encadeadas
As listas duplamente encadeadas são uma variação interessante das listas encadeadas simples, pois permitem percorrer os elementos da lista nas duas direções. Além de um ponteiro para o próximo elemento do conjunto, cada elemento também armazena um ponteiro para o elemento anterior. Essa implementação garante mais flexibilidade para manipular os elementos, porém utiliza mais memória, já que temos agora três campos em cada nó.

![[listasduplamenteencadeadas.png]]