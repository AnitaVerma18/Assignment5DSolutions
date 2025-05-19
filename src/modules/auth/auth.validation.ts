import { Response, Request, NextFunction } from 'express';
import * as Handler from '../../handler/handler';
import Joi from 'joi';
import { ErrorResponse } from '../../handler/error';

const signup = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().trim().messages({ "string.email": "Please enter valid email address" }).required(),
            password: Joi.string().min(8).required(),
            firstname: Joi.string().trim().required(),
            lastname: Joi.string().trim().optional(),
            countryCode: Joi.string().trim().optional(),
            phoneNumber: Joi.string().trim().optional(),
            city: Joi.string().trim().optional(),
        });
        const { error } = schema.validate(req.body);
        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const login = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().trim().messages({ "string.email": "Please enter valid email address" }).required(),
            password: Joi.string().min(8).required()
        });
        const { error } = schema.validate(req.body);
        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const editProfile = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            firstname: Joi.string().trim().optional(),
            lastname: Joi.string().trim().optional(),
            countryCode: Joi.string().trim().optional(),
            phoneNumber: Joi.string().trim().optional(),
            image: Joi.string().trim().optional(),
            city: Joi.string().trim().optional(),
        });
        const { error } = schema.validate(req.body);
        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

export {
    signup,
    login,
    editProfile
}