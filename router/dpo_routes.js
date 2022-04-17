const express = require('express');
const router = express.Router();

const { postTransact } = require('../controllers/dpo_controllers')

router.post('/transact', postTransact)





module.exports = router;