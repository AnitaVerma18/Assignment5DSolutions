import express from 'express';
import * as Controller from './upload.controller';
import multer from 'multer';
import * as Validation from './upload.validation';
const router = express.Router();
const upload = multer();

router.post('/', upload.single('file'), Validation.uploadFile, Controller.uploadFile);

export default router;