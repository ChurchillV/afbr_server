const express = require('express');
const router = express.Router();

const { postSendRegisterEmail , postSendRegisterDogEmail, postLitter, postPedigree, postExpresspayUrl} = require('../controllers/email_controllers')

router.post('/email_register', postSendRegisterEmail)

router.post('/dog_registered', postSendRegisterDogEmail)

router.post('/litter', postLitter)

router.post('/expresspay_post_url', postExpresspayUrl)


router.post('/pedigree', postPedigree)






module.exports = router;