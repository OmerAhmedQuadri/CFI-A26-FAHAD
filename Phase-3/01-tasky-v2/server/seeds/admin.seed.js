import Admin from "../models/Admin.js";
import { hashpassword} from '../utils/bcrypt.js'
import { token } from "../utils/tokens.js";

const seedAdmin = async () => {
    try {
        const existingAdmin = await Admin.findOne()
        if (existingAdmin) {
            console.log('Admin already exists!');
            return
        }
        const adminData = {
            fullname: 'Admin',
            email: 'admin@tasky.com',
            password: 'Admin@tasky123',
            role: 'admin',
            tokens: {
                email: token()
            }
        }
        adminData.password = await hashpassword(adminData.password)
        const admin = await Admin.create(adminData)
        console.log('Admin seed successfull!');

    } catch (error) {
        console.log('Failed to seed admin!');
        console.log(error);
    }
}

await seedAdmin()