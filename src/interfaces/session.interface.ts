import { Types } from "mongoose";

export default interface Session {
    _id?: Types.ObjectId;
    userId?: Types.ObjectId | string;
    accessToken?: string;
}