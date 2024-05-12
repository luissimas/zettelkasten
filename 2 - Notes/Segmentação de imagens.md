---
created-at: 2023-05-25
---

A segmentação de imagens consiste em segmentar uma imagem em diferentes **regiões de interesse**. Geralmente esse processo consiste em encontrar limiares no [[Histograma]] da imagem que determinem diferentes regiões.

A segmentação é um processo que muitas vezes requer conhecimento **empírico** e inspeção visual, sendo bastante difícil produzir soluções exatas. Por conta disso, comumente são empregadas técnicas de **aprendizado de máquina** para gerar modelos capazes de segmentar imagens de maneira eficiente e precisa.

![[sematic-segmentation.jpg]]

# Algoritmo de Otsu

O algoritmo de Otsu é um dos mais populares algoritmos de segmentação de imagens. O objetivo do algoritmo é, a partir de uma imagem em tons de cinza, determinar o valor ideal de um *threshold* que **minimize a variância entre as classes**, efetivamente separando os elementos do fundo e os da frente da imagem em dois *clusters*.

Dada uma imagem em tons de cinza com as seguintes definições:

- $L$: o valor máximo do nível de cinza da imagem;
- $x[n,m] \in \{0,1,\dots,L\}$: pixel da imagem de entrada;
- $n_i$: número de pixels para os quais $x[n,m] = i$;
- $N=\sum_{i=0}^{L}n_i$: o número total de pixels da imagem;
- $p_i = \frac{n_i}{N}$: probabilidade do nível de cinza $i$;
- $t \in \{0,1,2,\dots,L\}$: limiar (*threshold* do valor de cinza que separa as duas classes).

Temos que a probabilidade da classe 1 e 2 são dadas por $\omega_1$ e $\omega_2$, respectivamente:

$$
\begin{aligned}
  \omega_1(t) &= \sum_{i=0}^{t-1} p_i\\
  \omega_2(t) &= \sum_{i=t}^{L} p_i
\end{aligned}
$$

A ideia é minimizar a variância intraclasse, dada por:

$$
\sigma_w^2 = \omega_1(t) \sigma_1^2(t) + \omega_2(t) \sigma_2^2(t)
$$

Intuitivamente, minimizar a variância intraclasse equivale a maximizar a variância interclasses, ou seja, afastar as média dos valores de intensidade $\mu_1$ e $\mu_2$ das duas classes o máximo possível. Dessa forma, a variância interclasses é expressa como:

$$
\sigma_b^2(t) = \omega_1(t) \omega_2(t) \left [ \mu_1(t) - \mu_2(t) \right ] ^2
$$

O cálculo das médias é feito utilizando o valor esperado de cada classe:

$$
\begin{aligned}
  \mu_1(t) &= \frac{\sum_{i=0}^{t-1} i p_i}{\omega_1(t)}\\
  \mu_2(t) &= \frac{\sum_{i=t}^{L} i p_i}{\omega_2(t)}\\
\end{aligned}
$$

Tendo isso em vista, o Algoritmo de Otsu pode ser descrito através dos seguintes passos:

1. Compute o [[Histograma]] da imagem;
2. Para todos os possíveis valores de $t \in \{0,1,2,\dots,L\}$, compute a variância inter-classes $\sigma_b^2(t)$;
3. Selecione o valor ótimo $t^*$, ou seja, o valor de $t$ que maximiza $\sigma_b^2(t)$.

Apesar de sua simplicidade de implementação, o algoritmo utiliza fundamentos estatísticos que produzem bons resultados na maioria dos casos.
