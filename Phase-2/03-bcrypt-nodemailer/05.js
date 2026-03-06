// import nodemailer from 'nodemailer'

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'faddukhan3@gmail.com',
//         pass: 'fwmv lucp fmol tjwi'
//     }
// })

// const mailOptions = {
//     from: 'faddukhan3@gmail.com',
//     to: 'tahaxli003@gmail.com',
//     subject: 'testing node mailer',
//     text: 'testing the node mailer for the first time'
// }

// await transporter.sendMail(mailOptions)
// console.log('email sent');


import nodemailer from 'nodemailer'
import rs from 'readline-sync'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'faddukhan3@gmail.com',
        pass: process.env.apppass
    }
})

let subject = rs.question('ENTER SUBJECT: ')
let text = rs.question('ENTER THE MESSAGE YOU WANNA SEND: ')

const mail = {
    from: 'faddukhan3@gmail.com',
    to: 'tahaxli003@gmail.com',
    subject: subject,
    text: text
}

await transporter.sendMail(mail)