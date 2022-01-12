// const mongoose = require('mongoose');

// const db = process.env.MONGO_URI;

// const connectDB = async() => {
//     try{
//         await mongoose.connect(db, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log('Mongo Db is connected')
 
//     } catch (err) {
//         console.error(err.message)
//         process.exit(1)
//     }
// };

// module.exports = connectDB;
// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "123456",
//     DB: "testdb",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };
const mysql = require('mysql')
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'afbr'
})



module.exports = db;