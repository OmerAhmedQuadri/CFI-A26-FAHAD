import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
const db = process.env.URL

export const dbconnect = async () => {
    try {

        await mongoose.connect(db)
        console.log('DB CONNECT SUCCESS');
        
    } catch (error) {
        console.log(error);
    }
}