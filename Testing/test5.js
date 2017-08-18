// Tutorial Link - https://www.w3schools.com/nodejs/nodejs_email.asp

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'johnjameshellrung@gmail.com',
    pass: 'Natioh22'
  }
});

var mailOptions = {
  from: 'johnjameshellrung@gmail.com',
  to: 'johnhellrung@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});