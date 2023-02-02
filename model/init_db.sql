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

INSERT INTO ingredients(text, recipe_id) VALUES ('Gin', 2);
INSERT INTO ingredients(text, recipe_id) VALUES ('Vodka', 2);


INSERT INTO recipes(name, ingredient1, ingredient2, ingredient4,ingredient5) VALUES ('Tom Collins' , 'Gin 50ml', 'Lemon Juice 10ml','Sugar syrup 10 ml','Soda top','Slice lime (garnish)', '//https://media.istockphoto.com/id/1357156382/vector/tom-collins-cocktail-illustration-alcoholic-cocktail-hand-drawn-illustration-color-sketch.jpg?s=612x612&w=0&k=20&c=71ucEG_gupVmoBGhVYEIJ1ROP1oSKBT9fJM7z7eZaD8=');
INSERT INTO recipes(name, ingredients)  VALUES ('Margarita ', 'Tequila 50ml', 'Lime Juice 10ml','Triple sec 10 ml','Slice lime (garnish)');
INSERT INTO recipes(name, ingredient1, ingredient2, ingredient4,ingredient5) VALUES ('Cosmopolitan', 'Vodka 30ml',' Triple sec 25 ml' 'Cranberry Juice 30ml','Orange zest (garnish)');
INSERT INTO recipes(name, ingredient1, ingredient2, ingredient4,ingredient5) VALUES ('Manhattan ', 'Bourbon 50ml', 'Rosso Vermouth 25ml','Sugar syrup 10 ml','Angostura bitters','Orange peel (garnish)');

