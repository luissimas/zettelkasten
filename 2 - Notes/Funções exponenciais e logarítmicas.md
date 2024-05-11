# Revisão
É importante lembrar os conceitos básicos de potências e logarítmos, suas propriedades e relações. Sendo $a$ e $b$ um número real positivo, temos que:

$$
a^{\frac{m}{n}}=\sqrt[n]{a^m}
$$
$$
a^x\times a^y=a^{x+y}
$$
$$
(a^x)^y=a^{x\times y}
$$
$$
a^{-x}=\frac{1}{a^x}
$$
$$
a^{x-y}=\frac{a^x}{a^y}
$$
$$
a^x\times b^x=(ab)^x
$$

Sendo $a>0$, $a\not =1$, e $x>0$, o logaritmo de $x$ na base $a$, denotado por $\log_ax$ é o expoente ao qual devemos elevar $a$ para obtermos $x$, ou seja:

$$\log_ax=y\implies a^y=x\therefore
a^{\log_ax}=x$$

Sendo $x$ e $y$ reais positivos, $z$ real, e $a>0$, $a\not =1$, temos que:

$$ 
\log_a(xy)=\log_ax+\log_ay
$$ 
$$ 
\log_a\frac{x}{y}=\log_ax-\log_ay
$$ 
$$ 
\log_ax^z=z\log_ax
$$ 
$$ 
\log_ax^\frac{1}{z}=\frac{\log_ax}{z}
$$ 
$$ 
\log_ax=\frac{\log_bx}{\log_ba}\text{ se } b>0 \text{, }b\not=1
$$ 

# Função exponencial
Sendo $a$ um número real, positivo e com $a\not =1$, define-se a função exponencial de base $a$ por:

$$f(x)=a^x$$

sendo que $f(x)$ é contínua em $\mathbb{R}$, ou seja:

$$\lim_{x\to x_0}a^x = a^{x_0}, \text{ para cada } x_0\in\mathbb{R}$$

também é possível afirmar que,se $a>1$, a função $f(x)=a^x$ é crescente, com $\lim_{x\to+\infty}a^x=+\infty$, e se $0<a<1$ a função é decrescente, com $\lim_{x\to+\infty}a^x=0$

# Função logarítmica
Sendo $a$ um número real, positivo e com $a\not =1$, define-se a função logarítmica de base $a$ por:

$$f(x)=\log_ax$$

sendo que $f(x)$ é contínua em $\mathbb{R}$, ou seja:

$$\lim_{x\to x_0}a^x = a^{x_0}, \text{ para cada } x_0\in\mathbb{R}$$

também é possível afirmar que,se $a>0$, a função $f(x)=\log_ax$ é crescente, com $\lim_{x\to+\infty}a^x=+\infty$, e se $0<a<1$ a função é decrescente, com $\lim_{x\to+\infty}a^x=-\infty$

# Número *e*
O número $e\approx2,71828$ é muito importante para cálculos envolvendo funções exponenciais e logarítmicas, ele é definido como sendo o limite

$$e=\lim_{n\to+\infty}\Big(1+\frac{1}{n}\Big)^n$$

admitimos que, para $x\in\mathbb{R}$:

$$\lim_{x\to\pm\infty}\Big(1+\frac{1}{x}\Big)^x=e\\
\lim_{x\to0}(1+x)^{\frac{1}{x}}=e$$

Temos também que $1^{\pm\infty}$ é um símbolo de indeterminação.

---

created: 03/11/2020
modified: 06/11/2020

[[calculo1v2020aula09.pdf]]