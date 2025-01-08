# Chat Server - Microservices

## User Service
### É responsável por lidar com o:
- Registro do Usuário
- Autenticação
- Armazenamento de dados relacionamento ao Usuário

### Descrição das pastas:
- user-service: Pasta principal do serviço de Usuários
- src: Contém o código fonte do serviço de Usuários
- config: Armazena as configurações
- controllers: Mantém o arquivo AuthController e lida com o registro e logica de login
- services: Mantém o serviço do `RabbitMQService` e lida com as interações com o `RabbitMQ`.
- database:
    - models: Modelo do Mongoose, neste caso do Usuário
    - connection.ts: Gerencia a conexão com o Banco de Dados
    - index.ts: Ponto de entrada para a funcionalidade do Banco de Dados
- middleware:
    - index.ts: Ponto de entrada de funcionalidades do middleware
- routes:
    - authRoutes.ts: Rotas do Express de autenticação do Usuário
- utils:
    - index.ts: Funções utilitárias
        - ex.: Manipulador de Erros Personalizado, Funções relacionadas a senhas...
- server.ts: Ponto de entrada de funções do Express.
- Dockerfile: Especifica as instruções do Docker para conteinerizar o Serviço do Usuário
- .dockerignore: Lista arquivos e diretórios  a serem excluídos do contexto da compilação do Docker.
- .env: Armazena variáveis de ambiente

## Message Service
### É responsável por lidar com o:
- Comunicação em tempo real com os usuários
- Promover uma experiência de usuário dinâmica e interativa

### Descrição das pastas:
- message-service: Pasta principal do serviço de Mensagens
- src: Contém o código fonte do serviço de Mensagens
- config: Arquivos de configuração do Chat, como variáveis de ambiente.
- controllers: Lida com a lógica de negócio para lidar com mensagens no `MessageController.ts`
- services: Mantém o serviço do `RabbitMQService` e lida com as interações com o `RabbitMQ`.
- database:
    - models: Modelo do Mongoose, neste caso do Message
    - connection.ts: Gerencia a conexão com o Banco de Dados
    - index.ts: Ponto de entrada para a funcionalidade do Banco de Dados
- middleware:
    - index.ts: Ponto de entrada de funcionalidades do middleware
- routes:
    - messageRoutes.ts: Rotas do Express correspondente as operações das mensagens
- utils:
    - index.ts: Funções utilitárias
        - ex.: Manipulador de Erros Personalizado, Funções relacionadas a senhas, rastrear status do usuário...
- app.ts: Ponto de entrada do aplicativo
- server.ts: Ponto de entrada de funções do Express.
- Dockerfile: Especifica as instruções do Docker para conteinerizar o Serviço de Mensagens
- .dockerignore: Lista arquivos e diretórios  a serem excluídos do contexto da compilação do Docker.
- .env: Armazena variáveis de ambiente

## Notification Service
### É responsável por lidar com o:
- Notificações em tempo real para os usuários do serviço de bate-papo

### Descrição das pastas:
- notification-service: Pasta principal do serviço de Notificações
- src: Contém o código fonte do serviço de Notificações
- config: Arquivos de configuração de Notificações e detalhes de conexãoc om RabbitMQ.
- services: 
    - RabbitMQService.ts: Implementa o serviço RabbitMQ, que lida com o enfileiramento de mensagens
        e comunicação com outros microsserviços.
    - EmailService.ts: Define o serviço de e-mail, responsável por enviar notificações por e-mail.
    - FCMService.ts: Contém a implementação do serviço Firebase Cloud Messaging, notificações push
        para dispositivos móveis.
    - index.ts: Exporta todos os módulos dos serviços.
- middleware:
    - index.ts: Middlewares usadas no Serviço de Notificação, tais como:
        - Autenticação
        - Tratamento de erros
- utils:
    - index.ts: Exporta as funções utilitárias.
    - apiError.ts: Define a classe `ApiError`, objetos de erro personalizados usados em todo o aplicativo.
    - userStatusStore.ts: Gerencia o status `online` e `offline` dos usuários.
- server.ts: Ponto de entrada de funções do Express.
- Dockerfile: Especifica as instruções do Docker para conteinerizar o Serviço do Notificação
- .dockerignore: Lista arquivos e diretórios  a serem excluídos do contexto da compilação do Docker.
- .env: Armazena variáveis de ambiente

## API Gateway
### É responsável por lidar com o:
- Conectar todas as portas dos Microsserviços a um API Gateway
- Responsável por rotear solicitações HTTP recebidas para os microsserviços apropriados
    com base no caminho da solicitação.

### Descrição das pastas:
- gateway: Pasta principal do serviço de Gateway
- index.ts: Express para servir como a API Gateway