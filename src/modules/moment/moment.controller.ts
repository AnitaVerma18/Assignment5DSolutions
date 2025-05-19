import { Request, Response } from 'express';
import * as Service from './moment.service';
import * as Handler from '../../handler/handler';
import { ErrorResponse } from '../../handler/error';
import { CustomRequest } from '../../interfaces/common.interface';

const addMoment = async (req: CustomRequest, res: Response) => {
    try {
        const response = await Service.addMoment(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse)
    }
}

const editMoment = async (req: CustomRequest, res: Response) => {
    try {
        const response = await Service.editMoment(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse)
    }
}

const getMoments = async (req: CustomRequest, res: Response) => {
    try {
        const response = await Service.getMoments(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse)
    }
}

const momentDetail = async (req: CustomRequest, res: Response) => {
    try {
        const response = await Service.momentDetail(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse)
    }
}

const deleteMoment = async (req: CustomRequest, res: Response) => {
    try {
        const response = await Service.deleteMoment(req);
        return Handler.handleSuccess(res, response);
    }
    catch (err) {
        return Handler.handleCatchError(res, err as ErrorResponse)
    }
}

export {
    addMoment,
    editMoment,
    getMoments,
    momentDetail,
    deleteMoment
}
