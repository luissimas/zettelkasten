---
created-at: 2023-01-16
---

Uma [[Gramática]] $G=(V, T, P, S)$ é dita do tipo 2 se todas as regras de produção $\alpha \to \beta$ são da forma:

$$
\alpha \in V \quad \text{e} \quad \beta \in (V \cup T)^*
$$

ou seja, a cadeia $\alpha$ é um **único** [[Símbolo]] não terminal da gramática e a cadeia $\beta$ é uma **palavra** composta de símbolos terminais ou não terminais.

O nome \"livre de contexto\" se deve ao fato de que nas regras de produção a derivação do símbolo $\alpha$ não depende (é \"livre\") dos símbolos que o antecedem ou sucedem (o \"contexto\").

Pela definição de [[Linguagem formal]], gramáticas livres de contexto geram [[Linguagens livres de contexto]].

# Árvore de derivação

A derivação de palavras através de gramáticas livres de contexto pode ser representada na forma de uma [[Árvore]], chamada de *árvore de derivação*, na qual:

-  A **raiz** é o **símbolo inicial**;
-  Os **nós intermediários** são **símbolos variáveis**:
-  Os **nós folhas** são **símbolos terminais**.

Por exemplo, dada a gramática livre de contexto $G=(\{S\}, \{a,b\}, P, S)$ tal que $P=\{S \to aSb | \epsilon\}$, a derivação da cadeia $aabb$ pode ser representada pela seguinte árvore de derivação:

$$
\Tree [.S
                a
                [.S
                  a
                  [.S \epsilon ]
                  b
                ]
                b
            ]
$$

# Gramática livre de contexto ambígua

Uma gramática livre de contexto é dita *ambígua* se existe pelo menos **uma palavra** que possua **duas ou mais árvores de derivação** nessa gramática. No desenvolvimento e otimização de algoritmos de reconhecimento é desejável que a gramática usada seja não-ambígua. Entretanto, nem sempre é possível eliminar ambiguidades em uma gramática livre de contexto.
