---
date: 2024-05-17
---

Ao remover [[Registros em arquivos|registros]] de um [[Arquivo]], é necessário reorganizar o aquivo para que o espaço ocupado seja efetivamente reduzido.

Em geral, primeiramente é feita uma **remoção lógica** do registro, que consiste em marcá-lo como **inválido**, sem efetivamente removê-lo do arquivo. Após a remoção lógica, ocorre a **remoção física**, que de fato **recupera o espaço** ocupado pelo registro removido no arquivo.

Em geral, existem duas abordagens para a recuperação de espaço de registros removidos em arquivos:

# Recuperação estática

A recuperação estática consiste em **reconstruir o arquivo**, eliminando todos os registros marcados como inválidos de uma só vez. O processo de remoção dos registros marcados como inválidos é chamado de **compactação**. Note que a compactação é feita de maneira **esporádica**, ou seja, define-se um intervalo de tempo para que a compactação seja realizada no arquivo.

# Recuperação dinâmica

Na recuperação dinâmica é possível **reutilizar o espaço** ocupado pelos registros marcados como inválidos para realizar novas inserções, sem a necessidade de aguardar a compactação.

Para implementar essa estratégia em arquivos de **registros de tamanho fixo**, implementa-se uma **pilha** através de **lista encadeada**, onde cada nó é um registro marcado para remoção, no próprio arquivo. Como os registros são de tamanho fixo, é possível endereçá-los através do **RRN**. Dessa forma, um **registro removido contém** o **RRN do próximo registro removido** na pilha, e o **arquivo armazena um ponteiro** com o valor do RRN do registro no **topo da pilha**. Nessa estratégia as inserções ocorrem sempre no topo da pilha, ou seja, os primeiros espaços a serem reaproveitados são os dos registros removidos mais recentemente.

Quando os registros são de **tamanho variável**, não basta apenas manter uma lista encadeada e manipulá-la como uma pilha, pois agora é necessário analisar os tamanhos dos registros disponíveis para serem reutilizados. Portanto, a implementação dessa estratégia usa também uma **lista encadeada**, onde cada nó é contém o **tamanho do registro** marcado para remoção e um **ponteiro** para o próximo registro marcado para remoção. Nesse caso em que os registros são de tamanho variável, os ponteiros são na realidade o **byte offset** para o início do registro com relação ao início do arquivo. Dessa forma, quando uma inserção é realizada, é necessário **verificar o tamanho** de todos os registros disponíveis para substituição na lista, e então inserir o novo registro em um espaço que comporte seu tamanho.

A recuperação dinâmica em registros de **tamanho variável** gera um problema: como os registros são de tamanho diferente, é comum que "sobre" espaço após a reutilização de um espaço disponível. Esse fenômeno é chamado de **fragmentação**. Para minimizar esse problema, deve ser adotada alguma **estratégia de alocação** para escolher em qual dos espaços disponíveis no arquivo um novo registro deve ser inserido, levando em conta o tamanho do novo registro. Em geral, duas estratégias são utilizadas:

-   A alocação **best-fit** prioriza o **menor espaço** disponível que seja capaz de conter o novo registro. Essa estratégia causa **fragmentação externa**, ou seja, com o tempo acabam sobrando muitos espaços pequenos, pequenos demais para serem preenchidos por outro registro.
-   A alocação **worst-fit** prioriza o **maior espaço** disponível, diminuindo assim a fragmentação externa. Dessa forma, os espaços que sobram em geral são maiores do que os na estratégia best-fit.