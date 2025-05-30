import { Response } from 'express';
import { ErrorResponse } from './error';

const handleSuccess = (res: Response, data: any) => {
    try {
        res.send(data);
    }  
    catch (err) {
        throw err;
    }
}

const handleCustomError = (error: ErrorResponse) => {
        try {
            const message = error?.message ?? 'Bad Request'
            const statusCode = error?.statusCode ?? 400
            throw {
                message: message,
                statusCode: statusCode
            }
        }
        catch (err) {
            throw err;
        }
    }

const handleCatchError = (res: Response, error: ErrorResponse) => {
    try {
        const { message } = error
        const statusCode = error?.statusCode ?? 400
        res.status(statusCode).send({ message: message });
    }
    catch (err) {
        throw err;
    }
}

const handleJoiError = (error: ErrorResponse | any) => {
        try {
            const message = error?.details[0]?.message;
            const errorMessage = message.replace(/"/g, ''); // replaces all double quote character with an empty string;
            throw {
                message: errorMessage,
                statusCode: 400
            }
        }
        catch (err) {
            throw err;
        }
}
    
export {
    handleSuccess,
    handleCustomError,
    handleCatchError,
    handleJoiError
}
