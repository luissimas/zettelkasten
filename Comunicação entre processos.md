# Comunicação entre processos
[[Processos]] sempre precisam se comunicar, essa comunicação deve ser bem definida e estruturada de maneira a garantir que haja um bom desempenho e, principalmente, que os processos não entrem em *condições de corrida*. Condições de corrida ocorrem quando dois ou mais processos estão lendo ou escrevendo dados em um espaço de memória compartilhado e o resultado final depende de qual processo executa e quando ele executa.
Uma maneira de evitar as condições de corrida, isto é, atingir a **exclusão mútua** no acesso a áreas de memória compartilhadas, é através da implementação do conceito de **regiões críticas**. Região crítica é o nome dado a qualquer parte do programa executado por um processos onde a memória compartilhada é acessada ou onde podem ocorrer quaisquer condições de corrida.
Uma boa solução utilizando o conceito de região crítica precisa estar em conformidade com quatro condições:

1. Dois processos jamais podem estar simultaneamente dentro de suas regiões críticas.
2. Nenhuma suposição pode ser feita a respeito de velocidades ou número de CPUs.
3. Nenhum processo executando fora de sua região crítica pode bloquear qualquer processo.
4. Nenhum processo deve ser obrigado a esperar eternamente para entrar em sua região crítica.

![[regiaocritica.png]]

## Espera ocupada
Nesse tipo de implementação, quando um processo deseja entrar na sua região crítica, ele verifica se a entrada é permitida. Caso ele não possa entrar na região crítica no dado momento, ele entra em um laço de espera até que seja possível entrar. Em geral e a espera ocupada não é eficiente e desperdiça tempo de CPU.

### Desabilitando interrupções
Quando um processo entra em sua região crítica ele desabilita todas as interrupções do sistema (inclusive as interrupções de clock), dessa forma ele não pode ser interrompido até finalizar a operação.
O problema dessa solução é que ela funciona apenas para sistemas de processador único. Em sistemas multiprocessados desabilitar as interrupções de uma CPU não impede que processos sendo executados em outras CPUs entrem na região crítica enquanto outro processo já está nela.
Outro ponto contrário a essa implementação é o aspecto de segurança. É muito imprudente permitir que um programa de usuário desabilite todas as interrupções do sistema, pois isso permite a ele o monopólio da CPU com a garantia de que nunca será interrompido.

### Variáveis de trava
Nessa solução está presente uma única variável compartilhada chamada de *variável de trava*. Quando um processo quer entrar em sua região crítica ele verifica o valor da trava. Se a trava é `0` o processo muda seu valor para `1` e entra na região crítica. Se a trava é `1` o processo espera até que ela se torne `0`.
A solução com variáveis de trava também não é muito atrativa, pois enfrenta exatamente os mesmos problemas de concorrência, porém dessa vez eles estão relacionados ao estado da variável de trava. É possível que um processo verifique que a trava é `0` para entrar na região crítica e, antes de configurar a trava para `1`, ele é interrompido e outro processo entra em execução, este também verifica que a trava é `0` e entra na região crítica, logo após isso o outro processo retoma sua execução e termina de configurar a trava para `1`, agora os dois processos estão na região crítica ao mesmo tempo.

### Alternância explícita
Nessa solução uma variável `turn` controla qual processo pode entrar na região crítica em um dado momento. Com a alternância explícita cada processo recebe uma chance alternada de entrar em sua região crítica. O problema dessa solução é que nem sempre é necessário alternar, e se um processo for muito mais lento que o outro pode haver um gargalo no sistema.

### Solução de Peterson
Nessa solução são usadas duas rotinas `enter_region` e `leave_region`. A chamada `enter_region` faz o processo esperar até que seja seguro entrar na região crítica e retorna quando for possível entrar. A chamada `leave_region` indica que o processo terminou seu trabalho na região crítica e que agora outros processos podem utilizá-la.
Uma possibilidade de implementação dessa solução é usando uma instrução `TSL` *(Test and Set Lock)* que verifica se o valor da trava `LOCK` era `0` e, em caso afirmativo, atribui um valor diferente de `0` para a trava. O importante aqui é que a instrução `TSL` é atômica, ou seja, é de fato uma única instrução executada pelo processador implementada em nível de hardware. Dessa forma não é possível haver condições de corrida ao verificar e atualizar a trava.

## Sleep/Wake up

## Semáforos

## Monitores

## Passagem de mensagem

---

created: 31/08/2021
