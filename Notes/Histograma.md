---
created-at: 2023-05-22
---

O histograma é a ferramenta mais básica para extrair informações de uma imagem, sendo a base para diversos tipos de tratamentos.

Um histograma permite visualizar a **distribuição de probabilidades** dos níveis de cinza de uma imagem. Dado uma imagem, seu histograma relaciona a quantidade de pixels que assumem uma determinada intensidade.

![[histogram.png]]

Com base no histograma é possível determinar o **nível de luminosidade** de uma imagem sem mesmo observá-la. Se um histograma tem uma distribuição concentradas em valores **baixos ou altos**, a imagem é muito **escura ou clara**, respectivamente. Da mesma forma, histogramas com distribuições muito **estreitas ou largas** denotam, respectivamente, imagens com **baixo ou alto** contraste.

# Equalização de Histograma

Um dos tratamentos mais básicos a partir do histograma é a sua equalização. Esse processo busca **distribuir uniformemente os níveis de cinza** de uma imagem, a fim de melhorar seu balanceamento de luminosidade e contraste.

![[histogramequalization.png]]

Como o histograma pode ser visto como uma **distribuição de probabilidades**, seu processo de equalização é matematicamente fundamentado como uma **transformação de uma variável aleatória**.

Sendo assim, o objetivo da equalização de um histograma é encontrar uma **transformação** não-linear $g=T(f)$ que é aplicada a cada pixel da imagem de entrada $f(x,y)$ de modo que a distribuição dos níveis de cinza de $g(x,y)$ seja **uniforme**, ou seja, de modo que todos os níveis de cinza tenham a **mesma probabilidade**.

Utilizando as propriedades das funções de densidade de probabilidade, é possível obter uma transformação $g$ em termos da imagem $f$:

$$
g = T(f) = \int_{0}^{f} p_f(f) \,df
$$

Adaptando essa transformação ao caso discreto, temos:

$$
T(k) = \left \lfloor (L - 1) \sum_{i=0}^{k} p_i \right \rfloor
$$

Onde $L$ representa o limite superior para a intensidade de um pixel (256 na maioria dos casos).
