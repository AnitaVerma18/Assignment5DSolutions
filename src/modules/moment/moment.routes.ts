import express from 'express';
import * as Controller from './moment.controller';
import { authorization } from '../../middleware/authorization';
import * as Validation from './moment.validation';
const router = express.Router();

router.post('/', authorization, Validation.addMoment, Controller.addMoment);
router.put('/', authorization, Validation.editMoment, Controller.editMoment);
router.get('/', authorization, Validation.getMoments, Controller.getMoments);
router.get('/:_id', authorization, Validation.momentDetail, Controller.momentDetail);
router.delete('/:_id', authorization, Validation.deleteMoment, Controller.deleteMoment);

export default router;
