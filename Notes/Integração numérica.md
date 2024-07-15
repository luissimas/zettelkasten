---
created-at: 2024-05-13
---

Integrais são ferramentas essenciais para diversas aplicações, entretanto na maioria das vezes não é possível obtê-las. Tendo isso em vista, foram desenvolvidos métodos numéricos para obter estimativas de [[Integrais definidas]] de funções em dados intervalos.

A ideia que fundamenta os algoritmos de integração numérica é a de que é possível escrever uma integral definida em termos da soma de integrais de um **polinômio**. Esse resultado é chamado de **Fórmula de Newton-Cotes**, e fornece a base necessária para a aplicação de alguns dos métodos numéricos de integração.

Dada uma integral definida:

$$\int_{a}^{b}{f(x)}\, dx$$

obtendo-se a [[Interpolação de dados|interpolação]] polinomial $p$ de $f$ através de [[Forma de Lagrange|polinômios de Lagrange]] tal que:

$$p_n(x) = \sum_{k=0}^n{f(x_k) L_k(x)}$$

sendo

$$L_k(x) = \prod_{j \neq k}{\frac{x-x_j}{x_k - x_j}}$$

a integral pode ser reescrita como:

$$\int_{a}^{b}{f(x)}\, dx = \sum_{k=0}^n{\left[f(x_k)\int_a^b{L_k(x)}\, dx\right]}$$

Dessa forma, o problema de integração se reduz ao problema de **integrar os polinômios de Lagrange**, cuja solução é muito mais simples.

A partir desses resultados desenvolveram-se dois métodos para a integração numérica de funções: o [[Método dos Trapézios]] e o [[Método de Simpson]]. A **diferença entre os métodos** reside no **grau do polinômio** obtido através da interpolação utilizado para aproximar a função.
