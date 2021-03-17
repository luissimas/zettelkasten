# Makefiles
Makefiles são arquivos que descrevem a relação entre os diferentes arquivos de um programa, o comano *make* usa esse arquivo para compilar o programa da maneira correta. É possível usar *make* para compilar qualquer programa em qualquer linguagem que tenha um compilador que possa ser acionado através de um comando shell.
É importante destacar que as *Makefiles* são *white-space sensitive*, então alguns erros podem ser causados por espaços em finais de linha ou má indentação.
A sintaxe básica de um *Makefile* segue a seguinte estrutura:

```Makefile

target: dependencies
  action
```

Quando rodamos *make* ele verifica todas as dependências, toda vez que uma dependência é alterada a ação especificada é executada.

---

created: 17/03/2021
modified: 17/03/2021