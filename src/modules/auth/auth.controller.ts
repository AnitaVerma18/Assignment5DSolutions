import { Request, Response } from 'express';
import * as Service from './auth.service';
import * as Handler from '../../handler/handler';
import { ErrorResponse } from '../../handler/error';
import { CustomRequest } from '../../interfaces/common.interface';

const signup = async (req: Request, res: Response) => {
    try {
        const response = await Service.signup(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const response = await Service.login(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const profile = async (req: CustomRequest, res: Response) => {
    try {
        const response = await Service.profile(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const editProfile = async (req: CustomRequest, res: Response) => {
    try {
        const response = await Service.editProfile(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}


const logout = async (req: CustomRequest, res: Response) => {
    try {
        const response = await Service.logout(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

export {
    signup,
    login,
    logout,
    profile,
    editProfile
}
