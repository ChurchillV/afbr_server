
const mysql = require('mysql')
const db = mysql.createConnection({

    host: "z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ks8pa75ol3h0skzv",
    password:"el5w7f3rjcbisebg",
    database: "jwjgkj993t2yf6sa"
})



module.exports = db;