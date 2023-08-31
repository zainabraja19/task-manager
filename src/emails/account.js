const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zraja@argusoft.com',
        pass: 'Zainab@2120'
    }
});

//   var mailOptions = {
//     from: 'zraja@argusoft.com',
//     to: 'zraja@argusoft.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };

//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

const sendWelcomeEmail = (email, name) => {
    var mailOptions = {
        from: 'zraja@argusoft.com',
        to: email,
        subject: 'Thanks for joining!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app!`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const sendCancellationEmail = (email, name)=>{
    var mailOptions = {
        from: 'zraja@argusoft.com',
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Hope to see you back soon.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}