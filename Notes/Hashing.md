---
created-at: 2024-05-17
---

O processo de hashing consiste em transformar uma dado (chave) em outro valor (hash). Geralmente o hashing é utilizado na construção de [[Hash tables]], estruturas de dados chave-valor que fornecem operações em tempo constante $O(1)$.

![[hashtable.png]]

Mesmo que a [[Hash function]] distribua chaves de maneira uniforme na tabela, a probabilidade de que duas chaves sejam associadas a um mesmo endereço (**colisão**) é alta. Em geral, a probabilidade $p$ de se inserir $n$ itens consecutivos, sem colisão, em uma tabela de tamanho $m$ é dada por:

$$p=\frac{m!}{(m-n)!m^n}$$

Dessa forma, é essencial lidar com o [[Tratamento de colisões em hash tables]].