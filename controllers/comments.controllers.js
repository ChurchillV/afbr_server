bcrypt = require('bcryptjs')
const db = require('../config/db')
const axios = require('axios')
const url2 = require('../weburl')
const url = url2['url']
const express = require('express')

const  {comments} = require('../models')



//Get all comments
exports.getAllComments = (req,res) => {
   comments.findAll()
      .then((comments) =>
      {
         res.send(comments)
      })
      .catch((err) =>
      {
        console.log(err)
         })
      }
   
//Create a comment
exports.addComment = (req,res) => {

   const newComment = {
      content: req.body.content,
      timestamp:  new Date(),
      user: req.body.user,
      likes: req.body.likes
   };
   comments.create(newComment) 
      .then(comment => {
         res.send("Comment added successfully");
      })
      .catch(error => {
         console.log(error);
      })
} 

//Delete a comment 
exports.removeComment = (req,res) => {

   const id = req.params.id

   comments.destroy({
      where: {id : id}
   })
      .then(comment => {
         res.send("Comment deleted successfully");
      })
      .catch(error => console.log(error))
   }

//Get a particular comment 
exports.getComment = (req,res) => {
   const id = req.params.id

   comments.findByPk(id)
   .then(data => {
      if(data)
      {
         res.send(data)
      }
      else
      {
         res.status(404).send({
            message: `Could not find comment with id ${id}`
         })
      }
   })
   .catch(err => {
      console.log(err)
   } )
}

//Update a comment
exports.updateComment = (req,res) => {
   const id = req.params.id;

   comments.update(req.body, {
       where: {id: id}
   })
       .then(data => {
           if (data) {
               res.send({
                   message: "Comment was updated successfully"
               });
           } else{
               res.send({
                   message: `Could not update comment with id ${id}. Try again`
               });
           }
       })
       .catch(err => console.log(err))
}
