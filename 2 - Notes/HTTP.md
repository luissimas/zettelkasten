*HTTP* é o principal protocolo na internet, é ele que define as regras de comunicação entre cliente e servidor.
No *HTTP* padrão os dados são transportados em texto puro, ou seja, não há nenhuma camada que garanta a segurança dos dados enviados e recebidos. Isso se torna um grande problema principalmente quando consideramos o contexto da web, no qual os dados passam por diversos caminhos até chegar ao seu destino, pois todos os dados tanto da requisição quanto da resposta ficam visíveis para qualquer intermediário que tenha acesso a elas. Dito isso, concluímos então que o *HTTP* por si só **não é seguro!**

# HTTPS

O *HTTPS* é uma implementação que combina o protocolo *HTTP* com a camada se segurança *SSL/TLS(Secure Sockets Layer/Transport Layer Security)*, nessa implementação do protocolo as informações enviadas são **criptografadas**.
A criptografia do *HTTPS* é baseada em chaves **públicas** e **privadas**. Essas chaves são geradas através de um **certificado digital**. O certificado digital é utilizado para **identificar** uma entidade em um determinado domínio, para emiti-lo são feitas diversas verificações por agências reguladoras, e existem ainda medidas para a verificação da validade do certificado, que são aplicadas periodicamente.
A criptografia ocorre da seguinte forma: os navegadores possuem a **chave pública** do domínio e a utilizam para criptografar as informações da requisição antes de serem enviadas ao servidor, que descriptografa a requisição utilizando a **chave privada**. É importante notar que a requisição só pode ser descriptografada com a **chave privada**, que deve ser mantida segura e de posse apenas do servidor que irá responder à requisição.
Ambas as chaves estão ligadas matematicamente, aquilo que é criptografado pela chave pública só pode ser descriptografado única e exclusivamente pela chave privada. Quando um método de criptografia utiliza duas chaves distintas ele é chamado de *criptografia assimétrica*, o problema desse método é a sua velocidade. Outro método de criptografia é a *criptografia simétrica*, que utiliza a mesma chave para criptografar e descriptografar um dado. Esse método é muito mais rápido que a criptografia assimétrica, porém não tão seguro. Na realidade o *HTTPS* utiliza os dois métodos de criptografia simultaneamente: o cliente gera uma chave simétrica no momento da requisição, essa chave é criptografada utilizando a criptografia assimétrica e enviada para o servidor junto com os dados da requisição, que são criptografados utilizando a chave simétrica; o servidor então utiliza a chave privada para descriptografar a chave simétrica gerada pelo navegador e depois utiliza esta para descriptografar o conteúdo da requisição em si. Esse método permite combinar a segurança da criptografia assimétrica com a velocidade da criptografia simétrica.

# Endereços

Um endereço na web carrega diversas informações sobre o site que estamos tentando acessar. Tomando como exemplo o endereço *https://www.alura.com.br* podemos identificar o **protocolo** sendo utilizado (*HTTPS*) e o domínio (www.alura.com.br). No domínio podemos ver a especificação do país (*br*), essa especificação é chamada de *top level domain*, também estão presentes os subdomínios, que especificam mais o endereço. O subdomínio *com* identifica que é um site comercial; e o *alura* especifica o endereço nos subdomínios.
Os endereços como vemos no browser são convertidos em endereços *IP* pelo servidor *DNS* para que então possam de fato identificar um servidor na web. Isso ocorre porque os endereços em forma de domínio e subdomínios são mais inteligíveis para humanos quando comparados aos endereços *IP*.
Em requisições *HTTP* e *HTTPS* a porta do servidor geralmente é omitida pois os protocolos já especificam portas padrão a serem utilizadas pelos servidores. A porta padrão do *HTTP* é a 80, já a do *HTTPS* é a 443.
Além do domínio, o endereço pode especificar também um **recurso**, os recursos são especificados no final do endereço, após os subdomínios. Tomando como exemplo o endereço *https://cursos.alura.com.br/dashboard*, o */dashboard* é o recurso que queremos acessar dentro do domínio da Alura. Entre o domínio e o recurso ainda podem haver outras informações, essas são chamadas de **caminho**, e especificam caminhos intermediários para se acessar o recurso de fato.
Dito isso, os endereços na *web* sempre seguem o padrão: **protocolo**://**domínio**:**porta**/**caminho**/**recurso**. Esse padrão segue a especificação ***URL****(Uniform Resource Locator)*, é daí que vem o formato dos endereços da *web*, ou *URLs*.

# Sessions

Uma das características do protocolo *HTTP* é que as requisições são *stateless*, ou seja, cada requisição é independente e deve conter todos os dados necessários para o servidor processar a resposta; essa característica gerou a necessidade do uso de sessões. Um uso muito comum de sessões está relacionado à autenticação de usuários: é comum que os sites disponibilizem certos recursos apenas para usuários logados, ou ainda que os recursos disponíveis dependam do usuário que está logado. Nesse exemplo algumas requisições dependem de algo que aconteceu anteriormente (o usuário só pode acessar determinado recurso se estiver logado), porém cada requisição é única e deve conter todas as informações necessárias. Uma forma de resolver o problema seria enviar em cada requisição as credenciais (login e senha) do usuário e autenticá-lo, mas isso é extremamente ineficiente e pouco seguro, ao invés disso são criadas as **sessões**.
As sessões são geradas pelo servidor e armazenadas tanto no browser quanto no próprio servidor. Voltando ao exemplo do login: quando o usuário insere suas credenciais pela primeira vez o servidor valida o login e (caso as credenciais sejam válidas) retorna uma identificação para o browser, que será armazenada e utilizada para fazer as requisições seguintes. Após a criação da sessão não é mais necessário utilizar as credenciais do usuário, pois as novas requisições ao servidor terão o identificador da sessão atrelado, isso permite que o servidor simplesmente verifique a qual usuário pertence aquela sessão e possa processar a resposta (sem passar pelo custoso processo de validar credenciais).
No servidor as sessões geralmente são armazenadas em um banco de dados, já no browser são utilizados os ***cookies***, que são arquivos de texto contendo pares *chave-valor* armazenados localmente no browser.

# Métodos HTTP

Cada método HTTP sinaliza a ação que requisição pretende realizar com o recurso.

- GET: receber dados do recurso
- POST: criar um recurso
- PUT: modificar um recurso completo
- PATCH: modificar parte de um recurso
- DELETE: deletar um recurso

# Códigos de resposta

As respostas HTTP sempre contém um *status code* que permite a fácil depuração da resposta. Cada status indica o que houve com a requisição e qual o estado da resposta fornecida pelo servidor. Existem diversos status codes, para um overview sobre os principais acesse [esse link](https://httpstatuses.com/).
Os status codes são organizados em classes de acordo com seu número de início, essas são as suas possíveis classes:

- 1xx: Informational
- 2xx: Success
- 3xx: Redirection
- 4xx: Client error
- 5xx: Server Error

# Parâmetros da requisição

Em uma requisição HTTP os dados podem ser enviados de diversas formas, as principais são:

- Query params: Parâmetros nomeados enviados na URL após `?` e separados por `&` (Filtros, paginação).
- Route params: Parâmetros utilizados para identificar recursos, geralmente passados diretamente na URL sem identificação.
- Request body: Dados ocultados dentro do corpo da requisição, não ficam expostos na URL.