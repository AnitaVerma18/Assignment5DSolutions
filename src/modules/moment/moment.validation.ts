import { Response, Request, NextFunction } from 'express';
import * as Handler from '../../handler/handler';
import Joi from 'joi';
import { ErrorResponse } from '../../handler/error';

const addMoment = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            title: Joi.string().trim().required(),
            tags: Joi.array().items(Joi.string().trim()).optional(),
            files: Joi.array().items(Joi.string().trim()).optional(),
        });
        const { error } = schema.validate(req.body);
        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const editMoment = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            _id: Joi.string().trim().required(),
            title: Joi.string().trim().optional(),
            tags: Joi.array().items(Joi.string().trim()).optional(),
            files: Joi.array().items(Joi.string().trim()).optional(),
        });
        const { error } = schema.validate(req.body);
        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const getMoments = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            search: Joi.string().trim().optional(),
            page: Joi.string().optional(),
            limit: Joi.string().optional(),
        });
        const { error } = schema.validate(req.query);
        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const momentDetail = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            _id: Joi.string().trim().required()
        });
        const { error } = schema.validate(req.params);
        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

const deleteMoment = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            _id: Joi.string().trim().required()
        });
        const { error } = schema.validate(req.params);
        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
}

export {
    addMoment,
    editMoment,
    getMoments,
    momentDetail,
    deleteMoment
}
