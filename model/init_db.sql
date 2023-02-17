DROP TABLE if exists ingredients;
DROP TABLE if exists recipes;

CREATE TABLE recipes(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) not null,
  image VARCHAR (300) not null,
  ingredients VARCHAR (400) not null,
  complete BOOLEAN
);


INSERT INTO recipes(name, image, ingredients) VALUES ('Margarita', 'https://images.unsplash.com/photo-1590701833281-e6283af0948d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80', 'Tequila,Lemon juice,Sugar');

INSERT INTO recipes(name, image, ingredients) VALUES ('Cosmopolitan', 'https://www.thespruceeats.com/thmb/_NPlS1v9qrunNCOU5zZ0HsrcsSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cosmopolitan-cocktail-recipe-759633-hero-01-9d9d64891a164107b869b6c38c3b25f9.jpg', 'Vodka,Triple Sec,Cranberry juice');

INSERT INTO recipes(name, image, ingredients) VALUES ('Manhattan', 'https://cdn.shopify.com/s/files/1/1668/2517/articles/Pinhook_Magazine_Cocktails-Manhattan_1600x.jpg?v=1646074586', 'Bourbon,Vermouth,Bitters');

INSERT INTO recipes(name, image, ingredients) VALUES ('Tom Collins', 'https://www.yummytemple.com/wp-content/uploads/2022/04/Refreshing-cocktail-Tom-Collins-with-gin-1.jpg.webp', 'Gin,Lemon juice,Soda,Sugar');

INSERT INTO recipes(name, image, ingredients) VALUES ('Old fashioned', 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'Whiskey,Bitters,Syrup,Orange peel');

INSERT INTO recipes(name, image, ingredients) VALUES ('Espresso Martini', 'https://images.unsplash.com/photo-1526962093464-db85c516ba74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80', 'Vodka,Kahlua,Syrup,Coffee beans');

INSERT INTO recipes(name, image, ingredients) VALUES ('Mojito', 'https://images.unsplash.com/photo-1622322331040-088df8424c89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', 'Rhum,Lime juice,Mint leaves,Sugar');

