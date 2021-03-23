# Variáveis aleatórias
Apesar do nome, as variáveis aleatórias na realidade são funções que associam a cada elemento do espaço amostral um número, esse número é definido de acordo com o que se deseja representar com a variável aleatória.
> Dado um experimento aleatório com espaço de probabilidade ($\Omega, \mathcal{F}, P$), uma **variável aleatória** é qualquer função $X:\Omega\rightarrow\mathbb{R}$ tal que
$$X^{-1}(I)=\{\omega\in\Omega:X(\omega)\in I\}\in\mathcal{F}$$
>Ou seja, X é uma função tal que sua imagem inversa são eventos de $\mathcal{F}$

Por exemplo, a expressão $X^{-1}(\{0\})$, é lida como: imagem inversa do conjunto unitário $0$.

## Variáveis aleatórias discretas
A variável aleatória $X:\Omega\rightarrow\mathbb{R}$ é chamada de **discreta** quando seu conjunto imagem $Im(X)$ é finito ou infinito enumerável, ou seja, os valores possíveis de $X$ podem ser escritos em forma de lista:
>$$
Im(X)=
\begin{cases}
  \{x_1,x_2,\dots,x_n\},\qquad\text{ no caso finito;}\\
  \{x_1,x_2,x_3,\dots\},\qquad\text{ no caso infinito;}\\
\end{cases}
>$$

### Distribuição das probabilidades de uma variável aleatória
Quando trabalhamos com variáveis aleatórias, é possível representar como as probabilidades se distribuem ao longo dos possíveis valores que a variável assume. Fazemos isso através de uma **função de distribuição de probabilidade** que associa para cada valor $x\in Im(X)$ uma probabilidade $p_X(x)\in [0,1]$.
>A função de distribuição de probabilidade $p_x:\mathbb{R}\rightarrow[0,1]$ é dada por: $$
p_X(x)=
\begin{cases}
  P(X=x),\qquad\text{ se } x\in Im(X)\\
  0,\qquad\text{ caso contrário}\\
\end{cases}
>$$ com

---

created: 23/03/2021
modified: 23/03/2021
