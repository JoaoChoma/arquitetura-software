Resumo dos Conteúdos de Arquiteturas de Software
1. Arquitetura Monolítica

A arquitetura monolítica é um padrão de design de software onde uma aplicação é construída como uma única unidade de implementação e implantação. Seus principais componentes são:

- Interface do Usuário (UI): Interage com os usuários finais.
- Lógica de Negócios: Contém as regras e processos de negócios da aplicação.
- Acesso a Dados: Interage com o banco de dados ou outros sistemas de armazenamento.
- Exemplos incluem sistemas de e-commerce, ferramentas de gestão de projetos, aplicações financeiras e plataformas de ensino à distância​​.

2. Arquitetura em Camadas

A arquitetura em camadas organiza um sistema em camadas distintas, onde cada camada tem uma responsabilidade específica e se comunica apenas com camadas adjacentes. As principais camadas são:

- Camada de Apresentação (UI): Interface com o usuário.
- Camada de Aplicação: Lógica de negócios e processamento.
- Camada de Dados: Acesso e manipulação de dados.
- Vantagens incluem modularidade, flexibilidade e reusabilidade do código. Um exemplo bem conhecido é o modelo de referência OSI e o modelo TCP/IP​​​​.

3. Arquitetura Cliente-Servidor
Na arquitetura cliente-servidor, duas partes interagem em uma rede: o cliente e o servidor. O cliente faz solicitações de serviços ou recursos, e o servidor processa essas solicitações e fornece respostas. Os componentes principais são:

Cliente: Interface com o usuário, solicitação de recursos, processamento de respostas.
Servidor: Gerenciamento de recursos, processamento de solicitações, envio de respostas.
Aplicações comuns incluem sistemas de e-mail, onde o cliente gerencia a interface do usuário e o servidor armazena e gerencia os e-mails​​​​.

4. Arquitetura Baseada em Serviços (SOA)
A arquitetura orientada a serviços (SOA) organiza sistemas como serviços independentes, autocontidos e reutilizáveis. Características principais incluem:

Autonomia: Cada serviço é independente.
Interface Bem Definida: Comunicação através de interfaces padrão.
Reusabilidade: Serviços projetados para serem reutilizáveis.
Interoperabilidade: Funciona em diferentes ambientes tecnológicos, usando padrões como SOAP ou REST.
Exemplos incluem sistemas de comércio eletrônico, onde diferentes serviços gerenciam autenticação, catálogo de produtos, carrinho de compras, pagamentos e notificações​​​​.

5. Arquitetura de Microserviços
Os microserviços são uma abordagem específica da SOA, onde uma aplicação é estruturada como um conjunto de pequenos serviços independentes. Cada microserviço é desenvolvido, implantado e escalado independentemente. Características principais incluem:

Descentralização: Cada microserviço é responsável por uma funcionalidade específica.
Independência de Implantação: Microserviços podem ser atualizados e escalados independentemente.
Escalabilidade: Apenas os serviços que necessitam de mais recursos são escalados.
Tolerância a Falhas: A falha em um microserviço não compromete toda a aplicação.
Tecnologia Heterogênea: Pode usar diferentes tecnologias e linguagens.
Exemplos incluem sistemas de entrega de alimentos online, como Uber Eats, onde diferentes serviços gerenciam autenticação, gerenciamento de restaurantes, pedidos, pagamentos e entrega​