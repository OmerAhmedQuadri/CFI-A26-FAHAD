import User from "../models/User.js";
import { comparepass } from "../utils/bcrypt.js";

export const validateUserRegistrationData = (data) => {
    const errors = []
    if (!data.email) {
        errors.push({
            field: 'email',
            message: 'Valid email address is required'
        })
    }
    if (!data.phone) {
        errors.push({
            field: 'phone',
            message: 'Valid phone number is required'
        })
    }
    if (!data.fullname) {
        errors.push({
            field: 'fullname',
            message: 'Valid full name is required'
        })
    }
    if (!data.password || data.password.length < 3) {
        errors.push({
            field: 'password',
            message: 'Valid password is required'
        })
    }
    if (!data.role || !['user', 'admin'].includes(data.role)) {
        errors.push({
            field: 'role',
            message: 'Valid role is required'
        })
    }

    return errors
}

export const registerMiddleware = async (req, res, next) => {
    const user = req.body
    const validate = validateUserRegistrationData(user)
    if (validate.length != 0) {
        return res.json({
            success: false,
            message: 'Invalid user registraion data',
            data: validate
        })
    }

    const existing = await User.findOne({ "email": user.email })
    if (existing) {
        return res.json({
            success: false,
            message: 'User with email already exists'
        })
    }

    next()
}

export const loginMiddleware = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.json({
            success: false,
            message: 'valid email and password is required to login'
        })
    }

    const user = await User.findOne({ "email": email })
    if (!user) {
        return res.json({
            success: false,
            message: 'User not found'
        })
    }

    const validatepass = await comparepass(password, user.password)
    if (!validatepass) {
        return res.json({
            success: false,
            message: 'Invalid password'
        })
    }
    req.user = user
    next()
}