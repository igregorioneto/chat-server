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