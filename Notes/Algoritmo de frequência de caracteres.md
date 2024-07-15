---
created-at: 2024-05-17
---

O algoritmo de frequência de caracteres é um dos métodos mais **simples** e intuitivos de implementar a [[Compressão]] de [[Arquivo|arquivos]]. A ideia é substituir os elementos repetidos de uma sequência de símbolos idênticos por um número indicando a frequência do símbolo.

Dessa forma, uma dada sequência poderia ser comprimida da seguinte forma:

```
BBBEAAAAFFHHHHHCBMMALLLCDDBBBBBBBCC -> 3BE4A2F5HCB2MA3LC2D7B2C
```

Note que essa implementação do método parte da premissa de que o arquivo não contém caracteres numéricos. A introdução de um caractere de escape como, por exemplo, o `@`, precedendo os caracteres numéricos permite que o algoritmo lide com uma variedade maior de arquivos:

```
AAA33333BA6666888DDDDDDD99999999999AABBB -> 3A5@3BA4@63@87D11@92A3B
```