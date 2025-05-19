import mongoose, { Types } from 'mongoose';
import Moment from '../interfaces/moment.interface';

const momentSchema = new mongoose.Schema<Moment>({
    userId: { type: Types.ObjectId, ref: "Users" },
    title: { type: String, default: null },
    tags: [{ type: String, default: null }],
    files: [{ type: String, default: null }]
}, {
    timestamps: true
})

const Moments = mongoose.model<Moment>("Moments", momentSchema);
export default Moments;