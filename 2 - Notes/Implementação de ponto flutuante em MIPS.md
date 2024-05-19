---
created-at: 2024-05-13
---

Para implementar um [[Implementação de sistemas de ponto flutuante|sistema de ponto flutuante]] na arquitetura [[MIPS]], utiliza-se um **coprocessador** dedicado chamado *Coprocessor 1* ou *Floating Point Unit (FPU)* para realizar as operações relacionadas a números *FP*. São reservados $32$ registradores *FP*: $\text{\$f0}, \text{\$f1}, \dots, \text{\$f31}$. Vale lembrar que como todos os registradores MIPS são de $32$ *bits*, é necessário o uso de dois registradores em conjunto para armazenas os números de precisão dupla.