// controler/todo.js

const Dogs = require('../models/afbr');
const db = require('../config/db')
var nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()
const ejs = require("ejs");


var sgTransport = require('nodemailer-sendgrid-transport');


var client = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.pass
  }
});


exports.postSendRegisterEmail = (req, res) => {
  


  console.log('req.body',req.body)
  function sendAMail(destination) {
    ejs.renderFile(__dirname + "/user_registered.ejs",
      { username: req.body.username }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var mainOptions = {
            from: 'africanbullyregistry@gmail.com',
            to: destination,
            subject: 'New signup',
            html: data
          };
          // console.log(data)
          client.sendMail(mainOptions, function (err, info) {
            if (err) {
              res.json({
                msg: 'fail'
              })
            } else {
              res.json({
                msg: 'success'
              })
            }
          });
        }
      });
  }

  sendAMail('africanbullyregistry@gmail.com')

  sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  sendAMail(req.body.email)

 
 
};

exports.postSendRegisterDogEmail = (req, res) => {
  

 function sendAMail(destination) {
    ejs.renderFile(__dirname + "/dog_registered.ejs",
      { username: req.body.user.displayName , dog:req.body.dog}, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var mainOptions = {
            from: 'africanbullyregistry@gmail.com',
            to: destination,
            subject: 'Dog Registered',
            html: data
          };
          // console.log(data)
          client.sendMail(mainOptions, function (err, info) {
            if (err) {
              console.log('fail')
            } else {
             console.log('success')
            }
          });
        }
      });
  }


  sendAMail('africanbullyregistry@gmail.com')

  sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  sendAMail(req.body.user.email)


};

exports.testcss = (req, res) => {
  res.render('pages/dog_registered.ejs', {username:'Chairman', dog:{name:'douglas'}})
}

exports.postLitter = (req, res) => {
 
  let image = 'https://res.cloudinary.com/daurieb51/image/upload/v1642082142/' + req.body.public_id + '.png'


  function sendAMail(destination) {
    ejs.renderFile(__dirname + "/litter.ejs",
      { username: req.body.user.displayName, image: image }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var mainOptions = {
            from: 'africanbullyregistry@gmail.com',
            to: destination,
            subject: 'Litter Registered',
            html: data
          };
          // console.log(data)
          client.sendMail(mainOptions, function (err, info) {
            if (err) {
              res.json({
                msg: 'fail'
              })
            } else {
              res.json({
                msg: 'success'
              })
            }
          });
        }
      });
  }

  sendAMail('africanbullyregistry@gmail.com')

  sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  sendAMail(req.body.user.email)

  

};

exports.postPedigree = (req, res) => {

  let image = 'https://res.cloudinary.com/daurieb51/image/upload/v1642082142/' + req.body.public_id + '.png'


  function sendAMail(destination) {
    ejs.renderFile(__dirname + "/pedigree.ejs",
      { username: req.body.user.displayName, image: image }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var mainOptions = {
            from: 'africanbullyregistry@gmail.com',
            to: destination,
            subject: 'Pedigree Uploaded',
            html: data
          };
          // console.log(data)
          client.sendMail(mainOptions, function (err, info) {
            if (err) {
              res.json({
                msg: 'fail'
              })
            } else {
              res.json({
                msg: 'success'
              })
            }
          });
        }
      });
  }

  sendAMail('africanbullyregistry@gmail.com')

  sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  sendAMail(req.body.user.email)
}








  ;