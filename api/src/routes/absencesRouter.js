import express from 'express';
import * as absenceController from '../controllers/absencesController.js';

const absencesRouter = express.Router();

absencesRouter.get('/', absenceController.fetchAbsences);

export default absencesRouter;
