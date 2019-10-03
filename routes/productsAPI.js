//code that runs routes an router is what acutally invokes the callback function to process the request
const router = require("express").Router()

// get env file so it gets password
require('dotenv').config();

//Getting connection to Database
const connection =require('../dbConnection')

//Querry used to insert data to mySQL database.
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
    
//run a query using "GET" method mySQL connection
router.get("/product", (req, res) => {
    connection.query(productSelect, (err, results) => {
        if (err) return res.send(err)
        else return res.json({ data: results })
    })
})

module.exports = router;