const nodemailer = require('nodemailer');
const async = require('async');


var sendEmail = function(lead){
    
        nodemailer.createTestAccount((err, account) => {
          if(err){
            console.log('email.js | error creating test account | err',err)
            return 
          } 
            var smtpTransport =nodemailer.createTransport({
            host: 'smtp.sendgrid.net',
            port:587,
            auth: {
                user: 'apikey',
                pass: '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'
            }
          });
          //console.log('sending mail')
          //console.log(email)
            var mailOptions = {
              to: "krmohit1984@gmail.com", //krmohit1984@gmail.com
              from: '"LeLoLoan.com" <no-reply@LeLoLoan.com>',
              subject: 'New Lead',
              text: "heloo",
              html: '<b>Hello Kumar Mohit, </b><br><br> New Lead Details are as folllows : <br><br> Name : '+ lead.name +'<br> Mobile: '+lead.mobile + '<br> Income: '+ lead.income + '<br> Email: '+lead.email +'<br><br><br> Sincerely,<br>  LeLoLoan Team' // html body
            };
            smtpTransport.sendMail(mailOptions, function(err,info) {
              if (err) {
                console.log('email.js | error Sending email to '+ email+' | err')
                console.log(err)
                  return err
              }
              //console.log('Message sent: %s', info.messageId);
              // Preview only available when sending through an Ethereal account
              //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            })
        })
    }
    
    exports.sendEmail = sendEmail
    