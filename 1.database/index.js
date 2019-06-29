const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345',
    database : 'test_arkademy',
    port : '3306'
})

module.exports = db