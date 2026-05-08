import User from "../models/user.model.js"
import { hashPassword } from "../utils/bcrypt.utils.js"
import { generateOtp } from "../utils/otp.utils.js"
import { sendOtp } from "./email.service.js"

export const createUser = async ({ fullname, email, password }) => {
    password = await hashPassword(password)
    const user = new User({ fullname, email, password })
    user.authTokens.userRegistration.otp = generateOtp()
    user.authTokens.userRegistration.expires = new Date(Date.now() + 1 * 60 * 1000).toISOString()
    await user.save()

    await sendOtp(email,user.authTokens.userRegistration.otp)
    return user
}


export const findUserByEmail = async (email) => {
    const user = await User.findOne({ email })
    return user
}

export const findUserByEmailAndDelete = async (email) => {
    const user = await User.findOneAndDelete({ email })
    return user
}

export const findUserById = async (id) => {
    const user = await User.findById(id)
    return user
}