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

const axios = require('axios')    
const mysql = require('mysql')
const multer = require('multer')
var nodemailer = require('nodemailer')
var mysqlApostrophe = require("mysql-apostrophe")
var bodyParser = require("body-parser")

// var transporter = require('./emails')
// var mailOptions = require('./emails')

const storage = multer.diskStorage({
    destination: (req, file, cb) => (
        cb(null, 'images')
    ),
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, req.body.id)
    
    }
})
  
const upload = multer({storage: storage})

app.use(express.json({extended: false}));
app.use(cors({origin:true, credentials: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(mysqlApostrophe);



app.use("/api/dogs", afbr);
app.use('/', db_routes )

app.use('/api/pictures', upload.single('image'), picture_routes)

app.use('/api/users', user_routes)

app.use('/api/email', email_routes)




const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Server up and running'));
var sgTransport = require('nodemailer-sendgrid-transport');


// var client = nodemailer.createTransport({
//     service: 'SendGrid',
//     auth: {
//       user: 'apikey',
// }
//   });

// // var client = nodemailer.createTransport(sgTransport(options));

// var email = {
//   from: 'africanbullyregistry@gmail.com',
//   to: 'yotuo2003@gmail.com',
//   subject: 'Hello',
//   text: 'Hello world',
//   html: '<b>Hello world</b>'
  
// };

// client.sendMail(email, function(err, info){
//     if (err ){
//       console.log(err);
//     }
//     else {
//       console.log('Message sent: ' + info.response);
//     }
// });

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});
