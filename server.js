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
const axios = require('axios')    
const mysql = require('mysql')
const multer = require('multer')

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
