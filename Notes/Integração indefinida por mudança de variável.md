# Integração indefinida por mudança de variável
A mudança de variável é uma técnica equivalente a uma [[Derivação em cadeia e implícita#Derivação em cadeia|regra da cadeia]] inversa. Supondo que $F(x)$ e $G(x)$ são, respectivamente, primitivas de $f(x)$ e $g(x)$ temos que:
$$
\int{f(G(x))\cdot g(x)}\,dx=F(G(x))+C
$$
Portanto, quando temos uma integral na forma $\displaystyle\int{f(g(x))\cdot g'(x)}$, em alguns casos podemos substituir $g(x)$ por uma variável $u$ para então integrar e no final retornar para $g(x)$ ou seja:
$$
\int{f(g(x))\cdot g'(x)}\,dx=\int{f(u)\,du}=F(u)+C=F(g(x))+C
$$


---

created: 10/11/2020
modified: 10/11/2020

[[calculo1v2020aula15.pdf]]