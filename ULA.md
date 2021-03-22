# ULA
A ULA (Unidade lógica e aritmética), é a parte do *CPU* responsável por realizar operações aritméticas e lógicas.
Essa unidade recebe como entrada os dois operandos (no caso da arquitetura [[MIPS]] eles possuem 32 bits), e um seletor de operação a ser realizada com esses operandos. A representação numérica que deve ser levada em conta é a de complemento de 2, que simplifica as [[Arithmetic logic circuits|operações usando números com sinais]].


![[ulascheme.png]]


## Instrução SLT
A arquitetura MIPS possui uma instrução *set-on-less-than*, que retorna 1 se $a<b$ e 0 caso contrário. Do ponto de vista do hardware, essa é uma instrução aritmética.
Para implementá-la basta saber que se $(a-b)<0$, então $a<b$. Portanto, basta subtrair um operando do outro e depois verificar o bit de sinal do resultado (lembrando que estamos usando representação numérica em complemento de 2), para saber se o resultado da subtração foi positivo ou negativo.

## Instrução BEQ
A arquitetura mips possui uma instrução de branch condicional BEQ (branch-if-equal), para implementá-la podemos utilizar a subtração. Se $(a-b)=0$, então $a=b$, sabendo disso basta subtrair os dois operandos e verificar se o resultado da substração é 0. Para fazer essa verificação basta efetuar a operação *OR* entre todos os bits da saída.

---

created: 22/03/2021
modified: 22/03/2021
