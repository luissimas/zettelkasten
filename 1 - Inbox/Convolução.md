---
created-at: 2023-06-10
---

A convolução é uma operação matemática muito útil no [[Processamento digital de imagens]], sendo um importante **operador linear** para implementar a [[Filtragem de imagens]]. O processo de convolução consiste em, dadas duas funções, obter uma terceira que consiste na soma do produto dessas funções ao longo da região na qual elas são sobrepostas.

Matematicamente a convolução é uma operação contínua, definida por:

$$
(f * g)(t) = h(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau) \,d\tau
$$

Entretanto, a convolução é comumente implementada em computadores a fim de viabilizar o tratamento de imagens. Para tanto, é necessário discretizar a operação de convolução, que pode ser definida da seguinte forma:

$$
(f*g)(k) = h(k) = \sum_{j=0}^{k} f(j)g(k-j)
$$

Note que, no caso de imagens digitais, estamos lidando com sinais no domínio do espaço, portanto é necessário estender a noção de convolução para esse domínio. Dessa forma, a convolução em sinais bidimensionais é dada por:

$$
g(x,y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(\alpha,\beta)h(x-\alpha,y-\beta) \,d\alpha\,d\beta
$$

onde $f(x,y)$ é uma imagem de entrada e $h(x,y)$ é a resposta impulsiva.
