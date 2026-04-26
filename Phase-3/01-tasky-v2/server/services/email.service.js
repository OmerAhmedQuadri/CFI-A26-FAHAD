import { Resend } from 'resend';
import dotenv from 'dotenv'

dotenv.config()
const resend = new Resend(process.env.RESEND_API);

export async function sendEmail(userData) {
    const { data, error } = await resend.emails.send({
        from: 'tasky@fahadnawaz.in',
        to: userData.to,
        subject: userData.subject,
        html: userData.html,
        text: userData.text,
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}