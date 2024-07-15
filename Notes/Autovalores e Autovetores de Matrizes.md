---
created-at: 2024-05-14
---

Tomando uma [[Transformação linear]] $T$ associada à matriz $A_{n\times n}$, é possível determinar os [[Autovalores e autovetores]] da matriz $A$ a partir da busca por um escalar $\lambda \in \mathbb{R}$ e um vetor não nulo $u$ tais que:

$$A u = \lambda u$$

Manipulando a equação matricial, é possível obter a equação equivalente:

$$(A - \lambda I)u = 0$$

Note que esta equação representa um sistema linear homogêneo. Para que esse sistema admita soluções não triviais (pois os autovetores devem ser diferentes do vetor nulo), o **determinante** da matriz dos coeficientes $A-\lambda I$ deve ser igual a $0$. Ao calcular o determinante, obtém-se um **polinômio** de grau $n$ em $\lambda$ cujas **raízes são os autovalores** da matriz. A partir disso, para obter um autovetor associado a um autovalor $\lambda$ basta substituir o valor de $\lambda$ na equação matricial do sistema linear homogêneo.

O polinômio $P$ de grau $n$ em $\lambda$ obtido através do cálculo de $\det(A - \lambda I)$ é um chamado **polinômio característico** de $A$.

A equação $P(\lambda) = 0$ é chamada **equação característica** de $A$.

Chamamos de **multiplicidade algébrica** de um autovalor $\lambda_1$ a quantidade de vezes que ele aparece como raiz do polinômio característico $P$.

Chamamos de **multiplicidade geométrica** de um autovalor $\lambda_1$ a dimensão do auto-espaço associado a ele.
