
/*  Category Table */

CREATE TABLE categories (
   id SERIAL PRIMARY KEY,
   category_name VARCHAR(16) NOT NULL
);



/* Restaurnat Table */

CREATE TABLE restaurants (
   id SERIAL PRIMARY KEY,
   restaurant_name VARCHAR(32) NOT NULL,
   category_id INT REFERENCES categories(id) NOT NULL
);



/* Branch Table */

CREATE TABLE branches (
   id SERIAL PRIMARY KEY,
   branch_name VARCHAR(32) NOT NULL,
   restaurant_id INT REFERENCES restaurants(id) NOT NULL
);


 /* Product Table */

 CREATE TABLE products (
   id SERIAL PRIMARY KEY,
   product_name VARCHAR(32) NOT NULL,
   product_price  INT NOT NULL,
   branche_id INT REFERENCES branches(id) NOT NULL
 );


 /* Order Table */

 CREATE TABLE orders (
   id SERIAL PRIMARY KEY,
   client_name VARCHAR(128) NOT NULL,
   client_phone INT NOT NULL,
   product_id INT REFERENCES products(id) NOT NULL
   ordered_time VARCHAR(64) NOT NULL
 )




