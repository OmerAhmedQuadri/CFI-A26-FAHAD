import User from '../models/User.js'
import { sendEmail } from '../services/email.service.js'
import { hashpassword } from '../utils/bcrypt.js'
import { token } from '../utils/tokens.js'

export const registerUser = async (req, res) => {
    try {

        const newUser = req.body
        const password = await hashpassword(req.body.password)

        newUser.password = password

        const emailtoken = token()
        const phonetoken = token()

        newUser.tokens = {
            email: emailtoken,
            phone: phonetoken
        }

        const user = await User.create(newUser)
        res.send({
            success: true,
            message: 'user created successfully',
            data: user
        })

        const emailData = {
            to: newUser.email,
            subject: 'Tasky verification',
            // html: `http://localhost:3000/api/auth/verify/email/${user._id}/${user.tokens.email}`
            html: `<h1>Hello ${user.fullname}</h1>
            <p>Click <a href="http://localhost:3000/api/auth/verify/email/${user._id}/${user.tokens.email}" target="_blank">here</a> to verify your email.</p>`
        }
        await sendEmail(emailData)
        res.send({
            success: true,
            message: 'user created successfully',
            data: user
        })



    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (req, res) => {
    const user = req.user

    if (!user.verified.email) return res.json({
        success: false,
        message: 'Please verify your email before login',
    })

    if (!user.verified.phone) return res.json({
        success: false,
        message: 'Please verify your phone before login',
    })

    const payload = {
        id: user._id,
        email: user.email,
        role: 'user'
    }

    const token = await generateJWTToken(payload)
    // user.jwtToken = token

    res.send({
        success: true,
        message: 'user login successfull',
        data: ({ user, token: token })
    })
}

