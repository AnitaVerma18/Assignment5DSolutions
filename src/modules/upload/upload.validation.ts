import { Response, Request, NextFunction } from 'express';
import * as Handler from '../../handler/handler';
import Joi from 'joi';
import { ErrorResponse } from '../../handler/error';

const uploadFile = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            file: Joi.object({
                mimetype: Joi.string()
                    .valid('image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp')
                    .required()
            }).unknown(true).required()
        });

        const { error } = schema.validate({
            file: req.file
        });

        if (error) return Handler.handleJoiError(error);
        next();
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse);
    }
};

export {
    uploadFile
}
