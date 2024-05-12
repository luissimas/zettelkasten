---
created-at: 2023-02-04
---

O Teorema mestre é uma ferramenta da [[Análise assintótica]] que nos permite analisar a complexidade de algoritmos que usam [[Dividir para conquistar]] através de suas fórmulas de recorrência.

O Teorema mestre enuncia que, dada uma recorrência na forma:

$$
T(n) = aT\left(\frac{n}{b}\right) + cn^d
$$

Então, se $n=b^k$ e para $k>1$, $a \geq 1$, $b>1$, $c>0$ e $d \geq 0$, tem-se que:

1. $T(n) = O(n^d)$ se $a<b^d$
2. $T(n) = O(n^d \log{n})$ se $a=b^d$
3. $T(n) = O(n^{\log_b{a}})$ se $a>b^d$
