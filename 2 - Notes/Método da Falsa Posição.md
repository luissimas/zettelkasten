---
date: 2024-05-13
---

 O método da Falsa Posição é utilizado para a [[Resolução de equações não lineares]]. Com uma modificação no [[Método da Secante]] é possível obter um método para encontrar raízes de funções não-lineares. Se considerarmos um intervalo $I_0 = [p_0, p1]$ e o cálculo de $p_2$ como no método da secante, ao invés de descartar o elemento $p_0$ e fazer um novo cálculo agora baseado no intervalo de extremos $p_1$ e $p_2$, analisamos o sinal da função nos três pontos:

-   Se $f(p_0)f(p_2) < 0$ e $f(p_1)f(p_2) > 0$, então existe uma raiz entre $p_0$ e $p_2$, e selecionamos estes valores para a próxima iteração.
-   Se $f(p_1)f(p_2) < 0$ e $f(p_0)f(p_2) > 0$, então existe uma raiz entre $p_1$ e $p_2$, e selecionamos estes valores para a próxima iteração.
-   Se ambos os produtos tiverem o mesmo sinal, então é possível escolher qualquer combinação de valores para a próxima iteração.