const Dogs = require('../models/afbr');
const db = require('../config/db')




exports.postCreateDogTemp = (req, res) => {
    var insertId;
    console.log('request.body.dog', req.body.dog)
    let new_field = ''
    var users_id = ''
    console.log('stops here')
    let field = Object.keys(req.body.dog)
    console.log('fprm field', field.toString())
    let value = Object.values(req.body.dog)
    console.log('form value', value)
    for (let i = 0; i < value.length; i++) {
        new_field += "'"
        new_field += value[i]
        new_field += "'"
        if (i < value.length - 1) {
            new_field += ','
        }


    }
    console.log('newfield', new_field)
    let sql = `INSERT INTO dog_temporal (${field}) VALUES (${new_field})`;
    let query = db.query(sql, value, (err, result, fields) => {
        if (err) {
            throw err;
        }
        res.send(result)
        console.log(query.sql)
        insertId = result.insertId
        console.log('insert Id', result.insertId)

    })

    uid = req.body.user.uid
    console.log(uid)
    let sql2 = 'SELECT * FROM users WHERE uid = ?';
    let query2 = db.query(sql2, uid, (err, result, fields) => {


        if (err) {
            throw err;
        }
        console.log(query2.sql)
        console.log(result)
        users_id = result[0].id
        console.log('users_id---------', users_id)

        let sql3 = `UPDATE dog_temporal  SET user=? WHERE id='${insertId}' `;
        console.log('users id again,', users_id)

        let query3 = db.query(sql3, users_id, (err, result, fields) => {
            if (err) {
                throw err;
            }

            console.log('succeess eiditetd')
            console.log(query3.sql)
            console.log(users_id)
        })
    })


};

exports.verifyDogPayment = (req, res) => {


    function checkNull(obj) {
        newResult = {}
        keys = Object.keys(obj)
        for (let i in keys){
            console.log(obj[i])
        }
        return obj
    }
    let user_id = req.body.user_id
    let sql2 = 'SELECT * FROM dog_temporal WHERE user = ? AND ';
    let query2 = db.query(sql2, user_id, (err, result, fields) => {


        if (err) {
            throw err;
        }

        console.log(JSON.parse(JSON.stringify(result)))
        newResults = JSON.parse(JSON.stringify(result[0]))
        let new_field = ''
        let field = Object.keys(newResults)
        let value = Object.values(newResults)
        for (let i = 0; i < value.length; i++) {
            new_field += "'"
            new_field += value[i]
            new_field += "'"
            if (i < value.length - 1) {
                new_field += ','
            }


        }
        console.log('result is of type', typeof (result))
        console.log(field)
        console.log(new_field)

        let sql3 = `INSERT INTO dog (${field}) VALUES (${new_field})`;
        let query3 = db.query(sql3, null, (err, result, fields) => {

            console.log(query3.sql)
            console.log(result)

            if (err) {
                throw err;
            }

        })

    }
    )


}

exports.sendToPermanentDb = (req, res) => {

}