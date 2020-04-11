-- Up Migration
CREATE TABLE IF NOT EXISTS users (
   id                   SERIAL                                  NOT NULL,
   email                VARCHAR(100)                            NOT NULL,
   salt                 VARCHAR(100)                            NOT NULL,
   password             VARCHAR(500)                                    ,
   is_active            BOOLEAN NOT NULL DEFAULT false,
   created_at           TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
   CONSTRAINT users_pk  PRIMARY KEY (id)
);


-- Down Migration
DROP TABLE IF EXISTS users CASCADE; 