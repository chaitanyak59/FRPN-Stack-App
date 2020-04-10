#!/bin/bash
set -e
    echo "Running Database Setup..."
    if [[ ! -z "$CLEAR_DB" ]]; then
      psql $DATABASE_URL -U postgres -tc 'DROP SCHEMA IF EXISTS todoapp CASCADE;'
    fi
    psql $DATABASE_URL -U postgres -tc 'CREATE SCHEMA IF NOT EXISTS todoapp'
    echo "Finished Database Setup"

    #Migrations Create Tables,Inits..
    echo "Running Migrations"
    cd server && PGSSLMODE=require yarn migrate && cd ..
    if [ $? -ne 0 ]; then
        echo "Migration failed"
        exit 1
    fi
exit 0