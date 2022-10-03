const express = require('express');
const router = express.Router();

const { postTransact, expresspaygh_post_url, getTransactionStatus } = require('../controllers/expresspaygh_controllers')


router.post('/transact', postTransact)

router.post('/get_transaction_status', getTransactionStatus)


module.exports = router;