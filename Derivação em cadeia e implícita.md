# Derivação em cadeia
A derivação em cadeia é uma técnica que nos permite calcular a derivada de uma composição de funções, tais como $f(g(x))$. Se $y=f(u)$ e $u=g(x)$, sendo ambas deriváreis então:
$$
\frac{dy}{dx}=\frac{dy}{du}\times\frac{du}{dx}
$$
$$
y'=[f(g(x))]'=f'(g(x))\times g'(x)
$$

# Derivação implícita
Muitas vezes nos deparamos com problemas que, ao invés de trazerem algo como $f(x)$, nos apresentam equações $F(x,y)=c$, e algumas vezes não é prático isolar o $y$, portanto é necessário trabalhar com a equação nesse formato. 
Para obter a derivada $\frac{dy}{dx}$ a partir de uma equação $F(x,y)=c$, derivamos ambos os membros desta equação em relação à variável $x$, considerando $y=f(x)$.
Exemplo: Obter $\frac{dy}{dx}$ a partir da equação $x^2+y^2=2$, lembrando que $y^2=f(x)^2$

$$
x^2+y^2=2
$$
$$
(x^2+y^2)'=(2)'
$$
$$
(x^2)'+(y^2)'=0
$$
$$
(x^2)'+(y^2)'=0
$$
$$
2x+2yy'=0
$$
$$
2yy'=-2x
$$
$$
y'=-\frac{x}{y}
$$

---

created: 30/10/2020
modified: 06/11/2020

[[calculo1v2020aula03.pdf]]