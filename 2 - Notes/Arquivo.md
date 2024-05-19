---
created-at: 2024-05-16
---

Os arquivos são a principal unidade de abstração de um [[Sistema de arquivos]]. É através deles que o usuário pode interagir com a informação armazenada em disco. Cada [[Sistema operacional]] decide como lidar com os nomes de arquivos e suas extensões. Em sistemas *UNIX*, os nomes de arquivos são *case-sensitive*, e suas extensões não tem significado algum para o sistema (porém podem ser relevantes para programas que atuam sobre esses arquivos).
Os arquivos podem ser estruturados de diversas formas a um nível de sistema operacional, entretanto é comum em sistemas operacionais modernos que eles sejam apenas uma sequência de bytes, sem nenhuma estrutura clara.

![estruturasarquivos](estruturasarquivos.png)

Essa abordagem garante a maior flexibilidade, permitindo que os arquivos sejam estruturados de qualquer maneira em um nível mais alto do sistema.
Os arquivos podem ser lidos sequencialmente ou fora de ordem, isto é, a partir de qualquer posição. Arquivos que podem ser lidos em qualquer ordem são chamados de **arquivos de acesso aleatório**. Nesse tipo de arquivo é possível iniciar a leitura de qualquer posição, e também mover o cursor de leitura para qualquer posição do arquivo, dando muito mais liberdade para seu acesso.
Além de seus conteúdos de fato, também são armazenados nos arquivos algumas informações relevantes para o sistema operacional, esses são os *atributos* (ou metadados) do arquivo. Nos atributos estão presentes informações como permissões de leitura e escrita, datas de alteração e criação, entre outros.