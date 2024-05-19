---
created-at: 2024-05-13
---

O método da bissecção é utilizado para a [[Resolução de equações não lineares]]. Esse método supõe apenas que a função $f$ seja contínua no intervalo $[a,b]$, sendo um dos métodos mais simples para determinar se existem raízes da função em um intervalo.

O seguinte resultado proporciona a base para esse método:

Seja $f: [a, b] \to \mathbb{R}$ uma função **contínua** tal que $f(a)f(b) < 0$, ou seja, $f$ **muda de sinal** no intervalo $[a,b]$. Então existe pelo menos um ponto $\bar{x} \in [a,b]$ tal que $f(\bar{x}) = 0$. Além disso, se $f'$ não muda de sinal em $(a,b)$, então $\bar{x}$ é a única raiz de $f$ nesse intervalo.

Com base no resultado acima, desenvolveu-se o seguinte método para encontrar uma aproximação para a raiz de $f$:

Consideramos o intervalo $I_0 = [a_0, b_0] = [a, b]$, onde $f$ muda de sinal, como intervalo inicial. Seja $x_M$ o **ponto médio** de $I_0$, ou seja, $x_M = \frac{(a_0 + b_0)}{2}$. Como $f(a)f(b) < 0$, sabe-se que $f(x_M)$ terá o mesmo sinal que $f(a)$ ou $f(b)$. Assim, escolhemos o **novo intervalo** $I_1 = [a_1, b_1]$ como sendo:

-   Se $f(x_M) = 0$ (ou menor que uma precisão dada), temos que $x_M$ é **raiz** de $f$;
-   $I_1 = [a, x_M]$ se $f(a)f(x_M) < 0$;
-   $I_1 = [x_M, b]$ se $f(x_M)f(b) < 0$;

Dessa forma, a cada iteração obtemos um novo intervalo $I_i$ que **contém a raiz com metade do comprimento do intervalo anterior**. Note que, embora simples, o método da bissecção tem uma velocidade de convergência lenta. Após $n$ iterações, a aproximação obtida para a raiz da equação tem um [[Erros em métodos de aproximação|erro absoluto]] dado por

$$|x-x^*| \leq \frac{b-a}{2^{n+1}}$$