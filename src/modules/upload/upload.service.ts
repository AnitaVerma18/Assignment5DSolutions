import { ErrorResponse } from "../../handler/error";
import { CustomRequest } from "../../interfaces/common.interface";
import * as Handler from '../../handler/handler';
import path from "path";
import fs from 'fs';
import { UploadResponse } from "../../types/response";

const uploadFile = async (req: CustomRequest): Promise<UploadResponse> => {
    try {
        const { originalname, buffer } = req.file!

        // Set upload directory inside modules/upload/uploads
        const uploadDir = path.join(__dirname, 'uploads');

        // Ensure the directory exists
        fs.mkdirSync(uploadDir, { recursive: true });

        // Create a unique filename
        const uniqueFilename = `${Date.now()}-${originalname}`;

        const filePath = path.join(uploadDir, uniqueFilename);

        fs.writeFile(filePath, buffer, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('File written successfully');
            }
        });

        const response: UploadResponse = {
            message: 'File uploaded successfully',
            filename: uniqueFilename,
            path: `/uploads/${uniqueFilename}`
        };

        return response;
    }
    catch (err) {
        return Handler.handleCustomError(err as ErrorResponse);
    }
};

export {
    uploadFile
};
