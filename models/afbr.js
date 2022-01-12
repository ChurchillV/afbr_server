// const mongoose = require('mongoose');

// const DogSchema = new mongoose.Schema({
//     name: {
//         type: 'String',
//         required: true,
//     },
//     breed: {
//         type: 'String',
//         required: false,
//     },
//     age: {
//         type: 'Number',
//         required: false,
//     },
//     sex: {
//         type: 'String',
//         required: true,
//     },
//     sire: {
//         type: 'String',
//         required: false,
//     },
//     dam: {
//         type: 'String',
//         required: false,
//     },
    
// });

// const Dogs = mongoose.model('afbr_dogs', DogSchema);

// module.exports = Dogs;

// const dbConfig = require("../config/db");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
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