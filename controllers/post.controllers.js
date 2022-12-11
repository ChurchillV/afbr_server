bcrypt = require('bcryptjs')
const db = require('../config/db')
const axios = require('axios')
const url2 = require('../weburl')
const url = url2['url']
const express = require('express')



const { dog } = require('../models')
const { users } = require('../models')
const { posts } = require('../models')
const { post, data } = require('jquery')


exports.getAllPosts = (req, res) =>
{
    posts.findAll()
        .then((posts) =>
        {
            res.send(posts)
        })
        .catch((err) =>
        {
            console.log(err)
        })
};

//Get one post
exports.getOnePost = (req, res) =>
{
    const id = req.params.id
    posts.findByPk(id)
        .then(data =>
        {
            if (data)
            {
                res.send(data);
            }
            else
            {
                res.status(404).send({
                    message: `Cannot find post with the id ${id}`
                })
            }
        })
        .catch(err =>
        {
            res.send({
                message: `Error finding the post with id ${id}`
            })
        })
}

//Create a new post
exports.createPost = async (req, res) =>
{
    await users.findOne({
        attributes: [
            'id'
        ],
        where: {
            uid: req.body.user.uid
        }
    })
        .then((data) =>
        {
            console.log(data)
            posts.create(
                {
                content: req.body.content,
                timestamp: new Date(),
                user: data.dataValues.id,
                likes: 0
            }
            )
                .then(data =>
                {
                    res.send("Post created successfully");
                })
                .catch(err =>
                {
                    console.log(err);
                })
        })
}

//Delete a post
exports.deletePost = (req, res) =>
{
    const id = req.params.id;

    posts.destroy({
        where: { id: id }
    })

        .then(data =>
        {
            if (data)
            {
                res.send({
                    message: "Post was deleted successfully"
                });
            }
            else
            {
                res.status(404).send({
                    message: `Cannot find/ delete post with the id ${id}`
                })
            }
        })
        .catch(err => console.log(err))
}


//Update a post 
exports.updatePost = (req, res) =>
{
    const id = req.params.id;

    posts.update(req.body, {
        where: { id: id }
    })

        .then(data =>
        {
            if (data)
            {

                res.send({
                    message: "Post was updated successfully"
                });
            } else
            {
                res.send({
                    message: `Cannot update post with id ${id}. Try again`
                });
            }
        })
        .catch(err => console.log(err))
}

exports.likeAPost = (req, res) =>
{
    const id = req.params.id
    posts.findByPk(id)
        .then((post) =>
        {
            post.increment('likes', { by: 1 })
            res.send({
                message: `Post ${post.content} liked `
            })
        })
        .catch(err => console.log(err))

    // posts.update(
    //     { likes: likes+1},
    //     { where: {id: id}}
    // )
    // .then(data => {
    //     if (data) {
    //         res.send({
    //             message: "Post liked"
    //         })
    //     }
    //     else {
    //         res.send({
    //             message: "Couldnt update post"
    //         })
    //     }
    // })
    // .catch(err => console.log(err))


}