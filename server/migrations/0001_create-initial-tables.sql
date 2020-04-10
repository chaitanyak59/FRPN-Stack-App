-- SafeCheck - Added for Docker
CREATE SCHEMA IF NOT EXISTS todoapp;

-- Search Path
SET search_path TO todoapp;

CREATE TABLE IF NOT EXISTS todo (
   id               SERIAL                                  NOT NULL,
   description      VARCHAR(1000)                           NOT NULL,
   created_at       TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
   name             VARCHAR(1000)   DEFAULT 'superuser',
   user_id          NUMERIC         DEFAULT -1              NOT NULL,
   CONSTRAINT todo_pk PRIMARY KEY (id)
);