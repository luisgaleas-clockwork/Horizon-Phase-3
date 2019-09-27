const express = require ("express");
const app = express();
const helmet = require ("helmet")

const port = 4000

const productsAPI = require("./routes/productsAPI");
const contactsAPI = require("./routes/contactAPI");
const productsFilterAPI = require("./routes/porductsFilterAPI")



app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/api", productsAPI)
app.use("/api", contactsAPI)
app.use("/api", productsFilterAPI)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirnamem,"./client/build/index.html"))
})

app.listen(port, () =>{
    console.log(`products server listening on port ${port}`)
})