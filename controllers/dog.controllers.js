// controler/todo.js
const { dog } = require('../models')
const { users } = require('../models')
const db = require('../config/db')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

var datetime = new Date();
datetime_today = datetime.toJSON();

exports.getAllDogs = (req, res) =>
{

    dog.findAll({
        order: [
            ['name', 'ASC']
        ]
    })
        .then((dogs) =>
        {
            res.send(dogs)
        })
        .catch((err) =>
        {
            console.log(err)
        })

};


exports.getAllDogsByUser = (req, res) =>
{
    console.log('req.params.id, ', req.params.id)
    id = Number(req.params.id)
    let sql = "SELECT * FROM dog WHERE user = ? AND hasBeenPaidFor='yes' ORDER BY name";
    let query = db.query(sql, id, (err, result, fields) =>
    {
        if (err)
        {
            throw err;
        }
        res.send(result)
        // console.log(result)
    })
};

// exports.postCreateDog2 = (req, res) =>
// {
//     console.log('request.body.dog', req.body.dog)
//     console.log('request body.user ..', req.body.user.email)
//     let new_field = ''
//     var users_id = ''
//     let field = Object.keys(req.body.dog)
//     console.log('fprm field', field.toString())
//     let value = Object.values(req.body.dog)
//     console.log('form value', value)
//     for (let i = 0; i < value.length; i++)
//     {
//         new_field += "'"
//         new_field += value[i]
//         new_field += "'"
//         if (i < value.length - 1)
//         {
//             new_field += ','
//         }


//     }
//     console.log('newfield', new_field)
//     let sql = `INSERT INTO dog (${field}) VALUES (${new_field})`;
//     let query = db.query(sql, value, (err, result, fields) =>
//     {
//         if (err)
//         {
//             throw err;
//         }
//         res.send(result)
//         console.log(query.sql)

//     })

//     //get user id from uid

//     uid = req.body.user.uid
//     console.log(uid)
//     let sql2 = 'SELECT * FROM users WHERE uid = ?';
//     let query2 = db.query(sql2, uid, (err, result, fields) =>
//     {


//         if (err)
//         {
//             throw err;
//         }
//         console.log(query2.sql)
//         console.log(result)
//         users_id = result[0].id
//         console.log('users_id---------', users_id)

//         let sql3 = `UPDATE dog  SET user=? WHERE name='${req.body.dog.name}' `;
//         console.log('users id again,', users_id)

//         let query3 = db.query(sql3, users_id, (err, result, fields) =>
//         {
//             if (err)
//             {
//                 throw err;
//             }

//             console.log('succeess eiditetd')
//             console.log(query3.sql)
//             console.log(users_id)
//         })
//     })

//     if (req.body.setHasBeenPaidFor)
//     {

//     }



// };

exports.postCreateDog =  async (req, res) =>
{

    await users.findOne({
        attributes: [
            'id'
        ],
        where: {
            uid: req.body.user.uid
        }
    })
        .then((res) =>
        {
             const jane =  dog.create({
                name: req.body.dog.name,
                age: req.body.dog.age,
                image_url: req.body.dog.image_url,
                breed: req.body.dog.breed,
                sire: req.body.dog.sire,
                dam: req.body.dog.dam,
                sex: req.body.dog.sex,
                date_of_birth: req.body.dog.date_of_birth,
                public_id: req.body.dog.public_id,
                current_owner: req.body.dog.current_owner,
                place_of_birth: req.body.dog.place_of_birth,
                kennel_name: req.body.dog.kennel_name,
                land_of_standing: req.body.dog.land_of_standing,
                afbr_no: req.body.dog.afbr_no,
                height: req.body.dog.height,
                weight: req.body.dog.weight,
                color: req.body.dog.color,
                num_of_progeny: req.body.dog.num_of_progeny,
                date_registered: datetime_today,
                user: res.dataValues.id

                });
    
            res.send(
                {"message": "dog created successfully"}
            )
        })
        .catch((err) =>
        {
            console.log(err)
            res.send(err)
        })

   

}

