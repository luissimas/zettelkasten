---
date: 2024-05-13
---

O método do ponto fixo se baseia na ideia de que há pontos (chamados de pontos fixos) de funções que, quando aplicados à função resultam neles mesmos. Um **ponto fixo** de uma dada função $\varphi$ é o número $p$ que quando aplicado na função resulta nele mesmo, ou seja, $\varphi(p) = p$.

A ideia do método do ponto fixo é **associar** o problema de se determinar os **pontos fixos** ao problema de se encontrar as **raízes** de uma função. Para encontrar as raízes de $f$, podemos escrever $f(x) = x - \varphi(x)$ e encontrar um ponto fixo de $\varphi$. Nesse caso, o ponto fixo de $\varphi$ será também a raiz de $f$.

Note que é necessário definir algum **método para a escolha da função** $\varphi$. Em geral, os seguintes resultados são levados em conta:

-   Se $\varphi$ é contínua no intervalo $I = [a,b]$ e $\varphi(x) \in I$ para todo $x \in I$, então $\varphi$ **terá um ponto fixo** em $I$;
-   Se $\varphi '$ existir em $(a,b)$ e existir uma constante $\alpha$ tal que $|\varphi '(x)| \leq \alpha < 1$ para todo $x \in (a,b)$, então o ponto fixo será **único**.

Em geral, basta escolher uma função $\varphi$ que **satisfaça os dois resultados** acima.

Note que resolução da equação $x = \varphi(x)$ é um processo iterativo, definindo uma sequência $(p_n)$ tal que $p_{n+1} = \varphi(p_n)$. Dessa forma, se $p_n$ **convergir** para um valor $p$, então essa será a solução para $x = \varphi(x)$.