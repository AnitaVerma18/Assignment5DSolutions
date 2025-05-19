import mongoose from 'mongoose';
import User from '../interfaces/user.interface';

const userSchema = new mongoose.Schema<User>({
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
    countryCode: { type: String, default: null },
    phoneNumber: { type: String, default: null },
    image: { type: String, default: null },
    city: { type: String, default: null }
}, {
    timestamps: true
})

const Users = mongoose.model<User>("Users", userSchema);
export default Users;