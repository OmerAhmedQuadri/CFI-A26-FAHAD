import Admin from "../models/Admin.js";
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
    if (!data.role || !['admin', 'admin'].includes(data.role)) {
        errors.push({
            field: 'role',
            message: 'Valid role is required'
        })
    }

    return errors
}

export const registerMiddleware = async (req, res, next) => {
    const admin = req.body
    const validate = validateUserRegistrationData(admin)
    if (validate.length != 0) {
        return res.json({
            success: false,
            message: 'Invalid admin registraion data',
            data: validate
        })
    }

    const existing = await Admin.findOne({ "email": admin.email })
    if (existing) {
        return res.json({
            success: false,
            message: 'Admin with email already exists'
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

    const admin = await Admin.findOne({ "email": email })
    if (!admin) {
        return res.json({
            success: false,
            message: 'Admin not found'
        })
    }

    const validatepass = await comparepass(password, admin.password)
    if (!validatepass) {
        return res.json({
            success: false,
            message: 'Invalid password'
        })
    }
    req.admin = admin
    next()
}