// lead into the mysql module 
const mysql = require("mysql")

// create the example of mysql.createPool and config these message
const db = mysql.createPool({
    host:'192.168.31.131',
    user:'blog',
    password:'7ZRs4bFitfDk6bMf',
    database:'blog'
})

module.exports = db

























