import bcrypt from 'bcrypt'

const pass = 'codeforindia'

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 14)
    
}

console.log(await hashPassword(pass));

export const comparePassword = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword)
    return match
}

console.log(await comparePassword('codeforindia', `$2b$10$pFjB5nXKaTof58Da8XpeEOYfm6lte9tv8FLyQFbcsBX.R4ZfLEYAW`));