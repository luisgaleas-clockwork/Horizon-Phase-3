
CREATE TABLE Price
(
idProducts INT AUTO_INCREMENT NOT NULL,
price DECIMAL(7,2),
currency VARCHAR(3),
FOREIGN KEY (idProducts) REFERENCES Products(idProducts)
);

INSERT INTO Price(price,currency)
VALUES
(10.09,"USD"),
(9.49,"USD"),
(7.99,"USD"),
(13.13,"USD"),
(10.03,"USD"),
(7.98,"USD"),
(12.41,"USD"),
(9.99,"USD"),
(14.49,"USD"),
(7.99,"USD"),
(5.27,"USD"),
(13.57,"USD"),
(9.47,"USD"),
(1.29,"USD"),
(11.39,"USD"),
(10.69,"USD"),
(16.26,"USD"),
(9.49,"USD"),
(9.49,"USD"),
(0.69,"USD"),
(7.21,"USD"),
(8.97,"USD"),
(13.16,"USD"),
(0.99,"USD");

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

    


    
















