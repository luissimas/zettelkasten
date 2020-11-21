# Binary search
Binary search é um algorítmo que busca por um elemento em uma lista ordenada e retorna a sua posição. A ideia é que a cada passo executado o espaço de busca é reduzido pela metade. Isso ocorre pois a busca sempre se inicia pelo elemento no meio do espaço de busca.

Ao implementar o algoritmo, é importante se atentar a forma como vamos encontrar o meio da lista. Apesar de ser intuitivo fazer $m= \frac{min+max}{2}$, essa é uma forma 
- nunca usar  pois a soma pode causar overflow dos valores inteiros
- usar $m=min + \frac{max-min}{2}$, assim não há a possibilidade de overflow


---

created: 19/11/2020
modified: 19/11/2020
