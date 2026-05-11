import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    longUrl: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true })

export const Url = mongoose.model('Url', urlSchema)