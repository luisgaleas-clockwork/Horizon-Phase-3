const express = require ("express");
const app = express();
const path = require('path')
const morgan = require("morgan")
const helmet = require ("helmet")

const PORT = process.env.PORT || 4000

const productsAPI = require("./routes/productsAPI");
const contactsAPI = require("./routes/contactAPI");
const productsFilterAPI = require("./routes/porductsFilterAPI")
const commentAPI = require("./routes/commentAPI")

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(helmet())
app.use(morgan())

app.use("/api", productsAPI)
app.use("/api", contactsAPI)
app.use("/api", productsFilterAPI)
app.use("/api", commentAPI)


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./client/public/index.html"))
})


app.listen(PORT, () =>{
    console.log(`products server listening on port ${PORT}`)
})

module.exports = app;