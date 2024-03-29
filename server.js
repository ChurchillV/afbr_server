// server.js
require("dotenv").config();
const express = require('express');
const fs = require('fs')
const path = require('path')
const afbr = require('./router/dog')
const db_routes = require('./router/db_routes')
const user_routes = require('./router/user_routes')
const models = require('./models')
const app = express()
const cors = require('cors');
const db = require('./config/db');
const picture_routes = require('./router/picture_routes')
const email_routes = require('./router/email_routes')
const expresspaygh_routes = require('./router/expresspaygh_routes')
const post_routes  = require('./router/post_routes')
const comments_routes = require('./router/comments_routes')

var nodemailer = require('nodemailer')
var mysqlApostrophe = require("mysql-apostrophe")
var bodyParser = require("body-parser");
const { createPost } = require("./controllers/post.controllers");

app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mysqlApostrophe);


//Routes for handling specific requests
app.use("/api/dogs", afbr);
app.use('/', db_routes)
app.use('/api/users', user_routes)
app.use('/api/expresspaygh', expresspaygh_routes)
app.use('/api/email', email_routes)
app.use('/api/posts', post_routes )
app.use('/api/comments', comments_routes)


const PORT = process.env.PORT || 8000;


app.get('', (req, res) => res.send('Server up and running'));



models.sequelize.sync().then((req)=> {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
    });
})

module.exports = app;