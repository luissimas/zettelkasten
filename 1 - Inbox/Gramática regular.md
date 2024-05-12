---
created-at: 2023-01-16
---

Uma [[Gramática]] $G=(V, T, P, S)$ é dita regular (ou do tipo 3) se todas as regras de produção $\alpha \to \beta$ são da forma:

$$
\alpha \in V \quad \text{e} \quad \beta \in T \cup (V \times T)
$$

ou seja, a cadeia $\alpha$ é um [[Símbolo]] não terminal da gramática e a cadeia $\beta$ é um símbolo terminal ou um símbolo terminal seguido por um símbolo não terminal.

Uma gramática regular pode ser descrita por uma **gramática linear**. Existem alguns tipos de gramáticas lineares classificadas de acordo com a forma de suas regras de produção. Dados $A, B \in V$ e $w \in T^*$, definem-se as seguintes gramáticas lineares:

-  Gramática Linear à Esquerda (GLE): regras de produção na forma $A \to wB$ ou $A \to w$.
-  Gramática Linear à Direita (GLD): regras de produção na forma $A \to Bw$ ou $A \to w$.
-  Gramática Linear Unitária à Esquerda (GLUE): regras de produção na forma $A \to wB$ ou $A \to w$, com $|w| \leq 1$.
-  Gramática Linear Unitária à Direita (GLUD): regras de produção na forma $A \to Bw$ ou $A \to w$, com $|w| \leq 1$.

Pela definição de [[Linguagem formal]], gramáticas regulares geram [[Linguagens regulares]].
