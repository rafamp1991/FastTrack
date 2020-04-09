<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Tecnologias

<b>Nest Cli:</b> é uma ferramenta de interface da linha de comandos que ajuda a inicializar, desenvolver e manter seus aplicativos Nest. 

```bash
# Comando para criar um módulo
nest generate module auth

# Comando para criar um controller
nest generate controller auth

# Comando para criar um serviço
nest generate service auth/auth
```

<b>Passport:</b> 

## Tabelas:

<b>User:</b> as informações sobre os usuários no sistema e suas chaves.

<b>User-Schedule:</b> as informações sobre a programação e as salas em que o usuário deve estar.

<b>Auth:</b> as informações sobre a entrada / saída (incluindo o registro de data e hora)

## Módulos:

<b>DatabaseModule:</b> este módulo é usado para compartilhar a conexão com o banco de dados entre diferentes módulos.

<b>AuthModule:</b> este módulo é usado para registrar no banco de dados quando um usuário entra e sai. O serviço AuthService 
será responsável por salvar no banco de dados quando um usuário fizer check-in e check-out. Este módulo não é acessível 
desde externo. Portanto, não há um controlador para se comunicar usando a API.
				
<b>UserModule:</b> este módulo é usado para gerenciar as informações do usuário. O serviço UserService fornece dois métodos 
importantes: 1. getUsersWithoutKey; 2. addUser . Esse método é usado para saber que o usuário não possui um cartão de 
identificação válido e adicionar um usuário ao sistema.

<b>AppModule:</b> este módulo é o módulo principal que será comunicado ao frontend. Neste módulo, os outros módulos serão 
importados, para que os serviços desses módulos possam ser utilizados neste módulo. O controlador principal neste módulo 
possui os seguintes pontos de extremidade:
					
* <b>POST: / in:</b> este endpoint chama o método authIn do AuthService .
* <b>POST: / out:</b> este endpoint chama o método authOut do AuthService .
* <b>GET: / users:</b> este endpoint chama o método getUsersMustBeWorkingNow do UsersService e combina 
	as informações com o registro de data e hora do servidor.