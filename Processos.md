# Processos
Em sua essência um processo é uma abstração para um programa em execução. Processos são uma das abstrações mais importantes e centrais dos [[Sistemas Operacionais | sistemas operacionais]], pois eles tornam possíveis muitas operações essenciais para os sistemas computacionais modernos. Uma dessas importantes operações é o *pseudo paralelismo*, onde a execução de vários processos é intercalada em uma única *CPU*, dando ao usuário a impressão de execução paralela dos programas. Essa e muitas outras operações só são possíveis através da abstração fornecida pelos processos.

## O modelo de processo
Um processo representa uma instância de um programa em execução, incluindo todos os dados relacionados a ele como valores do contador do programa, registradores e variáveis.

## Criação de processos
Em sistemas *UNIX* há apenas uma chamada de sistema para criar um novo processo: `fork`. A chamada `fork` cria um **clone** do processo que a chamou, ou seja, após a chamada `fork` tanto o processo pai quanto o filho possuem o mesmo estado, incluindo imagem de memória, variáveis de ambiente e mais (porém possuem seus próprios espaços de endereços distintos, ou seja, alterações no espaço de endereço do processo filho não alteram o processo pai). Normalmente após uma chamada `fork` o processo filho executa uma outra chamada de sistema como `execve` para então executar um programa diferente.

- Processos que ficam em segundo plano são chamados de **daemons**.

## Término de processos

## Hierarquia de processos

---

created: 23/08/2021
