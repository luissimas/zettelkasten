---
created-at: 2023-05-22
---

A Amostragem é o processo de **discretizar as coordenadas** (eixo $t$, plano $(x,y)$ etc) de um sinal. Dado que um sinal é uma função contínua, o processo de amostragem consiste em tomar um número finito de **amostras** dessa função, obtendo-se uma função de domínio discreto.

Um problema trazido pela amostragem é o da **perda/distorção** do sinal original. Esse problema consiste em determinar quantos pontos são necessários tomar para discretizar a imagem sem perda de detalhes do sinal original. Segundo o Teorema da Amostragem (Shannon-Nyquist), para fazer a amostragem de um sinal **sem perdas ou distorções**, devemos tomar amostras **espaçadas no seguinte intervalo**:

$$
\Delta t = \frac{1}{2w}
$$

Onde $2w$ é a **largura de banda do sinal**. Segundo o teorema, se $\Delta t$ for menor do que o intervalo definido, há perda de informação do sinal; e se $\Delta t$ for maior do que o intervalo definido, há redundância no sinal, diminuindo a eficiência.
