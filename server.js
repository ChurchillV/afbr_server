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
app.use("/api/dogs", afbr);
app.use('/', db_routes )

app.use('/api/pictures', upload.single('image'), picture_routes)

app.use('/api/users', user_routes)

app.use('/api/email', email_routes)


// var mailOptions = {
//     from: 'yotuo2003@gmail.com',
//     to: 'takyiotuo.to@gmail.com',
//     subject: 'Message from the African Bully Registry',
//     html: '<h1>Welcome to the African Bully Registry <br>' + 
//          `</h1> Thank you Takyi Otuo for registering with us` + 
//          'Please send the AFBRS email and password to Yaw Otuo, ' +
//          'Contact us for any enquiries' +
//          `<img src='https://res.cloudinary.com/daurieb51/image/upload/v1643934254/bqkxer8jrpi4zmnitk1a.jpg'>`
// };

// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: 'yotuo2003@gmail.com', // enter your email address
//         pass: 'incorrect12345$$'  // enter your visible/encripted password
//     }
// });

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//       console.log(error);
//   } else {
//       console.log('Email was sent successfully: ' + info.response);
//   }
// });

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Server up and running'));

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log("Mysql connected")
}

);




app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});
