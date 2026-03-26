import { Resend } from "resend";
import dotenv from 'dotenv'
dotenv.config()

const resendApi = process.env.RESEND_API
const resend = new Resend(resendApi);

export const sendEmail = async (userMail) => {
    const { data, error } = await resend.emails.send({
        from: "mail@fahadnawaz.in",
        to: userMail.to,
        subject: userMail.subject,
        html: userMail.html,
    });

    if (error) {
        return console.log(error);
    }

    console.log(data);
};


const data = {
    to: "zaydkhan2127@gmail.com",
    subject: "hulahoo",
    html: "<h1>wasguddd</h1>",
}

sendEmail(data)