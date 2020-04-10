[![Build Status](https://travis-ci.com/chaitanya-apty/FRPN-TodoApp-React-Postgres.svg?branch=master)](https://travis-ci.com/chaitanya-apty/FRPN-TodoApp-React-Postgres)

# FRPN(Fastify, React, Node, Postgres) Stack App 
A Simple Todo web application

## Getting Started
Project is built with React and uses Node with Fastify framework for server.

### Prerequisites
1) Make sure Node, Postgres is installed
2) For the DB setup, any DB client should suffice, I used PgAdmin
3) <b>I suggest you to setup the project with yarn</b>

### Installing
####   Walk-thru of Project Setup:
* Pull repo

    > Docker Mode (Easy if you have Docker)
    * Make Sure you have Docker installed and up
    * Checkout to project root directory and run
        * docker-compose up --build
        * Docker will build the required images, starts the App and exposes 3000 port
        * Head to your Browser and open localhost:3000

    > Local Setup
    * You'll find two directories
        1) client (React-UI)
        2) server (Node-server)
    * Run > cd client && yarn install
    * Run > cd server && yarn install
    * Database Setup (Must be pre-configured)
        * Create a database in postgres under name todolist
        * Create Schema under todolist with name todoapp (Kill me later!)
    * Checkout to server directory and run <b>yarn migrate</b>, with this DB setup is complete

#### Starting the Project @ Local
     # Development Commands
Directory | Command
------------ | -------------
client | yarn start (will start @ 3000)
server | yarn start (will start @ 5000)


    # Production Commands
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

* [Heroku Application Demo](https://fastify-todo.herokuapp.com/)

## Built With

* [React](https://reactjs.org/) - Web library used
* [Fastify](https://github.com/fastify/fastify) - Server Framework
* [Node](https://nodejs.org/) - Server Runtime
* [Travis CI](https://travis-ci.org/) - Continous Integration
* [Heroku](https://heroku.com/) - Continous Deployment

### Contributing
Please feel free to use,criticize and give PR's if anything missed

### Authors
* **Chaitanya Kumar** - [Github](https://github.com/chaitanya-apty)

### License

This project is licensed under the MIT License - see the [LICENSE.md](license.md) file for details
