const express = require('express');
const router = express.Router();

const { postSendRegisterEmail , postSendRegisterDogEmail, postLitter} = require('../controllers/email_controllers')

router.post('/email_register', postSendRegisterEmail)

router.post('/dog_registered', postSendRegisterDogEmail)

router.post('/litter', postLitter)

    




module.exports = router;