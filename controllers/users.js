// controler/todo.js

bcrypt = require('bcryptjs')
const db = require('../config/db')



exports.getAllUsers = (req, res) => {

    
    let sql = 'SELECT * FROM users ORDER BY name';
    let query = db.query(sql, (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
};

exports.postCreateUser = (req, res) => {

    console.log('here',req.body)
    console.log('request obdy', req.body)
    let new_field = ''
    let field = Object.keys(req.body)
    console.log('field',field.toString())
    let value = Object.values(req.body)
    console.log('value',value)
    for (let i = 0; i < value.length; i ++){
        new_field += "'"
        new_field += value[i]
        new_field += "'"
        if ( i < value.length - 1){
            new_field += ','
        }           
        
        
    }
    username = req.body.username
    email = req.body.email

    console.log('newfield', new_field)
    let sql = `INSERT INTO users (${field}) VALUES (${new_field})`;
    let query = db.query(sql, value, (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
};

exports.getOneUser = (req, res) => {
    console.log(req.params.id)
    let id = req.params.id
    let sql = 'SELECT * FROM users WHERE id = ?';
    let query = db.query(sql, id, (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
}

exports.getOneUserByEmailAndName  = (req, res) => {
    let sql = 'SELECT * FROM users WHERE name = ?, email = ? ';
    let query = db.query(sql, (req.body.name, req.body.email), (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
}


exports.getUserByUid  = (req, res) => {
    console.log(req.params)
    uid = req.params.uid
    let sql = 'SELECT * FROM users WHERE uid = ?';
    let query = db.query(sql, uid, (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
}


exports.putUpdateUser = (req, res) => {
    console.log('here',req.body)
    console.log('request body', req.body)
    console.log('request to put',req.body, 'in', req.params.id)
    let new_field = ''
    let field = Object.keys(req.body)
    console.log('field',field.toString())
    let value = Object.values(req.body)
    console.log('value',value)
    for (let i = 0; i < value.length; i ++){
        new_field += "'"
        new_field += value[i]
        new_field += "'"
        if ( i < value.length - 1){
            new_field += ','
        }           
        
        
    }
    

    console.log('newfield', new_field)
    let sql = `UPDATE dog  SET ? WHERE id=${req.params.id}`;
    let query = db.query(sql,req.body, (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
        console.log('succeess eiditetd')
        console.log(query.sql)
    })
};

exports.deleteUser = (req, res) => {
    

 
    let sql = `DELETE FROM dog WHERE id=${req.params.id}`;
    let query = db.query(sql,req.body, (err, result, fields) => {
        if (err){
            throw err;
        }
        res.send(result)
        console.log('sucessful delete')
    })
};

