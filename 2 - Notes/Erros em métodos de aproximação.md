---
created-at: 2024-05-13
---

Em se tratando de métodos de aproximação, a existência de erros é inevitável. Portanto, são necessários métodos para entender o comportamento desses erros e estabelecer resultados confiáveis para os mesmos.

Se em uma dada medida o valor esperado é $x$ e o valor efetivamente medido (ou aproximado) é $x_0$, então o **erro absoluto** é dado por

$$ |x-x_0| $$

e o **erro relativo** é

$$ \frac{|x-x_0|}{x} $$

Note que essa definição de erro depende do valor esperado (ou o valor real, não aproximado). O problema é que muitas vezes esse valor não é conhecido e não pode ser obtido facilmente. Entretanto, é possível obter um **limitante superior** para os erros que garante que o erro não excederá um determinado valor.

Se sabemos que $x_m < x < x_M$, então a aproximação for dada por $\frac{x_M + x_m}{2}$, o **erro absoluto** está limitado superiormente por

$$ \frac{x_M-x_m}{2} $$

e como $x_m < x$, o **erro relativo** está limitado superiormente por

$$ \frac{x_M - x_m}{2x_m} $$

# Erros de representação

Muitas vezes os erros podem surgir de sua representação, como é o caso em [[Sistemas de Ponto Flutuante]]. Em geral, a representação de um número real $x$ em uma base $b$ se dá através de uma soma (possivelmente infinita) de potências de $b$:

$$
x=s \sum_{k = - \infty}^{N} x_k b^k
$$

onde $b, x_k \in \mathbb{N}, N \in \mathbb{Z}, b>1, x_N > 0, 0 \leq x_k < b$ e $s$ é o sinal de $x$. Nessas condições, garante-se que todo número real tem uma **única representação** na base $b$.

## Dígitos significativos corretos

Dado um número $x$ com sua representação representada por $(x_Nx_{N-1}\dots x_1x_0,x_{-1}x_{-2}\dots)_b$, se o erro absoluto é menor que $\frac{1}{2}b^m$, dizemos que $x_m$ é um dígito significativo exato.

