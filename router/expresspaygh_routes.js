const express = require('express');
const router = express.Router();

const { postTransact, expresspaygh_post_url, getTransactionStatus } = require('../controllers/expresspaygh_controllers')

const {postTransactDpo}  = require('../controllers/dpo_controllers')

router.post('/transact', postTransact)

router.post('/get_transaction_status', getTransactionStatus)

router.post('/dpo_transact', postTransactDpo)


module.exports = router;