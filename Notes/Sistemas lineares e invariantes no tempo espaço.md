---
created-at: 2023-06-02
---

Sistemas lineares e invariantes no tempo/espaço (SLIT/SLIE) são ferramentas teóricas importantes no estudo de tratamento de sinais. Esse tipo de sistema é dito invariante no **tempo** quando lidamos com sinais unidimensionais, como **áudio**, e invariante no **espaço** quando lidamos com sinais bidimensionais, como **imagens**. Sendo assim, as definições a seguir consideram um sistema linear invariante no tempo (SLIT), mas as mesmas noções podem ser aplicadas aos SLIEs.

Um sistema linear invariante no tempo (SLIT) é um sistema que produz um **sinal de saída** a partir de um **sinal de entrada** ($x(t) \to y(t)$) respeitando as seguintes propriedades:

1. **Linearidade**: se $x_1(t) \to y_1(t)$ e $x_2(t) \to y_2(t)$, então $\alpha x_1(t) + \beta x_2(t) \to \alpha y_1(t) + \beta y_2(t)$.
2. **Invariância no tempo**: uma mesma entrada em tempos distintos produz a mesma saída, mas com atraso, ou seja: se $x(t) \to y(t)$, então $x(t + \tau) \to y(t + \tau)$.

O componente mais importante de um SLIT é a **resposta impulsiva**. Uma resposta impulsiva $h(t)$ é a resposta do sistema a um impulso unitário. Se sabemos a resposta do sistema a um impulso, é possível calcular a saída para qualquer entrada possível decompondo-a em uma sequência de impulsos.

Decompondo um sinal em $n$ impulsos unitários, temos que a resposta do sistema para um dado k-ésimo impulso é dada por $x(k\Delta)h(t-k\Delta)\Delta$, onde $\Delta$ é a largura de cada pulso, $k$ é seu deslocamento, $x(k\Delta)$ é o valor da função no centro do k-ésimo pulso e $h(t)$ denota a resposta impulsiva do sistema. Como um sinal é composto pos vários impulsos, computar a saída do sistema para um sinal equivale a computar a soma da saída para todos os impulsos (pois o SLIT é um sistema linear e invariante no tempo). Sendo assim, a saída do sistema para um dado sinal é dada pela integral de [[Convolução]], definida como:

$$
y(t) = \lim_{\Delta \to 0} \sum_{k=-\infty}^{\infty} h(t-k\Delta) \Delta = \int_{-\infty}^{\infty} x(\tau)h(t-\tau) \,d\tau
$$

Dessa forma, a saída de um SLIT é dada pela convolução do sinal de entrada $x(t)$ com a resposta impulsiva do sistema $h(t)$, ou seja:

$$
y(t) = x(t) * h(t)
$$
