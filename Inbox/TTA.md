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

## Aplicação do método em código

A função `test_time_augmentation` aplica a `augmentation_pipeline` `K` vezes a cada imagem presente em `images`. A ideia é, para cada imagem em um batch, gerar um novo batch de `K` imagens através da aplicação da `augmentation_pipeline` à imagem.

Nesse caso, considera-se que a `augmentation_pipeline` aplica transformações à imagem original de maneira não determinística. Dessa forma, aplicando a pipeline `K` vezes à uma dada imagem, obtém-se um conjunto de `K` novas imagens.

```python
def test_time_augmentation(images, augmentation_pipeline, K):
    batch_augmented_images = []

    for image in images:
        augmented_images = []
        for _ in range(K):
            # Aplica o pipeline de augmentação à imagem
            augmented_image = augmentation_pipeline(image)
            augmented_images.append(augmented_image)

        batch_augmented_images.append(augmented_images)

    return batch_augmented_images
```

Com isso, é possível gerar um conjunto $X'$ com `K` imagens para cada imagem $x$ para a qual se deseja aplicar a técnica de TTA. Sendo assim, para obter a predição desejada para a imagem $x$, basta aplicar o modelo às `K` imagens obtidas no passo anterior e então aplicar uma função de agregação às predições obtidas. Nesse caso a função de agregação adotada é a média simples dos valores da predição.

```python
def make_predictions_with_tta(model, batch_augmented_images, device=AVAILABLE_DEVICE):
    softmax = nn.Softmax(dim=1)
    all_avg_probs = []

    with torch.no_grad():
        for augmented_images in batch_augmented_images:
            all_probs = []
            for image in augmented_images:
                image = image.to(device).unsqueeze(0)  # Adiciona a dimensão de batch
                output = model(image)
                all_probs.append(output.cpu())  # Move para a CPU e armazena

            # Tira a média das inferências para este conjunto de K imagens aumentadas
            avg_prob = torch.mean(torch.stack(all_probs), dim=0)  # Usa .stack para criar uma dimensão de batch para as probabilidades e depois tira a média
            all_avg_probs.append(softmax(avg_prob).squeeze(0))  # Aplica softmax e remove a dimensão de batch

    return all_avg_probs
```

## Implicações em performance

Apesar dos potenciais ganhos em acurácia e robustez trazidas pelo TTA, é importante destacar as implicações de performance da aplicação dessa técnica em ambientes produtivos. Como a técnica consiste em gerar $n$ novas imagens para cada predição, o custo adicional da técnica consiste não somente no aumento da quantidade de predições a ser realizada, mas também no custo de gerar as novas imagens.

Seja $C$ o custo de realizar a predição para uma imagem $x$ e $G$ o custo de gerar uma nova imagem a partir da imagem $x$. Dada a aplicação da técnica de TTA com a geração de $n$ novas imagens e uma função de agregação com custo $A$, o custo computacional final $C'$ da predição realizando a técnica de TTA é dado por:

$$
C' = n \cdot (C + G) + A
$$

É importante notar que, para se obter uma estimativa acurada do custo computacional da aplicação da técnica de TTA em um ambiente real, outros fatores devem ser considerados como a capacidade de batch do hardware utilizado e potenciais otimizações para melhor explorar tal capacidade.
