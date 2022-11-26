bcrypt = require('bcryptjs')
const db = require('../config/db')
const axios = require('axios')
const url2 = require('../weburl')
const url = url2['url']

const  {dog} = require('../models')
const  {users}  = require('../models')
const {posts} = require('../models')

exports.getAllPosts = (req, res) => {
        posts.findAll()
            .then((posts) =>
            {
                res.send(posts)
            })
            .catch((err) =>
            {
                console.log(err)
            })
    
    
        
}


