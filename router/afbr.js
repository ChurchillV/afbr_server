const express = require('express');
const router = express.Router();

const { getAllDogs, postCreateDog, 
    getOneDog, deleteDog, putUpdateDog, 
    getAllDogsByUser,
    getAllSires,getAllDams, getPedigree, 
    getSearch, return_dog_id, postAddDogImage } = require('../controllers/afbr')
router.get("/", getAllDogs)

router.get("/getdoguser/:id", getAllDogsByUser)


router.get("/sires", getAllSires)

router.get("/dams", getAllDams)

router.post('/', postCreateDog)

router.post('/addImage/:dog_name', postAddDogImage)

router.get('/:id', getOneDog)

router.get('/getbyname/:dog_name', return_dog_id)

router.get('/search/:search_input', getSearch)

router.get('/pedigree/:id', getPedigree)

router.put('/:id', putUpdateDog);

router.delete('/:id', deleteDog)




module.exports = router;