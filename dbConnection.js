const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.USERNAME,
    password: process.env.MYPASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})

module.exports = connection