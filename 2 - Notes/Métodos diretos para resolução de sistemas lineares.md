---
created-at: 2024-05-13
---

Os métodos diretos para a resolução de sistemas lineares oferecem a **solução exata** (exceto quando há erros de arredondamento introduzidos pela máquina) com um **número finito de operações**. Entretanto, esses métodos podem se tornar inviáveis dependendo da estrutura ou dimensão do sistema.

Esses métodos se baseiam na seguinte propriedade de manipulação de sistemas lineares:

A solução de um sistema de equações lineares $Ax = b$ **não se altera** se aplicarmos as seguintes operações nas linhas de $A$:

1.  Multiplicar uma equação por uma constante não nula;
2.  Somar uma equação a um múltiplo de outra;
3.  Trocar a ordem das equações

Essas operações podem ser aplicadas para transformar um sistema original $Ax = b$ em um **sistema equivalente** que possua a mesma solução, mas tenha uma resolução mais fácil.

Os dois principais métodos para essa resolução são o [[Método da eliminação de Gauss]] e a [[Fatoração LU]].