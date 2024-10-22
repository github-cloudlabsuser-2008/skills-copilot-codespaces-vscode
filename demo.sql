-- Create a table for 5 products with product names and prices
CREATE TABLE products
(
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10, 2)
);
 
-- Insert 5 products into the products table
INSERT INTO products (product_id, product_name, price) VALUES
(1, 'Product 1', 100),
(2, 'Product 2', 200),
(3, 'Product 3', 300),
(4, 'Product 4', 400),
(5, 'Product 5', 500);