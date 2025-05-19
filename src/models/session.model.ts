import mongoose, { Types } from 'mongoose';
import Session from '../interfaces/session.interface';

const sessionSchema = new mongoose.Schema<Session>({
    userId: { type: Types.ObjectId, default: null, ref: "Users" },
    accessToken: { type: String, default: null },
}, {
    timestamps: true
})

const Sessions = mongoose.model<Session>("Sessions", sessionSchema);
export default Sessions;