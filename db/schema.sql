
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(20),
    devoured BOOLEAN NOT NULL DEFAULT 0
)