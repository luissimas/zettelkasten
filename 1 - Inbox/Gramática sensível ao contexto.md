---
created-at: 2023-01-16
---

Uma [[Gramática]] $G=(V, T, P, S)$ é dita do tipo 1 se todas as regras de produção $\alpha \to \beta$ são da forma:

$$
\alpha \in (V \cup T)^+ \quad \text{e} \quad \beta \in (V \cup T)^* \quad \text{com} \quad |\alpha| \leq |\beta| \quad \text{(exceto quando } \beta = \epsilon \text{)}
$$

ou seja, as cadeias $\alpha$ e $\beta$ são formadas por [[Símbolo|símbolos]] terminais ou não terminais definidos na gramática, e a cadeia $\alpha$ sempre tem comprimento menor que a cadeia $\beta$, exceto quando $\beta$ for vazia.
