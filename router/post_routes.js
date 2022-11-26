const express = require('express');
const router = express.Router();

const { getAllPosts, createPost, deletePost, updatePost, getOnePost } = require('../controllers/post.controllers')

//Get all Posts
router.get('/', getAllPosts)
//Get one post
router.get('/:id', getOnePost)
//Create a new post
router.post('/', createPost)


//Delete a post
router.delete('/:id', deletePost)

//Update a post
router.put('/:id', updatePost)

//please add an endpoint to add a like to a post

// please implement a similar CRUD endpoint for comments too

// all the best bro... you got this :)



module.exports = router;