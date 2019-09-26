const express = require ("express");
const app = express();
const cors = require ("cors");
const port = 4000

const productsAPI = require("./routes/productsAPI");
const contactsAPI = require("./routes/contactAPI");
const product_idAPI = require("./routes/product_idAPI")

app.use(cors("*"))

app.use("/api", productsAPI)
app.use("/api", contactsAPI)
app.use("/api", product_idAPI)


app.listen(port, () =>{
    console.log(`products server listening on port ${port}`)
})