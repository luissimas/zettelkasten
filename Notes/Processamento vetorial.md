---
created-at: 2023-01-12
---

Processamento vetorial é uma forma de paralelizar uma **mesma operação** sobre um **conjunto de dados**. Esse é um exemplo de [[Paralelismo de dados]]. Esse processamento é feito através de **operações vetoriais** (instruções SIMD) cujo suporte é geralmente implementado em nível de hardware pela CPU ou GPU .

Operações vetoriais consistem no **armazenamento sequencial** de dados em memória, e posteriormente em **registradores especiais** capazes de armazenar múltiplos dados em sequência, para então executar uma instrução especial que faz uso desses registradores, efetivamente executando a mesma operação sobre todos os dados ao mesmo tempo.

As operações vetoriais podem ser utilizadas de diferentes maneiras: através de bibliotecas que exploram essas extensões quando disponíveis, implicitamente através de mecanismos de otimização do compilador e explicitamente através de funções intrínsecas SIMD, que expõe as instruções vetoriais da arquitetura através de funções da linguagem.

Para ser vetorizado, um trecho de código deve ser livre de dependência de dados. Em instruções singulares, isso geralmente não apresenta um problema, mas em loops iterativos é necessário verificar que as iterações não dependem de resultados anteriores, como o seguinte trecho:

```c
#define MAX 100

int a[MAX], b[MAX], c[MAX];

for (int i = 0; i < MAX; i++)
  c[i] = a[i] + b[i];
```

Além disso, para obter melhor desempenho, é necessário assegurar que os dados a serem processados estão armazenados de maneira contígua na memória, evitando múltiplas buscas de dados na memória principal para carregar os registradores das instruções vetoriais.
