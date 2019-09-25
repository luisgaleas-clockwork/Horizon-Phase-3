-- USE horizon_db;

-- CREATE TABLE Price
-- (
-- idProducts INT AUTO_INCREMENT NOT NULL,
-- price DECIMAL(7,2),
-- currency VARCHAR(3),
-- FOREIGN KEY (idProducts) REFERENCES Products(idProducts)
-- );

-- INSERT INTO Price(price,currency)
-- VALUES
-- (13.57,"USD"),
-- (9.47,"USD"),
-- (1.29,"USD"),
-- (11.39,"USD"),
-- (10.69,"USD"),
-- (16.26,"USD"),
-- (9.49,"USD"),
-- (9.49,"USD"),
-- (0.69,"USD"),
-- (7.21,"USD"),
-- (8.97,"USD"),
-- (13.16,"USD");

SELECT 
	Products.idProducts,
	Products.product_name,
    Products.descripton,
    Products.img_url,
    Products.artist,
    Price.price,
    Price.currency
 FROM Products
INNER JOIN Price ON Price.idProducts = Products.idProducts;
    

    
















