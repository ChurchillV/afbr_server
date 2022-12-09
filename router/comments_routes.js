const express = require('express');
const router = express.Router();

const { getAllComments, addComment, removeComment, getComment, updateComment } = require('../controllers/comments.controllers')

//Handling GET requests for all comments
router.get('/', getAllComments)

//Handling POST requests for all comments
router.post('/', addComment)

//Handling DELETE requests for a comment
router.delete('/:id', removeComment)

//Handling GET requests for a comment with a particular parent id
router.get('/:id', getComment)

//Update a comment 
router.put('/:id', updateComment)

module.exports = router;