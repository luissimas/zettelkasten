As séries de Taylor são uma importante ferramenta que nos permite encontrar as séries relacionadas à funções.

Se uma função $f$ pode ser escrita como uma série de potências, ou seja:
$$
f(x) = \sum_{n=0}^{\infty}{cn(x-x_0)^n}
\text{, } x \in ]x_0 - R, x_0 + R[
$$

então o coeficiente $c_n$ é dado por:

$$
c_n = \frac{f^{(n)}(x_0)}{n!}, \quad n \geq 0
$$

Dada uma função $f$ com derivadas de todas as ordens em algum intervalo contendo $x_0$, então, a *série de Taylor* de $f$ desenvolvida em torno de $x_0$ é dada por:

$$
\sum_{n=0}^{\infty}{\frac{f^{(n)}(x_0)}{n!}}(x-x_0)^n
$$

> Se uma função $f$ é dada por uma série de potências, então essa série é a *série de Taylor* dessa função.

Note que não são todas as funções que possuem uma série de Taylor que podem ser expressadas por essa série em um determinado intervalo. Algumas funções não coincidem com suas séries de Taylor em nenhum ponto.