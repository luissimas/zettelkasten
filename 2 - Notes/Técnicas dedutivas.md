---
created-at: 2021-05-24
tags:
---
O conceito de *prova formal* é fundamental para a construção de conhecimento em muitas áreas, principalmente nas ciências exatas. Desenvolver uma prova consiste em derivar de um conjunto de premissas, através das [[Cálculo proposicional#Regras de inferência|regras de inferência]] e [[Álgebra da lógica proposicional#Leis de equivalência|leis de equivalência]], uma proposição que seja uma consequência lógica das premissas.
Existem diversas formas de desenvolver uma prova para um [[Cálculo proposicional#Argumentos|argumento]], cada uma tem as suas peculiaridades e se adequam melhor a determinadas situações.

# Prova direta
> Dado um conjunto de fórmulas $\alpha_1, \alpha_2, \alpha_3, \dots, \alpha_{n-1}$ e $\alpha_n$, diz-se que uma sequência finita de fórmulas $\beta_1, \beta_2, \dots, \beta_k$ é uma **prova** (ou **dedução**) de $\alpha_n$ a partir das premissas $\alpha_1, \alpha_2, \alpha_3, \dots, \alpha_{n-1}$ se e somente se:
> 1. Cada $\beta_i$ for uma premissa $a_j \space(1 \leq j \leq n-1)$; ou
> 2. Cada $\beta_i$ que não for uma premissa for derivada das fórmulas precedentes aplicando-se um conjunto de [[Cálculo proposicional#Regras de inferência|regras de inferência]]; ou
> 3. Cada $\beta_i$ que não for uma premissa for obtida pela substituição de uma fórmula anterior por outra logicamente equivalente; ou
> 4. $\beta_k$ é a própria $\alpha_n$.

Dessa forma, para provar que $\alpha_n$ é uma conclusão válida das premissas $\alpha_1, \alpha_2, \dots, \alpha_{n-1}$, é necessário produzir uma sequência de demonstração de forma que as premissas sejam derivadas em proposições $\beta_1, \beta_2, \dots, \beta_k$ até que se atinja a proposição $\alpha_n$, ou seja, até que $\beta_k \equiv \alpha_n$.

# Prova condicional
A prova condicional segue a mesma base da prova direta, porém além das premissas e proposições derivadas, introduz-se uma ou mais premissas provisórias chamadas de *hipóteses*, é importante destacar que **todas** as hipóteses devem ser **descartadas** até o final da prova. Além disso, as hipóteses devem ser descartadas na ordem inversa em que foram introduzidas.
Para provar uma conclusão que tem a forma condicional, por exemplo $p \implies q$, a partir de um conjunto de premissas, deve-se introduzir o antecedente $p$ como uma *hipótese*, deduzir $q$ utilizando $p$ e, no final, descartar a hipótese $p$ reconstruindo $p \implies q$.

Esse método de prova é embasado no *Teorema da dedução*
> Sejam $\delta$ e $\beta$ duas fórmulas bem-formadas (proposições válidas) e $\alpha_1,\dots, \alpha_n$ um conjunto de premissas. Então, as proposições $\alpha_1,\dots, \alpha_n$ e $\delta$ implicam logicamente $\beta$ se e somente se as proposições $\alpha_1,\dots, \alpha_n$ implicarem logicamente $\delta \implies \beta$, ou seja:
$$
  \alpha_1, \alpha_2, \alpha_3, \dots, \alpha_n, \delta \vDash  \beta \quad \iff \quad \alpha_1, \alpha_2, \alpha_3, \dots, \alpha_n \vDash \delta \implies \beta
$$

# Prova indireta (redução ao absurdo)
A prova indireta se baseia no princípio de que a partir de uma [[Semântica da lógica proposicional#Classificação de fórmulas|contradição]] pode-se deduzir qualquer proposição.

Para provar uma conclusão $\beta$ através de uma prova indireta, deve-se introduzir a negação $\neg \beta$ da conclusão no conjunto de premissas como uma hipótese e então deduzir uma contradição. Ao chegar na contradição, prova-se a validade do argumento.

# Inferência por resolução
A *inferência por resolução* é um método simples e eficiente para inferir conclusões lógicas a partir de premissas. Ao contrário dos demais métodos de prova, esse não exige a aplicação direta de operações baseadas nas [[Cálculo proposicional#Regras de inferência|regras de inferência]] e [[Álgebra da lógica proposicional#Leis de equivalência|leis de equivalência]]. Ao invés disso, a inferência por resolução se baseia na manipulação de fórmulas na [[Álgebra da lógica proposicional#Formas normais|forma normal]], mais especificamente na [[Álgebra da lógica proposicional#Forma normal conjuntiva (FNC)|forma normal conjuntiva (FNC)]].

>Dadas duas cláusulas $\alpha$ e $\beta$ e um literal $p$ tal que $p \in \alpha$ e $\neg p \in \beta$. Então
$$
  \left\{ \alpha, \beta \right\} \vDash \text{resolvente}(\alpha, \beta; p)
$$
>Tal que
$$
  \text{resolvente}(\alpha, \beta; p) = (\alpha - p) \cup (\beta - p)
$$
> Ou seja, o $\text{resolvente}$ é a cláusula obtida pela *união* de $\alpha$ e $\beta$ removendo-se o literal $p$ e seu complementar de ambas as cláusulas.

O método de inferência por resolução é um método de inferência por **refutação**, ou seja, o objetivo é refutar a **conclusão** ou **todo o teorema**. Portanto, deve-se negar a conclusão (ou o teorema todo) e fazer sucessivas *regras de resolução* entre as cláusulas para eliminar os literais até chegar-se em uma cláusula vazia ($\text{nil}$ ).

>Uma cláusula $\alpha$ pode ser inferida por resolução de um conjunto de cláusulas $\Gamma$ ($\Gamma \vdash_{\text{RES}} \alpha$) se a partir do conjunto $\Gamma \cup \left\{ \neg a \right\}$ obtém-se a cláusula vazia ($\text{nil}$).


É importante destacar que esse método de inferência **só é aplicável à [[Álgebra da lógica proposicional#Forma normal conjuntiva (FNC)|cláusulas]]**, portanto é necessário antes de tudo transformar **todas as fórmulas** do argumento em **cláusulas**.