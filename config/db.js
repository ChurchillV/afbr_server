// const mongoose = require('mongoose');

// const db = process.env.MONGO_URI;

// const connectDB = async() => {

//       acquire: 30000,
//       idle: 10000
//     }
//   };
const mysql = require('mysql')
const db = mysql.createConnection({
    // host: '127.0.0.1',
    // user: 'root',
    // password: '',
    // database: 'afbr'
    host: "z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ks8pa75ol3h0skzv",
    password:"el5w7f3rjcbisebg",
    database: "jwjgkj993t2yf6sa"
})



module.exports = db;