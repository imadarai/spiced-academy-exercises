DROP TABLE IF EXITS actors;

CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INTEGER,
    oscar INTEGER
);


INSERT INTO actors (name, age, oscar) values ('Leonardo DiCaprio', '41', '1');
INSERT INTO actors (name, age, oscar) values ('Jennifer Lawrence', '25', '1');
INSERT INTO actors (name, age, oscar) values ('Samuel L. Jackson', '67', '0');
INSERT INTO actors (name, age, oscar) values ('Meryl Streep', '66', '3');
INSERT INTO actors (name, age, oscar) values ('John Cho', '43', '0');


--EXERCISE QUERIES
-- SELECT name FROM actors WHERE oscar > 1;
-- SELECT name FROM actors WHERE age > 30;
