---
created-at: 2023-01-29
---

Linguagens regulares são [[Linguagem formal|linguagens formais]] geradas por [[Gramática regular|gramáticas regulares]]. De acordo com a [[Hierarquia de Chomsky]], as linguagens regulares compõe a classe mais **simples** de linguagens. Isso implica que é possível desenvolver algoritmos de reconhecimento, geração ou conversão entre os formalismos dessas linguagens de **pouca complexidade**, **alta eficiência** e **fácil implementação**.

Devido à sua simplicidade, as linguagens regulares possuem **limitações de expressividade**. A maioria das linguagens de programação de propósito geral não são regulares, pois não é possível expressá-las através de uma linguagem regular. Entretanto, devido à simplicidade e fácil implementação de algoritmos que manipulam essas linguagens, as linguagens regulares são usadas extensivamente na computação. Alguns exemplos comuns de uso de linguagens regulares são a análise léxica dos compiladores, sistemas de animação, hipertextos e hipermídias.

As linguagens regulares possuem propriedades que às relacionam com outros formalismos. Toda linguagem regular satisfaz as seguintes propriedades:

- Ela pode ser **gerada** por uma [[Gramática regular]];
- Ela pode ser **reconhecida** por um [[Autômato finito]];
- Ela pode ser **descrita** por uma [[Expressão regular]].

Uma característica importante dessa classe de linguagens é que ela é fechada para algumas operações, dentre elas a **união**, **concatenação**, **complemento** e **intersecção**. Portanto, dadas duas linguagens regulares, aplicar a elas quaisquer uma dessas quatro operações resulta em uma outra linguagem regular.
