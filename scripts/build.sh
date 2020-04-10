#!/bin/sh
set -e

if [ $TRAVIS != true ]
then
    echo $TRAVIS
    echo "Running Database Setup..."
    sudo su postgres
    psql $DATABASE_URL -c 'CREATE DATABASE todolist'
    psql $DATABASE_URL -c 'CREATE SCHEMA IF NOT EXISTS todoapp'
    echo "Finished Database Setup"

    #Migrations Create Tables,Inits..
    echo "Running Migrations"
    cd server && PGSSLMODE=require npm run migrate && cd ..
    if [ $? = 0 ]; then
        echo "Migration failed"
        exit 1
    fi
    echo "Completed Migrations"
fi
echo "Done! Ready to Rock..."
exit 0