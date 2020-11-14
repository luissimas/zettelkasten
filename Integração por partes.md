# Integração por partes
A integração por partes é equivalente a uma [[Retas tangentes e regras de derivação#Regras de derivação|regra do produto]] inversa.  A ideia é que aplicando a integração por partes, nós transformamos uma integral em outra, dessa vez mais fácil de ser calculada.
Supondo que $u(x)$ e $v(x)$ são funções deriváveis em um intervalo $I\subset\mathbb{R}$, temos que:
$$
\int{u(x)v'(x)}\,dx=u(x)v(x)-\int{v(x)u'(x)}\,dx
$$
Substituindo $du=u'(x)dx$ e $dv=v'(x)dx$, podemos abreviar a fórmula, sendo assim temos:
$$
\int{u\cdot dv}=u\cdot v-\int{v\cdot du}
$$
Portanto, ao nos depararmos com uma integral da forma $\displaystyle\int{f(x)g(x)}\,dx$, devemos substituir uma das funções por $u$ e outra pelo diferencial $dv$ e então aplicar a fórmula. Mas como saber qual a substituição correta?

## LIATE
LIATE é um anagrama que descreve a ordem na qual devemos substituir as funções para aplicar corretamente a integração por partes.
$$
\begin{array}{|c|c|c|c|c|}
\hline
\LARGE\mathsf{L}&\LARGE\mathsf{I}&\LARGE\mathsf{A}&\LARGE\mathsf{T}&\LARGE\mathsf{E}\\
\hline
\text{\textbf{L}ogarítmicas}&\text{\textbf{I}nversas de}&\text{\textbf{A}lgébricas}&\text{\textbf{T}rigonométricas}&\text{\textbf{E}xponenciais}\\
&\text{trigonométricas}\\
\hline
\end{array}
$$
A ideia é sempre substituir:
- como função $u$:  a função mais a esquerda no anagrama;
- como diferencial $dv$ : a função mais a direita no anagrama;

---

created: 10/11/2020
modified: 10/11/2020

[[calculo1v2020aula16.pdf]]