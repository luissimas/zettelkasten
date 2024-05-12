---
created-at: 2023-05-22
---

O processamento digital de imagens consiste no processamento e manipulação de imagens através de computadores digitais. O processamento digital de imagens visa tanto **extrair dados** das imagens quanto utilizá-los para **melhorar a imagem**. Algumas das técnicas utilizadas são a filtragem, a segmentação, o reconhecimento de padrões etc.

Uma **imagem** pode ser definida como uma **função** $f(x,y)$ tal que $x$ e $y$ são **coordenadas espaciais** e o valor de $f$ é a **intensidade** ou nível de cinza da imagem em um dado ponto. Quando $x$, $y$ e $f$ são valores finitos e discretos, a imagem é dita **digital**. Sendo assim, é possível desenvolver fundamentos teóricos matemáticos para a manipulação desses valores a fim de obter resultados específicos nas imagens.

Entretanto, no **mundo real** imagens não são funções discretas, e sim **contínuas**. Do ponto de vista matemático, uma imagem é um **sinal bidimensional** tal que:

$$
I = \left \{f: \mathbb{R}^2 \to \mathbb{C} : \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} |f(x,y)|^2 \,dx \,dy < \infty \right \}
$$

Ou seja, uma imagem $f(x,y)$ é uma função de duas variáveis cuja **energia é finita** ($L_2$ integrável).

Sendo assim, fica evidente a necessidade de aplicar métodos de **discretização** para transformar as imagens **analógicas** (contínuas) em imagens **digitais** (discretas). Os métodos para essa discretização consistem na:

- Discretização das coordenadas através da [[Amostragem]].
- Discretização da intensidade do sinal através da [[Quantização]].

Em geral, existem 5 tipos básicos de imagens digitais:

1. **Binária**: $f[n,m] \in \{0,1\}$. Útil para representação temporária e extração de características de baixo nível, principalmente formas de objetos;
2. **Tons de cinza**: $f[n,m] \in \{0,1,2,\dots,255\}$. Padrão de 8 bits, bastante comum como forma de representação usada nas manipulações de imagens;
3. **Colorida**: $f[n,m] \in \{0,1,2,\dots,255\}^3$. Imagens RGB, nas quais cada um dos três canais/bandas é uma imagem em tons de cinza representando a intensidade de cada cor.
4. **Multi-espectral**: $f[n,m] \in \mathbb{R}^d$. Essas imagens são uma generalização das imagens coloridas, com $d$ canais/bandas. Geralmente essas imagens são usadas em satélites, que podem produzir imagens com mais de 200 canais.
5. **3D**: $f[n,m,l] \in \{0,1,2,\dots,255\}$. Imagens 3D são indexadas em 3 dimensões, sendo bastante utilizadas em aplicações médicas e tendo um alto custo computacional de processamento.

[[Histograma]] são um método comum de visualizar a distribuição dos níveis de cinza de uma imagem, servindo de base para diversas manipulações, como a [[Segmentação de imagens]].

O estudo de sinais e sistemas fornece a base teórica para o processamento de imagens. Um dos conceitos mais fundamentais para o processamento de imagens são os [[Sistemas lineares e invariantes no tempo espaço]], que fornecem a base teórica para o processo de [[Filtragem de imagens]] utilizando [[Convolução]].
