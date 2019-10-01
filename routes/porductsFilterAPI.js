const router = require("express").Router()

require('dotenv').config();

const connection =require('../dbConnection')

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

// connection.connect()

router.get("/productfilter", (req, res) => {
    let maxPrice = req.query.maxp
    let minimumPrice = req.query.minp

    if (minimumPrice) {
        connection.query(productMinSelect, (err, results) => {
            if (err) {
                console.log(err)
                return res.send(err)
            } else {
                return res.json({
                    data: results
                })
            }
        })
    } else if (maxPrice) {
        connection.query(productMaxSelect, (err, results) => {
            if (err) {
                console.log(err)
                return res.send(err)
            } else {
                return res.json({
                    data: results
                })
            }
        })
    }
    else {
        connection.query(productMaxSelect, (err, results) => {
            if (err) {
                console.log(err)
                return res.send(err)
            } else {
                return res.json({
                    data: results
                })
            }
        })
    }
})

module.exports = router;