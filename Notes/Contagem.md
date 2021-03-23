# Contagem
Combinatória é uma ferramenta importante para a estatística, pois ela permite contar elementos de um conjunto sem necessariamente precisar listar todos esses elementos.
> **Princícipo da adição:** Se $A$ e $B$ são dois conjuntos **disjuntos** com $p$ e $q$ elementos, então $A\cup B$ possui $p + q$ elementos

> **Princícipo da multiplicação:** Se uma decisão $d_1$ pode ser tomada de $x_1$ maneiras; e se, para cada uma dessas decisões, existir $x_2$ maneiras de tomar a decisão $d_2$; e assim por diante até a decisão $d_p$ que pode ser tomada de $x_p$ maneiras; então o número de maneiras de se tomar, sucessivamente, as decisões $d_1,d_2,\dots,d_p$ é $$\prod_{i=1}^{p}x_i=x_1x_2\dots x_p$$

Existem problemas de contagem que aparecem com certa frequência, portanto vale a pena tratar deles mais especificamente.

### Permutação
A palavra permutação significa ordenação. Geralmente os problemas de ordenação seguem o formato: *dados $n$ objetos distintos, de quantos modos é possível ordená-los?*. Fica claro aqui que a **ordem dos elementos importa**. No geral trabalhamos com fatorial para expressar as possibilidades de ordenação dos elementos. Vale lembrar que para representar cada resultado possível, ou seja, cada lista ordenada com os elementos, deve-se usar sempre a notação de vetores ($[e_1, e_2, \dots, e_n]$), pois ela representa o fato de que a ordem dos elementos importa.

### Combinação
Na combinação a **ordem dos elementos não importa**. Geralmente os problemas de combinação seguem o formato: *de quantos modos é possível formar grupos a partir da seleção de $p$ objetos distintos entre $n$ objetos distindos dados?*. A ideia aqui é trabalhar com grupos de elementos, portanto a ordem na qual os elementos estão dispostos não importa. Vale lembrar que para representar cada grupo de elementos deve-se usar sempre a notação de conjuntos ($\{e_1,e_2,\dots,e_p\}$), pois ela representa o fato de que a ordem dos elementos não importa.
> O número de modos que podemos escolher $p$ objetos distintos entre $n$ objetos distintos de forma que não importe a ordem de seleção é dado por:$$\frac{n\times(n-1)\times\dots\times(n-p+1)}{p!}=\frac{n!}{(n-p)!p!}=\binom{n}{p}$$

Na definição acima estamos dividindo por $p!$ pois devemos desconsiderar os conjuntos que estão sendo diferenciados na contagem apenas pela ordem dos elementos.

---

created: 09/03/2021
modified: 09/03/2021
