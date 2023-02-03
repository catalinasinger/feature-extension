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


INSERT INTO recipes(name, image) VALUES ('Margarita', 'https://assets.bonappetit.com/photos/5b69f16006027f654a27cd19/1:1/w_2560%2Cc_limit/ba-margarita-1.jpg');
INSERT INTO ingredients(text, recipe_id) VALUES ('Tequila', 1);
INSERT INTO ingredients(text, recipe_id) VALUES ('Lime Juice', 1);
INSERT INTO ingredients(text, recipe_id) VALUES ('Triple sec', 1);
INSERT INTO ingredients(text, recipe_id) VALUES ('Slice lime', 1);

INSERT INTO recipes(name, image) VALUES ('Cosmopolitan', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8ZmPAyKfsb9htP3K7BOLcLiL6ajOvzFJZw&usqp=CAU');
INSERT INTO ingredients(text, recipe_id) VALUES ('Vodka 30ml', 2);
INSERT INTO ingredients(text, recipe_id) VALUES ('Triple sec 25 ml', 2);
INSERT INTO ingredients(text, recipe_id) VALUES ('Cranberry Juice 30ml', 2);
INSERT INTO ingredients(text, recipe_id) VALUES ('Orange zest (garnish)', 2);