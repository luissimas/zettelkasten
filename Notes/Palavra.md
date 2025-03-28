---
created-at: 2023-01-16
---

Uma palavra (também conhecida como cadeia de caracteres, ou sentença) é uma **sequência finita** de [[Símbolo|símbolos]] de um [[Alfabeto]] justapostos. $abcb$ e $a$ são exemplos de palavras sobre o alfabeto $\{a,b,c\}$.

Um conceito particular é o da **palavra vazia**, denotada por $\epsilon$. A palavra $\epsilon$ é palavra sobre qualquer alfabeto, e não contém nenhum caractere.

Toda palavra $w$ tem um comprimento, denotado por $|w|$, que representa o número de símbolos que compõe a palavra. A palavra vazia tem comprimento $0$, ou seja: $|\epsilon| = 0$.

Dado um alfabeto $\Sigma$, o conjunto $\Sigma^*$ é o conjunto de todas as palavras sobre $\Sigma$. Da mesma forma, o conjunto $\Sigma^+$ é o conjunto de todas as palavras sobre $\Sigma$ exceto a palavra vazia, ou seja, $\Sigma^+ = \Sigma^* - \{\epsilon\}$.

# Concatenação

Concatenação é uma operação binária que consiste em gerar novas palavras através da justaposição dos símbolos que representam as palavras envolvidas na operação. Por exemplo, dado um alfabeto $\Sigma = \{a,b,c,d\}$ e as palavras $v=ab$ e $w=cd$, temos:

$$
\begin{aligned}
  vw &= abcd\\
  wv &= cdab\\
  vv &= abab\\
  www &= cdcdcd
\end{aligned}
$$

É possível ainda realizar a concatenação sucessiva de uma palavra com ela mesma:

$$
\begin{aligned}
  v^2 &= abab\\
  (wv)^3 &= cdabcdabcdab\\
  w^0 &= \epsilon
\end{aligned}
$$
