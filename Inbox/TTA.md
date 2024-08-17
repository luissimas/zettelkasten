# TODO

- [ ] Explicação sobre a teoria do método
- [ ] Explicação sobre a parte mais importante do código

## Definição da heurística

A técnica de Test Time Augmentation (TTA) baseia-se em uma heurística fortemente influenciada pelas técnicas de data augmentation e ensemble learning. A técnica se baseia na ideia de utilizar data augmentation durante o processo de inferência e fazer uma agregação dos resultados do modelo aplicado aos dados aumentados obtidos.

Como apresentado em Kimura (2024), a TTA ainda carece de discussões sistemáticas com relação a seus aspectos teóricos. Apesar disso, sua eficácia em experimentos práticos pode ser observada, principalmente quando aplicada à tarefas de visão computacional como classificação de imagens.

## Definição formal

Seja $x$ a entrada original para o modelo e $f(x)$ a função de predição do modelo. Tomamos um conjunto de transformações $T = \{t_1, t_2, \dots, t_n\}$ no qual $t_i$ representa uma função de transformação (rotação, mudança de escala, jitter etc).

Sendo assim, a técnica de TTA consiste em aplicar cada transformação em $T$ à entrada original $x$, obtendo um conjunto $X'$ de entradas, e então aplicar o modelo à cada uma das entradas em $X'$, agregando as predições obtidas em uma predição final $\hat{y}$.

Dado um modelo $f$, uma entrada $x$ e um conjunto de transformações $T = \{t_1, t_2, \dots, t_n\}$ a predição final $\hat{y}$ é definida como:

$$
\hat{y} = A(\{f(t_i(x))\}_{i=1}^n)
$$

onde $A$ é dita a _função de agregação_ da TTA.

## Diferentes funções de agregação

O resultado da técnica de TTA depende não somente das transformações utilizadas, mas também da função de agregação $A$ a ser aplicada ao conjunto $X'$ de predições obtidas. Tendo isso em vista, o processo de escolha da função de agregação pode ser influenciado pelo problema alvo do modelo e também pelo conhecimento prévio das funções de transformação e as invariâncias do modelo com relação a tais transformações.

Em geral, os métodos de agregação mais comuns utilizados na técnica de TTA são as médias simples e ponderadas. Agregar os resultados utilizando uma média ponderada se torna especialmente relevante quando as transformações têm propriedades previamente conhecidas e deseja-se dar maior peso à resultados obtidos por transformações específicas. Ademais, em Kimura (2024) também é proposta uma técnica para derivar pesos ótimos.

Técnicas de agregação temporal também podem ser utilizadas para tarefas de detecção de anomalias em redes.

## Implicações em performance

## Aplicação do método em código
