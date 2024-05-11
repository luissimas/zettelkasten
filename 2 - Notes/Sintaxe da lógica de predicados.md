---
created-at: 2021-06-08
tags:
---
A sintaxe da lógica de predicados especifica quais são os símbolos e elementos utilizados na linguagem e como eles podem ser combinados para formar sentenças válidas.

# Alfabeto
Chamamos de *alfabeto* da lógica de predicados o conjunto de símbolos a partir dos quais sequências válidas são construídas. Os símbolos que compõe esse alfabeto são:

- Variáveis: nomeadas seguindo a expressão regular `[A-Z][A-Za-z0-9]*`. Exemplos: *A, ABC, Maria*. Uma variável está **ligada** se ocorre dentro do escopo de um quantificador, caso contrário ela é **livre**.
- Constantes: nomeadas seguindo a expressão regular `[a-z]+` ou `[0-9]`. Exemplos: * a, abc, azul, 33
- Funções n-árias: denotam elementos, ou seja, **retornam elementos do próprio domínio**. Nomeadas seguindo a expressão regular `[a-z][A-Za-z0-9]`. Exemplos: *f(P), pai(X,Y)*
- Predicados n-ários: denotam asserções sobre elementos, ou seja, **retornam valores-verdade**. Nomeados seguindo a expressão regular `[a-z][A-Za-z0-9]`. Exemplos: *f(P), pai(X,Y)*
- Quantificadores: $\forall$ (universal) e $\exists$ (existencial). Os quantificadores são conectivos unários com **prioridade mais alta** do que qualquer outro conectivo.

E também aqueles presentes no [[Sintaxe da lógica proposicional#Alfabeto|alfabeto da lógica proposicional]]:

- Dois símbolos de pontuação: *(* e *)*.
- Dois símbolos de verdade: verdadeiro *($V$)* e falso *($F$)*. Note que na verdade esses símbolos são **predicados** de aridade $0$.
- Cinco conectivos lógicos: $\neg$, $\land$, $\lor$, $\implies$ e $\iff$

# Termo
Termos representam coisas (objetos ou indivíduos) de um *domínio* específico. Os termos podem definidos como:

- Uma variável é um termo
- Uma constante é um termo
- Se $f$ é um *símbolo funcional* n-ário e $t_1, t_2,\dots, t_n$ são termos, então $f(t_1,t_2,\dots,t_n)$ é um termo.

# Fórmula
Uma fórmula bem-formada é definida como:

- Um símbolo de verdade ($V$ e $F$)
- Se $p$ é um *símbolo de predicado n-ário* e $t_1,\dots t_n$ são termos, então $p(t_1,\dots,t_n)$ é uma fórmula atômica
- Se $\alpha$ é uma fórmula, então $\neg \alpha$ é uma fórmula
- Se $\alpha$ e $\beta$ são fórmulas, então suas combinações através de *conectivos lógicos* também são fórmulas.
- Se $\alpha$ é uma fórmula e $X$ é uma *variável livre* em $\alpha$, então $\exists X$ e $\forall X$ são fórmulas.

Chamamos de *variáveis livres* as variáveis que não estão sendo *quantificadas* por um quantificador em determinada fórmula. Caso uma variável esteja sendo quantificada no escopo de uma fórmula, dizemos que ela está *ligada*. Vale destacar que uma variável pode ter ocorrências livres e ligadas em uma mesma fórmula.

## Fórmula fechada
Uma fórmula que não contém **nenhuma ocorrência** de variáveis livres é chamada de *fórmula fechada*. Podemos, a partir de fórmulas não-fechadas, produzir fórmulas fechadas através dos *fechamentos*, que podem ser de dois tipos:

- **Fechamento universal**: Obtida com a adição de um quantificador **universal** $\forall$ associado a cada variável que ocorre livre na fórmula.
- **Fechamento existencial**: Obtida com a adição de um quantificador **existencial** $\exists$ associado a cada variável que ocorre livre na fórmula.