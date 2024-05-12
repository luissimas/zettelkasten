---
created-at: 2023-01-16
---

Uma gramática é um formalismo axiomático de geração que permite **derivar** todas as palavras da [[Linguagem formal|linguagem]] que representa. Pode-se definir uma gramática como uma quádrupla ordenada $G = (V, T, P, S)$ tais que:

-  $V$ é um conjunto finito de [[Símbolo|símbolos]] **variáveis** ou não-terminais;
-  $T$ é um conjunto finito de símbolos **terminais** (disjunto de $V$);
-  $P$ é uma relação finita (conjunto finito de pares) na forma $(V \cup T)^+ \to (V \cup T)^*$ denominada **regras de produção**;
-  $S$ é um elemento de $V$ chamado **variável inicial**.

As regras de produção definem as condições de geração das palavras da linguagem. A aplicação sucessiva de regras de produção permite derivar todas as palavras da linguagem representada pela gramática. Sendo assim, dada uma gramática $G = (V,T,P,S)$, uma linguagem gerada por $G$, denotada por $L(G)$ é composta por todas as [[Palavra|palavras]] de **símbolos terminais** deriváveis a partir do símbolo inicial $S$, ou seja:

$$
L(G) = \{w \in T^* | S \Rightarrow^+ w\}
$$

Duas gramáticas $G1$ e $G2$ são equivalentes se e somente se ambas geram a mesma linguagem, ou seja, se $L(G1) = L(G2)$.

Uma cadeia $w \in T^*$ é dita uma **sentença** da gramática $G=(V,T,P,S)$ se e somente se $S \Rightarrow^* w$, ou seja, se $w$ é uma cadeia formada apenas de símbolos terminais e pode ser obtida a partir do símbolo $S$ da gramática $G$ por meio de sucessivas derivações.

Uma cadeia $\alpha \in (V \cup T)^*$ é dita **forma sentencial** da gramática $G=(V,T,P,S)$ se e somente se $S \Rightarrow^* \alpha$, ou seja, $\alpha$ é uma palavra formada por símbolos variáveis ou terminais (ou ambos). Sendo assim, uma forma sentencial é um dos passos intermediários para alguma sentença gerada pela gramática, ou a própria sentença.
