//code that runs routes an router is what acutally invokes the callback function to process the request
const router = require("express").Router()

// get env file so it gets password
require('dotenv').config();

//Getting connection to Database
const connection = require('../dbConnection')

//Querry used to insert data to mySQL database select products from low to high.
const productMinSelect =
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
    INNER JOIN Price ON Price.idProducts = Products.idProducts
    ORDER BY Price.price`

//Querry used to insert data to mySQL database select products from high to low.
const productMaxSelect =
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
    INNER JOIN Price ON Price.idProducts = Products.idProducts
    ORDER BY Price.price DESC`

//run a query using "GET" method mySQL connection
router.get("/productfilter", (req, res) => {
    //requesting query
    let maxPrice = req.query.maxp
    let minimumPrice = req.query.minp

    //runs products from low to high if requested
    if (minimumPrice) {
        connection.query(productMinSelect, (err, results) => {
            if (err) return res.send(err)
            else return res.json({ data: results })
        })
    }
    //runs products from high to low if requested
    else if (maxPrice) {
        connection.query(productMaxSelect, (err, results) => {
            if (err) return res.send(err)
            else return res.json({ data: results })
        })
    }
    //runs products from high to low if requested
    else {
        connection.query(productMaxSelect, (err, results) => {
            if (err) return res.send(err)
            else return res.json({ data: results })
        })
    }
})

module.exports = router;