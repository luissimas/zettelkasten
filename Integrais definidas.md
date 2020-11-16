# Integrais definidas
A ideia das integrais definidas surge a partir da situação da soma das áreas de diversos retângulos sob o gráfico de $f$. Porém conforme os retângulos vão ficando cada vez mais estreitos e mais numerosos, podemos dizer que a soma da área desses retângulos (tão estreitos quanto linhas, ou seja: infinitamente estreitos) tende a $\displaystyle\int_a^b{f(x)}\,dx$, ou seja:
$$
\lim_{\max{\Delta x_i\to 0}}\sum_{i=1}^{n}f(c_i)\Delta x_i = \int_a^b{f(x)}\,dx
$$
Então, se $f(x)>=0$ em $[a,b]$, temos:
$$
\int_a^b{f(x)}\,dx=\text{área sob o gráfico de f no intervalo } [a,b]
$$
É importante ressaltar que essa área tem sinal. E para algumas aplicações isso faz diferença.

## Propriedades
Podemos assumir algumas propriedades das integrais definidas:
$$
\begin{aligned}
&\int_a^b{(f(x)+g(x))}\,dx=\int_a^b{f(x)}\,dx+\int_a^b{g(x)}\,dx\\
&\int_a^b{k\cdot f(x)}\,dx=k\cdot \int_a^b{f(x)}\,dx\\
&\int_a^c{f(x)}\,dx+\int_c^b{f(x)}\,dx=\int_a^b{f(x)}\,dx\\
&\text{se } f(x)\le g(x)\text{, para todo }x\in[a,b]\text{, então}\int_a^b{f(x)}\,dx\le\int_a^b{g(x)}\,dx
\end{aligned}
$$
Existem ainda algumas convenções úteis da notação de integrais definidas, essas propriedades não partem de nenhuma definição, portanto são apenas convenções para facilitar o uso das integrais.
$$
\int_a^a{f(x)}\,dx=0\\
\int_b^a{f(x)}\,dx=- \int_a^b{f(x)}\,dx
$$
É possível ainda definir o *Teorema do valor médio para integrais*, que fornece a seguinte definição:

Se $f$ é contínua no intervalo [a,b], existe $c\in[a,b]$ tal que
$$
\int_a^b{f(x)}\,dx=f(c)\cdot(b-a)
$$


## Teorema fundamental do cálculo
Serve para conectar a definição de integral definida como cálculo das funções primitivas ([[Integrais indefinidas]]).

## Técnicas de integração 
[[Integração definida por mudança de variável]]

[[Integração definida por partes]]

# Aula
- [ ] Figuras com os gráficos da aula
- [X] Integral é área **com sinal**
- [X] Descrever melhor a notação
	- [X] Notação com o somatório das areas dos retângulos
- [X] Propriedades (Proposição 17.2)
- [X] Convenções da notação (Observação 17.5)
- [ ] Teorema fundamental do cálculo (conectar integral definida com indefinida)
	- [ ] Primeira versão 
	- [ ] Segunda versão
- [ ] Técnicas de derivação
		

---

created: 15/11/2020
modified: 16/11/2020

[[calculo1v2020aula17.pdf]]
