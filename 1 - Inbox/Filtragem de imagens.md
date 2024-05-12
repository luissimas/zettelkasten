---
created-at: 2023-06-10
---

O processo da filtragem de imagens consiste em performar alguma operação no sinal a fim de **extrair características** desejadas ou até mesmo **alterar** a imagem. O processo de filtragem é definido em termos da operação de [[Convolução]] do sinal discreto $x[n]$ com um filtro $h[n]$. Dessa forma, a operação de filtragem pode ser descrita da seguinte forma:

$$
y[y] = \sum_{k=0}^{w} h[k]x[n-k]
$$

da mesma forma, a convolução discreta no domínio do espaço é dada por:

$$
y[n][m] = \sum_{k=0}^{w} \sum_{i=0}^{w} h[k][i]x[n-k][m-i]
$$

onde $h$ é o filtro a ser aplicado, $w$ é o número de coeficientes desse filtro, $x$ é o sinal de entrada e $y$ é o sinal de saída após a operação de filtragem.

![[2D_Convolution_Animation.gif]]

Filtros podem ser usados para diversas operações em imagens, desde operações de **suavização** até a **detecção de bordas** e outros tratamentos.
