import Admin from "../models/Admin.js"
import { hashpassword } from "../utils/bcrypt.js"
import { token } from "../utils/tokens.js"

export const registerAdmin = async (req, res) => {
    const newAdmin = req.body
    newAdmin.password = await hashpassword(req.body.password)

    const emailToken = token()
    const phoneToken = token()

    newAdmin.tokens = {
        email: emailToken,
        phone: phoneToken
    }

    const admin = Admin.create(newAdmin)
    res.json({
        success: true,
        message: 'admin created successfully',
        data: admin
    })

}

export const loginAdmin = async (req, res) => {
    const admin = req.admin

    if (!admin.verified.email) return res.json({
        success: false,
        message: 'Please verify your email before login',
    })

    if (!admin.verified.phone) return res.json({
        success: false,
        message: 'Please verify your phone before login',
    })

    res.json({
        success: true,
        message: 'admin login successfull',
        data: admin
    })


}