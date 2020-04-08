<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Informações:

DatabaseModule: Este módulo é usado para compartilhar a conexão com o banco de dados entre diferentes módulos.

AuthModule: Este módulo é usado para registrar no banco de dados quando um usuário entra e sai. O serviço AuthService 
será responsável por salvar no banco de dados quando um usuário fizer check-in e check-out. Este módulo não é acessível 
desde externo. Portanto, não há um controlador para se comunicar usando a API.
				
UserModule: Este módulo é usado para gerenciar as informações do usuário. O serviço UserService fornece dois métodos 
importantes: 1. getUsersWithoutKey; 2. addUser . Esse método é usado para saber que o usuário não possui um cartão de 
identificação válido e adicionar um usuário ao sistema.

AppModule: Este módulo é o módulo principal que será comunicado ao frontend. Neste módulo, os outros módulos serão 
importados, para que os serviços desses módulos possam ser utilizados neste módulo. O controlador principal neste módulo 
possui os seguintes pontos de extremidade:
					
	* POST: / in: este endpoint chama o método authIn do AuthService .
	* POST: / out: este endpoint chama o método authOut do AuthService .
	* GET: / users: este endpoint chama o método getUsersMustBeWorkingNow do UsersService e combina 
		as informações com o registro de data e hora do servidor.