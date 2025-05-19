import { ErrorResponse } from "../../handler/error";
import { CustomRequest } from "../../interfaces/common.interface";
import * as Models from '../../models/index';
import Moments from '../../models/moment.model';
import * as Handler from '../../handler/handler';
import { MessageResponse, MomentResponse } from "../../types/response";
import * as CommonHelper from '../../common/common';
import { FilterQuery, Types } from "mongoose";
import Moment from "../../interfaces/moment.interface";
const projection = { __v: 0 };
const option = { lean: true };
const options = { new: true };

const addMoment = async (req: CustomRequest): Promise<MessageResponse> => {
    try {
        const { _id } = req.userData!
        const { title, tags, files } = req.body;
        const dataToSave = {
            userId: _id,
            title, tags, files
        }
        await Models.Moments.create(dataToSave);
        const response = {
            message: "Moment Added Successfully"
        }
        return response;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
};

const editMoment = async (req: CustomRequest): Promise<MessageResponse> => {
    try {
        const { _id: momentId, title, tags, files } = req.body;
        const dataToUpdate = { title, tags, files };
        const query = { _id: momentId };
        await Models.Moments.findOneAndUpdate(query, dataToUpdate, options);
        const response = {
            message: "Moment updated Successfully"
        }
        return response;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
};

const getMoments = async (req: CustomRequest): Promise<MomentResponse> => {
    try {
        const { _id: userId } = req.userData!;
        const { search, page, limit } = req.query;
        let query: FilterQuery<typeof Moments> = { userId: userId }
        if (search) {
            query.title = { $regex: search, $options: "i" };
        }
        const options = CommonHelper.setOptions(Number(page) || 1, Number(limit) || 10);
        const count = await Models.Moments.countDocuments(query);
        const fetchMoments = await Models.Moments.find(query, projection, options);
        const response: MomentResponse = {
            count: count,
            data: fetchMoments
        }
        return response;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
}

const momentDetail = async (req: CustomRequest): Promise<Moment | null> => {
    try {
        const { _id } = req.params;
        const fetchData = await Models.Moments.findOne({ _id }, projection, option);
        return fetchData;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
}

const deleteMoment = async (req: CustomRequest): Promise<MessageResponse> => {
    try {
        const { _id } = req.params;
        await Models.Moments.deleteOne({ _id });
        const response: MessageResponse = {
            message: "Moment Deleted Successfully"
        };
        return response;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
}

export {
    addMoment,
    editMoment,
    getMoments,
    momentDetail,
    deleteMoment
};
