//send email
//send otp

import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API);

export async function sendEmail(userData) {
    const { data, error } = await resend.emails.send({
        from: 'urlShortener@fahadnawaz.in',
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

export const sendOtp = async (email, otp) => {
    const html = `<p>OTP: ${otp}</p>`
    const text = `OTP : ${otp}`
    await sendEmail({
        to: email,
        subject: 'otp',
        html: html,
        text: text
    })
}