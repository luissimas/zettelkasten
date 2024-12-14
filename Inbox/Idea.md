---
created-at: "2024-12-08"
---

Hoje tive a ideia de fazer uma engine de CI que executaria em um ambiente serverless ou talvez um cluster [[Kubernetes]] on-prem. A ideia é poder especificar tipo um .github/*.yaml ou .gitlab-ci.yaml no repositório, instalar um plugin no github ou gitlab, e o serviço de CI iria executar os jobs num ambiente definido pelo usuário (potencialmente de forma declarativa no próprio repositório, com potencial de definir opções globais por grupo ou org). O serviço poderia ter interface própria ou, como uma POC, interagir com o usuário através de comentários no PR. A ideia principal é poder especificar o ambiente da CI junto com a definição dela, definindo coisas como o limite de recursos, dependências, sistema, VM ou container, etc. Tudo definido como código no próprio repositório, sem configuração manual para o desenvolvedor. Se precisar de configuração no repositório como secrets ou variáveis externas, isso deve estar especificado no arquivo de configuração.

Poderia utilizar o [[Incus]] ou [[Nomad]] como back-ends, pois os jobs são short-lived e queremos ter ambiente flexíveis como containers OCI, LXC, VMs etc (então [[Kubernetes]] não seria uma boa solução aqui).
