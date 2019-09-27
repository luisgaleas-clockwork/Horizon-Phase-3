const mysql = require("mysql");
const router = require("express").Router()
require('dotenv').config();

const productMinSelect =
    `SELECT 
        Products.idProducts,
        Products.product_name,
        Products.descripton,
        Products.img_url,
        Products.artist,
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
        Price.price,
        Price.currency
    FROM Products
    INNER JOIN Price ON Price.idProducts = Products.idProducts
    ORDER BY Price.price DESC`


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYPASSWORD,
    port: "3306",
    database: "horizon_db"
})

// connection.connect()

router.get("/productfilter", (req, res) => {
    let maxPrice = req.query.maxp
    let minimumPrice = req.query.minp

    if (!maxPrice && minimumPrice) {
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
    } else if (maxPrice && !minimumPrice) {
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