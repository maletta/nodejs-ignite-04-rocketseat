import { AuthenticateUserController } from '@src/modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { Router } from 'express';

const authenticateRoutes = Router();

const createUsersController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', createUsersController.handle);

export { authenticateRoutes };
