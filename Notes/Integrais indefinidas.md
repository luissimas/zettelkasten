---
created-at: 2020-11-04
---
Para calcular as integrais fazemos o processo inverso das derivadas. Sendo $f(x)$ e $F(x)$ definidas em um intervalo $I\subset\mathbb{R}$, temos que $F(x)$ é uma primitiva de $f(x)$ se $F'(x)=f(x)$ para cada $x\in I$.
Sabendo que a derivada de uma constante é sempre $0$, podemos somar qualquer constante a $F(x)$ e ela ainda será primitiva de $f(x)$, daí o termo *integral indefinida*.
Portanto, sendo $F(x)$ uma primitiva de $f(x)$ no intervalo $I$,  denotamos a integral de $f(x)$ usando a notação de *Leibniz*:
$$
\int{f(x)}\,dx=F(x)+C
$$
Onde $C$ representa uma constante genérica tal que $C\in\mathbb{R}$.

Existem algumas propriedades para manipular expressões envolvendo integrais, definidas também a partir das regras de derivação:
$$
\int{k\cdot f(x)}\,dx=k\cdot F(x)+C
$$
 $$
\int{f(x+b)}\,dx=F(x+b)+C
$$
$$
\int{f(ax)}\,dx=\frac{1}{a}F(ax)+C
$$

Os dois métodos usado para o cálculo de integrais indefinidas são a [[Integração por mudança de variável|integração por mudança de variável]] e a [[Integração por partes|integração por partes]].
Vale lembrar que nenhuma dessas técnicas resolvem todos os problemas envolvendo integrais, mas pelo menos nos ajudam em boa parte deles.

Usando as [[Retas tangentes e regras de derivação#Regras de derivação|regras de derivação]] e as [[Integrais indefinidas#Técnicas de integração|técnicas de integração]], podemos definir algumas integrais indefinidas cujo cálculo é imediato:
$$
\begin{array}{|c|c|}
\hline
\displaystyle\int{x^\alpha}\,dx=\frac{x^{\alpha+1}}{\alpha+1}+C, (\alpha \not=-1) &\displaystyle \int{\frac{1}{x}}\,dx=\ln{|x|}+C \\
\hline
\displaystyle\int{\sin{x}}\,dx=-\cos{x}+C &\displaystyle \int{\cos{x}\,dx=\sin{x}+C} \\
\hline
\displaystyle\int{e^x}\,dx=e^x+C & \displaystyle\int{a^x}\,dx=\frac{a^x}{\ln{a}}+C \\
\hline
\displaystyle\int{\sec^2{x}\,dx=\tan{x}+C} & \displaystyle\int{\csc^2{x}\,dx=-\cot{x}+C} \\
\hline
\displaystyle\int{\sec{x}\cdot\tan{x}}\,dx=\sec{x}+C &\displaystyle \int{\csc{x}\cdot\cot{x}}\,dx=-\csc{x}+C \\
\hline
\displaystyle\int{\sec{x}}\,dx=\ln{|\sec{x}+\tan{x}|} +C &\displaystyle \int{\csc{x}\,dx}=-\ln{|\csc{x}+\cot{x}|}+C\\
\hline
\displaystyle\int{\tan{x}}\,dx=-\ln{\cos{x}} +C &\displaystyle \int{\cot{x}}\,dx=\ln{|\sin{x}|} +C\\
\hline
\displaystyle\int{\frac{1}{1+x^2}}\,dx=\arctan{x}+C &\displaystyle \int{\frac{1}{\sqrt{1-x^2}}}\,dx=\arcsin{x}+C \\
\hline
\displaystyle\int{\frac{1}{a^2+x^2}}\,dx=\frac{1}{a}\arctan{\frac{x}{a}} +C &\displaystyle \int{\frac{1}{a^2-x^2}}\,dx=\frac{1}{2a}\ln{\Big|\frac{a+x}{a-x}\Big|} +C\\
\hline
\displaystyle\int{\frac{1}{\sqrt{a^2-x^2}}}\,dx=\arcsin{\frac{x}{a}} +C &\displaystyle\int{\frac{1}{\sqrt{x^2+\lambda}}}\,dx=\ln{|x+\sqrt{x^2+\lambda}|} +C\\
\hline
\end{array}
$$