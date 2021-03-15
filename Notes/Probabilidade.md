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

---

created: 03/03/2021
modified: 09/03/2021