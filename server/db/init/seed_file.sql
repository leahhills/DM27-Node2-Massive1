DROP TABLE IF EXISTS users; 

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER,
    country VARCHAR(80)
);

INSERT INTO users
(name,age,country)
VALUES
('Betty',12,'England');

INSERT INTO users
(name,age,country)
VALUES
('Jane',40,'USA');

INSERT INTO users
(name,age,country)
VALUES
('Hello',12,'Scotland');

INSERT INTO users
(name,age,country)
VALUES
('Sergei',40,'Croatia');

INSERT INTO users
(name,age,country)
VALUES
('Betty',15,'England');
INSERT INTO users
(name,age,country)
VALUES
('George',40,'England');

