// const router = require('express').Router();

// // const helper = require('@sendgrid/mail').mail;
// // const async = require('async');

// // router.post('/signup/send', (req, res, next) => {
// //   async.parallel([
// //     function (callback) {
// //       sendEmail(
// //         callback,
// //         'noreply@lambdaschoolnext.com',
// //         ['labs15teamnext@gmail.com'],
// //         'Subject Line',
// //         'Text Content',
// //         '<p style="font-size: 32px;">HTML Content</p>'
// //       );
// //     }
// //   ], (err, results) => {
// //     res.send({
// //       success: true,
// //       message: 'Emails sent',
// //       successfulEmails: results[0].successfulEmails,
// //       errorEmails: results[0].errorEmails,
// //     });
// //   });
// // });


// // function sendEmail(
// //   parentCallback,
// //   fromEmail,
// //   toEmails,
// //   subject,
// //   textContent,
// //   htmlContent
// // ) {
// //   const errorEmails = [];
// //   const successfulEmails = [];
// //   const sg = require('@sendgrid/mail')(process.env.SENDGRID_API_KEY);
// //   async.parallel([
// //     function (callback) {
// //       // Add to emails
// //       for (let i = 0; i < toEmails.length; i += 1) {
// //         // Add from emails
// //         const senderEmail = new helper.Email(fromEmail);
// //         // Add to email
// //         const toEmail = new helper.Email(toEmails[i]);
// //         // HTML Content
// //         const content = new helper.Content('text/html', htmlContent);
// //         const mail = new helper.Mail(senderEmail, subject, toEmail, content);
// //         const request = sg.emptyRequest({
// //           method: 'POST',
// //           path: '/v3/mail/send',
// //           body: mail.toJSON()
// //         });
// //         sg.API(request, (error, response) => {
// //           console.log('SendGrid');
// //           if (error) {
// //             console.log('Error response received');
// //           }
// //           console.log(response.statusCode);
// //           console.log(response.body);
// //           console.log(response.headers);
// //         });
// //       }
// //       // return
// //       callback(null, true);
// //     }
// //   ], (err, results) => {
// //     console.log('Done');
// //   });
// //   parentCallback(null,
// //     {
// //       successfulEmails,
// //       errorEmails,
// //     });
// // }

// module.exports = router;
