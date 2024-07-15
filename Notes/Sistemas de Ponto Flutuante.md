---
created-at: 2024-05-13
---

Os *sistemas de ponto flutuante (SPF)* consistem em uma maneira padronizada de representar números em uma base. Um SPF assume que o número de dígitos a serem utilizados é fixo e que os expoentes permitidos estão em um intervalo bem definido.

Um SPF é composto de $4$ números inteiros $(b, d, e_m, e_M)$, onde $b$ é a base, $d$ é o número de dígitos (depois da vírgula) da representação, e os expoentes devem estar entre os limites inferior e superior $e_m$ e $e_M$.

Note que se o número tiver mais dígitos que $d$, apenas os $d$ mais significativos são representados. Veja também que caso o número só possa ser representado na forma normal com um expoente fora do intervalo $[e_m, e_M]$ ele não pode ser representado no SPF. Dessa forma, **nem todo número real** pode ser **representado** exatamente em um dado SPF, e é possível que **números diferentes** tenham a **mesma representação**.

Um número qualquer, diferente de $0$ representado em um dado SPF $(b, d, e_m, e_M)$ tem a forma:

$$s 0, d_1d_2d_3\dots d_d \times b^e$$

onde $s$ é o sinal, $d_1 \dots d_d$ é a *mantissa*, com $d_1 \neq 0$ e $e_m\leq e \leq e_M$.

Os sistemas de ponto flutuante possuem problemas inerentes de precisão que se tornam mais claros ainda na aplicação de operações sobre os números. É possível que o produto de dois números não exista no SPF, que as propriedades básicas das operações entre números reais não sejam satisfeitas, entre outros problemas que resultam do uso de apenas um subconjunto dos reais para representação numérica.

