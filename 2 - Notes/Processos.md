# Processos
Um processo representa uma instância de um programa em execução, incluindo todos os dados relacionados a ele como valores do contador do programa, registradores e variáveis.
Processos são uma das abstrações mais importantes e centrais dos [[Sistemas operacionais | sistemas operacionais]], pois eles tornam possíveis muitas operações essenciais para os sistemas computacionais modernos. Uma dessas importantes operações é o *pseudo paralelismo*, onde a execução de vários processos é intercalada em uma única *CPU*, dando ao usuário a impressão de execução paralela dos programas. Essa e muitas outras operações só são possíveis através da abstração fornecida pelos processos.

Todo armazena as seguintes informações relativas à sua execução:
1. Conjunto de instruções (programa)
2. Espaço de endereçamento
3. Contexto de hardware (valores de registradores como PC, ponteiro de pilha e registradores intermediários)
4. Contexto de software (arquivos abertos, variáveis de ambiente etc)

## Criação de processos
Em sistemas *UNIX* há apenas uma chamada de sistema para criar um novo processo: `fork`. A chamada `fork` cria um **clone** do processo que a chamou, ou seja, após a chamada `fork` tanto o processo pai quanto o filho possuem o mesmo estado, incluindo imagem de memória, variáveis de ambiente e mais (porém possuem seus próprios espaços de endereços distintos, ou seja, alterações no espaço de endereço do processo filho não alteram o processo pai). Normalmente após uma chamada `fork` o processo filho executa uma outra chamada de sistema como `execve` para então executar um programa diferente.

## Estados de processos
Durante sua execução, um processo pode estar em 3 diferentes estados:

1. Em execução: está utilizando a CPU.
2. Pronto: está pronto para ser executado, aguardando para usar a CPU.
3. Bloqueado: está incapacitado de ser executado, geralmente aguardando a resposta de alguma chamada referente a IO.

![[estadosprocessos.png]]

---

created: 23/08/2021
