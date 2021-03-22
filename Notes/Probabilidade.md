# Probabilidade
A probabilidade é uma ferramenta da [[Estatística|estatística]], com ela é possível estudar experimentos que repetidos sob as **mesmas condições** produzem resultados **diferentes**.
Considerando um [[Espaço amostral e eventos|evento aleatório]] $\varepsilon$ com espaço amostral $\Omega$ e espaço de eventos $\mathcal{F}$, ou seja, um **espaço de probabilidade** $(\Omega,\mathcal{F},P)$ a probabilidade de ocorrência de um evento $E$ é uma função $P:\mathcal{F} \rightarrow[0,1]$
$$
P(E)=\frac{|E|}{|\Omega|}
$$
Essa é a definição clássica de probabilidade, válida apenas quando $\Omega$ é finito e os eventos elementares são equiprováveis.
Há algumas propriedades importantes no cálculo de probabilidades, elas são fundamentadas nas propriedades de conjuntos.
> Se $A$ é um evento de $\mathcal{F}$, então $$P(A^c)=1-P(A)$$

> Se $A$ e $B$ são eventos de $\mathcal{F}$ , então $$P(A \cup B)=P(A)+P(B)-P(A \cap B)$$

## Probabilidade condicional
Na probabilidade condicional trabalha-se a probabilidade de ocorrência de um dado evento $A$ sabendo que os resultados possíveis são **somente** os resultados favoráveis a um determinado evento $B$. Note que devemos contar a cardinalidade de $A \cap B$ ao invés de simplesmente $A$, pois estamos considerando apenas os resultados contidos no evento $B$.
> $$P(A|B)=\frac{|A \cap B|}{|B|} = \frac{P(A \cap B)}{P(B)}$$

## Eventos independentes
Dois eventos são **independentes** quando a ocorrência de um não altera a probabilidade de ocorrência do outro.
> Para um dado espaço de probabilidade ($\Omega, \mathcal{F}, P$), dados dois eventos $A$ e $B$, dizemos que $A$ e $B$ são eventos independentes quando uma das seguintes condições for satisfeita:$$\begin{aligned} &P(A \cap B) = P(A)P(B)\\
  &P(A|B) = P(A)\text{, se } P(B) > 0\\
  &P(B|A) = P(B) \text{, se } P(A) > 0
  \end{aligned}$$

  

## Variáveis aleatórias
Apesar do nome, as variáveis aleatórias na realidade são funções que associam a cada elemento do espaço amostral um número, esse número é definido de acordo com o que se deseja representar com a variável aleatória.
> Dado um experimento aleatório com espaço de probabilidade ($\Omega, \mathcal{F}, P$), uma **variável aleatória** é qualquer função $X:\Omega\rightarrow\mathbb{R}$ tal que
$$X^{-1}(I)=\{\omega\in\Omega:X(\omega)\in I\}\in\mathcal{F}$$
>Ou seja, X é uma função tal que sua imagem inversa são eventos de $\mathcal{F}$

Por exemplo, a expressão $X^{-1}(\{0\})$, é lida como: imagem inversa do conjunto unitário $0$

### Variáveis aleatórias discretas
A variável aleatória $X:\Omega\rightarrow\mathbb{R}$ é chamada de **discreta** quando seu conjunto imagem $Im(X)$ é finito ou infinito enumerável, ou seja, os valores possíveis de $X$ podem ser escritos em forma de lista:
>$$
Im(X)=
\begin{cases}
  \{x_1,x_2,\dots,x_n\},\qquad\text{ no caso finito;}\\
  \{x_1,x_2,x_3,\dots\},\qquad\text{ no caso infinito;}\\
\end{cases}
>$$


---

created: 03/03/2021
modified: 09/03/2021
