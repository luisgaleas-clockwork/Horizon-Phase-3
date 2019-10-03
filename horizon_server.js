//Dependencies used in server
const express = require("express");
const app = express();
const path = require('path')
const morgan = require("morgan")
const helmet = require("helmet")

//checking if env file or 4000 and setting it to a variable
const PORT = process.env.PORT || 4000

//requiring routes
const productsAPI = require("./routes/productsAPI");
const contactsAPI = require("./routes/contactAPI");
const productsFilterAPI = require("./routes/porductsFilterAPI")
const commentAPI = require("./routes/commentAPI")

//used for building in production

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'));
// }

app.use(express.urlencoded({ extended: true }))    //setting it to UTF-8 
app.use(express.json())                         //Bodyparser

app.use(helmet())   //Security
app.use(morgan())   // Logs every request


//using a method to configure the middleware with routes with /ap/[ Diffrent endpoints ]
app.use("/api", productsAPI)
app.use("/api", contactsAPI)
app.use("/api", productsFilterAPI)
app.use("/api", commentAPI)

// live connection to react server and node
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"))
})

//PORT app is running on
app.listen(PORT, () => {
    console.log(`products server listening on port ${PORT}`)
})

//exports app for testing
module.exports = app;