const mysql = require("mysql");
const router = require("express").Router()
require('dotenv').config();

const productSelect = "SELECT * FROM products"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYPASSWORD,
    port: "3306",
    database: "horizon_db"
})

connection.connect()

router.get('/product/:idProducts', (req, res) => {
    connection.query(productSelect, (err, data) => {
        const product = data.find(c => c.idProducts === parseInt(req.params.idProducts));
        if (!product) res.status(404).send('The product with the given ID was not found');
        res.send(product);
    })
});

module.exports = router;