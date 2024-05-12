---
created-at: 2021-10-20
---
A aritmética modular é o estudo as operações aritméticas básicas no contexto dos números inteiros módulo $n$.
As operações na aritmética modulas sempre estarão definidas no contexto de um conjunto $\mathbb{Z}_n$, onde $n$ é um inteiro positivo. O conjunto $\mathbb{Z}_n$ é o conjunto de todos os números naturais de $0$ e $n-1$, ou seja:

$$
\mathbb{Z}_n = \{0, 1, 2, \dots, n-1\}
$$

A partir desse contexto, é possível definir as quatro operações aritméticas básicas em um dado conjunto $\mathbb{Z}_n$.

Dado um número inteiro positivo $n$ e $a, b \in \mathbb{Z}_n$, definem-se as operações da aritmética modular:
- Adição: $a \oplus b = (a + b) \mod n$
- Multiplicação: $a \otimes b = (a \cdot b) \mod n$
- Subtração: $a \ominus b = |a - b| \mod n$
- Divisão: $a \oslash b = a \otimes b^{-1}$

# Inverso
O inverso $a^{-1}$ de um número $a \in \mathbb{Z}_n$ é um número (único) $b \in \mathbb{Z}_n$ tal que $a \otimes b = 1$. Um elemento de $\mathbb{Z}_n$ que tenha inverso é chamado de *inversível*. Os elementos inversíveis de $\mathbb{Z}_n$ são aqueles que são *relativamente primos* com $n$.
Definimos como $\mathbb{Z*}_n$ o conjunto composto apenas pelos elementos inversíveis de $\mathbb{Z}_n$, ou seja:

$$
\mathbb{Z*}_n = \{a \in \mathbb{Z}_n | mdc(a, n) = 1\}
$$