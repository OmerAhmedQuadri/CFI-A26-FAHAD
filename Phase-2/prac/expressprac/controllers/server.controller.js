import { User } from "../models/Server.js"

export const showUsers = async (req, res) => {
    const data = await User.find()
    res.send(data)
}