const express = require('express');
const router = express.Router();
const db = require('../config/db')

// const { getAllDogs, postCreateDog, getOneDog, deleteDog, putUpdateDog } = require('../controllers/afbr')


router.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE afbr';
    db.query(sql, (err) => {
        if (err) {
            throw err;
    }
    res.send('Database created')
    });
    
});

router.get('/createdog', (req, res) =>{
    let sql = 'CREATE TABLE dog(id int AUTO_INCREMENT, name VARCHAR(255), age int, breed VARCHAR(255), sire int,dam int,sex VARCHAR(255), date_of_birth VARCHAR(255), PRIMARY KEY(id) )';
    db.query(sql, err => {
        if (err){
        throw err
    }
    res.send('Dog ctable creaed')
})

})

router.get('/dog', (req, res) => {
    let dog = {name: 'no' }
    let sql = 'INSERT INTO dog SET ?'
    let query = db.query(sql, dog, err => {
        if (err){
            throw err;
        }
        res.send('koobs created')
    })
})

router.get('/alter', (req, res) => {
    VA = 'sex'
    let sql = `ALTER TABLE dog ADD COLUMN ${VA} VARCHAR(255)`;
    let query = db.query(sql, err => {
        if (err){
            throw err;
        }
        res.send(`dog alfteed ${VA}`)
    })
})

router.get('/foreign1', (req, res) => {
    
    let sql = 'ALTER TABLE dog ADD FOREIGN KEY (sire) REFERENCES dog(id) ON DELETE SET NULL ON UPDATE SET NULL';
    let query = db.query(sql, err => {
        if (err){
            throw err;
        }
        res.send('dog foreign')
    })
})
router.get('/foreign2', (req, res) => {
    
    let sql = 'ALTER TABLE dog ADD FOREIGN KEY (dam) REFERENCES dog(id) ON DELETE SET NULL ON UPDATE SET NULL';
    let query = db.query(sql, err => {
        if (err){
            throw err;
        }
        res.send('dog altered')
    })
})

router.get('/select', (req, res) => {
    
    let sql = 'SELECT * FROM dog';
    let query = db.query(sql, (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})



module.exports = router;