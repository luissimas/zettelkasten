---
created-at: 2021-06-12
tags:
---
Para provar [[Cálculo proposicional#Argumentos|argumentos]] na lógica de predicados utilizamos as mesmas [[Técnicas dedutivas|técnicas dedutivas]] da [[Lógica proposicional|lógica proposicional]], nos baseando nas [[Cálculo proposicional#Regras de inferência|regras de inferência]] e [[Álgebra da lógica proposicional#Leis de equivalência|leis de equivalência]]. Devemos levar em conta também as relações de [[Consequência e equivalência lógica na lógica de predicados|consequência e equivalência]] específicas à lógica de predicados.
Além das regras já citadas, é necessário introduzir novas regras para lidar especificamente com os *quantificadores* presentes na lógica de predicados.

# Eliminação (particularização ou instanciação)
A eliminação consiste em, a partir de uma fórmula quantificada, remover o quantificador instanciando (particularizando) a variável que está sendo quantificada.

> ***Eliminação universal***
$$
  \forall X p(X) \therefore p(c)
$$

> ***Eliminação existencial***
$$
  \exists X p(X) \therefore p(c)
$$

# Introdução (generalização)
A introdução consiste em, a partir de uma fórmula não quantificada, introduzir um quantificador generalizando o predicado.

> ***Introdução universal***
$$
  p(c) \therefore \forall X p(X)
$$

> ***Introdução existencial***
$$
  p(c) \therefore \exists X p(X)
$$