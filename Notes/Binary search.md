# Binary search
Binary search é um algorítmo que busca por um elemento em uma lista ordenada e retorna a sua posição. A ideia é que a cada passo executado o espaço de busca é reduzido pela metade. Isso ocorre pois o algoritmo busca primeiro pelo elemento no meio da lista, e então compara esse elemento com alvo da busca. Caso o elemento encontrado seja menor que o alvo, o algoritmo descarta todos os valores menores que o elemento encontrado e assume que agora ele é o limite do intervalo de busca. O processo ocorre de forma análoga quando o elemento encontrado é maior que o alvo.
Ao implementar o algoritmo, é importante se atentar a forma como vamos encontrar o meio da lista. Apesar de ser intuitivo fazer $m= \frac{min+max}{2}$, essa forma nunca deve ser usada, pois é muito fácil causar overflow na soma $min+max$ quando lidamos com valores muito grandes. Ao invés disso, podemos usar a expressão $m=min + \frac{max-min}{2}$, que encontra o valor médio entre $min$ e $max$ sem risco algum de causar overflow

---

created: 19/11/2020
modified: 19/11/2020
