import { User } from "../models/Server.js";

export const middlewareserver = (req, res, next) => {
    console.log('hello');
    next()
}

export const showUserMiddleware = async (req, res, next) => {
    const data = await User.find()

    if(data.length == 0){
        return res.send('no user available')
    }

    next()
}