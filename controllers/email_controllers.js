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
  



  function sendAMail(destination) {
    ejs.renderFile(__dirname + "/user_registered.ejs",
      { username: req.body.user.username }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var mainOptions = {
            from: 'africanbullyregistry@gmail.com',
            to: destination,
            subject: 'Pedigree Uploaded',
            html: data
          };
          console.log(data)
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


  sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  sendAMail(req.body.user.email)

  // var email1 = {
  //   from: 'africanbullyregistry@gmail.com',
  //   to: req.body.user.email,
  //   subject: 'New Sign Up',
  //   text: 'Dear, your dog has been registered',
  //   html: `${req.body.user.username}, thank you for signing up with the African Bully Registry`,

  // }

 
};

exports.postSendRegisterDogEmail = (req, res) => {
  

  ejs.renderFile(__dirname + "/dog_registered.ejs", { username: req.body.displayName,
  dog: req.body.dog }, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      var mainOptions = {
        from: 'africanbullyregistry@gmail.com',
        to: email,
        subject: 'Dog registered',
        html: data
      };
      //console.log("html data ======================>", mainOptions.html);

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


    
  sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  sendAMail(req.body.user.email)


};

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
            subject: 'Pedigree Uploaded',
            html: data
          };
          console.log(data)
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


  sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  sendAMail(req.body.user.email)

  // var email1 = {
  //   from: 'africanbullyregistry@gmail.com',
  //   to: req.body.user.email,
  //   subject: 'Litter Registration',
  //   text: 'Dear, your dog has been registered',
  //   html: `${req.body.user.displayName}, you have successfully completed a litter registration form` +
  //     ` with the African Bully Registry` +
  //     `<img src='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${req.body.public_id}.png'}/>`

  // }


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
          console.log(data)
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


  sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  sendAMail(req.body.user.email)
}


exports.contactUs = (req, res) => {

  console.log(req.body)

  function sendAMail(destination) {
    ejs.renderFile(__dirname + "/contact.ejs",
      { message: req.body.message }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var mainOptions = {
            from: req.body.from_email,
            to: destination,
            subject: 'Contact Us',
            html: data
          };
          console.log(data)
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


  // sendAMail('takyiotuo.to@gmail.com')
  sendAMail('yotuo2003@gmail.com')
  // sendAMail(req.body.user.email)
}






  ;