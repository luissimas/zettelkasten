# Comunicação entre processos
[[Processos]] sempre precisam se comunicar, essa comunicação deve ser bem definida e estruturada de maneira a garantir que haja um bom desempenho e, principalmente, que os processos não entrem em *condições de corrida*. Condições de corrida ocorrem quando dois ou mais processos estão lendo ou escrevendo dados em um espaço de memória compartilhado e o resultado final depende de qual processo executa e quando ele executa.
Uma maneira de evitar as condições de corrida, isto é, atingir a **exclusão mútua** no acesso a áreas de memória compartilhadas, é através da implementação do conceito de **regiões críticas**.
1. Dois processos jamais podem estar simultaneamente dentro de suas regiões críticas.
2. Nenhuma suposição pode ser feita a respeito de velocidades ou número de CPUs.
3. Nenhum processo executando fora de sua região crítica pode bloquear qualquer processo.
4. Nenhum processo deve ser obrigado a esperar eternamente para entrar em sua região crítica.

## Busy wait

## Sleep/Wake up

## Semáforos

## Monitores

## Passagem de mensagem

---

created: 31/08/2021
