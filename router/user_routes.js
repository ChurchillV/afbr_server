const express = require('express');
const router = express.Router();
const db = require('../config/db')
bcrypt = require('bcryptjs')

const { postCreateUser, getAllUsers, getOneUser, getOneUserByEmailAndName, getUserByUid } = require('../controllers/users')


    

router.post('/', postCreateUser)

router.get('/', getAllUsers)

router.get('/getone', getOneUser)

router.get('/getoneuserbyemailandname', getOneUserByEmailAndName)

router.get('/getUserByUid/:uid', getUserByUid)





module.exports = router;