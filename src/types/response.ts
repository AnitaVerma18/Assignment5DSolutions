import Moment from "../interfaces/moment.interface";
import User from "../interfaces/user.interface";
export type SanitizedUser = Omit<User, 'password'>;

export type UserResponse = {
    message?: string
    data: SanitizedUser
}

export type MessageResponse = {
    message: string
}

export type UploadResponse = {
    message: string
    filename: string
    path: string
}

export type MomentResponse = {
    count: number
    data: Moment[]
}