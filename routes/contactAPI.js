//code that runs routes an router is what acutally invokes the callback function to process the request
const router = require("express").Router()

// get env file so it gets password
require('dotenv').config();

//Querry used to insert data to mySQL database.
const productSelect = "SELECT * FROM Contacts"
//Getting connection to Database
const connection = require('../dbConnection')

//Http "GET" method connected which is being routed to horizon_server.js
router.get("/contacts", (req, res) => {
    //run a query using mySQL connection
    connection.query(productSelect, (err, results) => {
        if (err) return res.send(err)
         else return res.json({ data: results })
    })
})

module.exports = router;