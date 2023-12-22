# API Solid 

Projeto para fins de estudo dos princípios de solid.
Caso de uso: aplicação rest para gerenciamento de aluguel de carro.

Arquitetura: clean code, solid.
Tecnologias: nodejs, typescript, typeorm, postgres, docker.

## Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Licença](#licença)

## Sobre

O projeto **API Solid** é uma API desenvolvida em Node.js, seguindo os princípios do SOLID. Ele oferece um conjunto de funcionalidades para realizar operações relacionadas a autenticação, uploads de arquivos, entre outros recursos.

## Tecnologias Utilizadas

Aqui estão as principais tecnologias e dependências utilizadas neste projeto:

- `Express`: "^4.17.1"
- `JWT` (jsonwebtoken): "^9.0.2"
- `TypeORM`: "^0.3.17"
- `PostgreSQL` (pg): "^8.11.3"
- `TypeScript`: "^4.2.2"
- `Prettier`: "^2.2.1"
- `ESLint`: "^7.21.0"
- `Jest`: "^29.7.0"
- entre outras listadas no arquivo `package.json`.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/api-solid.git
   cd api-solid

2. Inicialize os serviços necessários em um container docker:

   ```bash
   docker compose up

## Licença

MIT