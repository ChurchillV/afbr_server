const { dog } = require('../models')
const { users } = require('../models')
const db = require('../config/db')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

var datetime = new Date();
datetime_today = datetime.toJSON();
last_month = '2022-11-01 12:44:39'
target_date = '2022-11-10 17:23:04'

exports.getNewlyRegisteredDogs = (req, res) => {
    console.log('calling request')
    dog.findAll({
        attributes: [
            'id', 'name', 'public_id', 'date_registered', 'user', 'breed'
        ],
        order: [
            ['date_registered', 'DESC']
        ],
        where:{
            date_registered: {
                [Op.gt]: target_date
            },
            public_id:{
                [Op.ne]: ""
            }
        }
    })
    .then((dogs)=>{
        console.log(Object.keys(dogs).length, 'is the number of dogs')

        res.send({
            newDogs: dogs,
            number_of_new_dogs: Object.keys(dogs).length
        })
    })
    .catch((err)=>{
        res.send(err)
        console.log(err)
    })
}

