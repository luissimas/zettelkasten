---
created-at: 2024-05-15
---

O algoritmos evolutivos são algoritmos de otimização utilizados principalmente no contexto de [[Inteligência Artificial]]. Esses algoritmos se baseiam na teoria da [[Seleção Natural]] de [[Charles Darwin]]. No início há uma população de indivíduos com diferentes características. Os indivíduos com as melhores característica (mais aptos) são **selecionados** e se reproduzem, gerando uma nova população (geração) de novos indivíduos com **caraterísticas similares**. Dessa forma, a [[Probabilidade]] dos indivíduos **mais aptos reproduzirem suas características** é maior do que a probabilidade dos indivíduos menos aptos fazerem o mesmo.

Nesse tipo de algoritmo, a **solução** de um problema é **representada como um indivíduo**, e uma população consiste em um conjunto de soluções. A ideia então é aplicar uma seleção ~~natural~~ artificial para derivar soluções cada vez melhores.

Um ponto importante para esses algoritmos é a **representação dos indivíduos** e como avaliá-los através de suas características. Essa representação geralmente se baseia na ideia de *genótipos* e *fenótipos* da biologia. O **genótipo** é o **conjunto de características** do indivíduo (representado por alguma estrutura de dados), enquanto o **fenótipo** é a forma que o **genótipo** é **aplicado** para **solucionar o problema**. Sendo assim, o fenótipo é o resultado que a solução representada pelo genótipo consegue obter.

Para medir o resultado das soluções, é necessário uma *função de aptidão* $f: I \to \mathbb{R}$, que **associa indivíduos a um valor de aptidão**.

Os algoritmos evolutivos geralmente seguem o fluxo descrito na imagem, ou seja, a partir de uma **população inicial** são feitas **seleções**, **cruzamentos** e **mutações**, gerando uma nova população, que é selecionada para então repetir o processo até que algum **critério de parada** seja atingido.

Os **critérios de parada** são definidos de acordo com o problema, mas geralmente podem envolver casos como: a convergência da população para uma solução, número máximo de gerações, limite de gerações sem melhora etc.

![[evolutionalgorithm.png]]

# População inicial

Uma **população inicial** deve ser **diversa**, ou seja, deve conter indivíduos com características variadas, para aumentar o espaço de busca da solução e, consequentemente, as chances de encontrar a solução ótima. A população inicial pode ser composta por indivíduos conhecidos previamente para o problema, como soluções em potencial, soluções já conhecidas ou até mesmo soluções aleatórias geradas para o problema.

# Seleção

Dada uma população, antes de iniciar a combinação e mutação entre os indivíduos, é necessário antes **selecionar os mais aptos** a fim de aumentar as chances de aumento de aptidão entre os novos indivíduos gerados. Dessa forma, a seleção é feita de forma que os **indivíduos mais aptos** possuem **maior probabilidade** de seleção. Diferentes métodos podem ser empregados para a seleção, sendo aqui destacados apenas os mais comuns.

## Seleção proporcional

Esse método de seleção define que a probabilidade de seleção dos indivíduos é proporcional a sua aptidão. A probabilidade de seleção de um indivíduo $i$ de uma população de tamanho $|P|$ é igual a:

$$
p_i = \frac{f(i)}{\sum_{j=1}^{|P|}f(j)}
$$

## Seleção determinística

Na seleção determinística os indivíduos são sorteados aleatoriamente e comparados entre si, sendo selecionados apenas o indivíduo com a maior aptidão entre os selecionados. O processo se repete até que todos os indivíduos da população tenham sido testados, tendo sido selecionados apenas aqueles que tiveram a maior aptidão dentre os selecionados em seu turno.

## Operadores genéticos

A **geração de novos indivíduos** é feita através da aplicação de operadores genéticos. Nesse momento é feita efetivamente uma **busca por novas soluções**, pois novas soluções são geradas a partir das soluções selecionadas. Esses operadores podem ou não utilizar **heurística** para guiar a busca por novas soluções, ou seja, guiar a aplicação dos operadores entre os indivíduos.

### Cruzamento

No processo de cruzamento, os indivíduos selecionados são cruzados dois a dois, combinando características dos progenitores para gerar novos indivíduos, chamados de descendentes.

A combinação das características dos progenitores pode ser feita de diversas maneiras: trocando características entre os progenitores, utilizando-as como base para gerar características totalmente novas nos descendentes etc.

### Mutação

A mutação consiste em modificar parte das características de um indivíduo para gerar uma nova característica que não está relacionada a seus progenitores. Esse processo gera soluções inéditas que podem não depender das características anteriores.

Geralmente define-se uma taxa de mutação, que define a probabilidade de uma característica sofrer mutação.

### Elitismo

O elitismo consiste em selecionar os melhores indivíduos de uma população e incluí-los na próxima geração. Note que os operadores de cruzamento e mutação nem sempre melhoram a população, portanto o processo de elitismo garante que pelo menos alguns indivíduos da próxima geração serão tão bons quanto os melhores indivíduos da geração anterior.