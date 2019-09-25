const express = require ("express");
const app = express()

const productsAPI = require("./routes/productsAPI");
const contactsAPI = require("./routes/contactAPI");
const product_idAPI = require("./routes/product_idAPI")

app.use("/api", productsAPI)
app.use("/api", contactsAPI)
app.use("/api", product_idAPI)


app.listen(4000, () =>{
    console.log('products server listening on port 4000')
})