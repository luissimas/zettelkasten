---
date: 2024-05-17
---

O endereçamento aberto em [[Hash tables]] é uma técnica de [[Tratamento de colisões em hash tables]] que parte da pressuposição de que o número de chaves a ser armazenado na tabela é menor ou igual ao tamanho da tabela, ou seja, $n \leq m$. Partindo desse princípio, assume-se que é possível **armazenar todas as chaves na tabela**, sem a necessidade de outra estrutura para tratar colisões.

Tendo isso em vista, nesse método a colisão é tratada com a **busca de uma nova posição** para a inserção na própria tabela. Isso exige uma modificação da função hash para receber, além da chave, um parâmetro que indica o número de "tentativas" já feitas até o momento da chamada da função. Dessa forma há a garantia que, em caso de colisão, uma nova posição será buscada.

Existem três técnicas comumente utilizadas para buscar a nova posição no caso de uma colisão em tabelas que usam endereçamento aberto. Elas diferem principalmente na forma como as chaves são espalhadas na tabela, impactando no desempenho das operações.

1.  Teste linear

    Dada uma função hash auxiliar $h'$ que recebe como parâmetro uma chave $k$, o método de **teste linear** usa a função $h(k,i) = (h'(k) + i) \mod m$. Dessa forma, a busca pela chave (ou por um espaço vazio para sua inserção) ocorre de forma linear na tabela.

    Apesar de sua fácil implementação, esse tipo de abordagem introduz o problema de **agrupamento primário**, que consiste na construção de longas sequências de posições ocupadas na tabela, degradando o desempenho da busca.

2.  Teste quadrático

    Dada uma função hash auxiliar $h'$ que recebe como parâmetro uma chave $k$, o método de **teste quadrático** usa a função $h(h,i) = (h'(k) + c_1i+c_2i^2) \mod m$, onde $c_1$ e $c_2 \neq 0$ são constantes auxiliares. Esse método elimina o agrupamento primário, já que a posição da tabela resultante da função hash tem uma relação quadrática com o parâmetro $i$ .

    Apesar de prevenir o agrupamento primário, essa técnica introduz um outro problema: o **agrupamento secundário**. Esse tipo de agrupamento consiste no fato de que se a posição inicial de duas chaves com $i=0$ for igual, ela será igual para qualquer $i$.

3.  Duplo mapeamento

    Dadas duas funções hash auxiliares $h_1$ e $h_2$, o método de **mapeamento duplo** usa a função $h(k,i) = (h_1(k) + ih_2(k)) \mod m$. Dessa forma, a sequência de posições buscadas depende duplamente da chave $k$, resultando em um maior número de sequências possíveis.

    Note que é necessário que $h_2$ e o tamanho $m$ da tabela hash sejam **relativamente primos** para garantir que todas as posições da tabela sejam buscadas. Isso pode ser garantido de duas formas:

    1.  Tomando $m$ como uma potência de $2$ e escolhendo $h_2$ de forma que $h_2(k)$ sempre seja um número ímpar.
    2.  Tomando $m$ como um número primo e escolhendo $h_2$ de forma que $0 \leq h_2(k) < m$.

    O duplo mapeamento produz o **melhor desempenho** médio entre as técnicas de endereçamento aberto. Entretanto, sua **implementação** é significativamente mais **complexa** quando comparada a outros métodos.

