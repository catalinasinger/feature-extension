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


INSERT INTO recipes(name, image) VALUES ('Margarita', 'https://images.unsplash.com/photo-1590701833281-e6283af0948d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80');
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

INSERT INTO recipes(name, image) VALUES ('Old fashioned', 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
INSERT INTO ingredients(text, recipe_id) VALUES ('Bourbon', 5);
INSERT INTO ingredients(text, recipe_id) VALUES ('Angostura bitters', 5);
INSERT INTO ingredients(text, recipe_id) VALUES ('Sugar', 5);

INSERT INTO recipes(name, image) VALUES ('Espresso Martini', 'https://images.unsplash.com/photo-1526962093464-db85c516ba74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');
INSERT INTO ingredients(text, recipe_id) VALUES ('Kahlua', 6);
INSERT INTO ingredients(text, recipe_id) VALUES ('Vodka', 6);
INSERT INTO ingredients(text, recipe_id) VALUES ('Espresso', 6);
INSERT INTO ingredients(text, recipe_id) VALUES ('Sugar', 6);

INSERT INTO recipes(name, image) VALUES ('Mojito', 'https://images.unsplash.com/photo-1622322331040-088df8424c89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80');
INSERT INTO ingredients(text, recipe_id) VALUES ('Rum', 7);
INSERT INTO ingredients(text, recipe_id) VALUES ('Mint', 7);
INSERT INTO ingredients(text, recipe_id) VALUES ('Lime', 7);
INSERT INTO ingredients(text, recipe_id) VALUES ('Sugar', 7);

