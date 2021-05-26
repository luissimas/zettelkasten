# Memória cache
A memória cache é uma unidade de armazenamento de baixa capacidade utilizada para armazenar temporariamente cópias de blocos de dados da memória principal com o intuito de melhorar o desempenho do processador para operações de acesso à memória. Pela tecnologia com a qual é implementada, e por estar muito próxima do processador, a *memória cache*, apesar da sua pequena capacidade, é muito rápida (e muito cara).
A função da memória cache é armazenar as *palavras* ou blocos de informações mais **comumente** e **recentemente** acessadas pelo processador. Quando o processador tenta acessar uma palavra da memória, primeiro verifica-se a existência do dado na cache. Caso a palavra buscada pelo processador esteja na cache ela é entregue diretamente ao processador, sem necessidade de acesso a outras memórias mais lentar. Caso a palavra não esteja na cache, inicia-se uma operação para trazer o bloco de memória que contém aquela palavra para a cache.

Existem dois termos importantes com relação à memória cache:

- **Cache hit**: é quando o dado é encontrado na cache, isso permite a execução rápida do programa.
- **Cache miss**: é quando o dado não é encontrado na cache, isso causa um atraso na execução do programa, pois é necessário então buscar o dado na memória principal e trazê-lo para a cache.

## Localidade
O princípio da localidade é um conceito que diz respeito à como o acesso á memória é feito em programas computacionais. Programas tendem a acessar espaço relativamente pequeno de armazenamento em tempo de execução, dessa forma é possível utilizar algumas técnicas para otimizar o uso desse pequeno espaço.
Esse princípio tem duas faces:

- **Localidade temporal:** um programa tende a referenciar endereços que já foram referenciados recentemente.
- **Localidade espacial:** um programa tende a referenciar um endereço **próximo** a outro referenciado recentemente.

## Hierarquia de memória
Para tirar proveito do princípio da localidade, as memórias em um computador são organizadas em uma **hierarquia**. A ideia é colocar memórias mais rápidas (e menores) mais próximas do processador e tornar seu acesso mais frequente, enquanto as memórias de maior capacidade (e mais lentas) são colocadas longe do processador e acessadas com menos frequência.
Com essa disposição das memórias é possível otimizar o uso das memórias mais rápidas sem aumentar significativamente o custo de hardware.

![[memoryhierarchy.png]]

## Mapeamento da memória
Como a memória cache é capaz de armazenar menos blocos de dados do que a memória principal, é necessário fazer um mapeamento dos blocos da memória principal nas linhas de cache, dessa forma é possível fazer uma correspondência entre blocos na memória principal e blocos na memória cache. Além disso é necessário também algum mecanismo que permita verificar qual bloco da memória principal ocupa uma linha específica da cache, para que seja possível verificar se um determinado bloco da memória principal está ou não armazenado na memória cache.
Existem diferentes estratégias de se implementar um mapeamento dos blocos:

- **Mapeamento direto**:
- **Totalmente associativo**:
- **Associativo em conjuntos**:

---

created: 24/05/2021
