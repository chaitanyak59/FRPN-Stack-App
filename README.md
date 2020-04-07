[![Build Status](https://travis-ci.com/chaitanya-apty/FRPN-TodoApp-React-Postgres.svg?branch=master)](https://travis-ci.com/chaitanya-apty/FRPN-TodoApp-React-Postgres)

# FRNP stack Todo App (Fastify, React, Node, Postgres)
A Simple Todo web application with CRUD operations and UI

## Getting Started
Project is built with React and uses Node with Fastify framework as server.

For the Database it uses Postgres(read below for setup)

### Prerequisites
1) Make sure Node, Postgres is installed
2) For the DB setup any DB client should suffice, I used PgAdmin
3) <b>strongly suggest you to setup the project with yarn</b>

### Installing
#####   Ill walk-thru the steps which you need to setup.
* Pull repo
* You'll find two directories
    * client (React-UI)
    * server (Node-server)
* cd client && yarn install
* cd server && yarn install
* Database Setup (Pre configure)
    * Create a database in postgres under name todocompany
    * Inside server/src/db directory , youll find scripts folder
        * RUN 01_init_schema.sql in your DB client(ex: pgAdmin)

#####  Development Commands
Directory | Command
------------ | -------------
client | yarn start (will start @ 3000)
server | yarn start (will start @ 5000)

NOTE: Your are free change the ports by modifying env files of respective folders

#####  Production Commands
Directory | Command
------------ | -------------
client | yarn build
server | yarn build && yarn start:prod

## Running the Tests
Refer package.json of both the directories for lints and tests commands

### Up coming
1) Add Golang Server using Echo
2) Add Auth layer

## Deployment

Will try on heroku and ill update the url here

## Built With

* [React](https://reactjs.org/) - Web library used
* [Fastify](https://github.com/fastify/fastify) - Server Framework
* [Node](https://nodejs.org/) - Server Runtime

## Contributing
Please feel free to use,criticize and give PR's if anything missed

## Authors
* **Chaitanya Kumar** - [Github](https://github.com/chaitanya-apty)

## License

This project is licensed under the MIT License - see the [LICENSE.md](license.md) file for details
