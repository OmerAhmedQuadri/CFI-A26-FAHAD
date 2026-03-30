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
    try {
        const user = req.body;

        if (!user.fullname || user.fullname.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Full name must be at least 3 characters",
            });
        }

        if (!user.email || !user.email.includes("@")) {
            return res.status(400).json({
                success: false,
                message: "Valid email is required",
            });
        }

        if (!user.phone || user.phone.length < 10) {
            return res.status(400).json({
                success: false,
                message: "Valid phone number is required",
            });
        }

        if (!user.password || user.password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters",
            });
        }

        req.userData = {
            fullname: user.fullname.trim(),
            email: user.email.toLowerCase().trim(),
            phone: user.phone.trim(),
            password: user.password,
            role: user.role || "user",
        };

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in registration validation",
            error: error.message,
        });
    }
};

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