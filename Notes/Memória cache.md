---
created-at: 2021-05-24
---
A memória cache é uma unidade de armazenamento de baixa capacidade utilizada para armazenar temporariamente cópias de blocos de dados da memória principal com o intuito de melhorar o desempenho do processador para operações de acesso à memória. Pela tecnologia com a qual é implementada, e por estar muito próxima do processador, a *memória cache*, apesar da sua pequena capacidade, é muito rápida (e muito cara).
A função da memória cache é armazenar as *palavras* ou blocos de informações mais **comumente** e **recentemente** acessadas pelo processador. Quando o processador tenta acessar uma palavra da memória, primeiro verifica-se a existência do dado na cache. Caso a palavra buscada pelo processador esteja na cache ela é entregue diretamente ao processador, sem necessidade de acesso a outras memórias mais lentar. Caso a palavra não esteja na cache, inicia-se uma operação para trazer o bloco de memória que contém aquela palavra para a cache.

Existem dois termos importantes com relação à memória cache:

- **Cache hit**: é quando o dado é encontrado na cache, isso permite a execução rápida do programa.
- **Cache miss**: é quando o dado não é encontrado na cache, isso causa um atraso na execução do programa, pois é necessário então buscar o dado na memória principal e trazê-lo para a cache.

# Localidade
O princípio da localidade é um conceito que diz respeito à como o acesso á memória é feito em programas computacionais. Programas tendem a acessar espaço relativamente pequeno de armazenamento em tempo de execução, dessa forma é possível utilizar algumas técnicas para otimizar o uso desse pequeno espaço.
Esse princípio tem duas faces:

- **Localidade temporal:** um programa tende a referenciar endereços que já foram referenciados recentemente.
- **Localidade espacial:** um programa tende a referenciar um endereço **próximo** a outro referenciado recentemente.

# Mapeamento da memória
Como a memória cache é capaz de armazenar menos blocos de dados do que a memória principal, é necessário fazer um mapeamento dos blocos da memória principal nas linhas de cache, dessa forma é possível fazer uma correspondência entre blocos na memória principal e blocos na memória cache. Além disso é necessário também algum mecanismo que permita verificar qual bloco da memória principal ocupa uma linha específica da cache, para que seja possível verificar se um determinado bloco da memória principal está ou não armazenado na memória cache.
Existem diferentes estratégias de se implementar um mapeamento dos blocos:

- **Mapeamento direto**: Um bloco tem **apenas um** local possível no cache. Esse método é simples de ser implementado, porém os blocos são sobrescritos com uma maior frequência do que o necessário.
- **Associativo em conjuntos**: Um bloco pode ser armazenado em um **subconjunto restrito** de locais no cache.
- **Totalmente associativo**: Um bloco pode ser armazenado em **qualquer local** do cache. Esse método é muito incomum e difícil de ser implementado

![[blockmapping.png]]

Uma forma de implementação comum de um cache com mapeamento direto e mapeamento associativo é através do módulo da divisão do endereço do bloco na memória principal pela quantidade de blocos do cache.

![[cachedirectmapping.png]]

O que acontece na prática é que o endereço do bloco na memória principal é desmembrado para compor o endereço no cache.

![[cacheblockaddress.png]]

Utiliza-se ainda um *bit de validade*, que indica se o determinado bloco do cache contém dados válidos. Isso é útil para tratar situações de início de cache, quando os dados são apenas "lixo" e podem ser sobrescritos, e também situações em que um dado é atualizado na memória principal, tornando sua antiga cópia armazenada em cache inválida.

![[cachedirectmappingimplementation.png]]

![[cacheassociativeimplementation.png]]

# Políticas de escrita
Como os dados da memória cache são **cópias** dos dados presentes na memória principal, é necessário alguma forma de escrever os dados alterados do cache nos seus respectivos endereços na memória principal. Existem duas maneiras de se implementar a escrita de dados do cache:

- **Write-through**: O dado a ser escrito é sempre atualizado no cache e na memória principal. Esse método é mais simples de ser implementado, porém seu desempenho é prejudicado pelo fato de ser necessário acessar níveis mais baixos da hierarquia de memória em operações de escrita.
- **Write-back**: O dado a ser escrito é atualizado na memória principal apenas quando o bloco no cache é substituído por outro. Esse método garante um melhor desempenho, pois as operações se restringem ao cache, porém adiciona complicações de implementação e dificulta a integridade dos dados.