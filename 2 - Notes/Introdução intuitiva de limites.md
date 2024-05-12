---
created-at: 2020-10-30
---
O operador $\lim_{x\to a}$ define que a variável $x$ está se aproximando infinitamente de $a$, porém seu valor nunca é de fato $a$. Para calcular limites devemos primeiramente manipular a expressão utilizando de propriedades de produtos e fatoração de polinômios para então aplicar o operador e substituir o $x$ da equação por $a$.

Um uso importante dos limites é para definir a continuidade de uma função $f(x)$ em $x_0$. Se $x_0$ está no domínio de $f(x)$ e $\lim_{x\to x_0}f(x)=f(x_0)$ então $f(x)$ é contínua no ponto $x_0$.

Alguns limites com $x$ tendendo a $0$ ou a $\infty$ criam a necessidade de trabalharmos com expressões envolvendo os infinitos, além das noções intuitivas ao se trabalhar com valores infinitamente positivos ou negativos, é necessário se atentar com os seguintes casos, pois eles representam indeterminações:
$$
(+\infty)-(+\infty)\\
$$
$$
(-\infty)+(+\infty)\\
$$
$$
0\times(\pm \infty)
$$

Nos limites da forma $\lim_{x\to\pm\infty}\frac{p(x)}{q(x)}$ , em que $p(x)$ e $q(x)$ são polinômios em $x$, basta considerar apenas os termos de maior grau de ambos os polinômios, ou seja, se:

$$
p(x)=a_nx^n+a_{n-1}x^{n-1}+...+a_1x+a_0
$$
$$
q(x)=b_mx^m+b_{m-1}x^{m-1}+...+b_1x^1+b_0
$$
$$
\therefore\\
$$
$$
\lim_{x\to\pm\infty}\frac{p(x)}{q(x)}=\lim_{x\to\pm\infty}\frac{a_nx^n}{b_mx^m}
$$