---
created-at: 2024-05-15
---

O algoritmo **k-means** é o mais simples e conhecido algoritmo de [[Agrupamento]] que utiliza o erro quadrático como critério de agrupamento. A ideia é gerar um conjunto inicial de **centroides** e então iniciar um processo iterativo que consiste na associação entre pontos de dados e centroides de forma a minimizar a distância entre cada ponto de dado e seu centroide; a atualização dos centroides calculando a média dos pontos de dados associados a eles. O processo é repetido até que algum critério de parada (geralmente que nenhuma mudança nos centroides ocorra entre duas iterações) seja atingido.

![[kmeans.gif]]