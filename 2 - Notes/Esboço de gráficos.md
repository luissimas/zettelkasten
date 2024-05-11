# Crescimento e descrescimento
Se uma função $f$ é contínua no intervalo fechado $[a,b]$ e tem derivada nos pontos do intervalo aberto $]a,b[$, temos que:

Se $f'(x)>0$ nos pontos do intervalo aberto $]a,b[$, então $f(x)$ é crescente no invervalo $[a,b]$.
Se $f'(x)<0$ nos pontos do intervalo aberto $]a,b[$, então $f(x)$ é decrescente no invervalo $[a,b]$.
Se $f'(x_0)=0$ em algum ponto do intervalo aberto $]a,b[$, então $(x_0,f(x_0))$ é um possível ponto de mínimo ou máximo local.

Para encontrar pontos de máximo e pontos de mínimo locais uma boa dica é buscar intervalos $[a,x_0]$ e $[x_0,b]$ tais que $f$ é crescente em $[a,x_0]$ e descrescente em $[x_0,b]$ e vice-versa.]

# Concavidades
Sendo $f(x)$ uma função derivável, temos sua derivada $f'(x)$ e a derivada da derivada de $f(x)$, representada por $f''(x)$. Outras representações da derivada segunda incluem:

$$f''(x)=f^{(2)}(x)=\frac{d^2y}{dx^2}=\frac{d}{dx}\bigg(\frac{dy}{dx}\bigg)$$

Analogamente, é possível definir para cada $n\geq2$

$$f^{(n)}(x)=\frac{d^ny}{dx^n}=\frac{d}{dx}\bigg(\frac{d^{n-1}y}{dx^{n-1}}\bigg)$$

Com $f''(x)$  definida, podemos dizer que, para um intervalo aberto $I$:

Se $f''(x)>0$ para todo $x\in I$ então a curva $f(x)$ é côncava para cima no intervalo $I$.
Se $f''(x)<0$ para todo $x\in I$ então a curva $f(x)$ é côncava para baixo no intervalo $I$.
Se $f''(x_0)=0$ então $(x_0,f(x_0))$ é um ponto crítico da curva $f(x)$ e um possível ponto de inflexão.

# Limites
Para finalizar o esboço de um gráfico de uma função $f(x)$, é interessante calcular $lim_{x\to+\infty}f(x)$ e $lim_{x\to-\infty}f(x)$ para esboçar um ponto extremo da função ou verificar se ela é definida para todo $x\in\mathbb{R}$.

# Retas assíntotas
Em algumas funções quando a curva $f(x)$ se aproxima indefinidamentede uma reta, a essa reta damos o nome de reta assíntota da curva $f(x)$.
Para detectar uma assíntota vertical, basta buscar por algum ponto no qual $f(x)$ nao é definida e calcular os limites de laterais da função para esse ponto. No caso das assíntotas horizontais, basta calcular os limites de $f$ para $x\to+\infty$ ou $x\to-\infty$. Já o caso das assíntotas inclinadas se mostra mais complexo. 
Dada uma reta no formato $y=ax+b$, temos que: 

Se $y$ for assíntota do gráfico de $f$ pela direita então $lim_{x\to+\infty}[f(x)-(ax+b)]=0$

Se $y$ for assíntota do gráfico de $f$ pela esquerda então $lim_{x\to-\infty}[f(x)-(ax+b)]=0$

Para determinar os coeficientes $a$ e $b$ da reta assíntota $y$ temos as seguintes definições:

$$\lim_{x\to\pm\infty}\frac{f(x)}{x}=a\\\space\\
\lim_{x\to\pm\infty}(f(x)-ax)=b$$

---

created: 03/11/2020
modified: 06/11/2020

[[calculo1v2020aula06.pdf]]
[[calculo1v2020aula07.pdf]]

