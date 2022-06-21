// server.js

require("dotenv").config();
const express = require('express');
const afbr = require('./router/afbr')

const db_routes = require('./router/db_routes')
const user_routes = require('./router/user_routes')
const app = express()
const cors = require('cors');
const db = require('./config/db');
const picture_routes = require('./router/picture_routes')
const email_routes = require('./router/email_routes')
const dpo_routes = require('./router/dpo_routes')
var parseString = require('xml2js').parseString;

const axios = require('axios')
const mysql = require('mysql')
const multer = require('multer')
var nodemailer = require('nodemailer')
var mysqlApostrophe = require("mysql-apostrophe")
var bodyParser = require("body-parser")

app.use(express.json({ extended: false }));
app.use('/public', express.static('public'));
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mysqlApostrophe);



app.use("/api/dogs", afbr);
app.use('/', db_routes)
app.use('/api/users', user_routes)
app.use('/api/dpo', dpo_routes)


app.use('/api/email', email_routes)
const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => res.send('Server up and running'));
var sgTransport = require('nodemailer-sendgrid-transport');
const { parse } = require("dotenv");

app.listen(PORT, () => {
    console.log(`server i s running on http://localhost:${PORT}`)
});

module.exports = app;