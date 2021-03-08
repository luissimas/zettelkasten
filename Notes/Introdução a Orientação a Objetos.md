# Introdução a Orientação a Objetos
O paradigma de orientação a objetos começou a ser desenvolvido na década de 70, a partir da necessidade de se ter uma maior organização do código e principalmente: maior adequação às regras de negócios. O paradigma de orientação a objetos partilha muitas caraterísticas com o paradigma imperativo, porém introduz novos conceitos como classes, objetos, herança, encapsulamento etc. A ideia desse paradigma é focar mais nos dados e em sua organização no fluxo do programa, permitindo assim uma melhor representação da realidade.
- Reusabilidade de código
- Foco nos dados
- Facilidade de manutenção
- Integridade dos dados

Para que uma linguagem seja considerada orientada a objetos ela deve possuir os seguintes atributos:
1. Abstração: modelar características do mundo real.
2. Encapsulamento: proteger os dados e permitir apenas que suas operações internas tenham acesso a eles.
3. Herança: criação de novos objetos por meio da modificação de algo já existente.
4. Polimorfismo: capacidade de uma unidade ter várias formas.

## Classes
Classes são modelos de objetos, objetos são instâncias (concretizações) de classes.
A principal diferença das classes para os structs é que os structs apenas agrupam dados, já as classes os protegem e fornecem ferramentas muito mais robustas para manipulá-los replicá-los.
Ações são chamadas de métodos, características são chamadas de atributos.
Herança e composição permite a reutilização das classes.
Classes mais genéricas permitem que outras classes herdem seus atributos.
Classes podem ser compostas de outras classes "menores".
O construtor é chamado toda vez que um objeto é instanciado e tem por função inicializar o objeto.
Podem haver vários construtores com parâmetros diferentes, isso se chama sobrecarga de um método (no caso o construtor)
O destrutor é particularmente útil quando há alocação dinâmica de memória, pois é ele que desaloca a memória alocada pelo construtor.

---

created: 02/03/2021
modified: 02/03/2021