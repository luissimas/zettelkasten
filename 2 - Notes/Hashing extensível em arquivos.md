---
date: 2024-05-17
---

A fim de contornar a restrição do espaço de endereçamento estático criado pelo [[Hashing em arquivos]], o **hashing dinâmico** apresenta alternativas para que o espaço de endereçamento se torne dinâmico, ao mesmo tempo mantendo a consistências e eficiência das operações.

A principal abordagem de hashing dinâmico é chamada **hashing extensível**, e consiste em organizar os [[Registros em arquivos|registros]] em baldes, porém utilizando uma estrutura auxiliar em memória principal chamada **diretório**. Um diretório é na realidade uma [[Hash tables|hash table]] contendo endereços para os baldes. Dessa forma, a função hash leva a uma entrada no diretório, e a partir dessa entrada é possível recuperar o balde da memória secundária.

O motivo de se utilizar o diretório é que é possível **ajustar** seu **tamanho** mantendo a integridade de acesso aos baldes já existentes. Dessa forma, o diretório pode crescer ou diminuir de acordo com a quantidade de baldes necessários para armazenamento, resolvendo o tratamento de colisões.

Nesse tipo de implementação a [[Hash function]] tem a forma $h(c, p)$, onde $c$ é a chave do registro e $p$ é a **profundidade** do diretório, que aumenta de acordo com o tamanho do próprio diretório. Uma abordagem comum é utilizar uma função $h$ que resulta nos $p$ primeiros bits da chave $c$ quando representada em um comprimento fixo de $m$ bits. Nessa abordagem, a profundidade do diretório é diretamente correlacionada ao número de entradas do diretório.

![[hashingextensivel.png]]

As operações nos registros seguem a mesma lógica básica de tabelas hash, porém tendo em vista o passo adicional referente ao acesso de cada balde na memória secundária. Entretanto, é necessário ainda lidar com o **ajuste de tamanho** do diretório, que ocorre especialmente na **inserção** registros.

Quando um novo registro é inserido, o balde no qual ele será armazenado é determinado através da função hash. Se este balde estiver **cheio**, é necessário criar um novo balde para comportar os registros. A criação de um novo balde consiste na **divisão dos conteúdos** do balde original, **incrementando-se a profundidade** do diretório (e, consequentemente, dobrando seu número de entradas) e também dos dois baldes envolvidos.

O principal problema do hashing extensível é o **crescimento exponencial do diretório**, pois a cada incremento de profundidade seu número de entradas é dobrado. Além disso, a **redundância** do diretório tende a aumentar conforme sua profundidade aumenta, com muitas entradas apontando para um mesmo balde.