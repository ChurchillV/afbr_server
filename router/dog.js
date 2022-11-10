const express = require('express');
const router = express.Router();

const { getAllDogs, postCreateDog, 
    getOneDog, deleteDog, putUpdateDog, 
    getAllDogsByUser,
    
    getSearch, setHasBeenPaidFor, setTokenAndOrderId } = require('../controllers/dog.controllers')

const {
    getPedigree
} = require('../controllers/dog.controllers2.js')
router.get("/", getAllDogs)

router.get("/getdoguser/:id", getAllDogsByUser)





router.post('/', postCreateDog)

router.post('/has_paid', setHasBeenPaidFor)

router.post('/set_token_and_order_id', setTokenAndOrderId)

router.get('/:id', getOneDog)


router.get('/search/:search_input', getSearch)

router.get('/pedigree/:id', getPedigree)

router.put('/:id', putUpdateDog);

router.delete('/:id', deleteDog)




module.exports = router;