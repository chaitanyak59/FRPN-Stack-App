#!/bin/bash
set -e
    echo $TRAVIS
    echo "Running Database Setup..."
    psql $DATABASE_URL -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'todolist'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE todolist"
    psql $DATABASE_URL -c 'CREATE SCHEMA IF NOT EXISTS todoapp'
    echo "Finished Database Setup"

    #Migrations Create Tables,Inits..
    echo "Running Migrations"
    cd server && PGSSLMODE=require npm run migrate && cd ..
    if [ $? -ne 0 ]; then
        echo "Migration failed"
        exit 1
    fi
    echo "Completed Migrations"
echo "Done! Ready to Rock..."
exit 0