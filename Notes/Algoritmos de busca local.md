---
created-at: 2024-05-15
---

Os algoritmos de busca local diferem bastante dos outros [[Algoritmos de busca informada]]. Essa classe de algoritmos levam em conta **apenas o estado corrente** e se movem apenas para os estados vizinhos deste, **sem levar em conta os caminhos para os estados**. Dessa forma, esse tipo de algoritmo **não mantém** uma lista de **nós abertos e fechados**, sendo necessário armazenar **apenas o estado atual** para então expandi-lo e avaliar os estados possíveis a partir deste.

Esses algoritmos geralmente são **eficientes em termos de memória**, pois não é necessário manter todo o espaço de estados armazenado através de listas de nós. Entretanto, podem muitas vezes levar a **soluções sub-ótimas** ou não levar a solução alguma.
Geralmente os algoritmos de busca local atuam bem em problemas de otimização, nos quais o objetivo é encontrar o **melhor estado** de acordo com uma **função objetivo**.

O algoritmo [[Hill-climbing search]] é um claro exemplo de busca local.
