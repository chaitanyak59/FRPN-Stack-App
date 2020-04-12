-- Up Migration
CREATE TABLE IF NOT EXISTS users (
   id                   SERIAL                                  NOT NULL,
   email                VARCHAR(100)                            NOT NULL,
   salt                 VARCHAR(100)                            NOT NULL,
   hash             VARCHAR(500)                                    ,
   is_active            BOOLEAN NOT NULL DEFAULT false,
   created_at           TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
   CONSTRAINT users_pk  PRIMARY KEY (id)
);

INSERT INTO users(id, email, salt, hash, is_active) values (-1, 'demo@user.com', '$2b$07$C206FHLcpgXAuoVPigbDse', '$2b$07$C206FHLcpgXAuoVPigbDseN61WzI3lhCK.fuCbb6iP47Ul.FitqPi', true);

ALTER TABLE todoapp.todo ALTER COLUMN user_id DROP DEFAULT;
ALTER TABLE todoapp.todo ADD CONSTRAINT todo_userid_fkey FOREIGN KEY(user_id)
      REFERENCES users(id)

-- Down Migration
ALTER TABLE todo DROP CONSTRAINT IF EXISTS todo_userid_fkey;
ALTER TABLE todo ALTER COLUMN user_id ADD DEFAULT;
DROP TABLE IF EXISTS users CASCADE; 