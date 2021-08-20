# Sequências Numéricas
Uma sequência de números reais é qualquer sequência de números $a_1, a_2, \dots, a_n$ tal que $a_n \in \mathbb{R} \quad \forall n \in \mathbb{Z}$. Sequências numéricas podem ser denotadas também pela notação $(a_n)_{n\in\mathbb{Z}}$.

> ***Sequência convergente***
> Uma sequência $(a_n)_{n\in\mathbb{Z}}$ é dita *convergente* se existe um número $L \in \mathbb{R}$ tal que
>$$
  \lim_{n \to \infty} a_n = L
>$$
> Se $(a_n)_{n\in\mathbb{Z}}$ não for *convergente*, ela é dita *divergente*.

## Limites de sequências
Segue abaixo um teorema importantíssimo que associa a ideia de limite de sequências ao limite de funções. Isso nos permite carregar os conceitos e operações envolvendo limites de funções para serem aplicados em sequências infinitas que podem ser expressadas através de funções.

> Dada uma sequência $(a_n)_{n \in \mathbb{Z}}$ e uma função $f.[1, +\infty[ \to \mathbb{R}$, tal que $a_n = f(n)$, é possível estabelecer a seguinte relação:
>$$
  \lim_{x \to \infty} f(x) = L \implies \lim_{x \to \infty} a_n = L
>$$

Note que a recíproca do teorema **não** é verdadeira, ou seja, ainda é possível que uma sequência possua um limite mesmo que função que a representa não possua um limite definido.
Sabendo disso, convém aqui enunciar algumas propriedades de limites aplicáveis tanto para funções quanto para sequências.

> Sejam $(a_n)$ e $(b_n)$ sequências de números reais tal que $\lim_{n \to +\infty} a_n = A$ e $\lim_{n \to +\infty} b_n = B$, tal que $A \in \mathbb{R}$ e $B \in \mathbb{R}$, as seguintes propriedades são verdadeiras:
>$$
\begin{aligned}
  &\lim_{n \to + \infty}(a_n + b_n) = A + B\\
  &\lim_{n \to + \infty}(a_n - b_n) = A - B\\
  &\lim_{n \to + \infty}(a_n \cdot b_n) = A \cdot B\\
  &\lim_{n \to + \infty}(k \cdot b_n) = k \cdot B\\
  &\lim_{n \to + \infty} \frac{a_n}{b_n} = \frac{A}{B}, \quad \text{com } B \neq 0\\
\end{aligned}
>$$

## Sequências crescentes limitadas
Antes de calcular o limite de uma sequência, é necessário determinar se a sequência possui um limite, isto é, se a sequência converge para algum número real. Isso pode ser determinado através do teorema a seguir, que de fato apresenta uma definição intuitiva.

> ***Teorema da sequência crescente***
> Uma sequência crescente de números reais converge se, e somente se, é limitada superiormente. Se uma sequência crescente converge, ela converge para o seu menor limitante superior.

> ***Sequência crescente***
> Uma sequência $(a_n)$ é crescente se e somente se $a_n \leq a_{n+1} \quad \forall n \in \mathbb{Z}$.

> ***Sequência limitada***
> Uma sequência $(a_n)$ é **limitada superiormente** se existe um número $M$ (*limitante superior*) tal que $a_n \leq M \quad \forall n \in \mathbb{Z}$. Se $M$ é um limitante superior para $(a_n)$ mas não existe nenhum outro limitante superior para $(a_n)$ menor que $M$, então $M$ é o *menor limitante superior* para $(a_n)$.

---

created: 16/08/2021
