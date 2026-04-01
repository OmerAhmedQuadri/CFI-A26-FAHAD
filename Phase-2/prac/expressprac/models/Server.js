import mongoose from "mongoose";

const dbSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    }
})

export const User = mongoose.model('User', dbSchema)