---
created-at: 2021-02-24
---
Aplicando os conceitos de [[Posto de matriz|posto]] para analisar [[Sistemas de equações lineares|sistemas lineares]] na forma de matrizes *l-reduzidas* podemos rapidamente indentificar características importantes do sistema. Segundo a definição do *Teorema de Rouché-Capelli*:
Seja um sistema linear de $m$ equações a $n$ variáveis $AX=B$, cuja matriz dos coeficientes $A$ tem um posto $p$ e cuja matriz ampliada $Ã$ tem posto $q$. Então:
1. se $p \neq q$, o sistema é impossível
2. se $p = q = n$, o sistema é possível e determinado
3. se $p = q < n$ , o sistema é possível e indeterminado, com grau de liberdade $n-p$

Quando nos deparamos com um sistema indeterminado, devemos representá-lo de uma forma específica escolher as variáveis livres, colocá-las em forma de parâmetro e evidenciá-las. Por falta de uma explicação formal do material fica aqui o exemplo:
$$
\widetilde{A}=
\begin{bmatrix}
  1&20&0&3&10\\
  0&0&1&1&5\\
  0&0&0&0&0\\
\end{bmatrix}
$$
Sendo $Ã$ a matriz ampliada de um sistema nas variáveis $x$, $y$, $z$ e $w$. Temos que as variáveis livres são as que não são pivôs, nesse caso $y$ e $w$.
Resolvendo as duas equações representadas pelas linhas não-nulas, temos que:
$$
\begin{align}
  x&=10-20y-3w\\
  z&=5-w
\end{align}
$$
Agora, utilizando parâmetros para representar as variáveis livres ($y=t$ e $w=s$), escrevemos as soluções evidenciando esses parâmetros:
$$
\begin{align}
  (x,y,z,w)&=(10-20t-3s,t,5-s,s)\\
  (x,y,z,w)&=(10,0,5,0) + t(-20,1,0,0) + s(-3,0,-1,1):\space t,\space s \in \mathbb{R}
\end{align}
$$

# Sistemas Lineares Homogêneos
Usando sistemas lineares homogêneos é possível encontrar a parte relacionada aos parâmetros da solução do sistema equivalente não-homogêneos sem ter que lidar com os termos independentes no escalonamento.

Um sistema linear é **homogêneo** se os termos independentes são todos nulos, ou seja, um sistema na forma $AX = 0$

Nesse caso, sempre há uma solução nula $(x_1,\dots,x_n) = (0,\dots,0)$ para o sistema. Mas ainda é necessário verificar se ele possui apenas a solução nula (sistema homogêneo determinado), ou se existem outras soluções possíveis (sistema homogêneo indeterminado).