---
created-at: 2024-05-15
---

O aprendizado supervisionado é um paradigma de [[Aprendizado de máquina]] aplicado principalmente em problemas de classificação e regressão. Em ambos os tipos de problemas são fornecidos conjuntos de dados de treinamento com diversos atributos de entrada e um atributo de saída. A ideia é que o algoritmo gere um modelo capaz de, dado um novo conjunto de atributos de entrada diferente daqueles utilizados para o treinamento, produza o atributo de saída esperado. O conceito de **aproximação de funções** é muito relacionado a esse paradigma de aprendizado.

Problemas de **classificação** geralmente envolvem a associação de atributos de entrada a um atributo de saída discreto (geralmente uma classe ou **categoria**). Problemas desse tipo envolvem a identificação de fraudes, classificação de imagem, diagnósticos etc. Problemas de **regressão** partem do mesmo princípio, entretanto a ideia é associar atributos de entrada a um atributo de saída contínuo (um valor numérico). Problemas desse tipo envolvem predições de mercado financeiro, estimativa de funções etc.

[[Árvores de decisão]]
[[Redes neurais]]
[[Avaliação de algoritmos de aprendizado supervisionado]]

O termo "supervisionado" se origina do pressuposto que há algum **agente externo** que conhece a **saída esperada** para cada exemplo no conjunto de dados de treinamento, portanto é possível avaliar a capacidade de predição dos modelos gerados.