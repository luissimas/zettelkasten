---
created-at: 2021-09-17
---
Dada uma relação $R$ em um conjunto $A$, dizemos que $R$ é uma **relação de ordem parcial** (denotada por $\preceq $) se $R$ é *reflexiva*, *antissimétrica* e *transitiva*. Um conjunto $A$ juntamente com uma ordem parcial $R$ é chamado de **conjunto parcialmente ordenado**, ou **conjunto ordenado**. Um *conjunto parcialmente* ordenado é denotado pelo par $(A, R)$, em que $R$ é uma relação de ordem parcial no conjunto $A$, que é chamado de *conjunto fundamental* do par ordenado.

# Elementos comparáveis
É possível definir, a partir das relações de ordem, se dois elementos de um conjunto são *comparáveis*. Dado um conjunto *parcialmente ordenado* $(A, R)$ e $x, y \in A$, $x$ e $y$ são *comparáveis* se e somente se $x R y$ ou $y R x$. Portanto, dois elementos de um conjunto parcialmente ordenado são comparáveis apenas se estiverem relacionados por meio da relação de ordem parcial $R$.
Uma *ordem total*, ou *ordem linear*, é um conjunto parcialmente ordenado no qual **não existem** elementos **não comparáveis**.

# Relação de ordem parcial estrita
Dada uma relação $R$ em um conjunto $A$, dizemos que $R$ é uma **relação de ordem parcial estrita** se $R$ é *antirreflexiva*, *antissimétrica* e *transitiva*.

# Diagrama de Hasse
O diagrama de Hasse é uma representação visual de um *conjunto parcialmente ordenado*. Nessa representação, cada elemento do conjunto fundamental é representado por um ponto (ou vértice), os elementos relacionados por meio da relação de ordem parcial são unidos por um segmento de reta. Se o par $(x,y)$ está na relação de ordem parcial do conjunto, então $x$ é colocado abaixo de $y$ e os dois são unidos por um segmento de reta.

# Cadeia e anticadeia
Dado um conjunto parcialmente ordenado $P = (A, R)$ e um subconjunto $C$ tal que $C \subseteq A$. Dizemos que $C$ é uma **cadeia** de $P$ se os elementos de todos os pares em $C$ são comparáveis. Dizemos que $C$ é uma **anticadeia** de $P$ se, para todos os pares de elementos distintos em $C$, os elementos não são comparáveis.

# Mínimos e máximos
Dado um conjunto parcialmente ordenado $(A,R)$ e $x, y \in A$. Dizemos que $x$ é **elemento mínimo** se para todo $z \in A$ temos $x R z$. Dizemos que $y$ é **elemento máximo** se para todo $z \in A$, temos $z R y$. Note que, se existirem no conjunto, os elementos *mínimo* e *máximo* são **únicos.**

# Minimal e maximal
Dado um conjunto parcialmente ordenado $(A,R)$ e $x, y \in A$. Dizemos que $x$ é **elemento minimal** não existe $z \in A$ tal que $z R x$. Dizemos que $y$ é **elemento maximal** não existe $z \in A$, tal que $y R z$. Note que o elemento *mínimo* é sempre *minimal*, e o elemento *máximo* é sempre *maximal*, entretanto a **recíproca não é verdadeira**.
