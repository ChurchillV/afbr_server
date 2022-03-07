const express = require('express');
const router = express.Router();

const { postSendRegisterEmail , postSendRegisterDogEmail, trial} = require('../controllers/email_controllers')

router.post('/email_register', postSendRegisterEmail)

router.post('/dog_registered', postSendRegisterDogEmail)

router.get('/try', trial)





module.exports = router;