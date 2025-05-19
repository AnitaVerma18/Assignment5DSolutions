import { Request } from 'express';
import * as Models from '../../models/index';
import * as Handler from '../../handler/handler';
import { EmailAlreadyExists, EmailNotRegistered, ErrorResponse, WrongPassword } from '../../handler/error';
import * as CommonHelper from '../../common/common';
import { Token, CustomRequest } from '../../interfaces/common.interface';
import User from '../../interfaces/user.interface';
import { MessageResponse, SanitizedUser, UserResponse } from '../../types/response';

const projection = { __v: 0 };
const option = { lean: true };
const options = { new: true };

const signup = async (req: Request): Promise<UserResponse> => {
    try {
        const { email, password, firstname, lastname, countryCode, phoneNumber, city } = req.body;
        const lowerCaseEmail = email.toLowerCase();
        const query = { email: lowerCaseEmail };
        const fetchUser = await Models.Users.findOne(query, projection, option);
        if (fetchUser) return Handler.handleCustomError(EmailAlreadyExists)
        const bcryptPass: string = await CommonHelper.hashPassword(password);
        const data: User = {
            email: lowerCaseEmail,
            password: bcryptPass,
            firstname: firstname,
            lastname: lastname,
            countryCode: countryCode,
            phoneNumber: phoneNumber,
            city: city
        }
        const user = await Models.Users.create(data);
        user._doc.accessToken = await CommonHelper.signToken({ _id: user._id });
        delete user._doc.password;
        const response: UserResponse = {
            message: "Signup Successfully",
            data: user
        }
        return response;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
}

const login = async (req: Request): Promise<UserResponse> => {
    try {
        const { email, password } = req.body;
        const lowerCaseEmail = email.toLowerCase();
        const query = { email: lowerCaseEmail };
        const fetchData = await Models.Users.findOne(query, projection, option);
        if (fetchData) {
            const { _id, password: oldPassword } = fetchData;
            const decryptPass = await CommonHelper.comparePassword(oldPassword, password);
            if (!decryptPass) return Handler.handleCustomError(WrongPassword);
            const data: Token = { _id: _id };
            const accessToken = await CommonHelper.signToken(data);
            const resData: SanitizedUser = {
                _id: _id,
                email: lowerCaseEmail,
                accessToken: accessToken
            };
            const response: UserResponse = {
                message: "Login successfully",
                data: resData
            };
            return response;
        }
        else {
            return Handler.handleCustomError(EmailNotRegistered);
        }
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
}

const profile = async (req: CustomRequest): Promise<User> => {
    try {
        delete req.userData!.accessToken;
        return req.userData! ?? {};
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
}

const editProfile = async (req: CustomRequest): Promise<MessageResponse> => {
    try {
        const { _id } = req.userData!;
        const query = { _id: _id };
        await Models.Users.findOneAndUpdate(query, req.body, options);
        const response: MessageResponse = {
            message: "Profile Updated Successfully"
        };
        return response;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
}

const logout = async (req: CustomRequest): Promise<MessageResponse> => {
    try {
        await Models.Sessions.deleteOne({ accessToken: req.userData!.accessToken });
        const response: MessageResponse = { message: "Logout Successfully" };
        return response;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
}

export {
    signup,
    login,
    profile,
    editProfile,
    logout
}