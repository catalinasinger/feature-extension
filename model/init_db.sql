DROP TABLE if exists ingredients;
DROP TABLE if exists recipes;

CREATE TABLE recipes(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) not null,
  image VARCHAR (200) not null,
  complete BOOLEAN
);

CREATE TABLE ingredients(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(40) not null,
  recipe_id INT NOT NULL
);

ALTER TABLE ingredients
ADD FOREIGN KEY (recipe_id) REFERENCES recipes(id);

INSERT INTO recipes(name) ('Spaggethi','Spaggethi',);
INSERT INTO recipes(text) VALUES ('Fish and potato');
INSERT INTO ingredients(text, recipe_id) VALUES ('Pasta', 2);