var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'yotuo2003@gmail.com', // enter your email address
        pass: 'incorrect12345'  // enter your visible/encripted password
    }
});

function mailOptions (from, to, subject, text)  {
    return { from: from, to: to, subject: subject, text: text}
}
// var mailOptions = {
//     from: 'yotuo2003@gmail.com',
//     to: receiver,
//     subject: subject,
//     text: message
// };


// transporter.sendMail(mailOptions('yotuo2003@gmail.com', 
// user.email, 'Thank you for registering', 'Message from the AFBR'), function (error, info) {
//   if (error) {
//       console.log(error);
//   } else {
//       console.log('Email was sent successfully: ' + info.response);
//   }
// });


module.exports = {
    transporter,
    mailOptions
}
