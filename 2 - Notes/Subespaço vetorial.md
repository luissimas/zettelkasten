---
created-at: 2024-05-14
---

Subespaços vetoriais são **subconjuntos** de [[Espaço vetorial|espaços vetoriais]]. Cada subespaço vetorial deve estar associado a um espaço vetorial do qual ele é um subconjunto.

Seja $V$ um espaço vetorial e seja $W$ um subconjunto de $V$ tal que $W \neq \emptyset$. Dizemos que $W$ é um *subespaço vetorial* de $V$ se as seguintes condições forem satisfeitas:

1.  $\forall u, v \in W \to u + v \in W$
2.  $\forall \alpha \in \mathbb{R}, \forall u \in W \to \alpha u \in W$
3.  $0 \in W$

Note que a condição *c)* deriva da condição *b)*, pois ao multiplicar um elemento pelo escalar 0 deve-se poder obter o elemento nulo do conjunto $W$. Veja também que, por definição, o espaço vetorial $V$ é um subespaço vetorial dele mesmo.

Sabendo disso, infere-se que todo espaço vetorial admite ao menos dois subespaços vetoriais, o conjunto formado apenas pelo vetor nulo e o próprio conjunto. Esses dois subespaços são chamados de **subespaços triviais**, enquanto todos os outros subespaços de um espaço vetorial são chamados de **subespaços próprios**.

Os subespaços vetoriais possuem propriedades interessantes que garantem duas operações: a intersecção e a soma de subespaços vetoriais.

Sejam $W_1$ e $W_2$ subespaços vetoriais de um espaço vetorial $V$, a **intersecção** $W_1 \cap W_2$ destes subespaços **é também um subespaço vetorial** de $V$.

Sejam $W_1$ e $W_2$ subespaços vetoriais de um espaço vetorial $V$, a **soma** destes subespaços, dada por:

$$ W_1 + W_2 = \{w \in V; w = u + v, u \in W_1, v \in W_2\}$$

**é também um subespaço vetorial** de $V$.