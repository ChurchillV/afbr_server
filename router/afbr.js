const express = require('express');
const router = express.Router();

const { getAllDogs, postCreateDog, getOneDog, deleteDog, putUpdateDog, getAllSires,getAllDams, getPedigree, return_dog_id } = require('../controllers/afbr')
router.get("/", getAllDogs)

router.get("/sires", getAllSires)

router.get("/dams", getAllDams)

router.post('/', postCreateDog)

router.get('/:id', getOneDog)

router.get('/getbyname/:dog_name', return_dog_id)

router.get('/pedigree/:id', getPedigree)

router.put('/:id', putUpdateDog);

router.delete('/:id', deleteDog)


module.exports = router;