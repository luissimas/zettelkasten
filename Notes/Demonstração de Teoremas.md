# Demonstração de Teoremas
Antes de mais nada é essencial definir alguns termos importantes quando se trata de teoremas e demonstrações.

> ***Definição***
> Uma *definição* estabelece condições específicas para que um objeto seja o que ele é, de modo completo e preciso.

> ***Conjetura***
> Uma *conjetura* é uma afirmação para a qual ainda não existe prova, mas que provavelmente é verdadeira. Uma conjetura ainda não demonstrada é chamada de conjetura aberta.

> ***Teorema***
> Um *teorema* é uma afirmação (conjetura) **devidamente demonstrada** (provada). É possível que existam diversas provas para um mesmo teorema.

> ***Prova***
> Uma *prova* é uma dissertação que mostra de maneira **irrefutável** que uma dada afirmação é verdadeira.

## Prova por refutação
A prova por refutação consiste em refutar uma afirmação, ou seja, provar que ela é falsa. A maneira mais simples de provar que uma afirmação é falsa é apresentar um *contraexemplo* para aquela afirmação, ou seja, mostrar um único caso específico para o qual ela não seja verdadeira.

## Prova por exaustão
A prova por exaustão consiste em verificar que uma afirmação é verdadeira para todos os elementos sobre os quais ela se refere.
Note que só é possível aplicar a prova por exaustão se a conjetura é uma afirmação sobre um conjunto finito de elementos.

## Prova direta
A [[Técnicas dedutivas#Prova direta | prova direta]] é uma sequência de passos baseados em definições e resultados já conhecidos que permite nos levar da *hipótese* $P$ até a conclusão $Q$ para provar teoremas na forma *"se $P$ então $Q$"*.

## Prova por contraposição
A prova por contraposição se baseia no fato de que a afirmação "se $p$ então $b$" é [[Consequência e equivalência lógica#Equivalência lógica | logicamente equivalente]] a "se não $p$ então não $q$".

>$$
  p \implies q \equiv \lnot p \implies \lnot q
>$$

A ideia desse tipo de prova é, dado um teorema na forma $p \implies q$, provar a validade de sua *contrapositiva* $\lnot p \implies \lnot q$.

## Prova indireta (redução ao absurdo)
A [[Técnicas dedutivas#Prova indireta (redução ao absurdo) | prova indireta]] consiste em, dada uma proposição na forma "se $p$ então $q$", mostrar que é impossível $p$ ser verdadeiro ao mesmo tempo que $q$ seja falso.

---

created: 24/08/2021
