---
created-at: 2020-10-30
---
Em certos casos devemos analisar os limites laterais de uma função, pois não há um limite definido, os limites dependem do "lado" dos valores de $x$, por exemplo:

$$
f(x)=x+\frac{x}{|x|}
$$

Se $x>0,\space |x|=x$, portanto $f(x)=x+1$. Se $x<0,\space |x|=-x$, portanto $f(x)=x-1$. Dessa forma, temos que se $x$ tende a $0$ mantendo-se positivo (pela direita), $f(x)$ tende a $1$, mas se $x$ tende a $0$mantendo-se negativo (pela esquerda), $f(x)$ tende a $-1$.

$$
\lim_{x\to 0^+}f(x)=1\therefore x>0
$$
$$
\lim_{x\to 0^-}f(x)=-1\therefore x<0
$$

Assim, introduzimos novos símbolos na álgebra de limites:

$$\lim_{x\to 0^+}\frac{1}{x}=\frac{1}{0^+}=+\infty\space\lim_{x\to 0^-}\frac{1}{x}=\frac{1}{0^-}=-\infty$$

É importante também dizer que a afirmação $\lim_{x\to x_0}f(x)=a$ é equivalente as afimarções simultâneas de que $\lim_{x\to x_0^+}f(x)=a$ e $\lim_{x\to x_0^-}f(x)=a$.
Portanto se, com ambos os limites definidos em $f(x)$, podemos afirmar que se

$$\lim_{x\to x_0^+}f(x) \not= \lim_{x\to x_0^-}f(x)=a$$

então não existe $\lim_{x\to x_0}f(x)=a$.