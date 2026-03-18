import bcrypt from 'bcrypt'
import dontenv from 'dotenv'
dontenv.config()

const salt = process.env.SALT_ROUNDS

export const hashpassword = async (password) => {
    const hashed = await bcrypt.hash(password, salt)
    return hashed
}

export const comparepass = async (password, hashpassword) => {
    const compared = await bcrypt.compare(password, hashpassword)
    return compared
}