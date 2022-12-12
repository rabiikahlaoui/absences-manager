import express from 'express';
import * as membersController from '../controllers/membersController.js';

const membersRouter = express.Router();

membersRouter.get('/', membersController.fetchMembers);

export default membersRouter;
