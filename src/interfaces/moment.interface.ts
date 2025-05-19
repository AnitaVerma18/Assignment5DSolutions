import { Types } from "mongoose";

export default interface Moment {
    _id?: Types.ObjectId;
    userId?: Types.ObjectId | string;
    title: string;
    tags: Array<string>;
    files: Array<string>;
}