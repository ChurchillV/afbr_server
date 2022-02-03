// const mongoose = require('mongoose');

// const DogSchema = new mongoose.Schema({
//     name: {
//         type: 'String',

// });

// const Dogs = mongoose.model('afbr_dogs', DogSchema);

// module.exports = Dogs;

// const dbConfig = require("../config/db");

//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.dogs = require("./dogs_model.js")(sequelize, Sequelize);

// module.exports = db;

const db = require('../config/db')


// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     db.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });