import { Types } from "mongoose";

export default interface User {
    _id?: Types.ObjectId;
    firstname?: string;
    lastname?: string;
    email: string;
    password: string;
    countryCode?: string;
    phoneNumber?: string;
    image?: string;
    city?: string;
    accessToken?: string;
    _doc?: any;
}
