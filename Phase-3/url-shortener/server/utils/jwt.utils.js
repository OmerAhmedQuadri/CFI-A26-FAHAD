import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const generateJwtToken = (payload) => {
    const secret = process.env.JWT_SECRET
    const expiry = process.env.JWT_EXPIRY

    return jwt.sign({ data: payload }, secret, { expiresIn: expiry })
}