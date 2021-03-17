# Makefiles
Makefiles são arquivos que descrevem a relação entre os diferentes arquivos de um programa, o comano *make* usa esse arquivo para compilar o programa da maneira correta. É possível usar *make* para compilar qualquer programa em qualquer linguagem que tenha um compilador que possa ser acionado através de um comando shell.
É importante destacar que as *Makefiles* são *white-space sensitive*, então alguns erros podem ser causados por espaços em finais de linha ou má indentação.
A sintaxe básica de um *Makefile* segue a seguinte estrutura:

```Makefile
MACRO = 

target: dependencies
  action
```

Quando rodamos *make* ele executa a *action* para todos os *targets* cujas *depencencies* sofreram alterações. Os *macros* são semelhantes a constantes e facilitam a modificação de certos componentes de uma determinada *Makefile*.
Existem alguns macros especiais pré-definidos:
- `$@` é o nome do target
- `$?` é o nome das dependências daquele target que sofreram alterações
- `$^` é o nome de todas as dependências daquele target

Fiz um makefile genérico para *C++*:

```Makefile
MACRO = 

target: dependencies
  action
```

---

created: 17/03/2021
modified: 17/03/2021