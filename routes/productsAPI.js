const router = require("express").Router()

require('dotenv').config();

const connection =require('../dbConnection')

const productSelect =
    `SELECT 
        Products.idProducts,
        Products.product_name,
        Products.descripton,
        Products.img_url,
        Products.artist,
        Products.genre,
        Price.price,
        Price.currency
    FROM Products
    INNER JOIN Price ON Price.idProducts = Products.idProducts;`

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