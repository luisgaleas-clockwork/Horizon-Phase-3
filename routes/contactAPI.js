const mysql = require ("mysql");
const router = require("express").Router()
require('dotenv').config();

const productSelect = "SELECT * FROM Contacts"

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.MYPASSWORD,
    port:"3306",
    database:"horizon_db"
})

connection.connect()


router.get("/contacts", (req,res) => {
    connection.query(productSelect,(err,results) =>{
        if (err){
            console.log(err)
            return res.send(err)
        } else {
            return res.json({
                data:results
            })
        }
    })
})

module.exports = router;