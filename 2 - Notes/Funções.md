# Funções
Dados dois conjuntos $S$ e $T$, uma função $f$ de $S$ em $T$, denotada por $f:S \to T$, é um subconjunto do produto cartesiano $S \times T$ tal que cada elemento de $S$ aparece **exatamente uma vez** como o **primeiro** elemento de um par ordenado. Nesse caso $S$ é o *domínio* e $T$ é o *contradomínio* da função. Dado um par ordenado $(s,t)$ pertencente à função, $t$ é a *imagem* de $s$ sob $f$, $s$ é uma *imagem inversa* de $t$ sob $f$ e diz-se ainda que $f$ leva $s$ em $t$, ou seja: $t = f(s)$. O conjunto de *todos os segundos elementos* dos pares ordenados de $f$ é chamado de **imagem**. A imagem é um subconjunto do contradomínio, e não necessariamente igual a ele.

## Função sobrejetora
Uma função $f: S \to T$ é dita *sobrejetora* se sua **imagem é igual ao seu contradomínio**, ou seja, não há elementos de $T$ sem associação com algum elemento de $S$.

## Função injetora (um pra um)
Uma função $f: S \to T$ é dita *injetora* se **nenhum elemento** de $T$ é a imagem sob $f$ de **dois ou mais elementos distintos** de $S$, ou seja, elementos distintos de $S$ têm imagens diferentes em $T$.

## Função bijetora
Uma função $f: S \to T$ é dita *bijetora* se é, ao mesmo tempo, injetora e sobrejetora. Isto é, se **todos** os elementos do contradomínio estão associados a **exatamente um** elemento do domínio.

## Função inversa
A *inversa* de uma função $f$ é uma relação inversa $f^{-1}$ obtida **invertendo-se a ordem de todos os pares ordenados** em $f$. Note que nem sempre a inversa de uma função é também uma função.

## Função inversível
Uma função $f : S \to T$ é inversível se sua inversa é uma função de $T$ para $S$, isso ocorre somente se $f$ é **bijetora**.

## Composição de funções
Dadas duas funções $f : S \to T$ e $g : T \to V$, a função composta $g \circ f$ é a função de $S$ em $V$ definida por $(g \circ f) = g(f(x))$.
Note que para fazer a composição de funções é necessário que os domínios e imagens sejam compatíveis. É importante também destacar que a ordem de composição das funções altera a função resultante da composição.
