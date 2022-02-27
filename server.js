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

// db.connect(err => {
//     if (err) {
//         throw err;
//     }
//     console.log("Mysql connected")
// }

// );

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   params: {
//     imageurl: 'https://res.cloudinary.com/daurieb51/image/upload/v1645745790/ped1_ujmspr.jpg',
//     filename: 'sample.jpg'
//   },
//   headers: {
//     'x-rapidapi-host': 'ocrly-image-to-text.p.rapidapi.com',
//     'x-rapidapi-key': '01e6417bc4msh36b1ce844f92736p1dfdc9jsnde9c6aefbc36'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// const formData = new FormData();
// formData.append('image', $('https://res.cloudinary.com/daurieb51/image/upload/v1645745790/ped1_ujmspr.jpg')[0].files[0]);
// $.ajax({
//     method: 'POST',
//     url: 'https://api.api-ninjas.com/v1/imagetotext',
//     data: formData,
//     enctype: 'multipart/form-data',
//     processData: false,
//     contentType: false, 
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR, textStatus, errorThrown) {
//         alert(jqXHR.responseText);
//     }
// });

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});
