const express = require('express');
const router = express.Router();

const { postSendRegisterEmail , postSendRegisterDogEmail} = require('../controllers/email_controllers')

router.post('/email_register', postSendRegisterEmail)

router.post('/dog_registered', postSendRegisterDogEmail)





module.exports = router;