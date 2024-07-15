---
created-at: 2023-01-11
---

OpenMP é uma extensão para as linguagens C, C++ e Fortran que permite a paralelização de programas utilizando o modelo de [[Memória compartilhada]] através da inserção de diretivas ([pragmas](https://en.wikipedia.org/wiki/Directive_(programming))) em um código sequencial. Utilizando os recursos da API OpenMP, é possível reduzir significativamente as dificuldades de implementação introduzidas por APIs de mais baixo nível, como a biblioteca *pthreads*.

As diretivas introduzidas no código são interpretadas pelo compilador (que deve fornecer suporte à OpenMP), e então são utilizadas para gerar código paralelo que utiliza APIs de mais baixo nível (geralmente a biblioteca pthreads). É possível controlar o processo de compilação através de parâmetros disponíveis através de variáveis de ambiente.

# Regiões paralelas

Em OpenMP, uma **região paralela** é um bloco de código que será executado por um **time de threads**. Uma região paralela pode ser definida através da diretiva `#pragma omp parallel`, que cria um time de threads para executar o bloco logo abaixo da diretiva.

```c
#pragma omp parallel
printf("Executado pela thread %d de um time de %d threads\n",
       omp_get_thread_num(), omp_get_num_threads());
```

# Definindo o número de threads

O número padrão de threads é igual ao número de unidades de processamento disponíveis do sistema, mas é possível alterar esse número de múltiplas formas.

A diretiva `if` permite que a execução paralela seja condicionada ao resultado de uma expressão. Se o resultado da expressão for verdadeiro, a região é executada em paralelo, caso contrário, é executada sequencialmente (em uma única thread).

```c
void maybe_parallel(int arg) {
#pragma omp parallel if (arg)
  printf("Executado pela thread %d de um time de %d threads\n",
         omp_get_thread_num(), omp_get_num_threads());
}

maybe_parallel(0);
printf("\n");
maybe_parallel(1);
```

A diretiva `num_threads` permite a definição do número de threads que irão executar um determinado bloco.

```c
#pragma omp parallel num_threads(4)
printf("Executado pela thread %d de um time de %d threads\n",
       omp_get_thread_num(), omp_get_num_threads());

printf("\n");

#pragma omp parallel num_threads(1)
printf("Executado pela thread %d de um time de %d threads\n",
       omp_get_thread_num(), omp_get_num_threads());
```

A função `omp_set_num_threads` define o número de threads que serão utilizadas para executar todas as regiões paralelas subsequentes que não especificarem explicitamente a clausula `num_threads`.

```c
omp_set_num_threads(3);

#pragma omp parallel
printf("Executado pela thread %d de um time de %d threads\n",
       omp_get_thread_num(), omp_get_num_threads());

printf("\n");

#pragma omp parallel num_threads(1)
printf("Executado pela thread %d de um time de %d threads\n",
       omp_get_thread_num(), omp_get_num_threads());

printf("\n");

#pragma omp parallel
printf("Executado pela thread %d de um time de %d threads\n",
       omp_get_thread_num(), omp_get_num_threads());
```

Também é possível definir o número de threads utilizadas pelo OpenMP através da variável de ambiente `OMP_NUM_THREADS`. Quando definido, o valor dessa variável passa a ser o novo número padrão de threads.

# Divisão de trabalho

As diretivas da OpenMP oferecem variados métodos de divisão de trabalho, sendo possível configurar os detalhes de como a carga de trabalho será dividida entre as threads do time.

## Single

A diretiva `single` é utilizada para especificar que uma determinada região será executada por apenas uma thread. Uma barreira é implicitamente colocada ao final do bloco da diretiva, fazendo com que as demais threads do time aguardem o término da execução do bloco, a não ser que uma claúsula `nowait` seja especificada.

```c
#pragma omp parallel
{
  printf("Início executado pela thread %d de um time de %d threads\n",
         omp_get_thread_num(), omp_get_num_threads());

#pragma omp single
  printf("Executado apenas pela thread %d de um time de %d threads\n",
         omp_get_thread_num(), omp_get_num_threads());

  printf("Fim executado pela thread %d de um time de %d threads\n",
         omp_get_thread_num(), omp_get_num_threads());
}
```

## Sections

A diretiva `sections` define seções de código que serão executadas apenas uma vez por uma das threads do time. Esse modelo de divisão de trabalho pode ser utilizado para implementar a [[Projeto de programas paralelos|decomposição funcional]] do programa. Ao final das sections uma barreira é inserida, a não ser que uma clausula `nowait` seja especificada.

```c
#pragma omp parallel
{
  printf("Início executado pela thread %d de um time de %d threads\n",
         omp_get_thread_num(), omp_get_num_threads());

#pragma omp sections
  {

#pragma omp section
    printf(
        "Section 1 executada apenas pela thread %d de um time de %d threads\n",
        omp_get_thread_num(), omp_get_num_threads());

#pragma omp section
    printf(
        "Section 2 executada apenas pela thread %d de um time de %d threads\n",
        omp_get_thread_num(), omp_get_num_threads());

#pragma omp section
    printf(
        "Section 3 executada apenas pela thread %d de um time de %d threads\n",
        omp_get_thread_num(), omp_get_num_threads());

#pragma omp section
    printf(
        "Section 4 executada apenas pela thread %d de um time de %d threads\n",
        omp_get_thread_num(), omp_get_num_threads());
  }

  printf("Fim executado pela thread %d de um time de %d threads\n",
         omp_get_thread_num(), omp_get_num_threads());
}
```

## For

A diretiva `for` permite dividir as iterações de um loop entre várias threads para executá-las em paralelo. Em geral, é essa diretiva permite implementar a [[Projeto de programas paralelos|decomposição de domínio]]. Por padrão as iterações do loop são divididas igualmente entre as threads do time, de forma que para um loop de `n` iterações executado por `t` threads, cada thread executa `n/t` iterações. Vale destacar que por padrão a variável de controle do loop é implicitamente privada, ou seja, cada thread tem sua cópia da variável. Isso permite que uma thread não incremente ou decremente o número da iteração de outra, potencialmente produzindo resultados incorretos.

```c
#pragma omp parallel num_threads(2)
{
#pragma omp for
  for (int i = 0; i < 10; i++) {
    printf("Thread %d tratando iteração %d\n", omp_get_thread_num(), i);
  }
}
```

O método de divisão das iterações de um for loop é definido através de **políticas** que podem declaradas diferentes maneiras: com uso da cláusula `schedule` na diretiva `for`, com a função `omp_set_schedule` ou mesmo com a variável de ambiente `OMP_SCHEDULE`.

As políticas disponíveis são as seguintes:

- `static`: as iterações são divididas de maneira estática em porções de um tamanho definido, se o tamanho não for especificado então é feita uma divisão uniforme.
- `dynamic`: as iterações são divididas em porções de um tamanho definido (por padrão o tamanho é 1) e então são atribuídas dinamicamente às threads, ao finalizar uma porção das iterações, a thread inicia o processamento de outra porção.
- `guided`: o número de iterações atribuídas à cada thread é calculado em função do número de iterações restantes.
- `runtime`: a política de divisão é determinada apenas em runtime através da variável de ambiente `OMP_SCHEDULE`.
- `auto`: a política de divisão é determinada de forma automática pelo compilador.

É possível ainda agregar os resultados das iterações executadas por diferentes threads em uma única variável de acordo com um operador lógico ou aritmético através da cláusula `reduction`. Reduções são especialmente úteis para agregar resultados parciais obtidos por loops paralelos.

```c
int vet[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int sum = 0;

#pragma omp parallel for reduction(+ : sum)
for (int i = 0; i < 10; i++)
  sum += vet[i];

printf("Soma: %d\n", sum);
```

# Criação de tarefas sob demanda

Em OpenMP, tasks são tarefas que podem ser criadas dinamicamente para serem executadas por alguma thread do time de threads da região paralela atual. Tasks podem ser criadas através da diretiva `task`, e é possível aguardar a execução das tasks com a diretiva `taskwait`.

```c
#define NUM 256
#define MIN_BLOCK 32

int calc(int start, int finish) {
  if (finish - start <= MIN_BLOCK) {
    int sum = 0;

    printf("Thread %d: Bloco pequeno o bastante ([%d, %d])! Calculando...\n",
           omp_get_thread_num(), start, finish);

    for (int i = start; i < finish; i++)
      sum++;

    return sum;
  }
  int sum1, sum2;
  int diff = finish - start;

  printf("Thread %d: Dividindo [%d, %d]\n", omp_get_thread_num(), start,
         finish);

// A variável de retorno deve ser compartilhada para que o valor seja acessível
// por outras threads. Caso contrário, o valor de retorno é salvo em uma nova
// variável restrita à thread que executou a task.
#pragma omp task shared(sum1)
  sum1 = calc(start, start + diff / 2);

#pragma omp task shared(sum2)
  sum2 = calc(finish - diff / 2, finish);

#pragma omp taskwait
  return sum1 + sum2;
}

int sum;

#pragma omp parallel
{
#pragma omp single
  sum = calc(0, NUM);
}

printf("Soma: %d\n", sum);
```

# Controlando o acesso à variáveis

Em OpenMP é possível controlar o acesso e visibilidade de variáveis através da definição de **variáveis privadas** e de mecanismos de exclusão mútua.

Por padrão as variáveis acessíveis no escopo da região paralela são compartilhadas entre todas a threads do time, a não ser que seja especificada uma diretiva `private` com as variáveis privadas ou nos casos de diretivas `for` que automaticamente tornam a variável de controle da iteração privada. Quando especificada, a claúsula `private` torna as variáveis passadas como argumento privadas para cada thread, ou seja, as variáveis se tornam locais na rotina de cada thread.

A exclusão mútua de variáveis compartilhadas pode ser obtida através da diretiva `critical`. Essa diretiva define que um bloco da região paralela deve ser executado em exclusão mútua, ou seja, apenas uma thread do time pode executar o bloco em um determinado momento do tempo.

```c
int sum = 0;

#pragma omp parallel
{
#pragma omp single
  printf("Executando com um time de %d threads sem exclusão mútua: ",
         omp_get_num_threads());

  sum += 1;
}

printf("soma=%d\n", sum);

sum = 0;

#pragma omp parallel
{
#pragma omp single
  printf("Executando com um time de %d threads com exclusão mútua: ",
         omp_get_num_threads());

#pragma omp critical
  sum += 1;
}

printf("soma=%d\n", sum);
```

A diretiva `atomic` especifica que uma determinada instrução deve ser realizada de forma atômica. Quando possível, essa diretiva faz com que a operação seja executada através de uma instrução atômica da arquitetura.

```c
int sum = 0;

#pragma omp parallel
{
#pragma omp single
  printf("Executando com um time de %d threads sem operação atômica: ",
         omp_get_num_threads());

  sum += 1;
}

printf("soma=%d\n", sum);

sum = 0;

#pragma omp parallel
{
#pragma omp single
  printf("Executando com um time de %d threads com operação atômica: ",
         omp_get_num_threads());

#pragma omp atomic
  sum += 1;
}

printf("soma=%d\n", sum);
```
