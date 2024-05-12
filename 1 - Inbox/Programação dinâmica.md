---
created-at: 2023-01-28
---

A programação dinâmica é uma técnica par ao desenvolvimento de algoritmos assintoticamente eficientes. A ideia central da programação dinâmica é, assim como na técnica de [[Dividir para conquistar]], decompor o problema original em subproblemas e combinar suas soluções. A principal diferença entre essa técnica e dividir para conquistar reside no fato de que na programação dinâmica os subproblemas **não são disjuntos**, ou seja: diferentes subproblemas podem conter os **mesmos subproblemas** repetidas vezes. Tendo isso em vista, a estratégia de programação dinâmica consiste em resolver cada subproblema apenas uma única vez e armazenar esse resultado para cálculos futuros de outros subproblemas.

Duas abordagens em particular podem ser utilizadas na programação dinâmica:

- *Top-down*: partir do problema inicial e calcular os subproblemas recursivamente utilizando **memorização**, ou seja, alguma estrutura de dados para armazenar os resultados dos subproblemas afim de utilizá-los no cálculo de outros subproblemas.
- *Bottom-up*: reverter o problema e resolvê-lo a partir dos menores subproblemas, compondo seus resultados (usando ou não memorização) até obter a solução do problema original.

# Sequência de Fibonacci

Um conhecido exemplo de algoritmo que pode ser significativamente otimizado através do uso de programação dinâmica é o da geração de números da sequência de Fibonacci.

Dada a definição recursiva da sequência de Fibonacci:

$$
\begin{equation*} F(n) =
	\begin{cases}
		 0 \quad \text{se } n=0\\
		 1 \quad \text{se } n=1\\
		 F(n-1) + F(n-2) \quad \text{se } n>1
	\end{cases}
\end{equation*}
$$

Podemos implementar uma função que calcula os primeiros $n$ números da sequência de Fibonacci em OCaml da seguinte forma:

```ocaml
let rec fib n =
  match n with
  | 0 -> 0
  | 1 -> 1
  | n -> fib (n - 1) + fib (n - 2)
```

Analisando a implementação, é possível perceber que há muitas computações repetidas, pois $F(n-2)$ está contido em $F(n-1)$, portando toda a árvore de recursão de $F(n-2)$ será computada duas vezes. Isso ocorre para quase todos os cálculos, e é a principal razão para a ineficiência dessa implementação, que tem complexidade $O(2^n)$.

Podemos utilizar a técnica de programação dinâmica para projetar algoritmos mais eficientes para a sequência de Fibonacci através da memorização de resultados de subproblemas.

Uma abordagem *top-down* para o algoritmo que gera números da sequência de Fibonacci pode ser implementada através de um *array* para armazenar os resultados dos subproblemas da seguinte forma:

```ocaml
let fib_top_down n =
  let results = Array.make (n + 1) 0 in
  let rec fib n =
    match n with
    | 0 -> 0
    | 1 -> 1
    | n ->
      if results.(n) = 0 then results.(n) <- (fib (n - 1) + fib (n - 2));
      results.(n) in
  fib n
```

Da mesma forma, uma abordagem *bottom-up* para o algoritmo pode ser implementada utilizando um loop iterativo ou mesmo utilizando *tail call recursion*, como é exemplificado a seguir:

```ocaml
let fib n =
  let rec fib_tr n a b =
    match n with
    | 0 -> b
    | 1 -> a
    | n -> fib_tr (n - 1) (a + b) a in
  fib_tr n 1 0
```

Em ambas as soluções cada subproblema é calculado apenas uma vez. No caso da abordagem *top-down* os valores são armazenados em um array e as chamadas recursivas podem aproveitar os resultados já calculados. Já no caso da abordagem *bottom-up* o resultado final é construído através da combinação dos subproblemas, que são resolvidos diretamente e compostos para obter os resultados de subproblemas maiores.
