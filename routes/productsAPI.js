const mysql = require("mysql");
const router = require("express").Router()
require('dotenv').config();

const productSelect =
    `SELECT 
        Products.idProducts,
        Products.product_name,
        Products.descripton,
        Products.img_url,
        Products.artist,
        Price.price,
        Price.currency
    FROM Products
    INNER JOIN Price ON Price.idProducts = Products.idProducts;`

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYPASSWORD,
    port: "3306",
    database: "horizon_db"
})

// connection.connect()


router.get("/product", (req, res) => {
    connection.query(productSelect, (err, results) => {
        if (err) {
            console.log(err)
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
})






module.exports = router;