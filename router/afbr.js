const express = require('express');
const router = express.Router();

const { getAllDogs, postCreateDog, 
    getOneDog, deleteDog, putUpdateDog, 
    getAllDogsByUser,
    getAllSires,getAllDams, getPedigree, 
    getSearch, return_dog_id, postAddDogImage, setHasBeenPaidFor, setTokenAndOrderId } = require('../controllers/afbr')

const { postCreateDogTemp , verifyDogPayment, sendToPermanentDb} = require('../controllers/afbr2')
router.get("/", getAllDogs)

router.get("/getdoguser/:id", getAllDogsByUser)


router.get("/sires", getAllSires)

router.get("/dams", getAllDams)

router.post('/', postCreateDog)

router.post('/temporal', postCreateDogTemp)

router.post('/dog_verification', verifyDogPayment)

router.post('/has_paid', setHasBeenPaidFor)

router.post('/set_token_and_order_id', setTokenAndOrderId)

router.post('/addImage/:dog_name', postAddDogImage)

router.get('/:id', getOneDog)

router.get('/getbyname/:dog_name', return_dog_id)

router.get('/search/:search_input', getSearch)

router.get('/pedigree/:id', getPedigree)

router.put('/:id', putUpdateDog);

router.delete('/:id', deleteDog)




module.exports = router;