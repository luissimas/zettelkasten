# Listas encadeadas
Listas encadeadas utilizam do conceito de **alocação encadeada** de elementos ao invés de alocação sequencial.

- **Alocação sequencial**: os elementos do conjunto são armazenados em posições adjacentes de memória, dessa forma é necessário apenas ter conhecimento do endereço do primeiro elemento do conjunto, pois os próximos elementos estão endereçados de maneira relativa a ele.
- **Alocação encadeada**: os elementos não são armazenados necessariamente em posições adjacentes de memória, dessa forma é necessário que cada elemento armazene um ponteiro para o próximo elemento do conjunto.

![[listaencadeada.png]]

---

created: 13/05/2021
