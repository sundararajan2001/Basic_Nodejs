// var nodemailer = require('nodemailer');

import nodemailer from "nodemailer"

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sundararajan@xponential.digital',
    pass: 'fuoefbkbkblkasgr'
  }
});

var mailOptions = {
  from: 'sundararajan@xponential.digital',
  to: 'v.sundararajan555@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hi I am sundararajan!, This is the mail sent by using nodemailer in NodeJs'
};
console.log('Mail sent successfully');
transporter.sendMail(mailOptions);


// // Twilio conector

// const accountSid = 'ACceb3894092576eedb7373024ad3c2c04';
// const authToken = '0ea7af415cb71ff29cde80e2a6b4f14d';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'Hi this is sundararajan! this message is sent by twilio in Nodejs',
//      from: ' +18655035095',
//      to: '+91 7448654349'
//    })
//   .then(message => console.log(message.sid));

