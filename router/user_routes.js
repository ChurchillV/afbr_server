const express = require('express');
const router = express.Router();
const db = require('../config/db')
bcrypt = require('bcryptjs')

const { postCreateUser } = require('../controllers/users')



// router.get('/createuser', (req, res) =>{
//     let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, username VARCHAR(255), email varchar(255) , password VARCHAR(255), PRIMARY KEY(id) )';
//     db.query(sql, err => {
//         if (err){
//         throw err
//     }
//     res.send('Users table creaed')
// })

// })

router.get((req, res) => {
    const salt  =  bcrypt.genSalt(10)
    // const hashed_password = await bcrypt.hash(req.body.password, salt)

    username = req.body.username
    email = req.body.email
    // password = hashed_password
    password = 'a'

     saveuser(username, email, password)

    
})
    

const saveuser = (username, email, password) => {
        let sql = `INSERT INTO dog (username, email, password) VALUES (?, ?, ?)`;
        value = [username, email, password]
        let query = db.query(sql, value, (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
    })

    }
    

router.get('/register', postCreateUser)

router.get('/register', postCreateUser)

router.get('/register', postCreateUser)

router.get('/register', postCreateUser)



module.exports = router;