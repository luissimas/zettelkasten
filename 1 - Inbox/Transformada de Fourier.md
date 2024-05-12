---
created-at: 2023-06-10
---

A Transformada de Fourier permite generalizar a Série de Fourier para sinais não periódicos. Esse resultado permite a visualização de dados não periódicos como sinais e imagens no domínio da frequência.

Sinais não periódicos podem ser vistos como funções contínuas, portanto a Transformada de Fourier tem por objetivo representar funções contínuas em termos de funções de base periódicas (que também podem ser representadas por exponenciais complexas). Dessa forma é possível levar funções do domínio do tempo para o domínio da frequência e vice-versa.

A Série de Fourier é dada por:

$$\begin{aligned}
&g(t) = \frac{1}{T} \sum_{k=-\infty}^{\infty} g_k e^{jk\Omega t} \text{ , } \\
&g_k = \int_{-T/2}^{T/w} g(t) e^{-jk \Omega t} \,dt
\end{aligned}
$$

Se analisarmos a Série de Fourier, o que ocorre se $T \to \infty$, ou seja, se tomamos um número infinito de componentes de frequência? Intuitivamente, a Série passa a se tornar uma integral sobre todas as frequências possíveis ao invés de uma soma discreta de componentes de frequência. Dessa forma, a Série passa a se aproximar cada vez mais da sua representação como uma função contínua (graficamente, é como se a variação das frequências fossem sendo \"amassadas\" até se tornarem uma linha perfeita).

Com essa noção intuitiva da equivalência da Série de Fourier com $T \to \infty$ à função contínua corresponde, podemos usar a ideia reversa para decompor qualquer função contínua em termos de funções de base periódicas. Dessa forma, é possível concluir que a Transformada de Fourier é uma generalização da Série de Fourier, permitindo descrever qualquer função contínua como uma combinação linear de funções de base periódicas.

Partindo da definição inicial da Série de Fourier, quando tomamos $T \to \infty$ e, portanto, o sinal torna-se não periódico, os coeficientes discretos $g_k$ podem ser representados como amostras de uma função contínua $G(f)$ .

Supondo que $G(f)$ é contínua, podemos tomar amostras espaçadas de $\Delta f$ para representar os coeficientes $g_k$ da Série. Posteriormente utilizaremos o caso limite em que $\Delta f \to 0$, que é equivalente a $T \to \infty$ .

Iniciamos fazendo a seguinte mudança de variáveis:

$$\begin{aligned}
&k \Omega = 2 \pi f\\
&f = k \frac{\Omega}{2 \pi} = k \Delta f
\end{aligned}
$$

Dessa forma, podemos definir as amostras $g_k$ da Série de Fourier como:

$$
\frac{g_k}{T} = G(k \Delta f) \Delta f
$$

Vale notar que, como $\Omega = \frac{2\pi}{T}$, então $\frac{1}{T} = \frac{\Omega}{2\pi} = \Delta f$.

Dessa forma, podemos definir $g(t)$ a partir dessas amostras utilizando a Série de Fourier original:

$$\begin{aligned}
g(t) &= \frac{1}{T} \sum_{k=-\infty}^{\infty} g_k e^{jk\Omega t} \text{ , } \\
&= \sum_{k=-\infty}^{\infty} \frac{g_k}{T} e^{jk\Omega t} \text{ , } \\
&= \sum_{f=(k\Delta f)} G(f) \Delta f e^{j2\pi ft}\\
&= \sum_{f=(k\Delta f)} G(f)e^{j2\pi ft} \Delta f \\
\end{aligned}
$$

No caso limite, tomando $\Delta f \to 0$, ou seja, quando $T \to \infty$ (quando o sinal se torna não periódico):

$$
g(t) = \lim_{\Delta f \to 0} \sum_{f=(k \Delta f)} G(f) e^{j2\pi ft} \Delta f
$$

Da própria definição de integral, podemos então escrever:

$$
g(t) = \int_{-\infty}^{\infty} G(f) e^{j2\pi ft} \,df
$$

Ou seja, é possível expressar a decomposição de uma função contínua em uma combinação linear de funções de base através da integração das funções de base ponderadas pelos coeficientes $G(f)$. Essa é a chamada **Transformada de Fourier inversa**, que leva sinais do domínio da frequência para o domínio do tempo.

Sendo assim, a **Transformada de Fourier**, que leva sinais do domínio do tempo para o domínio da frequência, é dada por:

$$
G(t) = \int_{-\infty}^{\infty} G(f) e^{-j2\pi ft} \,df
$$
