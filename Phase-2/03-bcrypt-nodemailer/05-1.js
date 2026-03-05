import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function sendEmail({ to, otp }) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "faddukhan3@gmail.com",
                pass: process.env.apppass
            }
        });

        const mailOptions = {
            from: "faddukhan3@gmail.com",
            to,
            subject: 'Tasky',
            text: `Your OTP is ${otp}`,
            html: `
        <h2>Please find OTP for Tasky below!</h2>
        <p><b>OTP:</b> ${otp}</p>
      `
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent successfully!");
        console.log("Message ID:", info.messageId);

        return { success: true, messageId: info.messageId };

    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: error.message };
    }
}

// sendEmail({ to: 'faddukhan2@gmail.com', otp: 222222 })