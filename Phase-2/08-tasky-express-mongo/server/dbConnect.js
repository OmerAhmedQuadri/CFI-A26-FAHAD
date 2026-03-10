import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const db = process.env.MONGO_URL

export const dbConnect = async () => {
    try {
        await mongoose.connect(db)
        console.log(`DATABASE CONNECTED SUCESSFULLY`);
    } catch (error) {
        console.log(`FAILED TO CONNECT `);
        console.log(error);
    }
}

