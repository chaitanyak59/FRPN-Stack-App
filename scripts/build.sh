#!/bin/bash
set -e
    echo $DATABASE_URL
    echo "Running Database Setup..."
    psql $DATABASE_URL -U postgres -tc 'CREATE SCHEMA IF NOT EXISTS todoapp'
    echo "Finished Database Setup"

    #Migrations Create Tables,Inits..
    echo "Running Migrations"
    cd server && PGSSLMODE=require yarn migrate-up && cd ..
    if [ $? -ne 0 ]; then
        echo "Migration failed"
        exit 1
    fi
    echo "Completed Migrations"
echo "Done! Ready to Rock..."
exit 0