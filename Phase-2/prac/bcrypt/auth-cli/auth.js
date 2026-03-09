import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
    let hash = await bcrypt.hash(password, 10)
    return hash
}

export const checkPassword = async (password, hashPassword) => {
    let check = await bcrypt.compare(password, hashPassword)
    return check
}

