# 
# Representação digital da informação

Nos circuitos lógicos as informações são representadas como sinais eletrônicos que representam o nível da tensão em um circuito, esses sinais são representados geralmente por 0 e 1. Os números chamados de binários podem ter seu valor convertido para números decimais através da seguinte fórmula:

$$V(B)=b_{n-1}\times2^{n-1}+b_{n-2}\times2^{n-2}...b_1\times2^1+b_0\times2^0$$

Já a conversão de números decimais para binários exige mais trabalho, pois é necessário dividir sucessivamente o número decimal por 2, como no exemplo abaixo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9673ba06-e1ef-40b9-b9a6-0f6f1e80dc10/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9673ba06-e1ef-40b9-b9a6-0f6f1e80dc10/Untitled.png)

Em geral, o uso de $n$ bits permite a representação de inteiros positivos no intervalo de $0$ a $2^{n}-1$.
Em um número binário, o bit mais à direita é chamado de LSB e o mais à esquerda é chamado de MSB. Nos sistemas digitais se convencionou chamar um grupo de quatro bits de *nibble* e um grupo de oito bits de *byte*.

Para representar dados alfanuméricos utiliza-se de uma tabela de códigos ASCII de 7 bits representados na base binária.

# Funções e circuitos

Circuitos lógicos trabalham com um ou mais sinais lógicos de entrada para produzir uma e somente uma saída. As funções lógicas são capazes de manipular os sinas de entrada para produzir uma determinada saída, as três principais funções lógicas são:

## Função AND

A função AND representa uma combinação de chaves em formato **serial**, como pode ser visto no esquema abaixo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fd42b8b1-b9a6-45d2-9e5a-7a8715835469/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fd42b8b1-b9a6-45d2-9e5a-7a8715835469/Untitled.png)

Ela também é representada pela seguinte expressão: $L(x_1,x_2)=x_1\times x_2$

$$\begin{array}{|c|c|c|}
\hline
x_1 & x_2 & x_1\times x_2 \\ \hline
0&0&0\\
\hline
0&1&0\\
\hline
1&0&0\\
\hline
1&1&1\\
\hline
\end{array}$$

A representação da função AND em formato de porta lógica é a seguinte:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0a0b193-02a8-4fbd-866a-07e9fd8c677b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0a0b193-02a8-4fbd-866a-07e9fd8c677b/Untitled.png)

## Função OR

A função OR representa uma combinação de chaves em formato **paralelo**, como pode ser visto no esquema abaixo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/549c616a-ded3-415f-9f18-cb884a7fc4ea/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/549c616a-ded3-415f-9f18-cb884a7fc4ea/Untitled.png)

Ela também é representada pela seguinte expressão: $L(x_1,x_2)=x_1+x_2$

$$\begin{array}{|c|c|c|}
\hline
x_1 & x_2 & x_1+x_2 \\ \hline
0&0&0\\
\hline
0&1&1\\
\hline
1&0&1\\
\hline
1&1&1\\
\hline
\end{array}$$

A representação da função OR em formato de porta lógica é a seguinte:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e30bc52-cf88-4f8f-b639-19d9235ec2cd/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e30bc52-cf88-4f8f-b639-19d9235ec2cd/Untitled.png)

## Função NOT

A função NOT inverte o sinal de entrada, como pode ser visto no esquema abaixo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eff96d03-bb83-4255-bea8-e3abfd0b0108/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eff96d03-bb83-4255-bea8-e3abfd0b0108/Untitled.png)

Ela também é representada pelas expressões: $x=\overline{x}=!x=x'$

$$\begin{array}{|c|c|}
\hline
x & \overline{x} \\ \hline
0&1\\
\hline
1&0\\
\hline
\end{array}$$

A representação da função NOT em formato de porta lógica é a seguinte:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8aaafc5-3631-46d2-a15d-24a6e1e6f060/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8aaafc5-3631-46d2-a15d-24a6e1e6f060/Untitled.png)

# Combinando as funções

As funções lógicas podem ser combinadas de diversas formas em um circuito, no exemplo abaixo temos uma função OR cuja saída é uma das entradas de uma função AND 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f90e0be5-2722-4ffd-afea-4cd9e229ccb5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f90e0be5-2722-4ffd-afea-4cd9e229ccb5/Untitled.png)

Essa combinação pode ser representada pela expressão: $L(x_1,x_2,x_3)=(x_1+x_1)\times x_3$

Outra forma de representação desse circuito pode ser atingida através do uso de portas lógicas:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e86afd5c-1611-415f-9e05-e5ccc52d8ac8/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e86afd5c-1611-415f-9e05-e5ccc52d8ac8/Untitled.png)

## Função XOR (OU exclusivo)

A função XOR é resultado da combinação das três funções básicas arranjadas de uma maneira que possibilita a ela muitas aplicações interessantes, sua representação pode ser vista na imagem abaixo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6003961f-4691-450b-abd5-5f5baaf0efae/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6003961f-4691-450b-abd5-5f5baaf0efae/Untitled.png)

Essa função pode ser representada pela expressão: $L(x,y)=x\oplus y$

$$\begin{array}{|c|c|c|}
\hline
x_1 & y & x_1\oplus y\\ \hline
0&0&0\\
\hline
0&1&1\\
\hline
1&0&1\\
\hline
1&1&0\\
\hline
\end{array}$$

---

links: 
created: 07/11/2020
modified: 07/11/2020