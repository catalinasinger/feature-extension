DROP TABLE if exists recipes; CREATE TABLE recipes(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));
DROP TABLE if exists ingredients; CREATE TABLE ingredients(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));


