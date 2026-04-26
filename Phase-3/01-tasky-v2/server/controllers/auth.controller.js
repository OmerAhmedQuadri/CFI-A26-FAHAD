import Admin from "../models/Admin.js";
import User from "../models/User.js";

export const userVerifyEmail = async (req, res) => {
    try {

        const emailToken = req.params.token
        const user = await User.findOne({
            "tokens.email": emailToken
        })

        if (!user) return res.json({
            success: false,
            message: 'Invalid verification token',
        })

        if (user.verified.email) return res.json({
            success: false,
            message: 'Email already verified',
        })

        user.verified.email = true
        await user.save()

        res.json({
            success: true,
            message: 'email verified successfully',
            data: user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            error: error
        })
    }
}
export const userVerifyPhone = async (req, res) => {
    try {

        const phoneToken = req.params.token
        const user = await User.findOne({
            "tokens.phone": phoneToken
        })

        if (!user) return res.json({
            success: false,
            message: 'Invalid verification token',
        })

        if (user.verified.phone) return res.json({
            success: false,
            message: 'phone already verified',
        })

        user.verified.phone = true
        await user.save()

        res.json({
            success: true,
            message: 'phone verified successfully',
            data: user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            error: error
        })
    }
}
export const adminVerifyEmail = async (req, res) => {
    try {

        const emailToken = req.params.token
        const admin = await Admin.findOne({
            "tokens.email": emailToken
        })

        if (!admin) return res.json({
            success: false,
            message: 'Invalid verification token',
        })

        if (admin.verified.email) return res.json({
            success: false,
            message: 'Email already verified',
        })

        admin.verified.email = true
        await admin.save()

        res.json({
            success: true,
            message: 'email verified successfully',
            data: admin
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            error: error
        })
    }
}
export const adminVerifyPhone = async (req, res) => {
    try {

        const phoneToken = req.params.token
        const admin = await Admin.findOne({
            "tokens.phone": phoneToken
        })
        

        if (!admin) return res.json({
            success: false,
            message: 'Invalid verification token',
        })

        if (admin.verified.phone) return res.json({
            success: false,
            message: 'phone already verified',
        })

        admin.verified.phone = true
        await admin.save()

        res.json({
            success: true,
            message: 'phone verified successfully',
            data: admin
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            error: error
        })
    }
}