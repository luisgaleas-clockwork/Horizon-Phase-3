const mysql = require("mysql");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.MYPASSWORD,
        port: "3306",
        database: "horizon_db"
    })
    
module.exports = connection