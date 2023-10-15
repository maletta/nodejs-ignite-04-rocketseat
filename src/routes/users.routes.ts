import uploadConfig from '@src/config/upload';
import { ensureAuthenticated } from '@src/middleware/ensureAuthenticated';
import { CreateUserController } from '@src/modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '@src/modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { Router } from 'express';
import multer from 'multer';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUsersController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUsersController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle
);

export { usersRoutes };
