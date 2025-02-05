import { Router } from 'express';
import { ExpressUserController } from './ExpressUserController';
import { userCreateDto } from '../application/UserCreate/UserCreateDto';
import { validate } from '../../Shared/Middlewares/Validate';

const controller = new ExpressUserController();
const ExpressUserRouter = Router();

ExpressUserRouter.get('/users/', controller.getAll);
ExpressUserRouter.get('/users/:id/', controller.getById);
ExpressUserRouter.post('/users/', userCreateDto, validate, controller.create);
ExpressUserRouter.put('/users/:id', controller.edit);
ExpressUserRouter.delete('/users/:id', (req, res, next) => controller.delete(req, res, next));

export { ExpressUserRouter };

