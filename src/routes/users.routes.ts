import { CreateUserController } from '@src/modules/accounts/useCases/createUser/CreateUserController';
import { Router } from 'express';

const usersRoutes = Router();

const createUsersController = new CreateUserController();

usersRoutes.post('/', createUsersController.handle);

export { usersRoutes };
