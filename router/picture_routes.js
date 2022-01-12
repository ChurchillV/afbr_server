const express = require('express');
const router = express.Router();

const { getAllImages, postImage } = require('../controllers/image_controllers')



router.get('/', getAllImages)

router.post('/', postImage)

module.exports = router;