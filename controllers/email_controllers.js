// controler/todo.js

const Dogs = require('../models/afbr');
const db = require('../config/db')
var nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()




exports.postSendRegisterEmail = (req, res) => {
    var sgTransport = require('nodemailer-sendgrid-transport');

    var client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: process.env.pass
        }
      });
    
    // var client = nodemailer.createTransport(sgTransport(options));
    
    var email = {
      from: 'africanbullyregistry@gmail.com',
      to: 'yotuo2003@gmail.com',
      subject: 'Thank you for registering with the African Bully Registry',
      text: 'Welcome to the Commut=nity',
      html: '<b>TThe AFBR</b>'
      
    };
    
    client.sendMail(email, function(err, info){
        if (err ){
          console.log(err);
        }
        else {
          console.log('Message sent: ' + info.response);
          res.send('email sent')
        }
    });
    
};

exports.postSendRegisterDogEmail = (req, res) => {
    var sgTransport = require('nodemailer-sendgrid-transport');

    var client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: process.env.pass
        }
      });
    
    // var client = nodemailer.createTransport(sgTransport(options));
    
    var email1 = {
      from: 'africanbullyregistry@gmail.com',
      to: req.body.user.email,
      subject: 'Dog registered',
      text: 'Dear, your dog has been registered',
      html: `${req.body.user.displayName}, thank you for registering ${req.body.dog.name} with the African Bully Registry`,
      
    }

    var email2 = {
        from: 'africanbullyregistry@gmail.com',
        to: 'yotuo2003@gmail.com',
        subject: 'Dog registered',
        text: 'Dear, your dog has been registered',
        html: `${req.body.user.displayName}, thank you for registering ${req.body.dog.name} with the African Bully Registry`,
        
      }

    var email3 = {
        from: 'africanbullyregistry@gmail.com',
        to: 'africanbullyregistry@gmail.com',
        subject: 'Dog registered',
        text: 'Dear, your dog has been registered',
        html: `${req.body.user.displayName}, thank you for registering ${req.body.dog.name} with the African Bully Registry`,
        
      }

    var email4 = {
        from: 'africanbullyregistry@gmail.com',
        to: 'takyiotuo.to@gmail.com',
        subject: 'Dog registered',
        text: 'Dear, your dog has been registered',
        html: `${req.body.user.displayName}, thank you for registering ${req.body.dog.name} with the African Bully Registry`,
        
      }
    
    sendAMail = (email_message) => {
        client.sendMail(email_message, function(err, info){
            if (err ){
              console.log(err);
            }
            else {
              console.log('Message sent: ' + info.response);
              res.send('email sent')
            }
        });
    }

    sendAMail(email1)
    sendAMail(email2)
    sendAMail(email3)
    sendAMail(email4)




    
};

exports.trial = (req, res) => {
    var sgTransport = require('nodemailer-sendgrid-transport');

    var client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: process.env.pass
        }
      });
    
    // var client = nodemailer.createTransport(sgTransport(options));
    
    var email = {
      from: 'africanbullyregistry@gmail.com',
      to: 'yotuo2003@gmail.com',
      subject: 'Hello',
      text: 'Hello send grif is the best',
      html: '<b>Hello world</b>'
      
    };
    
    client.sendMail(email, function(err, info){
        if (err ){
          console.log(err);
        }
        else {
          console.log('Message sent: ' + info.response);
          res.send('email sent')
        }
    });
}
       

exports.postLitter = (req, res) => {
  var sgTransport = require('nodemailer-sendgrid-transport');


  var client = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: process.env.pass
      }
    });
  
  // var client = nodemailer.createTransport(sgTransport(options));
  
  var email1 = {
    from: 'africanbullyregistry@gmail.com',
    to: req.body.user.email,
    subject: 'Litter Registration',
    text: 'Dear, your dog has been registered',
    html: `${req.body.user.displayName}, you have successfully completed a litter registration form`+ 
      ` with the African Bully Registry`+
      `<img src='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${req.body.public_id}.png'}/>`
          
  }


  var email2 = {
      from: 'africanbullyregistry@gmail.com',
      to: 'yotuo2003@gmail.com',
      subject: 'Litter Registration',
      text: 'Dear, your dog has been registered',
      html: `${req.body.user.displayName}, you have successfully completed a litter registration form`+ 
      ` with the African Bully Registry`+
      `<img src='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${req.body.public_id}.png'}/>`
      
      
    }

  var email3 = {
      from: 'africanbullyregistry@gmail.com',
      to: 'africanbullyregistry@gmail.com',
      subject: 'Litter Registration',
      text: 'Dear, your dog has been registered',
      html: `${req.body.user.displayName}, you have successfully completed a litter registration form`+ 
      ` with the African Bully Registry`+
      `<img src='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${req.body.public_id}.png'}/>`
      
    }

  var email4 = {
      from: 'africanbullyregistry@gmail.com',
      to: 'takyiotuo.to@gmail.com',
      subject: 'Litter Registration',
      text: 'Dear, your dog has been registered',
      html: `${req.body.user.displayName}, you have successfully completed a litter registration form`+ 
      ` with the African Bully Registry`+
      `<img src='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${req.body.public_id}.png'}/>`
      
    }
  
  sendAMail = (email_message) => {
      client.sendMail(email_message, function(err, info){
          if (err ){
            console.log(err);
          }
          else {
            console.log('Message sent: ' + info.response);
            res.send('email sent')
          }
      });
  }

  sendAMail(email1)
  sendAMail(email2)
  sendAMail(email3)
  sendAMail(email4)




  
};

