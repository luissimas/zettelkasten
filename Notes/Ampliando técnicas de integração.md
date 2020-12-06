# Ampliando técnicas de integração
Calcular integrais não é uma tarefa intuitiva, há vezes em que nos deparamos com expressões dentro de integrais cuja solução não é imediata. Ao longo do tempo foram desenvolvidas diversas técnicas para manipular essas expressões e transformá-las em integrais mais simples de serem calculadas.

## Completamento de quadrados
Quando temos no denominador um polinômio de grau dois, podemos aplicar esta técnica, que consiste em encontrar um quadrado-perfeito equivalente ao polinômio.
Geralmente utilizamos essa técnica para resolver integrais no seguinte formato:
$$
\int{\frac{Ax+B}{ax^2+bx+c}}\,dx
$$
Primeiro fatoramos o polinômio:
$$
ax^2+bx+c = a\left(x^2+\frac{b}{a}x+\frac{c}{a}\right)
$$
Agora, para colocá-lo na forma $(x+b)^2 = x^2+2x\cdot b+b^2$:
$$
a\left[\left(x^2+2x\cdot\frac{\frac{b}{a}}{2}+\left(\frac{b}{a}\right)^2\right)-\left(\frac{b}{a}\right)^2\right]
$$

## Substituições trigonométricas
Podemos usar essa técnica para resolver integrais envolvendo expressões $\sqrt{a^2-x^2}$, $\sqrt{a^2+x^2}$, e $\sqrt{x^2-a^2}$. A ideia é utilizar as relações trigonométricas para transformar as expressões em funções trigonométricas, fundamentalmente mais simples de serem integradas. Para fazer isso, é necessário identificar qual substituição devemos aplicar e então substituir tanto a expressão quando o $dx$. As principais substituições são:
$$
\begin{aligned}
  \sqrt{a^2-x^2}&=a\cos{\theta}\qquad dx=a\cos{\theta}d\theta\\
  \sqrt{x^2-a^2}&=a\tan{\theta}\qquad dx=a\sec{\theta}\tan{\theta}d\theta\\
  \sqrt{a^2+x^2}&=a\sec{\theta}\qquad dx=a\sec^2{\theta}d\theta\\
\end{aligned}
$$

---

created: 25/11/2020
modified: 25/11/2020

[[Attachments/Calc1/calculo1v2020aula18.pdf]]
