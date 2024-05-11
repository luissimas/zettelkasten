---
created-at: 2021-08-24
tags:
---
Threads são estruturas de execução pertencentes a um determinado [[Processos | processo]], um processo pode ter uma ou mais threads. Cada thread possui dados exclusivos, como PC e pilha, mas todas a threads de um processo compartilham o **mesmo espaço de endereçamento** de seu processo.
As threads permitem que diferentes unidades de execução possam aproveitar dos mesmos recursos alocados em um processo, isso se torna vantajoso principalmente porque a criação de threads é muito mais barata computacionalmente do que a criação de um novo processo. Outra característica importante das threads é que, por compartilharem o espaço de endereçamento do processo, elas podem acessar os mesmos arquivos abertos e variáveis globais do processo, isso tem suas vantagens mas também introduz novos desafios relacionados à concorrência pelo uso desses recursos por diferentes threads.

# Threads no espaço de usuário
Threads podem ser implementadas no espaço de usuário, dessa forma sua criação e escalonamento são realizadas sem o conhecimento do kernel, pois este apenas enxergará o processo, e não as threads que o compõe.
Nessa implementação cada processo possui sua própria tabela de threads, e deve gerenciar sua execução.

![[threadsusuario.png]]

A maior vantagem desse tipo de implementação é certamente o desempenho, pois a alternância entre a execução de threads no nível de usuário é mais rápida do que fazer o chaveamento para o kernel. Outro ponto que também contribui para esse desempenho é que menos chamadas de kernel precisam ser executadas, pois o gerenciamento das threads é particular a cada processo.
Apesar dessas vantagens, o ponto crítico dessa implementação é que se uma thread for bloqueada (por um processo de IO por exemplo), o processo inteiro é bloqueado, pois para o kernel (que só enxerga o nível de processo, não de thread), o processo está bloqueado aguardando o retorno de alguma chamada.

# Threads no kernel
Threads implementadas no kernel, ao contrário das implementadas no espaço de usuário, são visíveis ao kernel e suportadas diretamente pelo SO.
Nessa implementação o escalonamento e gerenciamento das threads é feito pelo kernel através de uma tabela de threads independente da tabela de processos, mas também gerenciada pelo kernel.

![[threadsnucleo.png]]

Esse tipo de implementação, apesar de mais custoso em termos de desempenho, oferece uma grande vantagem pois se uma thread realiza uma chamada de sistema bloqueante o processo inteiro não é bloqueado. Isso ocorre pois o kernel é capaz de chavear a execução do processo para outra thread enquanto outra está bloqueada.

# Threads híbridas
Uma outra implementação possível é misturar o uso de threads implementadas no núcleo e no sistema. Geralmente um processo pode ter diversas threads implementadas no kernel, e para cada uma dessas threads de execução podem haver mais threads em modo usuário.

![[threadshibridas.png]]

Essa implementação é particularmente flexível se comparada às outras duas, possibilitando um bom aproveitamento do desempenho das threads em modo usuário e permitindo um gerenciamento mais eficiente pelo kernel.