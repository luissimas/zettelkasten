# Limite de funções de várias variáveis
O conceito de limite aplicado para funções de várias variáveis é muito similar ao conceito de limite para funções de uma variável, porém com a introdução de novas variáveis são introduzidas também novas dificuldades e uma complexidade adicional na manipulação desses conceitos.
Seja $f: A \subset \mathbb{R}^2 \to \mathbb{R}$ uma função, $(x_0, y_0)$ um ponto de acumulação de $A$ e $L \in \mathbb{R}$, temos
$$
    \lim_{(x,y) \to (x_0, y_0)}{f(x,y)} = L
$$
se e somente se para todo $\epsilon > 0$ existe $\delta > 0$ tal que, para todo $(x,y) \in D_f$, $0 < ||(x,y) - (x_0, y_0)|| < \delta \implies |f(x,y) - L| < \epsilon$.
