const router = require("express").Router()

require('dotenv').config();

const productSelect = "SELECT * FROM Contacts"
const connection = require('../dbConnection')
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