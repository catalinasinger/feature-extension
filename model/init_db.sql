DROP TABLE if exists ingredients;
DROP TABLE if exists recipes;

CREATE TABLE recipes(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) not null,
  image VARCHAR (300) not null,
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

INSERT INTO recipes(name, image) VALUES ('Cosmopolitan', 'https://www.thespruceeats.com/thmb/_NPlS1v9qrunNCOU5zZ0HsrcsSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cosmopolitan-cocktail-recipe-759633-hero-01-9d9d64891a164107b869b6c38c3b25f9.jpg');
INSERT INTO ingredients(text, recipe_id) VALUES ('Vodka', 2);
INSERT INTO ingredients(text, recipe_id) VALUES ('Triple sec', 2);
INSERT INTO ingredients(text, recipe_id) VALUES ('Cranberry Juice', 2);

INSERT INTO recipes(name, image) VALUES ('Manhattan', 'https://cdn.shopify.com/s/files/1/1668/2517/articles/Pinhook_Magazine_Cocktails-Manhattan_1600x.jpg?v=1646074586');
INSERT INTO ingredients(text, recipe_id) VALUES ('Bourbon', 3);
INSERT INTO ingredients(text, recipe_id) VALUES ('Rosso Vermouth', 3);
INSERT INTO ingredients(text, recipe_id) VALUES ('Sugar', 3);
INSERT INTO ingredients(text, recipe_id) VALUES ('Angostura bitters', 3);

INSERT INTO recipes(name, image) VALUES ('Tom Collins', 'https://www.yummytemple.com/wp-content/uploads/2022/04/Refreshing-cocktail-Tom-Collins-with-gin-1.jpg.webp');
INSERT INTO ingredients(text, recipe_id) VALUES ('Gin', 4);
INSERT INTO ingredients(text, recipe_id) VALUES ('Lime Juice', 4);
INSERT INTO ingredients(text, recipe_id) VALUES ('Sugar', 4);
INSERT INTO ingredients(text, recipe_id) VALUES ('Soda', 4);
