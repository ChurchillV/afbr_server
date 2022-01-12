

const Dogs = require('../models/afbr');
const db = require('../config/db')




exports.postImage = (req, res) => {

    console.log('image successfully uploaded')
    res.send(req.body)
    console.log(req.body)
};

exports.getAllImages = (req, res) => {
    res.send('')
}