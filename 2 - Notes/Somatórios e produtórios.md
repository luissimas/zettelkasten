Somatórios e produtórios são estruturas matemáticas muito úteis para descrever valores resultantes de uma iteração sobre um determinado número de parcelas. Pelas suas similaridades, o foco aqui será nos somatórios, porém note que as propriedades de somatórios podem ser facilmente adaptadas para produtórios.
Um somatório é uma notação utilizada para indicar uma **soma** cujas parcelas obedecem a um padrão. A forma geral de um somatório é:

$$
\sum_{k=m}^{n}{f(k)}
$$

Onde $k$ é o *índice*. $f(k)$ é uma fórmula que depende de $k$, também chamada de *termo geral*. $m$ e $n$ são inteiros que não dependem de $k$.
O *domínio* do somatório é o conjunto dos índices dos termos do somatório, ou seja, os valores que $k$ assume. Note que o valor final do somatório pode mudar caso seu domínio seja alterado.

Existem diversas propriedades importantes dos somatórios, as principais são enunciadas a seguir:

- Colocando a constante em evidência: $\displaystyle \sum_{k \in K}{c f(x)} = c\sum_{k \in K}{f(x)}$
- Associatividade: $\displaystyle \sum_{k \in K}{(f(x) \pm g(x))} = \sum_{k \in K}{f(x)} \pm \sum_{k \in K}{g(x)}$
- Decomposição do domínio: se $\{K_1, K_2\}$ é uma partição de $K$, então: $\displaystyle \sum_{k \in K}{f(x)} = \sum_{k \in K_1}{f(x)} + \sum_{k \in K_2}{f(x)}$
- Trocando o domínio: se $p$ é uma função bijetora de $K$ para um conjunto $J \subseteq \mathbb{Z}$, então: $\sum_{k \in K}{f(p(k))} = \sum_{j \in J}{f(j)}$

# Somatório de uma constante
Dada uma constante $c$, isto é, $c$ não depende do índice do somatório, temos que:

$$
\sum_{i=1}^{n}{c} = nc
$$

# Somatório do índice
Dado um somatório de índice $k$, temos:

$$
\sum_{k=1}^{n}{k} = \frac{n(n+1)}{2}
$$

# Somatório telescópico
Dado um somatório de índice $k$, com $X_k$ indicando o *k-ésimo* elemento, temos:

$$
\sum_{k=1}^{n}{(X_{k+1} - X_k)} = X_{n+1} - X_1
$$

# Somatório dos quadrados dos índices
Dado um somatório de índice $k$, temos:

$$
\sum_{k=1}^{n}{k^2} = \frac{n(n+1)(2n+1)}{6}
$$