---
created-at: 2024-05-17
---

O algoritmo de Huffman é um método de [[Compressão]] que, dados alguns critérios, gera compressões ótimas e eficientes. A ideia do método é utilizar uma estrutura de [[Árvore]] para codificar e decodificar os símbolos do [[Arquivo]] original, dando especial atenção a como construir a árvore de forma a obter a melhor compressão possível.

Supõe-se que um arquivo seja constituído de um conjunto de [[Símbolo|símbolos]] $S=\{s_1, \dots, s_n\}$ cuja **frequência** de cada símbolo no arquivo é conhecida e dada por um conjunto $F=\{f_1, \dots, f_n\}$ de forma que o símbolo $s_i$ ocorre $f_i$ vezes ao longo do arquivo. A ideia é atribuir a cada símbolo $s_i$ um **código binário** para substituí-lo no arquivo compactado. De modo a eliminar qualquer ambiguidade entre os códigos, nenhum código pode ser **prefixo** de outro. Dessa forma, os códigos são construídos através de uma **árvore binária de prefixo**, ou seja, uma árvore binária cujas arestas são rotuladas com $0$ ou $1$. Nessa organização os símbolos ficam nas **folhas** da árvore, de forma que o código de um símbolo é dado pela sequência de arestas percorridas da raiz até a folha que contém o símbolo.

![[arvorehuffman.png]]

Dessa forma, para **decodificar** um arquivo basta percorrê-lo do início ao fim enquanto percorre-se a árvore da raiz até a folha, tomando o caminho indicado por cada bit encontrado no arquivo. Toda vez que uma folha da árvore é atingida, um símbolo foi decodificado com sucesso e deve ser adicionado ao arquivo resultante da decodificação, após isso a leitura continua, iniciando-se novamente da raiz da árvore.

Note que o **custo** do processo de decodificação é diretamente proporcional ao tamanho da sequência binária do arquivo codificado. Sendo assim, uma forma de otimização do processo é construir árvores que gerem apenas **sequências de comprimento mínimo**, minimizando também o custo das operações de codificação e decodificação. Uma árvore que minimize esse custo é denominada *mínima* ou *árvore de Huffman*. A figura a seguir mostra uma árvore de Huffman capaz de codificar os mesmos símbolos que a da figura anterior, mas minimizando o custo das operações.

![[arvoredehuffmanminima.png]]

O algoritmo para construir uma árvore de Huffman a partir de uma lista de símbolos e suas respectivas frequências é simples, e consiste na construção da árvore através da **fusão de subárvores**, ou seja, a árvore é **construída a partir das folhas** até a raiz.

O processo para a criação da árvore de Huffman para um conjunto de símbolos $S=\{s_1, \dots, s_n\}$ se inicia com a criação de $n$ **subárvores**, cada uma contendo apenas um único nó com o símbolo $s_i$. Dada uma subárvore binária de prefixo $T'$, a **frequência** de $T'$, denotada por $f(T')$ é dada pela soma das frequências dos símbolos $s_i$ presentes nas folhas de $T'$. A partir disso, iterativamente selecionam-se as duas subárvores $T'$ e $T''$ de menor frequência, que são fundidas em uma nova subárvore de frequência $f(T') + f(T'')$. O processo se encerra quando restar apenas uma única subárvore.

![[processohuffman.png]]

Note que para o processo de criação da árvore é necessário determinar as subárvores de menor frequência. Esse processo pode se tornar mais eficiente através da utilização de uma estrutura de dados como um **heap**, que facilita esse tipo de operação.
