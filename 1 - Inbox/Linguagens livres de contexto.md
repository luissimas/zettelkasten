---
created-at: 2023-03-03
---

Linguagens livres de contexto são [[Linguagem formal|linguagens formais]] geradas por [[Gramática livre de contexto|gramáticas livres de contexto]]. Essa classe de linguagem, quando comparada às [[Linguagens regulares]], compreende um universo mais amplo, podendo representar construções como parênteses balanceados e blocos estruturados.

Sendo assim, as linguagens livres de contexto são muito aplicadas em **linguagens artificiais**, principalmente linguagens de programação. Apesar de uma capacidade de representação relativamente mais ampla, segundo a [[Hierarquia de Chomsky]] a classe de linguagens livres de contexto ainda é **relativamente restrita**, com uma implementação relativamente simples e de eficiência razoável.

Pela Hierarquia de Chomsky, as linguagens regulares compreendem um subconjunto das linguagens livres de contexto, portanto toda linguagem regular é livre de contexto.

As linguagens livres de contexto se relacionam com outros formalismos, em particular dois deles são amplamente utilizados. Toda linguagem livre de contexto satisfaz as seguintes propriedades:

- Ela pode ser **gerada** por uma [[Gramática livre de contexto]];
- Ela pode ser **reconhecida** por um [[Autômato com pilha]].

Essa classe de linguagens é fechada para as operações de **união** e **concatenação**, porém não é fechada para as operações de **intersecção** e **complemento**.
