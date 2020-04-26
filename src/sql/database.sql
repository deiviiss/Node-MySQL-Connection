CREATE DATABASE tramites;

USE tramites;

CREATE TABLE clientes(

id_clientes INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
asesor VARCHAR(100),
cliente TEXT,
data_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE tramites;

INSERT INTO clientes(asesor, cliente) VALUES ('David Hilera', 'Valeria Moreno');

SELECT * FROM clientes;