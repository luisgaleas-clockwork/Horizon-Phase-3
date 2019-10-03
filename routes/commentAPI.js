//code that runs routes an router is what acutally invokes the callback function to process the request
const router = require("express").Router()

// get env file so it gets password
require('dotenv').config();

//Querry used to insert data to mySQL database.
const commentInsert = "INSERT INTO Contacts (first_name, last_name, email, contact_comment) VALUES(?,?,?,?)"

//Getting connection to Database
const connection = require('../dbConnection')

//Http "POST" method connected which is being routed to horizon_server.js
router.post("/comment", (req, res) => {
    //destructuring constants used for each requesting req.body
    const { first_name, last_name, email, contact_comment } = req.body

    //error check
    if (!first_name) {
        return res.status(400).send({
            error: true,
            message: "Please insert valid text."
        })
    }
    
    //run a query "POST" using mySQL connection
    connection.query(commentInsert,
        [first_name, last_name, email, contact_comment],
        (err, results) => {
            //send status code
            if (err) return res.send(err)
            else return res.json({ data: results })
        })
})

module.exports = router;