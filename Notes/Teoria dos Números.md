---
created-at: 2021-10-20
---
A teoria dos números se dedica ao estudo dos números inteiros e suas propriedades. Esse campo da matemática é de fato muito extenso, portanto aqui ficam enunciadas apenas algumas propriedades e conceitos básicos dos números inteiros.

# Divisibilidade
A divisibilidade é um conceito básico mas que serve para compor muitos outros conceitos e propriedades relacionadas a números inteiros.

Dados dois inteiros $a$ e $b$ tal que $b \neq 0$, dizemos que $b$ **divide** $a$ se há um inteiro $c$ tal que $a=bc$. Essa relação é denotada por $b | a$.

A partir da decomposição do conceito de divisibilidade, obtém-se o **teorema da divisão**.

Dados dois inteiros $a,b \in \mathbb{Z}$ com $b > 0$, existe **um único par** de inteiros $(q,r)$ tais que:
$$
a = qb + r \qquad \text{ e } \qquad 0 \leq r \leq b
$$
O inteiro $q$ é chamado de *quociente* da divisão, enquanto $r$ é chamado de *resto*.

# Máximo divisor comum (MDC)
Dados dois inteiros $a,b \in \mathbb{Z}$, o máximo divisor comum é o **maior inteiro que divide** $a$ e $b$.

É possível calcular o *MDC* de dois números através do *Algoritmo de Euclides*, que pode ser definido da seguinte forma:

```
mdc a b =
  r = a mod b
  if r = 0 then b else mdc b r
```

# Números relativamente primos
Dados dois inteiros $a$ e $b$, dizemos que eles são **relativamente primos** (ou primos entre si) se e somente se $mdc(a,b) = 1$.

# Teorema fundamental da aritmética
Se $n$ é um número inteiro positivo, então pode-se decompor $n$ em um produto de números primos.