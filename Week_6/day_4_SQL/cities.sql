-- DROP TABLE IF EXITS cities;

-- i'm a sql comment!!
CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    population INTEGER
);
-- to read data from table: SELECT
-- example usage: SELECT * FROM cities;
--put Data in our TABLE
--INSERT
INSERT INTO cities (city, country, population) values ('Beriln', 'Germany', '3000000');
INSERT INTO cities (city,population) values ('Sarajevo', '7000000');
INSERT INTO cities (city) values ('Singapore');
INSERT INTO cities (city, country) values ('Hamburg', 'Germany');



-- SELECT * FROM cities WHERE id = 1;
