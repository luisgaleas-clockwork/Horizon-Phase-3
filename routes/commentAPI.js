const router = require("express").Router()

require('dotenv').config();

const commentInsert = "INSERT INTO Contacts (first_name, last_name, email, contact_comment) VALUES(?,?,?,?)"
const connection = require('../dbConnection')

router.post("/comment", (req,res) => {
    const {first_name, last_name,email,contact_comment} = req.body
    if(!first_name){
        return res.status(400).send({
            error:true,
            message:"Please insert valid text."
        })
    }
    connection.query(commentInsert,
        [first_name, last_name, email, contact_comment],
        (err,results) =>{
        if (err) return res.send(err)
     else {
            return res.json({
                data:results
            })
        }
    })
})

module.exports = router;