exports.getOneDog = (req, res) =>
{
    dog.findByPk(req.params.id)
        .then((dogs) =>
        {
            res.send(dogs)
        })
        .catch((err) =>
        {
            console.log(err)
        })
}

exports.putUpdateDog = (req, res) =>
{
    console.log('here', req.body)
    console.log('request body', req.body)
    console.log('request to put', req.body, 'in', req.params.id)
    let new_field = ''
    let field = Object.keys(req.body)
    console.log('field', field.toString())
    let value = Object.values(req.body)
    console.log('value', value)
    for (let i = 0; i < value.length; i++)
    {
        new_field += "'"
        new_field += value[i]
        new_field += "'"
        if (i < value.length - 1)
        {
            new_field += ','
        }


    }


    console.log('newfield', new_field)
    let sql = `UPDATE dog  SET ? WHERE id=${req.params.id}`;
    let query = db.query(sql, req.body, (err, result, fields) =>
    {
        if (err)
        {
            throw err;
        }
        res.send(result)
        console.log('succeess eiditetd')
        console.log(query.sql)
    })
};

exports.deleteDog = (req, res) =>
{



    let sql = `DELETE FROM dog WHERE id=${req.params.id}`;
    let query = db.query(sql, req.body, (err, result, fields) =>
    {
        if (err)
        {
            throw err;
        }
        res.send(result)
        console.log(query.sql)
        console.log('sucessful delete')
    })
};



exports.getSearch2 = (req, res) =>
{
    search_input = req.params.search_input
    let sql = `SELECT id, name FROM dog WHERE (name LIKE "%${search_input}%" OR afbr_no="${search_input}") AND hasBeenPaidFor='yes' ORDER BY name; `;
    let query = db.query(sql, (err, result, fields) =>
    {
        if (err)
        {
            throw err;
        }
        console.log(query.sql)
        res.send(result)
        console.log('search results for', result[0])
    })
};

exports.getSearch = (req, res) => {
    search_input = req.params.search_input
    console.log(search_input)
    dog.findAll({
        attributes:[
            'name', 'id', 'public_id'
        ],
        where:{
            [Op.or]: [{name: {[Op.like]:`%${search_input}%`}}, 
                    {afbr_no: {[Op.like]:`%${search_input}%`}}],
            hasBeenPaidFor: 'yes'
        }
    })
    .then((dogs)=> {
        console.log('performing search operation')
        // console.log(dogs)
        if (!dogs[0]) {
            console.log('no dog found')
            res.send([{name:'Unknown Parent', id:'404', public_id:''}])
        }
        else{
            res.send(dogs)
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.setHasBeenPaidFor = (req, res) =>
{
    let dog_name = req.body.dog.name
    var id;
    let sql2 = `UPDATE dog  SET hasBeenPaidFor='yes' WHERE name='${dog_name}'`;
    let query2 = db.query(sql2, dog_name, (err, result2, fields) =>
    {
        if (err)
        {
            throw err;
        }
        res.send(result2)
        console.log('succeessfull paid for dog')
        console.log(query2.sql)
        console.log(result2)
    })
}

exports.setTokenAndOrderId = (req, res) =>
{
    let dog_name = req.body.dog_name

    let sql2 = `UPDATE dog  SET expresspay_token="${req.body.token}" WHERE name='${dog_name}'`;
    let query = db.query(sql2, (err, result2, fields) =>
    {
        if (err)
        {
            throw err;
        }
        // res.send(result2)
        // console.log('succeessfull set token')
        // console.log(query.sql)
    })

    let sql3 = `UPDATE dog  SET expresspay_order_id="${req.body.order_id}" WHERE name='${dog_name}'`;
    let query2 = db.query(sql3, (err, result2, fields) =>
    {
        if (err)
        {
            throw err;
        }
        res.send(result2)
        console.log(result2.status)
        console.log('succeessfull set order_id')

    })

}

