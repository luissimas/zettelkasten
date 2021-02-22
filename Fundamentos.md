# Fundamentos
## Sistema Computacional
Um sistema computacional é composto por 3 componentes: Hardware, Software e Dados. Usar diferentes níveis de abstração facilita o uso e desenvolvimento de sistemas computacionais.

| Camadas de abstração                                    |
| ------------------------------------------------------- |
| Linguagem Natural                                       |
| Algoritmo (Sequência de instruções)                     |
| Programa de Aplicação                        |
| Sistema Operacional                          |
| Arquitetura do Computador                               |
| Microarquitetura (Implementação da Unidade de Controle) |
| Circuitos Lógicos                                       |
| Dispositivos eletrônicos                                                        |

### Nível de Software
A camada de Software engloba tanto o programa de aplicação quanto o sistema operacional.
O sistema operacional gerencia os recursos do sistema e interage diretamente com a arquitetura do computador. As instruções do programa são "traduzidas" pelos compiladores para códigos de instruções definidos pela arquitetura, que correspondem a operações a serem executadas pelo hardware.

### Nível de Máquina
No nível de máquina temos os demais elementos que compõe o sistema computacional.
A arquitetura do computador é uma especificação formal de todas as funções que podem ser executadas pela máquina (ISA - Instruction Ser Architecture.
A microarquitetura é a implementação da ISA em nível de hardware, ou seja, a forma como as instruções serão executadas pelos circuitos.
Os circuitos lógicos (compostos por dispositivos eletrônicos) são a base do hardware, eles são organizados e conectados em diferentes agrupamentos, como a ULA.

![[barramentobasico.png]]

## Arquitetura
Atributos visíveis para o programador, ou seja, atributos que têm impacto direto na execução de algum programa.
- Conjunto de instruções básicas
- Número de bits para representar dados
- Mecanismos de input e output

## Organização
Atributos não visíveis para o programador, são responsabilidade do projetista de hardware. A forma como os elementos computacionais estão dispostos e organizados através de conexões que implementam as especificações da [[Fundamentos#Arquitetura|Arquitetura]] no hardware.
- Sinais de controle
- Tecnologia de transistores
- Tecnologia de memória

---

created: 22/02/2021
modified: 22/02/2021