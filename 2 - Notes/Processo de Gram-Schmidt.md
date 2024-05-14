---
date: 2024-05-14
---

Em [[Espaço vetorial euclidiano|espaços euclidianos]] geralmente **bases ortogonais ou ortonormais** **simplificam os cálculos** e tornam a resolução de problemas mais simples nessas bases. O processo de Gram-Schmidt consiste em, dada uma [[Base de um espaço vetorial]] $V$, convertê-la em uma base de $V$ ortogonal ou ortonormal. Esse processo consiste em escrever os elementos da sequência como [[Combinação linear]] dos elementos anteriores, tomando escalares que tornem todos os vetores da sequência ortogonais dois a dois.

O processo se baseia no fato de que sempre é possível construir, a partir de uma sequência de vetores [[Dependência linear|linearmente independentes]] $\{u_1, u_2, \dots, u_n\}$, uma sequência ortogonal $\{e_1, e_2, \dots, e_n\}$. Além disso, dada uma sequência ortogonal $\{e_1, e_2, \dots, e_n\}$, para obter-se uma sequência ortonormal $\{e^*_1, e^*_2, \dots, e^*_n\}$ basta normalizar cada vetor:

$$e^*_i = \frac{e_i}{||e_i||}, \quad i = 1, 2, \dots, n$$

Portanto, **todo** espaço euclidiano $n$ dimensional tem uma **base ortogonal** e uma **base ortonormal**.

Dada uma sequência de vetores linearmente independentes $\{u_1, u_2, \dots, u_n\}$, para transformá-la em uma sequência ortogonal $\{e_1, e_2, \dots, e_n\}$, os elementos $e_i$ são escritos como combinação linear de seus predecessores, da seguinte forma:

$$
\begin{aligned}
  e_1 &= u_1 \\
  e_2 &= u_2 -\frac{u_2 \cdot e_1}{e_1 \cdot e_1}e_1 \\
  e_3 &= u_3 -\frac{u_3 \cdot e_1}{e_1 \cdot e_1}e_1 -\frac{u_3 \cdot e_2}{e_2 \cdot e_2}e_2 \\
  \vdots\\
  e_i &= u_i -\frac{u_i \cdot e_1}{e_1 \cdot e_1}e_1 -\frac{u_i \cdot e_2}{e_2 \cdot e_2}e_2 - \dots -\frac{u_i \cdot e_{i-1}}{e_{i-1} \cdot e_{i-1}}e_{i-1}
\end{aligned}
$$